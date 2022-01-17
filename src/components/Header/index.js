import React from "react";
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
                    <a href="/React-Portfolio" id="home-a">
                        <h1 className="titles">
                            Alex Sadrgilany
                        </h1>
                    </a>

                    <div>
                        <Navigation />
                    </div>
                </header>

                <main>
                    {/* utilizing router/switch/route/redirect to conditionally render each component based on what the user clicks in the navbar */}
                    <Switch>
                        <Route exact path="/React-Portfolio" render={() => (<Redirect to="/about" />)} />
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