import React from "react";
import { Models } from "./Models";
import CounetryItem from "./CounetryItem";




 interface ICounteriesProps {
    counteries: Models.ICountery[];
}
export default function Counteries({ counteries }: ICounteriesProps) {

    return <>
        {counteries.map(c => <CounetryItem className="col-sm-6 col-md-4 col-lg-3 " key={c.id} countery={c} />)}
    </>


}

