import React from "react";
import "./style.css";
import headerLogo from "../../images/headerLogo.png";
import drawerBtn from "../../images/drawerBtn.png";
import gameLogo from "../../images/gameLogo.png";
import spotLogo from "../../images/spotLogo.png";
import searchImg from "../../images/searchImg.png";
import messageIcon from "../../images/messageIcon.png";

export default function HomeHeader() {
  return (
    <div className="homeHeaderContainer">
      <div className="homeHeaderFirstDiv">
        <img src={headerLogo} className="headerLogoImg" />
        <img src={drawerBtn} className="drawerBtnImg" />
        <div className="gaminiSpotBtn">
          <div className="gamingBtn">
            <img src={gameLogo} className="gameLogoImg" />
            <span className="gamingText">Gaming</span>
          </div>
          <div className="gamingBtn2">
            <img src={spotLogo} className="gameLogoImg2" />
            <span className="gamingText2">Sport</span>
          </div>
        </div>
        <img src={searchImg} className="searchImg" />
      </div>
      <div className="homeHeaderSecondDiv">
        <button className="HomeLoginBtn">Lon in</button>
        <button className="homeRegistrationBtn">Registration</button>
        <img src={messageIcon} className="homeMessageIcon" />
      </div>
    </div>
  );
}
