import React, { useState } from "react";
import "./style.css";
import images from "../../services/images";

export default function SideBar() {
  const [showDiv, setShowDiv] = useState(true);
  return (
    <div className={showDiv ? "homeSideBarContainer" : "homeSideBarContainer2"}>
      <div className="sidebarImgDiv1">
        <img src={images.sidebarHomeImg} className="sidebarHomeImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={images.sidebar2} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={images.sidebar3} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={images.sidebar4} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={images.sidebar5} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={images.sidebar6} className="sidebarImg" />
      </div>
      <div className="sidebarSpindiv">
        <img src={images.sidebarSpinImg} className="sidebarSpinImg" />
      </div>
      <div className="sidebarLine"></div>
      {showDiv ? (
        <div className="sidebarDiv22">
          <div
            className="sidebarDiv2first"
            onClick={() => setShowDiv(!showDiv)}
          >
            <img src={images.sidebar123Img} className="sidebar123Img" />
            <img src={images.sidebarDown} className="sidebarUpImg" />
          </div>

          <div className="sidebarTrophyeDiv">
            <img src={images.sidebarTrophye} className="sidebarTrophyeImg" />
          </div>
          <div className="sidebarTrophyeDiv">
            <img src={images.sidebarTrophye} className="sidebarTrophyeImg" />
          </div>
          <div className="sidebarTrophyeDiv">
            <img src={images.sidebarTrophye} className="sidebarTrophyeImg" />
          </div>
          <div className="sidebarTrophyeDiv">
            <img src={images.sidebarTrophye2} className="sidebarTrophyeImg" />
          </div>
          <div className="sidebarTrophyeDiv">
            <img src={images.sidebarTrophye2} className="sidebarTrophyeImg" />
          </div>
          <div className="sidebarTrophyeDiv">
            <img src={images.sidebarTrophye2} className="sidebarTrophyeImg" />
          </div>
        </div>
      ) : (
        <div className="sidebarDiv2" onClick={() => setShowDiv(!showDiv)}>
          <img src={images.sidebar123Img} className="sidebar123Img" />
          <img
            src={images.sidebarUp}
            className="sidebarUpImg"
            onClick={() => setShowDiv(!showDiv)}
          />
        </div>
      )}
      <div className="sidebarImgDiv">
        <img src={images.sidebar7} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={images.sidebar8} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={images.sidebar9} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={images.sidebar10} className="sidebarImg" />
      </div>
      <div className="sidebarLine"></div>
      <div className="sidebarImgDiv">
        <img src={images.sidebar11} className="sidebarImg" />
      </div>
      <div className="sidebarLine"></div>
      <div className="sidebarImgDiv">
        <img src={images.sidebar12} className="sidebarImg" />
      </div>
      <div className="sidebarImgDiv">
        <img src={images.sidebar13} className="sidebarImg" />
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
