import React, { useState } from "react";
import "./style.css";
import HomeHeader from "../../component/HomeHeader";
import SideBar from "../../component/sideBar";
import images from "../../services/images";
import Footer from "../../component/HomeFooter";

export default function Home() {
  const [originalGameImg, setOrigialGameImg] = useState([
    images.game1,
    images.game2,
    images.game3,
    images.game4,
    images.game5,
    images.game6,
    images.game7,
    images.game8,
    images.game9,
  ]);
  const [originalGameImgIndex, setOriginalGameImgIndex] = useState(0);

  return (
    <div>
      <HomeHeader />
      <div className="mainHome">
        <SideBar />
        <div className="homeCenterDiv">
          <div className="homeSwipeDiv">
            <img src={images.homeSwipLeftArrow} className="homeSwipArrowImg" />
            <img src={images.homeSwipe1} className="homeSwipeImg" />
            <img src={images.homeSwipe2} className="homeSwipeImg" />
            <img src={images.homeSwipe3} className="homeSwipeImg" />
            <img
              src={images.homeSwipRightArrow}
              className="homeSwipArrowImg2"
            />
          </div>
          <div className="homeSecondDiv">
            <div className="homeSecondDivInsideDiv1">
              Free Crypto <br /> Wheel
            </div>
            <div className="homeSecondDivInsideDiv">
              Daily Bonus
              <img src={images.dailyBonus} className="dailyBonusImg" />
            </div>
            <div className="homeSecondDivInsideDiv">
              Rakeback
              <img src={images.Rakeback} className="dailyBonusImg" />
            </div>
            <div className="homeSecondDivInsideDiv">
              Vip Club
              <img src={images.vipClub} className="dailyBonusImg" />
            </div>
            <div className="homeSecondDivInsideDiv">
              Free Boxes
              <img src={images.freeBoxes} className="dailyBonusImg" />
            </div>
            <div className="homeSecondDivInsideDiv">
              Promocodes
              <img src={images.Promocodes} className="dailyBonusImg" />
            </div>
          </div>
          <div className="homeThirdDiv">
            <div className="homeThirdDiv1">
              <img src={images.TVBetGame1} className="homeThirdDiv1Img" />
              <span>text</span>
              <div className="homeThirdDiv1Line"></div>
            </div>
          </div>

          <div className="homeFourthDiv">
            <div className="homeFourthDivFirstDiv">
              <div className="homeFourTextDiv">
                <img src={images.sidebar2} className="originalGameImg" />
                Original <span className="homeFourTextDivYellow"> games </span>
              </div>
              <div className="gameaArrowDiv">
                <img
                  src={images.homeSwipLeftArrow}
                  className="gameArrowImg2"
                  onClick={() => {
                    // console.log(originalGameImgIndex);
                    if (originalGameImgIndex > 0) {
                      setOriginalGameImgIndex(originalGameImgIndex - 1);
                    }
                  }}
                />
                <img
                  src={images.homeSwipRightArrow}
                  className="gameArrowImg"
                  onClick={() => {
                    if (originalGameImgIndex < 2) {
                      setOriginalGameImgIndex(originalGameImgIndex + 1);
                    }
                  }}
                />
              </div>
            </div>
            <div className="homeFourthDivSecondDiv">
              <div className="originalGameDiv1">
                <div className="originalGamePlayDiv1">
                  <img src={images.loginWith6} />
                  game Name
                </div>
                <img
                  src={originalGameImg[originalGameImgIndex]}
                  className="originalGameImg1"
                />
              </div>
              <div className="originalGameDiv2">
                <div className="originalGamePlayDiv2">
                  <img src={images.loginWith6} />
                  game Name
                </div>
                <img
                  src={originalGameImg[originalGameImgIndex + 1]}
                  className="originalGameImg2"
                />
              </div>

              <div className="originalGameDiv3">
                <div className="originalGamePlayDiv3">
                  <img src={images.loginWith6} />
                  game Name
                </div>
                <img
                  src={originalGameImg[originalGameImgIndex + 2]}
                  className="originalGameImg3"
                />
              </div>
              <div className="originalGameDiv4">
                <div className="originalGamePlayDiv4">
                  <img src={images.loginWith6} />
                  game Name
                </div>
                <img
                  src={originalGameImg[originalGameImgIndex + 3]}
                  className="originalGameImg4"
                />
              </div>
              <div className="originalGameDiv5">
                <div className="originalGamePlayDiv5">
                  <img src={images.loginWith6} />
                  game Name
                </div>
                <img
                  src={originalGameImg[originalGameImgIndex + 4]}
                  className="originalGameImg5"
                />
              </div>
              <div className="originalGameDiv6">
                <div className="originalGamePlayDiv6">
                  <img src={images.loginWith6} />
                  game Name
                </div>
                <img
                  src={originalGameImg[originalGameImgIndex + 5]}
                  className="originalGameImg6"
                />
              </div>
              <div className="originalGameDiv7">
                <div className="originalGamePlayDiv7">
                  <img src={images.loginWith6} />
                  game Name
                </div>
                <img
                  src={originalGameImg[originalGameImgIndex + 6]}
                  className="originalGameImg7"
                />
              </div>
            </div>
          </div>
          <div className="homeFourthDiv">
            <div className="homeFourthDivFirstDiv">
              <div className="homeFourTextDiv">
                <img src={images.sidebar2} className="originalGameImg" />
                Top <span className="homeFourTextDivYellow"> games </span>
              </div>
              <div className="gameaArrowDiv">
                <img src={images.homeSwipLeftArrow} className="gameArrowImg2" />
                <img src={images.homeSwipRightArrow} className="gameArrowImg" />
              </div>
            </div>
            <div className="homeFourthDivSecondDiv">
              {/*  */}
              <div className="topGameDiv1">
                <div className="topGamePlayDiv1">
                  <img src={images.loginWith6} />
                  game Name
                </div>
                <img src={images.game8} className="topGameImg1" />
              </div>
              {/*  */}
              {/* <img src={images.game8} className="gameImg" /> */}
              <img src={images.game9} className="gameImg" />
              <img src={images.game10} className="gameImg" />
              <img src={images.game11} className="gameImg" />
              <img src={images.game12} className="gameImg" />
              <img src={images.game13} className="gameImg" />
              <img src={images.game14} className="gameImg" />
            </div>
          </div>
          <div className="paymentDiv">
            <span className="paymentText">
              Need cryptocurrency? Buy using a card.
            </span>
            <img src={images.paymentImg} className="paymentImg" />
            <button className="paymentBtn">
              Buy <br /> Cryptocurrency
            </button>
          </div>
          <div className="homeFourthDiv">
            <div className="homeFourthDivFirstDiv">
              <div className="homeFourTextDiv">
                <img src={images.sidebar2} className="originalGameImg" />
                Hit <span className="homeFourTextDivYellow"> games </span>
              </div>
              <div className="gameaArrowDiv">
                <img src={images.homeSwipLeftArrow} className="gameArrowImg2" />
                <img src={images.homeSwipRightArrow} className="gameArrowImg" />
              </div>
            </div>
            <div className="homeFourthDivSecondDiv">
              <img src={images.game15} className="gameImg" />
              <img src={images.game16} className="gameImg" />
              <img src={images.game17} className="gameImg" />
              <img src={images.game18} className="gameImg" />
              <img src={images.game19} className="gameImg" />
              <img src={images.game20} className="gameImg" />
              <img src={images.game21} className="gameImg" />
            </div>
          </div>
          <div className="homeFourthDiv">
            <div className="homeFourthDivFirstDiv">
              <div className="homeFourTextDiv">
                <img src={images.sidebar2} className="originalGameImg" />
                Hot <span className="homeFourTextDivYellow"> games </span>
              </div>
              <div className="gameaArrowDiv">
                <img src={images.homeSwipLeftArrow} className="gameArrowImg2" />
                <img src={images.homeSwipRightArrow} className="gameArrowImg" />
              </div>
            </div>
            <div className="homeFourthDivSecondDiv">
              <img src={images.game22} className="gameImg" />
              <img src={images.game23} className="gameImg" />
              <img src={images.game24} className="gameImg" />
              <img src={images.game25} className="gameImg" />
              <img src={images.game26} className="gameImg" />
              <img src={images.game27} className="gameImg" />
              <img src={images.game28} className="gameImg" />
            </div>
          </div>
          <div className="homeFourthDiv">
            <div className="homeFourthDivFirstDiv">
              <div className="homeFourTextDiv">
                <img src={images.sidebar2} className="originalGameImg" />
                Cold <span className="homeFourTextDivYellow"> games </span>
              </div>
              <div className="gameaArrowDiv">
                <img src={images.homeSwipLeftArrow} className="gameArrowImg2" />
                <img src={images.homeSwipRightArrow} className="gameArrowImg" />
              </div>
            </div>
            <div className="homeFourthDivSecondDiv">
              <img src={images.game29} className="gameImg" />
              <img src={images.game30} className="gameImg" />
              <img src={images.game31} className="gameImg" />
              <img src={images.game32} className="gameImg" />
              <img src={images.game33} className="gameImg" />
              <img src={images.game34} className="gameImg" />
              <img src={images.game35} className="gameImg" />
            </div>
          </div>
          <div className="homeFourthDiv">
            <div className="homeFourthDivFirstDiv">
              <div className="homeFourTextDiv">
                <img src={images.sidebar2} className="originalGameImg" />
                GAME PROVIDERS
                {/* <span className="homeFourTextDivYellow"> games </span> */}
              </div>
              <div className="gameaArrowDiv">
                <img src={images.homeSwipLeftArrow} className="gameArrowImg2" />
                <img src={images.homeSwipRightArrow} className="gameArrowImg" />
              </div>
            </div>
            <div className="gameProviderDiv">
              <img src={images.gameProvider1} className="homeProviderImg" />
              <img src={images.gameProvider2} className="homeProviderImg" />
              <img src={images.gameProvider3} className="homeProviderImg" />
              <img src={images.gameProvider4} className="homeProviderImg" />
              <img src={images.gameProvider5} className="homeProviderImg" />
              <img src={images.gameProvider6} className="homeProviderImg" />
              <img src={images.gameProvider7} className="homeProviderImg" />
            </div>
          </div>
          <div className="homeFourthDiv">
            <div className="homeFourthDivFirstDiv">
              <div className="homeFourTextDiv">
                <img src={images.sidebar2} className="originalGameImg" />
                RECOMMENDED
                <span className="homeFourTextDivYellow"> LIVE Games </span>
              </div>
              <div className="gameaArrowDiv">
                <img src={images.homeSwipLeftArrow} className="gameArrowImg2" />
                <img src={images.homeSwipRightArrow} className="gameArrowImg" />
              </div>
            </div>
            <div className="homeFourthDivSecondDiv">
              <img src={images.liveGame1} className="gameImg" />
              <img src={images.liveGame2} className="gameImg" />
              <img src={images.liveGame3} className="gameImg" />
              <img src={images.liveGame4} className="gameImg" />
              <img src={images.liveGame5} className="gameImg" />
              <img src={images.liveGame6} className="gameImg" />
              <img src={images.liveGame7} className="gameImg" />
            </div>
          </div>
          <div className="homeFourthDiv">
            <div className="homeFourthDivFirstDiv">
              <div className="homeFourTextDiv">
                <img src={images.sidebar2} className="originalGameImg" />
                TVBet
                <span className="homeFourTextDivYellow"> Games </span>
              </div>
              <div className="gameaArrowDiv">
                <img src={images.homeSwipLeftArrow} className="gameArrowImg2" />
                <img src={images.homeSwipRightArrow} className="gameArrowImg" />
              </div>
            </div>
            <div className="homeFourthDivSecondDiv">
              <img src={images.TVBetGame1} className="gameImg" />
              <img src={images.TVBetGame2} className="gameImg" />
              <img src={images.TVBetGame3} className="gameImg" />
              <img src={images.TVBetGame4} className="gameImg" />
              <img src={images.TVBetGame5} className="gameImg" />
              <img src={images.TVBetGame6} className="gameImg" />
              <img src={images.TVBetGame7} className="gameImg" />
            </div>
          </div>
          <div className="biggestWinnersDiv">
            <span className="biggestWinnersText">BIGGEST WINNERS TODAY</span>
            <div className="biggestWinnersDivSecondDiv">
              <div className="biggestWinnersDivBtnDiv">
                <span className="wonAllText">WON ALL</span>
                <button className="playNowBtn">Play now</button>
              </div>
              <img src={images.gunMenImg} className="gunMenImg" />
              <div className="biggestWinnersDivLastDiv">
                <div className="biggestWinnersDivLastDivIndideDiv">
                  <div className="firstDiv">
                    <img src={images.firstImg} className="firstImg" />
                    <span className="firstText">Danhkono</span>
                  </div>
                  <div className="firstDivSecondLast">
                    <span className="ratingText">Top Winner #1</span>
                    <div className="firstDivLast">
                      <span className="firstDivLast1">+1060.00000</span>
                      <span className="firstDivLast2">USD</span>
                    </div>
                  </div>
                </div>
                <div className="biggestWinnersDivLastDivIndideDiv2">
                  <div className="firstDiv">
                    <img src={images.secondImg} className="firstImg" />
                    <span className="firstText">BlazedDustinII</span>
                  </div>
                  <div className="firstDivSecondLast">
                    <span className="ratingText">Top Winner #2</span>
                    <div className="firstDivLast22">
                      <span className="firstDivLast1">+887.800000</span>
                      <span className="firstDivLast2">USD</span>
                    </div>
                  </div>
                </div>
                <div className="biggestWinnersDivLastDivIndideDiv">
                  <div className="firstDiv">
                    <img src={images.thirdImg} className="firstImg" />
                    <span className="firstText">vikingph</span>
                  </div>
                  <div className="firstDivSecondLast">
                    <span className="ratingText">Top Winner #3</span>
                    <div className="firstDivLast">
                      <span className="firstDivLast1">+713.000000</span>
                      <span className="firstDivLast2">USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="latestBetsDiv">
            <div className="latestBetsDiv1st">LATEST BETS</div>
            <div className="latestBetsDiv2nd">
              <div className="latestBetsDiv2nd1st">
                <div className="latestBets0">Game</div>
                <div className="latestBets1">Player</div>
                <div className="latestBets1">Time</div>
                <div className="latestBets1">Bet</div>
                <div className="latestBets1">Multiplier</div>
                <div className="latestBets2">Payout</div>
              </div>
              <div className="latestBetsDiv2nd1st">
                <div className="latestBets0">Bonanza Billion</div>
                <div className="latestBets1">OrrisonNe</div>
                <div className="latestBets1">15:39:15</div>
                <div className="latestBets1">0.00000000</div>
                <div className="latestBets1">0.00x</div>
                <div className="latestBets2Green">0.00000730</div>
              </div>
              <div className="latestBetsDiv2nd1stLight">
                <div className="latestBets0">Limbo</div>
                <div className="latestBets1">findyou</div>
                <div className="latestBets1">15:39:14</div>
                <div className="latestBets1">0.32000000</div>
                <div className="latestBets1">8.11x</div>
                <div className="latestBets2Gray">0.00000000</div>
              </div>
              <div className="latestBetsDiv2nd1st">
                <div className="latestBets0">Cazino Zeppelin Reloaded</div>
                <div className="latestBets1">JillsonKe</div>
                <div className="latestBets1">15:39:13</div>
                <div className="latestBets1">0.00000000</div>
                <div className="latestBets1">0.00x</div>
                <div className="latestBets2Green">4.80045838</div>
              </div>
              <div className="latestBetsDiv2nd1stLight">
                <div className="latestBets0">Plinko</div>
                <div className="latestBets1">Hidden</div>
                <div className="latestBets1">15:39:12</div>
                <div className="latestBets1">10.0000000</div>
                <div className="latestBets1">4.00x</div>
                <div className="latestBets2Green">40.0000000</div>
              </div>
              <div className="latestBetsDiv2nd1st">
                <div className="latestBets0">Bonanza Billion</div>
                <div className="latestBets1">OrrisonNe</div>
                <div className="latestBets1">15:39:11</div>
                <div className="latestBets1">0.00000000</div>
                <div className="latestBets1">0.00x</div>
                <div className="latestBets2Green">0.00000730</div>
              </div>
              <div className="latestBetsDiv2nd1stLight">
                <div className="latestBets0">Plinko</div>
                <div className="latestBets1">Marusska</div>
                <div className="latestBets1">15:39:10</div>
                <div className="latestBets1">0.03000000</div>
                <div className="latestBets1">1.20x</div>
                <div className="latestBets2Green">0.03600000</div>
              </div>
              <div className="latestBetsDiv2nd1st">
                <div className="latestBets0">Fire In The Hole xBomb</div>
                <div className="latestBets1">Cnhi</div>
                <div className="latestBets1">15:39:09</div>
                <div className="latestBets1">0.00000000</div>
                <div className="latestBets1">0.00x</div>
                <div className="latestBets2Green">0.37803610</div>
              </div>
              <div className="latestBetsDiv2nd1stLight">
                <div className="latestBets0">Plinko</div>
                <div className="latestBets1">niw385</div>
                <div className="latestBets1">15:39:08</div>
                <div className="latestBets1">0.02000000</div>
                <div className="latestBets1">0.20x</div>
                <div className="latestBets2Green">0.00400000</div>
              </div>
              <div className="latestBetsDiv2nd1st">
                <div className="latestBets0">Bonanza Billion</div>
                <div className="latestBets1">OrrisonNe</div>
                <div className="latestBets1">15:39:07</div>
                <div className="latestBets1">0.00000000</div>
                <div className="latestBets1">0.00x</div>
                <div className="latestBets2Green">0.00000620</div>
              </div>
              <div className="latestBetsDiv2nd1stLight">
                <div className="latestBets0">Magic Spins</div>
                <div className="latestBets1">PStore</div>
                <div className="latestBets1">15:39:06</div>
                <div className="latestBets1">0.00000000</div>
                <div className="latestBets1">0.00x</div>
                <div className="latestBets2Green">3.84036671</div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
