import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <NavLink to="/about">
                about me
            </NavLink>
            <NavLink to="/portfolio">
                portfolio
            </NavLink>
            <NavLink to="/contact">
                contact
            </NavLink>
            <NavLink to="resume">
                resume
            </NavLink>
        </nav>
    );
};

export default Navigation;