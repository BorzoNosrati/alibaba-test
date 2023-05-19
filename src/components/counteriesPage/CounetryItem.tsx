import React, { Component } from "react";
import { Models } from "../../data/Models";
import { Link } from "react-router-dom";
import { useFilter } from "./counteriesSection";
import "./counteries.css"

interface IcounteryItemProps extends React.HTMLAttributes<HTMLDivElement> {
    countery: Models.ICountery;
}


export default function CounetryItem({ countery, ...props }: IcounteryItemProps ) {
   const filters= useFilter()
    const createDetailLink=()=>{

return `/detail/${countery.cca3}?q=${filters.name_filter || ""}&region=${filters.region_filter || ""}&sortField=${filters.sortField_filter}&sortDir=${filters.sortDir_filter}`;

    }
    return <div className={props.className}>
        <Link to={createDetailLink()} className="card mb-5 shadow countery-item">
            <img src={countery.flags.png} className="card-img-top" style={{ aspectRatio: "16/9" }} />
            <div className="card-body">
                <p className="card-title fw-bold text-ellipsis" title={countery.name.official}>{countery.name.official}</p>

                <div className="text-ellipsis"><small className="card-text"><span className="fw-bold">Population: </span>{countery.population}</small></div>
                <div className="text-ellipsis"><small className="card-text"><span className="fw-bold">Region: </span>{countery.region}</small></div>
                <div className="text-ellipsis"><small className="card-text"><span className="fw-bold">Capital: </span>{countery.capital}</small></div>
            </div>

        </Link>
    </div>;
}
