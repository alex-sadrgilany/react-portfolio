import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Project(props) {
    return (
        <div className="card col-md-4" id="project-card">

            {/* using this component as a template for each project highlighted in my portfolio section */}
            <div className="top-card">
            <h3 className="card-header titles text-center">{props.name}</h3>
            <div className="img-container">
                <a href={props.app} target="_blank" rel="noreferrer">
                    <img alt={props.name} src={props.image} className="card-img-top" />
                </a>
            </div>
            </div>

            <div className="card-body">
                <p>
                    <a href={props.github} className="card-link" target="_blank" rel="noreferrer">
                        GitHub Repo
                    </a>
                </p>
                <p>
                    <a href={props.app} className="card-link" target="_blank" rel="noreferrer">
                        Deployed App
                    </a>
                </p>
                <p>
                    {props.technologies}
                </p>
            </div>

        </div>
    );
};

export default Project;