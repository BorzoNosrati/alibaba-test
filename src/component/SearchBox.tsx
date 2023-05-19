import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function SearchBox({ onSearch,placeHolder,value }: ISearchBoxProps) {


    return <div className="search-box">
        <input  value={value} className="form-control shadow search-box-input" placeholder={placeHolder} onChange={ev => onSearch(ev.target.value)} />
      <i className="fa fa-search search-box-icon"  ></i>
    </div>;
}
interface ISearchBoxProps {
    onSearch: (phrase: string) => void;
    placeHolder?:string,
    value?:string
}
