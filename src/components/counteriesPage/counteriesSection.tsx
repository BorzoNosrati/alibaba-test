import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CallApi } from "../../data/callApi";
import { getAbortController } from "../../data/fetchData";
import { Models } from "../../data/Models";
import SortBox from "./filters/SortBox";
import RegionFilterBox from "./filters/RegionFilterBox";
import Counteries from "./Counteries";
import SearchBox from "./filters/SearchBox";



let name_filter = "";
let region_filter = "";
let sortField_filter = "";
let sortDir_filter = "";
function setFilter(name: string, region: string, sortField, sortDir) {
    name_filter = name;
    region_filter = region;
    sortField_filter = sortField;
    sortDir_filter = sortDir;
}


export function useFilter() {
    return { name_filter, region_filter, sortField_filter, sortDir_filter };
}
const nonFilterChars: string = "aiuey";
function prepareToCompare(text: string) {

    return text.split('').filter(k => !nonFilterChars.includes(k)).join('')

}
export default function CounteriesSection() {

    const [searchParams, _] = useSearchParams();

    const [searchPhrase, setSearchPhrase] = useState(searchParams.get("q") || "");
    const [region, setRegion] = useState(searchParams.get("region") || "");

    const [sortField, setSortField] = useState((searchParams.get("sortField") || "") as "name" | "population");
    const [sortDir, setSortDir] = useState((searchParams.get("sortDir") || "") as 'asc' | 'desc');

    const [err, setError] = useState("");

    const [counteries, setCounteries] = useState([]);




    async function getByName(signal) {
        console.log(searchPhrase);

        var counteries = await (await fetch(`${CallApi.baseUrl}name/${searchPhrase}?fields=`, { signal })).json() as Models.ICountery[];
        if (!counteries.length)
            counteries = [];
        setCounteries(counteries);
    }

    useEffect(() => {
        //const abort = new AbortController();
        var abort = getAbortController()
        console.log("abort: ", abort);

        fetchData().catch(c => console.log(c))

        ////////////////

        //getByName(abort.signal).catch(c => console.log(c))



        /////////




        return () => {
            console.log("canceled request", abort);
            abort?.abort();
        };
    }, [searchPhrase, region, sortField, sortDir])

    const fetchData = async () => {


        setFilter(searchPhrase, region, sortField, sortDir);

        var fields = ["name", "region", "population", "flags", "capital", "cca3"];

        try {


            var result: Models.ICountery[] = []
            if (searchPhrase) {
                result = result.concat(await CallApi.searchByName(searchPhrase, fields));
                if (!result.length && searchPhrase.length >= 4) {

                    let result2 = await CallApi.all(fields);
                    result2 = result2.filter(k => {
                        var a = (k.name.common || "") + ' ' + (k.name.official || "");
                        var b = prepareToCompare(a).toLowerCase();
                        var c = prepareToCompare(searchPhrase).toLowerCase();
                        var d = b.includes(c);
                        return d;

                    })
                    result = result.concat(result2)
                }

            }
            else {
                result = result.concat(await CallApi.all(fields));

                result = result.concat();


            }
            if (region)
                result = result.filter(k => k.region.toLowerCase() == region.toLowerCase());

        } catch (errr) {
            console.log(errr)
            result = [];
        }


        if (!result.length) setError("Not Found")
        const sortFields = {
            name: (c: Models.ICountery) => c.name.official,
            population: (c: Models.ICountery) => c.population
        }

        setCounteries(result.sort((a, b) => {
            var p1 = (sortFields[sortField || "name"] || sortFields["name"])(sortDir == 'asc' ? a : b) as any;
            var p2 = (sortFields[sortField || "name"] || sortFields["name"])(sortDir == 'asc' ? b : a) as any;
            if (typeof p1 == "number")
                return ((p1) - (p2));
            else
                return ((p1) > (p2)) as any;

        }).slice(0, 50) as any);
    }

    return <div>
        <div className="row mb-5 mt-5 justify-content-between">
            <div className="col-md mb-2">
                <SearchBox value={searchPhrase} onSearch={phrase => setSearchPhrase(phrase)} placeHolder="Search for a countery" />
            </div>
            <div className="col-md text-end">
                <div className="row">
                    <div className="col-6 pe-1">
                        <RegionFilterBox value={region} onFilter={region => setRegion(region)} />
                    </div>
                    <div className="col-6 ps-1">
                        <SortBox value={{ sortField, sortDir }} onSort={(field, dir) => {
                            setSortField(field);
                            setSortDir(dir)
                        }} />
                    </div>
                </div>
            </div>

        </div>
        <div className="row">
            {
                counteries?.length ? <Counteries counteries={counteries} /> : (err ? <p className="mt-3">{err}</p> : <CounteriesLoading />)
            }
        </div>


    </div>

}

function CounteriesLoading() {
    return <div className="mt-3">loading counteries ...</div>
}



