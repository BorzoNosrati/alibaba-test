import React, { useEffect, useState } from "react";

export function Dropdown<T>({value, setTitle, items, itemTitle, onSelectItem }: IDropdownProps<T>) {
    var [item, setItem] = useState(value);


useEffect(()=>{
    setItem(value);
    console.log("useEffect => ItemSeletedState: ",item)
},[])

    return <div className="dropdown ">
        <button className="btn btn-light dropdown-toggle shadow w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {setTitle(item)}
        </button>
        <ul className="dropdown-menu">
            {items.map((r,i )=> 
            <li key={i}><a className="dropdown-item" href="#" onClick={ev => {
                ev.preventDefault();
                setItem(r as any);
                onSelectItem(r);
            }}>{itemTitle(r)}</a></li>)}

        </ul>
    </div>;
}

interface IDropdownProps<T> {
    value?:T;
    setTitle: (selected: T) => string;
    items: T[];
    itemTitle: (item: T) => string;
    onSelectItem: (item: T) => void;
}
