import { icon } from "@fortawesome/fontawesome-svg-core";

import { useState } from "react";
import { useTheme } from "../../scripts/useTheme";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface INavbarProps {
    title: string;
}
export default function Navbar({ title }: INavbarProps) {
    var [currentTheme, setTheme] = useTheme();
    var [theme, setThemeState] = useState(currentTheme);



    console.log(icon(faMoon));

    return <nav className="navbar navbar-expand-lg  " >
        <div className="container">
            <Link to={'/'}  className="navbar-brand fw-bold ">{title}</Link>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#" onClick={ev => {
                            ev.preventDefault();
                            currentTheme = theme == "light" ? "dark" : "light";
                            setThemeState(currentTheme as any);
                            console.log("theme set on: ", theme, currentTheme);
                            setTheme(currentTheme);
                        }}>

                            {

                                theme == "light" ?
                                    <><i className="fa fa-moon" /> Dark Mode</> :
                                    <><i className="fa fa-sun" /> Light Mode</>
                            }
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
