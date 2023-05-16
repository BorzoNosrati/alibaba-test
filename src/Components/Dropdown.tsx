import React, { useState } from "react";

export function Dropdown<T>({ setTitle, items, itemTitle, onSelectItem }: IDropdownProps<T>) {
    var [item, setItem] = useState();


    return <div className="dropdown ">
        <button className="btn btn-light dropdown-toggle shadow " type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {setTitle(item)}
        </button>
        <ul className="dropdown-menu">
            {items.map(r => <li><a className="dropdown-item" href="#" onClick={ev => {
                ev.preventDefault();
                setItem(r as any);
                onSelectItem(r);
            }}>{itemTitle(r)}</a></li>)}

        </ul>
    </div>;
}

interface IDropdownProps<T> {
    setTitle: (selected: T) => string;
    items: T[];
    itemTitle: (item: T) => string;
    onSelectItem: (item: T) => void;
}
