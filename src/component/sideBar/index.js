import React, { useState } from "react";
import "./style.css";
import sidebarHomeImg from "../../images/sidebarHomeImg.png";
import sidebar2 from "../../images/sidebar2.png";
import sidebar3 from "../../images/sidebar3.png";
import sidebar4 from "../../images/sidebar4.png";
import sidebar5 from "../../images/sidebar5.png";
import sidebar6 from "../../images/sidebar6.png";
import sidebarSpinImg from "../../images/sidebarSpinImg.png";
import sidebar123Img from "../../images/sidebar123Img.png";
import sidebarUp from "../../images/sidebarUp.png";
import sidebarTrophye2 from "../../images/sidebarTrophye2.png";
import sidebarTrophye from "../../images/sidebarTrophye.png";
import sidebarDown from "../../images/sidebarDown.png";
import sidebar7 from "../../images/sidebar7.png";
import sidebar8 from "../../images/sidebar8.png";
import sidebar9 from "../../images/sidebar9.png";
import sidebar10 from "../../images/sidebar10.png";
import sidebar11 from "../../images/sidebar11.png";
import sidebar12 from "../../images/sidebar12.png";
import sidebar13 from "../../images/sidebar13.png";

export default function SideBar() {
  const [showDiv, setShowDiv] = useState(true);
  return (
    <div className="homeSideBarContainer">
      <div className="sidebarImgDiv1">
        <img src={sidebarHomeImg} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={sidebar2} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={sidebar3} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={sidebar4} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={sidebar5} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={sidebar6} className="sidebarImg" />
      </div>
      <div className="sidebarSpindiv">
        <img src={sidebarSpinImg} className="sidebarSpinImg" />
      </div>
      <div className="sidebarLine"></div>
      {showDiv ? (
        <div className="sidebarDiv22">
          <div
            className="sidebarDiv2first"
            onClick={() => setShowDiv(!showDiv)}
          >
            <img src={sidebar123Img} className="sidebar123Img" />
            <img src={sidebarDown} className="sidebarUpImg" />
          </div>

          <div className="sidebarTrophyeDiv">
            <img src={sidebarTrophye} className="sidebarTrophyeImg" />
          </div>
          <div className="sidebarTrophyeDiv">
            <img src={sidebarTrophye} className="sidebarTrophyeImg" />
          </div>
          <div className="sidebarTrophyeDiv">
            <img src={sidebarTrophye} className="sidebarTrophyeImg" />
          </div>
          <div className="sidebarTrophyeDiv">
            <img src={sidebarTrophye2} className="sidebarTrophyeImg" />
          </div>
          <div className="sidebarTrophyeDiv">
            <img src={sidebarTrophye2} className="sidebarTrophyeImg" />
          </div>
          <div className="sidebarTrophyeDiv">
            <img src={sidebarTrophye2} className="sidebarTrophyeImg" />
          </div>
        </div>
      ) : (
        <div className="sidebarDiv2" onClick={() => setShowDiv(!showDiv)}>
          <img src={sidebar123Img} className="sidebar123Img" />
          <img
            src={sidebarUp}
            className="sidebarUpImg"
            onClick={() => setShowDiv(!showDiv)}
          />
        </div>
      )}
      <div className="sidebarImgDiv">
        <img src={sidebar7} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={sidebar8} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={sidebar9} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={sidebar10} className="sidebarImg" />
      </div>
      <div className="sidebarLine"></div>
      <div className="sidebarImgDiv">
        <img src={sidebar11} className="sidebarImg" />
      </div>
      <div className="sidebarLine"></div>
      <div className="sidebarImgDiv">
        <img src={sidebar12} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={sidebar13} className="sidebarImg" />
      </div>
    </div>
  );
}

//    <div className={showDiv ? "sidebarDiv22" : "sidebarDiv2"}>
//      <div className="sidebarDiv2first">
//        <img src={sidebar123Img} className="sidebar123Img" />
//        <img src={sidebarUp} className="sidebarUpImg" />
//      </div>
//      <img src={sidebarTrophye} className="sidebarTrophyeImg" />
//      <img src={sidebarTrophye} className="sidebarTrophyeImg" />
//      <img src={sidebarTrophye} className="sidebarTrophyeImg" />
//      <img src={sidebarTrophye2} className="sidebarTrophyeImg" />
//      <img src={sidebarTrophye2} className="sidebarTrophyeImg" />
//      <img src={sidebarTrophye2} className="sidebarTrophyeImg" />
//    </div>;

// <div className={showDiv ? "sidebarDiv22" : "sidebarDiv2"}>
//   <img src={sidebar123Img} className="sidebar123Img" />
//     <img src={sidebarUp} className="sidebarUpImg" />
// </div>;
