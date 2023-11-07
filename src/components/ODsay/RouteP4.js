import "./TransportNavigation.css";
import * as TTS from "../../pages/TTS";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RouteP4() {

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
    TTS.testFun("하차하세요");
    setTimeout(function () {
      navigate("/TransportNavigateEnd");
    }, 7000);
  }, []);
  
  const navigate = useNavigate();
  return (
    <div className="TransportNavigation">
      <div className="Sign" id="Sign">
        <div id="img">
            <svg xmlns="http://www.w3.org/2000/svg" width="155" height="153" viewBox="0 0 155 153" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M77.5 0C47.1243 0 22.5 24.6243 22.5 55V98H17.5C7.83502 98 0 105.835 0 115.5C0 125.165 7.83502 133 17.5 133H51.0424C52.3113 137.475 54.7067 141.598 58.0546 144.945C63.2118 150.103 70.2066 153 77.5 153C84.7935 153 91.7882 150.103 96.9454 144.945C100.293 141.598 102.689 137.475 103.958 133H137.5C147.165 133 155 125.165 155 115.5C155 105.835 147.165 98 137.5 98H132.5V55C132.5 24.6243 107.876 0 77.5 0ZM117.5 95V55C117.5 32.9086 99.5914 15 77.5 15C55.4086 15 37.5 32.9086 37.5 55V95H117.5ZM87.5001 133H67.4999C67.8528 133.47 68.2404 133.918 68.6612 134.339C71.0054 136.683 74.1848 138 77.5 138C80.8152 138 83.9946 136.683 86.3388 134.339C86.7596 133.918 87.1472 133.47 87.5001 133ZM137.5 118C138.881 118 140 116.881 140 115.5C140 114.119 138.881 113 137.5 113H17.5C16.1193 113 15 114.119 15 115.5C15 116.881 16.1193 118 17.5 118H137.5Z" fill="#172A46"/>
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
          하차하세요
        </div>
      </div>
      <div className="footer">
        <div className="Informations">
          남은 시간 &emsp; &emsp; &nbsp;&nbsp;0분
          <br />
          남은 거리 &emsp; &emsp;  0km
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

export default RouteP4;
