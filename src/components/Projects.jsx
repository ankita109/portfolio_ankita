import React from "react";
import ProjectCards from "./ProjectCards";
import weather from "./image/P_weather_application.png";
import calc from "./image/P_calculator.png";
import guessWord from "./image/P_guess_word.png";
import Sudoku from "./image/P_sudoku_solver.png";
import SocialMedia from "./image/P_social_media.png";
import Portfolio from "./image/portfolio.png";

const Projects = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-10 top-elements"
            style={{ marginTop: "3rem", width: "100%" }}
          >
            <div className="row gy-4">
              <ProjectCards
                key="9"
                id="9"
                title="AnyGram - Social Media APP"
                image={SocialMedia}
                link="https://github.com/ankita109/SocialMediaApp-AnyGram"
              />

              <ProjectCards
                key="1"
                title="Weather App"
                image={weather}
                link="https://ankita109.github.io/Weather-App/"
              />
              <ProjectCards
                key="2"
                title="Calculator"
                image={calc}
                link="https://github.com/ankita109/Calculator_App"
              />
              <ProjectCards
                key="3"
                title="Guess WOrd"
                image={guessWord}
                link="https://ankita109.github.io/guess_word_bullseye/"
              />
              <ProjectCards
                key="4"
                title="Portfolio Website"
                image={Portfolio}
                link="https://ankita109.github.io/SUDOKU-SOLVER/"
              />
              <ProjectCards
                key="4"
                title="Sudoku Solver"
                image={Sudoku}
                link="https://ankita109.github.io/SUDOKU-SOLVER/"
              />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
