import React from "react";
import Project from "../Project";
import portfolio from "./portfolio.json";

function Portfolio () {
    return (
        <div>
            {portfolio.map((proj) => (
                <Project
                    key={proj.id}
                    image={proj.image}
                    name={proj.name}
                    github={proj.github}
                    app={proj.app}
                    technologies={proj.technologies}
                />
            ))}
        </div>
    );
};

export default Portfolio;