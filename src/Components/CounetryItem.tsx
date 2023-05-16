import React, { Component } from "react";
import { Models } from "./Models";

class d extends Component {

}


interface IcounteryItemProps {
    countery:Models.ICountery;
}


export default function CounetryItem({ countery, ...props }: IcounteryItemProps & React.HTMLAttributes<HTMLDivElement>) {
    return <div className={props.className}>
        <div className="card mb-5 shadow">
            <img src={countery.flags.png} className="card-img-top" style={{ aspectRatio: "16/9" }} />
            <div className="card-body">
                <p className="card-title fw-bold text-ellipsis">{countery.name.official}</p>
                <div className="text-ellipsis"><small className="card-text"><span className="fw-bold">Population: </span>{countery.population}</small></div>
                <div className="text-ellipsis"><small className="card-text"><span className="fw-bold">Region: </span>{countery.region}</small></div>
                <div className="text-ellipsis"><small className="card-text"><span className="fw-bold">Capital: </span>{countery.capital}</small></div>
            </div>

        </div>
    </div>;
}
