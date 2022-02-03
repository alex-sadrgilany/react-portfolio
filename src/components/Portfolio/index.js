import React from "react";
import DocumentTitle from "react-document-title";
import Project from "../Project";
import portfolio from "./portfolio.json";

import budgetBetterGif from "../../assets/project_gifs/budget_better.gif";
import budgetTrackerGif from "../../assets/project_gifs/budget_tracker.gif";
import eventPlannerGif from "../../assets/project_gifs/event_planner.gif";
import pokemonBattleGif from "../../assets/project_gifs/pokemon_battle.gif";
import weatherGif from "../../assets/project_gifs/weather_dashboard.gif";
import soldOnEbayPic from "../../assets/project_gifs/gameplay.png"

import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio () {
    const gifArray = [
        soldOnEbayPic,
        budgetBetterGif,
        pokemonBattleGif,
        budgetTrackerGif,
        weatherGif,
        eventPlannerGif
    ];

    
    return (
        <div className="container" id="portfolio">
            <DocumentTitle title="Portfolio"></DocumentTitle>
            <div className="row">
                {/* mapping through the portfolio.json array and rendering a project component for each entry */}
                {portfolio.map((proj) => (
                    <Project
                        key={proj.id}
                        image={gifArray[proj.id - 1]}
                        name={proj.name}
                        github={proj.github}
                        app={proj.app}
                        technologies={proj.technologies}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;