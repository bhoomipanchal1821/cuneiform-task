import React from "react";
import "./Fourth_page.css";
import video from "./images/video.png";
import cpo from "./images/cpo.png";
function Fourth_page() {
  return (
    <div>
      <div className="fourth_main">
        <h1 className="fourth_header">
          Move ideas Forward.
          <br /> Docs.meet Discussions
        </h1>
        <div className="fourth_sub">
          Decesion dont work on their own ,and neither does your team.in slite
          ,decesions-making and async disscusion comes build-in,inside Docs.
        </div>
        <button className="fourth_button">I want that too</button>
      </div>
      <img src={video} className="video_img" />
      <div className="border_div">
        <div className="border_paragraph">
          <div className="para">Slite let us bring the two most important communication
          bits in the same place: documentation & decision-making. The
          connection between docs and discussions makes decision-making more
          efficient, transparent & contextualized.
          </div>
          <br />
          <b className="cpo_name">Sebastien Gendreau</b>
          <img src={cpo} className="cpo_img" />
        </div>
      </div>
    </div>
  );
}

export default Fourth_page;
