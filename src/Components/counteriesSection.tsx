import React, { ChangeEvent, useEffect, useState } from "react";
import Counteries from "./Counteries";
import { SearchBox } from "./SearchBox";
import { Models } from "./Models";
import { CallApi } from "../data/callApi";
import RegionFilterBox from "./RegionFilterBox";
import { useSearchParams } from "react-router-dom";
import SortBox from "./SortBox";

let name_filter = "";
let region_filter = "";
function setFilter(name: string, region: string) {
    name_filter = name;
    region_filter = region;
}


export function useFilter() {
    return { name_filter, region_filter };
}
const nonFilterChars: string = "aiuey";
function prepareToCompare(text: string) {

    return text.split('').filter(k => !nonFilterChars.includes(k)).join('')

}
export default function CounteriesSection() {

    const [counteries, setCounteries] = useState([]);
    const [region, setRegion] = useState("");
    const [sortField, setSortField] = useState("");
    const [sortDir, setSortDir] = useState("");
    const [searchPhrase, setSearchPhrase] = useState("");
    const [err, setError] = useState("");

    console.log("Region Passed to state:", region)

    const [searchParams, _] = useSearchParams();
    console.log(searchParams.get("region"));
    useEffect(() => {
        console.log("Region Passed to state:", region)
        fetchData(searchParams.get("q") || "", searchParams.get("region") || "");

    }, [])

    const fetchData = async (searchPhrase?: string, region?: string,
        sortField: "name" | "population" = "name",
        sortDir: 'asc' | 'desc' = 'asc') => {
        setRegion(region as any);
        setSearchPhrase(searchPhrase as any);
        setSortField(sortField as any);
        setSortDir(sortDir as any);

        setFilter(searchPhrase, region);

        var fields = ["name", "region", "population", "flags", "capital", "cca3"];
        var result: Models.ICountery[] = []
        if (searchPhrase) {
            result = result.concat(await CallApi.searchByName(searchPhrase, fields));
            if (!result.length) {

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

        if (!result.length) setError("Not Found")
        const sortFields = {
            name: (c: Models.ICountery) => c.name.official,
            population: (c: Models.ICountery) => c.population
        }

        setCounteries(result.sort((a, b) => {
            var p1 = sortFields[sortField](sortDir == 'asc' ? a : b) as any;
            var p2 = sortFields[sortField](sortDir == 'asc' ? b : a) as any;
            if (typeof p1 == "number")
                return ((p1) - (p2));
            else
                return ((p1) > (p2)) as any;

        }) as any);
    }

    return <div>
        <div className="row mb-5 mt-5 justify-content-between">
            <div className="col-md mb-2">
                <SearchBox value={searchPhrase} onSearch={phrase => fetchData(phrase, region, sortField as any, sortDir as any)} placeHolder="Search for a countery" />
            </div>
            <div className="col-md text-end">
                <div className="row">
                    <div className="col-6 pe-1">
                        <RegionFilterBox value={region} onFilter={region => fetchData(searchPhrase, region, sortField as any, sortDir as any)} />
                    </div>
                    <div className="col-6 ps-1">
                        <SortBox  value={region} onSort={(field, dir) => fetchData(searchPhrase, region, field, dir)} />
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



