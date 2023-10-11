import React, { useState } from "react";
import "./style.css";
import signupImg from "../../images/signupImg.png";
import logoImg from "../../images/logoImg.png";
import loginWith1 from "../../images/loginWith1.png";
import loginWith2 from "../../images/loginWith2.png";
import loginWith3 from "../../images/loginWith3.png";
import loginWith4 from "../../images/loginWith4.png";
import loginWith5 from "../../images/loginWith5.png";
import loginWith6 from "../../images/loginWith6.png";
import loginWith7 from "../../images/loginWith7.png";
import loginWith8 from "../../images/loginWith8.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import crossBtn from "../../images/crossBtn.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import rightIcon from "../../images/rightIcon.png";

export default function Signup() {
  const [isPassShow, setIsPassShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="signupContainer">
      <div className="signupInnerContainer">
        <img src={signupImg} className="signupImg" />
        <div className="signupRight">
          <img src={crossBtn} className="crossBtn" />
          <div className="signupText">Registration</div>

          <div className="signLogoDiv">
            <div className="signupLogoText">COINS</div>
            <img src={logoImg} className="signupLogoImg" />
            <div className="signupLogoText2">GAME</div>
          </div>
          <div className="text1">Register quickly with:</div>
          <div className="signupWithDiv">
            <img src={loginWith1} className="signupWithImg" />
            <img src={loginWith2} className="signupWithImg" />
            <img src={loginWith3} className="signupWithImg" />
            <img src={loginWith4} className="signupWithImg" />
            <img src={loginWith5} className="signupWithImg" />
            <img
              src={loginWith6}
              className="signupWithImg"
              onClick={handleShow}
            />
            <img src={loginWith7} className="signupWithImg" />
            <img src={loginWith8} className="signupWithImg" />
          </div>
          <div className="signupEmailTitle">Email address</div>
          <div className="signupEmailIntupDiv">
            <input
              type="text"
              className="signupEmailInput"
              placeholder="Email address"
            />
          </div>
          <div className="signupSmallText">
            Your email will be used to log in.
          </div>
          <div className="signupPassTitle">Password</div>
          <div className="signupPassIntupDiv">
            <input
              type={isPassShow ? "text" : "password"}
              className="signupPasswordInput"
              placeholder="Password"
            />
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
          <div className="signupSmallText">
            Your password must be 8 or more characters long. Do not use your
            email address or username as a password.
          </div>
          <div className="checkboxDiv">
            <input type="checkbox" style={{ color: "red" }} />
            <span className="checkboxText">
              I agree with 
              <span className="checkboxTextBlue">user agreement</span> , and
              confirm that I am at least 18 years old!
            </span>
          </div>
          <button className="signupBtn">Submit</button>
          <div className="signupLine"></div>
          <div className="text1">
            Already registered? <span className="signupLastText">Log in</span>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <div
          style={{
            color: "white",
            backgroundColor: "#202A39",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ fontSize: 20, marginLeft: 20, marginTop: 10 }}>
            Last Step
          </div>
          <div style={{ fontSize: 17, marginLeft: 20, marginTop: 20 }}>
            One more step to get the FREE SPIN!
          </div>
          <div
            style={{
              fontSize: 12,
              marginLeft: 20,
              marginTop: 10,
              color: "#9DB8E1",
            }}
          >
            To make Coins.Game a better place, We'd like to know you more.
          </div>
          <div
            style={{
              fontSize: 12,
              marginLeft: 20,
              color: "#9DB8E1",
            }}
          >
            Thanks for your patience.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: 20,
                width: "45%",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  color: "#9DB8E1",
                  marginBottom: 5,
                }}
              >
                First Name
              </span>
              <input className="modalInput" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: 20,
                width: "45%",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  color: "#9DB8E1",
                  marginBottom: 5,
                }}
              >
                Last Name
              </span>
              <input className="modalInput" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: 20,
              //   width: "100%",
            }}
          >
            <span
              style={{
                fontSize: 14,
                marginTop: 10,
                color: "#9DB8E1",
                marginBottom: 5,
              }}
            >
              Date of Birth:
            </span>
            <div
              style={{
                // backgroundColor: "red",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: 10,
              }}
            >
              <input className="modalInputSmall" />
              <input className="modalInputSmall" />
              <input className="modalInputSmall" />
            </div>
          </div>
          <div style={{ marginLeft: 20, marginTop: 20 }}>Setting</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: 20,
                width: "45%",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  color: "#9DB8E1",
                  marginBottom: 5,
                }}
              >
                Language
              </span>
              <div className="modalArrowDiv">
                <div style={{ fontSize: 12 }}>English</div>
                <img src={rightIcon} style={{ width: 12, height: 12 }} />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: 20,
                width: "45%",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  color: "#9DB8E1",
                  marginBottom: 5,
                }}
              >
                Currency
              </span>
              <div className="modalArrowDiv">
                <div style={{ fontSize: 12 }}>INR</div>
                <img src={rightIcon} style={{ width: 12, height: 12 }} />
              </div>
            </div>
          </div>
          <button className="modalBtn" onClick={handleClose}>
            Update
          </button>
        </div>
        {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
