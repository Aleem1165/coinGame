import React, { useState } from "react";
import "./style.css";
import logoImg from "../../../src/images/logoImg.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import loginWith1 from "../../../src/images/loginWith1.png";
import loginWith2 from "../../../src/images/loginWith2.png";
import loginWith3 from "../../../src/images/loginWith3.png";
import loginWith4 from "../../../src/images/loginWith4.png";
import loginWith5 from "../../../src/images/loginWith5.png";
import loginWith6 from "../../../src/images/loginWith6.png";
import loginWith7 from "../../../src/images/loginWith7.png";
import loginWith8 from "../../../src/images/loginWith8.png";

export default function Login() {
  const [isPassShow, setIsPassShow] = useState(false);
  return (
    <div className="LoginContainer">
      <div className="LoginHeading">Log in</div>

      <div className="LoginLogoDiv">
        <div className="LoginLogoText">COINS</div>
        <img src={logoImg} className="LoginLogoImg" />
        <div className="LoginLogoText2">GAME</div>
      </div>
      <div className="LoginEmailTitle">Email or Phone</div>
      <div className="LoginEmailIntupDiv">
        <input
          type="text"
          className="LoginEmailInput"
          placeholder="Email or Phone"
        />
      </div>

      <div className="LoginPassTitle">Password</div>
      <div className="LoginPassIntupDiv">
        <input
          type={isPassShow ? "text" : "password"}
          className="LoginPasswordInput"
          placeholder="Password"
        />
        {/* <img src={logoImg} /> */}
        {isPassShow ? (
          <VisibilityOffIcon
            style={{ color: "#55657E" }}
            onClick={() => {
              setIsPassShow(!isPassShow);
            }}
          />
        ) : (
          <VisibilityIcon
            style={{ color: "#55657E" }}
            onClick={() => {
              setIsPassShow(!isPassShow);
            }}
          />
        )}
      </div>
      <div className="LoginForgotPassText">Forgot your Password</div>

      <button className="LoginBtn">Log in</button>
      <div className="LoginWithText">Or login with</div>
      <div className="LoginWithDiv">
        <img src={loginWith1} className="loginWithImg" />
        <img src={loginWith2} className="loginWithImg" />
        <img src={loginWith3} className="loginWithImg" />
        <img src={loginWith4} className="loginWithImg" />
        <img src={loginWith5} className="loginWithImg" />
        <img src={loginWith6} className="loginWithImg" />
        <img src={loginWith7} className="loginWithImg" />
        <img src={loginWith8} className="loginWithImg" />
      </div>
      <div className="line"></div>
      <div className="loginLastText">
        Join CoinsGame today!{" "}
        <span className="loginLastTextYellow">Register Now</span>
      </div>
    </div>
  );
}
