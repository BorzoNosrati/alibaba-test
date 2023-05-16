import React, { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import { CallApi } from "../data/callApi";



export default function SortBox({ onSort }: ISortBoxProps) {
    const [regions, setRegions] = useState([]);
    const [region, setRegion] = useState("");
    useEffect(() => {
        fetchRegions();
    }, []);
    const fetchRegions = async () => {
        setRegions(await CallApi.getAllRegions() as any);
    };

    return <div className="sort-box">
        <Dropdown setTitle={region => region ? `Region: ${region}` : "Filter by Region"} items={regions} itemTitle={r => r}
            onSelectItem={r => onSort(r)}
        />
    </div>;
}

export interface ISortBoxProps {
    onSort: (field: string) => void;
}
