import React from "react";
import "./style.css";
import HomeHeader from "../../component/HomeHeader";
import SideBar from "../../component/sideBar";
import homeSwipe1 from "../../images/homeSwipe1.png";
import homeSwipe2 from "../../images/homeSwipe2.png";
import homeSwipe3 from "../../images/homeSwipe3.png";
import homeSwipRightArrow from "../../images/homeSwipRightArrow.png";
import homeSwipLeftArrow from "../../images/homeSwipLeftArrow.png";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="mainHome">
        <SideBar />
        <div className="homeCenterDiv">
          <div className="homeSwipeDiv">
            <img src={homeSwipLeftArrow} className="homeSwipArrowImg" />
            <img src={homeSwipe1} className="homeSwipeImg" />
            <img src={homeSwipe2} className="homeSwipeImg" />
            <img src={homeSwipe3} className="homeSwipeImg" />
            <img src={homeSwipLeftArrow} className="homeSwipArrowImg2" />
          </div>
        </div>
      </div>
    </div>
  );
}
