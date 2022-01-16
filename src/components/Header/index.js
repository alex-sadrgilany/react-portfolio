import React, { useEffect } from "react";
import Navigation from "../Navigation";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

function Header() {
    return (
        <Router>
            <div>
                <Navigation />
            </div>
            <div>
                <Switch>
                    <Route exact path="/" component={Portfolio} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/resume" component={Resume} />
                </Switch>
            </div>
        </Router>
    );
};

export default Header;