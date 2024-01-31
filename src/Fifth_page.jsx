import React from "react";
import "./Fifth_page.css";
import first from "./images/first.png";
import second from "./images/second.png";
import thired from "./images/thired.png";
import fourth from "./images/fourth.png";
import fifth from "./images/fifth.png";
import sixth from "./images/sixth.png";
import seventh from "./images/seventh.png";
import eighth from "./images/eighth.png";
function Fifth_page() {
  return (
    <div>
      <div className="fifth_main">
        <h2 className="fifth_paragraph">What happy teams have to say.</h2>
        <div className="cards_multiple">
          <div class="row">
            <div class="column_fifth">
              <div class="card_fifth">
                <p className="reviews">
                  "The most important thing in a{" "}
                  <i className="bg_pink">
                    wiki (in my opinion) is . Most wikis are pretty bad there
                  </i>
                  . But Slite is an example of a wiki that allows simultaneous
                  editing."
                </p>
                <p className="reviwers_name">jade rubick</p>
                <img src={first} className="first_img" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column_fifth">
              <div class="card_fifth">
                <p className="reviews">
                  "The most important thing in a{" "}
                  <i className="bg_pink">
                    wiki (in my opinion) is . Most wikis are pretty bad there
                  </i>
                  . But Slite is an example of a wiki that allows simultaneous
                  editing."
                </p>
                <p className="reviwers_name">by LEE LIU</p>
                <img src={second} className="first_img" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column_fifth">
              <div class="card_fifth">
                <p className="reviews">
                  "The most important thing in a{" "}
                  <i className="bg_pink">
                    wiki (in my opinion) is . Most wikis are pretty bad there
                  </i>
                  . But Slite is an example of a wiki that allows simultaneous
                  editing."
                </p>
                <p className="reviwers_name">Sebastien Gendreau</p>
                <img src={thired} className="first_img" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column_fifth">
              <div class="card_fifth">
                <p className="reviews">
                  "The most important thing in a{" "}
                  <i className="bg_pink">
                    wiki (in my opinion) is . Most wikis are pretty bad there
                  </i>
                  . But Slite is an example of a wiki that allows simultaneous
                  editing."
                </p>
                <p className="reviwers_name">by Jurgita Paulauskaite</p>
                <img src={fourth} className="first_img" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column_fifth">
              <div class="card_fifth">
                <p className="reviews">
                  "The most important thing in a{" "}
                  <i className="bg_pink">
                    wiki (in my opinion) is . Most wikis are pretty bad there
                  </i>
                  . But Slite is an example of a wiki that allows simultaneous
                  editing."
                </p>
                <p className="reviwers_name">Martijn Hazelaar</p>
                <img src={fifth} className="first_img" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column_fifth">
              <div class="card_fifth">
                <p className="reviews">
                  "The most important thing in a{" "}
                  <i className="bg_pink">
                    wiki (in my opinion) is . Most wikis are pretty bad there
                  </i>
                  . But Slite is an example of a wiki that allows simultaneous
                  editing."
                </p>
                <p className="reviwers_name">Donald Sipe</p>
                <img src={sixth} className="first_img" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column_fifth">
              <div class="card_fifth">
                <p className="reviews">
                  "The most important thing in a{" "}
                  <i className="bg_pink">
                    wiki (in my opinion) is . Most wikis are pretty bad there
                  </i>
                  . But Slite is an example of a wiki that allows simultaneous
                  editing."
                </p>
                <p className="reviwers_name">ERIC FETTNER</p>
                <img src={seventh} className="first_img" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column_fifth">
              <div class="card_fifth">
                <p className="reviews">
                  "The most important thing in a{" "}
                  <i className="bg_pink">
                    wiki (in my opinion) is . Most wikis are pretty bad there
                  </i>
                  . But Slite is an example of a wiki that allows simultaneous
                  editing."
                </p>
                <p className="reviwers_name">jade rubick</p>
                <img src={eighth} className="first_img" />
              </div>
            </div>
          </div>
        </div>
        <div className="last_para">
          <h2 className="last_sub_para">
            Teams with clarity are teams that thrive.
          </h2>
          <p className="last_sub_para_second">
            Create space for your team to do their best work.
          </p>
          <button className="fifth_button">Sign me up</button>
        </div>
      </div>
    </div>
  );
}

export default Fifth_page;
