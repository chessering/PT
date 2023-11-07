import "./TransportNavigation.css";
import * as TTS from "../../pages/TTS";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RouteP1() {

  useEffect(() => {
    var AudioContext;
    var audioContext;
    function dd() {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(() => {
          AudioContext = window.AudioContext || window.webkitAudioContext;
          audioContext = new AudioContext();
        })
        .catch((e) => {
          console.error(`Audio permissions denied: ${e}`);
        });
    }
    dd();
    TTS.testFun("서울역에 도착하였습니다.");
    setTimeout(function () {
      navigate("/RouteP2");
    }, 6000);
  }, []);


  const navigate = useNavigate();
  return (
    <div className="TransportNavigation">
      <div className="Sign" id="Sign">
        <div id="img">
            <svg xmlns="http://www.w3.org/2000/svg" width="155" height="125" viewBox="0 0 155 125" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.5 0C12.835 0 5 7.83502 5 17.5C5 24.481 9.08763 30.5073 15 33.3159V110H7.5C3.35786 110 0 113.358 0 117.5C0 121.642 3.35786 125 7.5 125H147.5C151.642 125 155 121.642 155 117.5C155 113.358 151.642 110 147.5 110H140V33.3159C145.912 30.5073 150 24.481 150 17.5C150 7.83502 142.165 0 132.5 0H22.5ZM115 110H125V35H30V110H40V104.573C37.087 103.544 35 100.766 35 97.5C35 93.3579 38.3579 90 42.5 90H112.5C116.642 90 120 93.3579 120 97.5C120 100.766 117.913 103.544 115 104.573V110ZM100 105V110H55V105H100ZM22.5 20H132.5C133.881 20 135 18.8807 135 17.5C135 16.1193 133.881 15 132.5 15H22.5C21.1193 15 20 16.1193 20 17.5C20 18.8807 21.1193 20 22.5 20Z" fill="#172A46"/>
            </svg>
        </div>
        <div
          id="context"
          style={{
            marginTop: "40px",
            fontSize: "30px",
            color:"#172A46",
            fontWeight: "600",
            fontFamily: "EliceDigitalBaeum-Bd",
          }}
        >
          서울역<br/>도착하였습니다
        </div>
      </div>
      <div className="footer">
        <div className="Informations">
          남은 시간 &emsp; &emsp; &nbsp;&nbsp;23분
          <br />
          남은 거리 &emsp; &emsp; 9.3km
          <br />
          횡단보도 수 &emsp; &nbsp; &nbsp;0개
          <br />
        </div>
        <div className="Buttons">
          <button className="UpdateBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 100 100"
              fill="none"
            >
              <rect width="100" height="100" rx="23" fill="#172A46" />
              <path
                d="M75.7287 50C75.7287 43.6161 73.632 37.4106 69.7639 32.3459C65.8959 27.2812 60.4725 23.6404 54.335 21.9882C48.1975 20.3359 41.6888 20.7645 35.8185 23.2075C29.9481 25.6505 25.0441 29.9714 21.8671 35.5C18.6901 41.0286 17.4176 47.456 18.247 53.7852C19.0763 60.1145 21.9612 65.992 26.4542 70.5061C30.9472 75.0202 36.7971 77.9186 43.0968 78.7519C49.3965 79.5851 55.7938 78.3066 61.2965 75.1147M83 28.4885L77.2881 49.9058C77.079 50.6899 76.1034 50.9526 75.5321 50.3786L59.9269 34.7"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className="StopBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 100 100"
              fill="none"
            >
              <rect width="100" height="100" rx="23" fill="#172A46" />
              <path
                d="M32 21V79M69 21V79"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className="ReportBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 100 100"
              fill="none"
            >
              <rect width="100" height="100" rx="23" fill="#172A46" />
              <path
                d="M49.9005 31.1039V20M64.3284 35.0708L70 25.4545M35.6716 35.0708L30 25.4545M69.801 80V75.7143C69.801 73.5625 68.019 71.8182 65.8209 71.8182H33.9801C31.782 71.8182 30 73.5625 30 75.7143V80H69.801ZM63.4328 71.8182V55.4545C63.4328 48.9993 58.087 43.7662 51.4925 43.7662H47.9104C41.316 43.7662 35.9702 48.9993 35.9702 55.4545V71.8182H63.4328Z"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RouteP1;
