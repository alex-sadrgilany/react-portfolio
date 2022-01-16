import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
            <NavLink activeClassName="navActive" to="/about">
                about me
            </NavLink>
            </li>
            <li className="mx-2">
            <NavLink activeClassName="navActive" to="/portfolio">
                portfolio
            </NavLink>
            </li>
            <li className="mx-2">
            <NavLink activeClassName="navActive" to="/contact">
                contact
            </NavLink>
            </li>
            <li className="mx-2">
            <NavLink activeClassName="navActive" to="resume">
                resume
            </NavLink>
            </li>
            </ul>
        </nav>
    );
};

export default Navigation;