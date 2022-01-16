import React from "react";

function Project (props) {
    return (
        <div>
            <div>
                <img alt={props.name} src={props.image} />
            </div>
            <div>
                <h3>
                    {props.name}
                </h3>
                <p>
                    {props.github}
                </p>
                <p>
                    {props.technologies}
                </p>
            </div>
        </div>
    );
};

export default Project;