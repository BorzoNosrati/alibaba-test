import { Link, useParams, useSearchParams } from "react-router-dom";
import ConteryDetailSection from "../components/conteryDetailPage/ConteryDetailSection";
import { useEffect, useState } from "react";
import { Models } from "../data/Models";
import { CallApi } from "../data/callApi";

export default function CounteryDetail() {

    const p = useParams();
    const [searchParams, _] = useSearchParams();

    const [countery, setCountery] = useState(null as Models.ICountery);
    const [err, setErr] = useState("");
    const [cca3, setCCA3] = useState(p["id"])

    useEffect(() => {
      
        //setCCA3(cca3);
        fetchCounteryDetails();
       

    }, [cca3])

    const fetchCounteryDetails = async () => {
        let _countery = await CallApi.getOneByCCA3(cca3, []);// get all fields
        if (!_countery) {
            setErr("Not Found!")
        }
        setCountery(_countery);
    }





    return <div className="pt-5">
        <p><Link to={`/?${searchParams}`} className="btn btn-light">Back</Link></p>
        {countery ? <ConteryDetailSection onSelectBorderCountery={ (c) => {
            setCCA3(c.cca3);
            //fetchCounteryDetails()
        }} countery={countery} /> :

            (err ? <div>{err}</div> : <div>loading</div>)}
    </div>;
}
