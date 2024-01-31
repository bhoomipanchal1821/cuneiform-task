import React from "react";
import "./Thired_page.css";
import dummy from "./images/card_img.png";
function Thired_page() {
  return (
    <div>
      <div className="main_thired">
        <div className="header_thired">
          <h2 className="thired_header">
            Beat the blank canvas with Templates
          </h2>
          <p className="sub_header_thired">
            Ready-to-use Templates for product specs,comapny handbooks meeting
            notes and more
          </p>
        </div>
        <div className="cards_multiple">
          <div class="row">
            <div class="column">
              <div class="card">
                <h3>Product specs</h3>
               <img src={dummy}/>
               
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="card">
                <h3>Employee Handbook</h3>
                <img src={dummy}/>
               
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="card">
                <h3>Weekly Reviews</h3>
                <img src={dummy}/>
                
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="card">
                <h3>Product planning</h3>
                <img src={dummy}/>
                
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="card">
                <h3>Talent Acquestion</h3>
                <img src={dummy}/>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Thired_page;
