import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Project(props) {
    return (
        <div className="card col-md-4" id="project-card">
            <h3 className="card-header">{props.name}</h3>
            <div className="img-container">
                <a href={props.app} target="_blank">
                    <img alt={props.name} src={props.image} className="card-img-top" />
                </a>
            </div>


            <div className="card-body">
                <p>
                    <a href={props.github} className="card-link">GitHub Repo</a>
                </p>
                <p>
                    <a href={props.app} className="card-link">Deployed App</a>
                </p>
                <p>
                    {props.technologies}
                </p>
            </div>

        </div>
    );
};

export default Project;