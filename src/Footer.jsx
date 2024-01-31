import React from "react";

import { VscArrowSmallRight } from "react-icons/vsc";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer_sub">
          <div className="what_is">
            <h3 className="first_footer">What it's for</h3>
            <div className="footer_p">
              <p>Working remotely</p>
              <p>Fix remote meetings</p>
              <p>Onboarding remotely</p>
              <p>Build human connection</p>
              <p>Handbooks</p>
            </div>
          </div>
          <div className="what_is">
            <h3 className="first_footer">How it works</h3>
            <div className="footer_p">
              <p>Features</p>
              <p>Integrations</p>
              <p>Pricing</p>
              <p>What's new</p>
              <p>Help center</p>
              <p>Contact support</p>
            </div>
          </div>
          <div className="what_is">
            <h3 className="first_footer">Resources</h3>
            <div className="footer_p">
              <p>Templates</p>
              <p>Learn</p>
              <p>Blog</p>
              <p>Startup Bibles</p>
              <p>Remote handbook</p>
              <p>Management handbook</p>
              <p>Download apps</p>
              <p>Chrome extension</p>
            </div>
          </div>
          <div className="what_is">
            <h3 className="first_footer">Slite</h3>
            <div className="footer_p">
              <p>About us</p>
              <p>Find us on Twitter</p>
              <p>Careers</p>
              <p>Customers</p>
              <p>Press kit</p>
            </div>
          </div>
          <div className="what_is">
            <h3 className="first_footer">Compare</h3>
            <div className="footer_p">
              <p>Notion</p>
              <p>Confluence</p>
              <p>Google Docs</p>
              <p>Dropbox Paper</p>
              <p>All comparisons</p>
            </div>
          </div>
        </div>
        <div className="Remote_letter">
          <p className="remote_footer">
            Remote letters to read on your own time
          </p>
          <input
            type="email"
            placeholder="What's your email?"
            className="eamil_footer"
          />

          <VscArrowSmallRight className="footer_arrow" />
          <p className="info_footer">
            100% homemade, no tricks or ponies or growth hacking nonsense. Just
            remote things we care about with a short surprising insight every
            week. No rush.
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Footer;
