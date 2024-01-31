import React from "react";
import "./Second_page.css";
import second_main from "./images/second_main.png";
import second_inner from "./images/second_inner.png";

function Second_page() {
  return (
    <div className="main_second">
      <div className="header_second">
        <h1 className="first_header">A home for all of your knowledge </h1>
        <p className="second_header">
          Project,knowledge base ,process-bring all your work to life in Docs
        </p>
      </div>
      <div className="vertical_navigation">
        <div className="link_nav">
          <p>
            <a href="#home">Wiki</a>
          </p>
          <p>
            <a href="#news">Projects</a>
          </p>
          <p>
            <a href="#contact">Processes</a>
          </p>
          <p>
            <a href="#about">Onboarding</a>
          </p>
          <p>
            <a href="#about">Meetings</a>
          </p>
          <p>
            <a href="#about">Team Updates</a>
          </p>
          <p>
            <a href="#about">User Research</a>
          </p>
          <p>
            <a href="#about">More</a>
          </p>
        </div>
      </div>
      <div className="two_img">   <img src={second_inner} className="inner_img" />
        <img src={second_main} className="main_img"/>
     
      </div>
    </div>
  );
}

export default Second_page;
