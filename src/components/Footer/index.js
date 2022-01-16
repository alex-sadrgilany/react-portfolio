import React from "react";
import gitHubLogo from "../../assets/icons/github.png";
import linkedInLogo from "../../assets/icons/linkedin.png";
import stackLogo from "../../assets/icons/stackoverflow.png";

function Footer() {
    return (
        <footer id="footer">
            <ul className="flex-row">
                <li>
                    <a href="https://github.com/asadg7">
                        <img src={gitHubLogo} alt="github logo" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/">
                        <img src={linkedInLogo} alt="linkenin logo" />
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/16594614/dark-light">
                        <img src={stackLogo} alt="stackoverflow logo" />
                    </a>
                </li>
            </ul>         
        </footer>
    )
};

export default Footer;