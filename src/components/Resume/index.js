import React from "react";
import resume from "./dummy_resume.pdf";

function Resume() {
    return (
        <div>
            <a href={resume} download="Alex_Resume_2022">Download My Resume</a>
            <div>
                <div>
                    <h2>
                        Experience
                    </h2>
                    <h3>
                        Front End:
                    </h3>
                    <p>
                        HTML / CSS / Bootstrap / Bulma / Javascript / jQuery / Handlebars / React / indexedDB 
                    </p>
                    <h3>
                        Back End:
                    </h3>
                    <p>
                        Node / Express / SQL / Sequelize / NoSQL / MongoDB / Mongoose 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;