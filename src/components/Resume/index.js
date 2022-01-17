import React from "react";
import resume from "./dummy_resume.pdf";
import DocumentTitle from "react-document-title";

function Resume() {
    return (
        <div className="text-center">
            <DocumentTitle title="Resume"></DocumentTitle>
            <h2 className="titles">
                Experience
            </h2>
            <div>
                <div>
                    <h3 className="secondary-titles">
                        Front End:
                    </h3>
                    <p>
                        HTML / CSS / Bootstrap / Bulma / Javascript / jQuery / Handlebars / React / indexedDB 
                    </p>
                    <h3 className="secondary-titles">
                        Back End:
                    </h3>
                    <p>
                        Node / Express / SQL / Sequelize / NoSQL / MongoDB / Mongoose 
                    </p>
                    <p>
                    <a href={resume} download="Alex_Resume_2022">Download My Resume</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;