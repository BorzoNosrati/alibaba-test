import React, { ChangeEvent, useEffect, useState } from "react";
import Counteries from "./Counteries";
import { SearchBox } from "./SearchBox";
import { Models } from "./Models";
import { CallApi } from "../data/callApi";
import RegionFilterBox from "./RegionFilterBox";



export default function CounteriesSection() {
    const [counteries, setCounteries] = useState([]);
    const [region, setRegion] = useState("");
    const [searchPhrase, setSearchPhrase] = useState("");

    useEffect(() => {


        fetchData();

    }, [])

    const fetchData = async (searchPhrase?: string, region?: string) => {
        setRegion(region as any);
        setSearchPhrase(searchPhrase as any);

        var fields = ["name", "region", "population", "flags", "capital"];
        var result: Models.ICountery[] = []
        if (searchPhrase) {
            result = result.concat(await CallApi.searchByName(searchPhrase, fields));
        }
        else {
            result = result.concat(await CallApi.all(fields));

            result = result.concat();


        }
        if (region)
            result = result.filter(k => k.region.toLowerCase() == region.toLowerCase());
        setCounteries(result as any);
    }

    return <div>
        <div className="row mb-5 mt-5 justify-content-between">
            <div className="col">
                <SearchBox onSearch={phrase => fetchData(phrase, region)} placeHolder="Search for a countery" />
            </div>
            <div className="col text-end">

                <RegionFilterBox onFilter={region => fetchData(searchPhrase, region)} />
            </div>

        </div>
        <div className="row">
            {
                counteries?.length ? <Counteries counteries={counteries} /> : <CounteriesLoading />
            }
        </div>


    </div>
}

function CounteriesLoading() {
    return <div>loading counteries ...</div>
}

