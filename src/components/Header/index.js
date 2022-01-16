import React, { useEffect } from "react";
import Navigation from "../Navigation";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

function Header() {
    return (
        <div>
            <Router>
                <header className="flex-row">
                    <h1>
                        Alex Sadrgilany
                    </h1>
                    <div>
                        <Navigation />
                    </div>
                </header>

                <main>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/about" />)} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/resume" component={Resume} />
                    </Switch>
                </main>
            </Router>
        </div>
    );
};

export default Header;