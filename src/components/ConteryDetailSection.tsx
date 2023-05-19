import { useEffect, useState } from "react";
import { CallApi } from "../data/callApi";
import { Models } from "./Models";
import { Link } from "react-router-dom";

interface IConteryDetailSectionProps {
    countery: Models.ICountery;
    onSelectBorderCountery: (countery: Models.ICountery) => void;
}

export default function ConteryDetailSection({ countery, onSelectBorderCountery }: IConteryDetailSectionProps) {

    useEffect(() => {

    })

    const getLang = () => countery.languages?.properties.slice(-1)[0]; //get last one

    const getLanguages = () =>
        Object.getOwnPropertyNames(countery.languages || {}).map(k => countery.languages[k]);

    const getCurrecies = () =>
        Object.getOwnPropertyNames(countery.currencies || {}).map(k => countery.currencies[k]);



    const BorderCounteries = () => {
        const [counteries, setCounteries] = useState([] as Models.ICountery[]);
        useEffect(() => {
            fetchCounteries();
        }, [])

        const fetchCounteries = async () => {
            setCounteries(await CallApi.searchByCodes(countery.borders, ["name", "cca3"]));
        }

        return <>
            {counteries.map(c => <Link onClick={() => onSelectBorderCountery(c)} key={c.cca3} to={`/detail/${c.cca3}?q=&region=`} className="btn btn-light ms-2 mb-2" >{c.name.common}</Link>)}
        </>
    }

    return <div className=" mt-5">
        {

            <div className="row">
                <div className="col-md-6">
                    <img className="w-100" src={countery.flags.png} style={{ aspectRatio: "4/3" }} />
                </div>
                <div className="col-md-6">
                    <div className="d-flex flex-column justify-content-center"
                        style={{ height: '100%' }}>

                        <h3 className="fw-bold">{countery.name.common}</h3>
                        <div className="row mt-4">

                            <div className="col-md-6">
                                <p><strong>Native Name: </strong> {(countery.name.nativeName || {})[getLang()]?.common || ""}</p>
                                <p><strong>Population: </strong> {countery.population}</p>
                                <p><strong>Region: </strong> {countery.region}</p>
                                <p><strong>Sub Region: </strong> {countery.subregion}</p>
                                <p><strong>Capital: </strong> {countery.capital}</p>
                            </div>
                            <div className="col-md-6">
                                <p><strong>Top Level Domain: </strong> {(countery.tld || [])[0]}</p>
                                <p><strong>Currencies: </strong> {getCurrecies().map(k => k.name).join(', ')}</p>
                                <p><strong>Languages: </strong> {getLanguages().join(', ')}</p>
                            </div>
                        </div>
                        <div className="mt-4"><strong>Border Counteries: </strong><BorderCounteries /></div>
                    </div>
                </div>
            </div>}

    </div>
}
