// import { faMoon, faSun, faCircle } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTheme } from "../useTheme";

interface INavbarProps {
    title: string;
}
export default function Navbar({ title }: INavbarProps) {
    var [currentTheme, setTheme] = useTheme();
    var [theme, setThemeState] = useState(currentTheme);




    return <nav className="navbar navbar-expand-lg  " >
        <div className="container">
            <a className="navbar-brand fw-bold " href="#">{title}</a>
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

                            {/* {theme == "light" ?
                                <><FontAwesomeIcon icon={faMoon} /> Dark Mode</> :
                                <><FontAwesomeIcon icon={faSun} /> Light Mode</>} */}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
