import React from "react";
import CounetryItem from "./CounetryItem";
import { Models } from "../../data/Models";




interface ICounteriesProps {
    counteries: Models.ICountery[];
}
export default function Counteries({ counteries }: ICounteriesProps) {

    return <>
        {counteries.map(c => <CounetryItem key={c.cca3} className="col-sm-6 col-md-4 col-lg-3 " countery={c} />)}
    </>


}


