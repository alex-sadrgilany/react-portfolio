import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
    useEffect( () => {
        document.title = props.title || "";
    }, [props.title]);
    return (
        <nav>
            {/* utilizing navlink in conjunction with router to render the proper pages based on titles in the navbar */}
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