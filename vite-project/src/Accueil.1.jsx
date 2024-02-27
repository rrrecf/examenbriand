import React from "react";
import { Navlink } from 'react-router-dom';


export default function Accueil() {
    return <>
        <ul className="dropdown-menu">
            <li><span className="dropdown-item-text">Dropdown item text</span></li>
            <li><Navlink className="dropdown-item">Action</Navlink></li>
            <li><Navlink className="dropdown-item">Another action</Navlink></li>
            <li><Navlink className="dropdown-item">Something else here</Navlink></li>
        </ul>
        <Footer></Footer>
    </>;
}
