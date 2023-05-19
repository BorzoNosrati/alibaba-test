import React, { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";



export default function SortBox({ onSort }: ISortBoxProps) {
    useEffect(() => {

    }, []);


    return <div className="sort-box ">
        <Dropdown
            setTitle={s => s?.length ? `Sort: ${s[2]}` : "Sort"}
            items={[
                ["name", "asc", "Name(Asc)"],
                ["name", "desc", "Name(Desc)"],
                ["population", "asc", "population(Asc)"],
                ["population", "desc", "population(Desc)"]
            ]}
            itemTitle={r => r[2]}
            onSelectItem={r => onSort(r[0] as any, r[1] as any)}
        />
    </div>;
}

export interface ISortBoxProps  extends React.HTMLAttributes<HTMLDivElement> {
    onSort: (field: "name" | "population", dir: "asc" | "desc") => void;
    value: string
}
