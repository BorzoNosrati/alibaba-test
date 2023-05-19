
import React, { useEffect, useState } from "react";
import { Dropdown } from "../../public/Dropdown";



export default function SortBox({ value, onSort }: ISortBoxProps) {


    console.log("Sort Box Value: ",value)
    useEffect(() => {

    }, []);
    var items = [
        ["name", "asc", "Name(Asc)"],
        ["name", "desc", "Name(Desc)"],
        ["population", "asc", "population(Asc)"],
        ["population", "desc", "population(Desc)"]
    ]

    return <div className="sort-box ">
        <Dropdown
            value={
                items.find(k => k[0].toLowerCase() == value.sortField.toLowerCase() &&
                    k[1].toLowerCase() == value.sortDir.toLowerCase())
            }

            setTitle={s => s?.length ? `Sort: ${s[2]}` : "Sort"}
            items={items}
            itemTitle={r => r[2]}
            onSelectItem={r => onSort(r[0] as any, r[1] as any)}
        />
    </div>;
}

export interface ISortBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    onSort: (field: "name" | "population", dir: "asc" | "desc") => void;
    value: { sortField: "name" | "population", sortDir: "asc" | "desc" }
}
