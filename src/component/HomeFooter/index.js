import React from "react";
import "./style.css";
import images from "../../services/images";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerFirst">
        <div className="footerFirst1st">
          <div className="footerLogoTextDiv">
            <img src={images.footerLogo} className="footerLogo" />
            <span className="footerFirst1stText">
              This website offers gambling with a risk factor. You must be over
              the age of 18 to be a user of our site. We are not responsible for
              violating any local laws in your area regarding online gambling.
              Play responsibly and have fun with Coins Game.
            </span>
          </div>
          <hr />
        </div>
        <div className="footerFirst2nd">
          <div className="footerFirst2ndText">Help Center</div>
          <div className="footerFirst2ndText">Terms of Use</div>
          <div className="footerFirst2ndText">Privacy Policy</div>
          <div className="footerFirst2ndText">Gambling Awareness</div>
          <div className="footerFirst2ndText">AML</div>
          <div className="footerFirst2ndText">SELF-EXCLUSION</div>
          <div className="footerFirst2ndText">Blog</div>
          <div className="footerFirst2ndText">Sport Rules</div>
          <div className="footerFirst2ndText">Verify Representative</div>
        </div>
        <div className="footerFirst3rd">
          <div className="footerFirst3rdText">Contact Us</div>
          <div className="footerFirst3rdText2">
            Get help:<span className="footerEmail">@gamblify</span>
          </div>
          <div className="footerFirst3rdText3">Accepted currencies</div>
        </div>
        <div className="footerFirst4th">
          <div className="footerFirst4thText">
            Business: <span className="footerEmail">Business@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="footerSecond">
        <div className="footerSecond1">
          <img src={images.footerImg2} className="footer2Img" />
          <span className="footerSecondText">
            ak.Game is operated by Royal Way N.V. (Commercial register of
            Curaçao no. 161620, Abraham de Veerstraat 9, Willemstad, Curaçao)
            under a sublicense Gaming Curacao pursuant to Master gaming License
            #365/JAZ. Payment agent company is Altrimax Limited with address
            A.G. Leventi, 5, The Leventis Gallery Tower, 13th floor, Office
            1301, 1097, Nicosia, Cyprus and Registration number: HE 416902
          </span>
        </div>
        <div className="footerSecondLine"></div>
        <div className="footerSecond2">
          <img src={images.footerImg3} className="footerImg1" />
          <img src={images.footerImg4} className="footerImg2" />
          <img src={images.footerImg5} className="footerImg3" />
          <img src={images.footerImg6} className="footerImg4" />
        </div>
      </div>
      <div className="footerThird">
        <div className="footerThirdText">©2023 akgames ALL RIGHTS RESERVED</div>
      </div>
    </div>
  );
}
