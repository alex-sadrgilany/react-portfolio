import React from "react";

function Project (props) {
    return (
        <div>
            <div>
                <a href={props.app} target="_blank">
                <img alt={props.name} src={props.image} />
                </a>
                
            </div>
            <div>
                <h3>
                    {props.name}
                </h3>
                <a href={props.github}>GitHub Repo</a>
                <a href={props.app}>Deployed App</a>
                <p>
                    {props.technologies}
                </p>
            </div>
        </div>
    );
};

export default Project;