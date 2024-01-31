import React from "react";
import "./Header.css";
import header from "./images/header.png";
import main_header_img from "./images/main_header.png";
import card_img from "./images/card_img.png";
import vanmoof from "./images/VanMoof.png";
import bamboo from "./images/bamboohr.png";
import agora from "./images/agora.png";
import spotify from "./images/Spotify.png";
import anglo from "./images/anglo.png";
import meero from "./images/Meero.png";
function Header() {
  return (
    <div>
      <div className="main">
        <div className="img_class">
          <img src={header} className="responsive_img" />
        </div>
        <p className="sub_header">
          Slite is mordern knowledge base that drives action with structured
          docs,thoughful collaboration and confident decesion-making{" "}
        </p>
        <form>
          <input type="email" placeholder="name@company.com" className="header_input"/>

          <button className="button_input">Start for free</button>
        </form>
        <img src={main_header_img} className="main_header_img" />
        <div className="card_main">
          <div className="card_first"></div>
          <div className="card_second"></div>
          <div class="container">
            <div className="card_header">
              <div className="info">
                <p className="card_info">Georges made some changes</p>
                <br />
                <p className="card_info_second">
                  The Abnormal guidence to remote
                </p>
              </div>
              <img src={card_img} className="card_img" />
            </div>
          </div>
        </div>
        <div className="subject">200,000+ teams have found focus with slite</div>
        <div className="brands">
          <img src={vanmoof} className="img_vanmoof"/>
          <img src={bamboo}className="img_bamboo"/>
          <img src={agora}className="img_agora"/>
          <img src={spotify}className="img_spotify"/>
          <img src={anglo}className="img_anglo"/>
          <img src={meero}className="img_meero"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
