import React from "react";
import gitHubLogo from "../../assets/icons/github.png";
import linkedInLogo from "../../assets/icons/linkedin.png";
import stackLogo from "../../assets/icons/stackoverflow.png";

import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <footer className="text-center" id="footer">
            <div className="container pt-4">
                <section className="mb-4">
                    <a href="https://github.com/asadg7">
                        <img src={gitHubLogo} alt="github logo" />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <img src={linkedInLogo} alt="linkenin logo" />
                    </a>
                    <a href="https://stackoverflow.com/users/16594614/dark-light">
                        <img src={stackLogo} alt="stackoverflow logo" />
                    </a>
                </section>
            </div>
                   
        </footer>
    )
};

export default Footer;