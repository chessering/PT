import "../components/CheckPage.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import $ from "jquery";
import * as TTS from "./TTS";
window.$ = $;
/*global Tmapv2 */

function StartCheck() {
  const navigate = useNavigate();
  const location = useLocation();
  const startName = location.state.startName;
  const startLat = location.state.startLat;
  const startLon = location.state.startLon;
  let clickCount1 = 0;
  let clickCount2 = 0;
  useEffect(() => {
    TTS.testFun("입력한 정보가 맞나요?");
  });
  return (
    <div className="CheckPage">
      <div className="InputAndButton">
        <svg
          className="Mark"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M20.5 16C20.5 18.4853 18.4853 20.5 16 20.5C13.5147 20.5 11.5 18.4853 11.5 16C11.5 13.5147 13.5147 11.5 16 11.5C18.4853 11.5 20.5 13.5147 20.5 16ZM16 23.5C20.1421 23.5 23.5 20.1421 23.5 16C23.5 11.8579 20.1421 8.5 16 8.5C11.8579 8.5 8.5 11.8579 8.5 16C8.5 20.1421 11.8579 23.5 16 23.5ZM30.5 16C30.5 24.0081 24.0081 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16Z"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
        <div className="Place">
          <div>{startName}</div>
        </div>
      </div>

      <h2>입력한 정보가 맞나요?</h2>
      <div className="Btns">
        <div
          className="YesBtn"
          onClick={() => {
            clickCount1 = clickCount1 + 1;
            if (clickCount1 == 1) {
              TTS.testFun("네 버튼입니다.");
            } else if (clickCount1 == 2) {
              navigate("/DestInput", {
                state: {
                  startName: startName,
                  startLat: startLat,
                  startLon: startLon,
                },
              });
            }
          }}
        >
          네
        </div>
        <div
          className="NoBtn"
          onClick={() => {
            clickCount2 = clickCount2 + 1;
            if (clickCount2 == 1) {
              TTS.testFun("아니요 버튼입니다.");
            } else if (clickCount1 == 2) {
              navigate("/SearchArea");
            }
          }}
        >
          아니요
        </div>
      </div>
    </div>
  );
}

export default StartCheck;
