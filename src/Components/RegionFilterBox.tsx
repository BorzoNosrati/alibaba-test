import React, { useEffect, useState } from "react";

import { Dropdown } from "./Dropdown";
import { CallApi } from "../data/callApi";

export default function RegionFilterBox({ onFilter }: IRegionFilterBoxProps) {
    const [regions, setRegions] = useState([]);
    const [region, setRegion] = useState("");
    useEffect(() => {
        fetchRegions();
    }, [])
    const fetchRegions = async () => {
        setRegions(await CallApi.getAllRegions() as any);
    }

    return <div className="region-filter">
        <Dropdown
            items={regions}
            itemTitle={r=>r}
            setTitle={r=>r ? `Region: ${r}` : "Filter by Region"}
            onSelectItem={r=>  onFilter(r)}
        />
        {/* <div className="dropdown ">
            <button className="btn btn-light dropdown-toggle shadow " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {}
            </button>
            <ul className="dropdown-menu">
                {regions.sort().map(r => <li><a className="dropdown-item" href="#" onClick={ev => {
                    ev.preventDefault();
                    setRegion(r);
                  
                }}>{r}</a></li>)}

            </ul>
        </div> */}
    </div>;
}
interface IRegionFilterBoxProps {
    onFilter: (region: string) => void;
}



