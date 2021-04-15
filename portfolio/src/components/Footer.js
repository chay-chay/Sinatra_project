import React from "react";
import "./footer.css";
import "../index.css";
import { SiGithub, SiYoutube, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const Footer = () => (
  <div>
    <section>
      <div className="footer">  
            <h3 className="contact">
              <div>
             Chayanit McCormick 2021 ©
             </div>
             <div>
              <a href="https://github.com/chay-chay/recipes-frontend">
                <SiGithub />
              </a>
              <a href="mailto:chayanit.chaisri@gmail.com">
                <FiMail />
              </a>
              <a href="https://www.youtube.com/channel/UC-wW2rQ7mDnS0K9b7M1RPGA">
                <SiYoutube />
              </a>
              <a href="https://www.linkedin.com/in/chayanit-chaisri">
                <SiLinkedin />
              </a>
              </div>
            </h3>
          </div>
    </section>
    
  </div>
);

export default Footer;
