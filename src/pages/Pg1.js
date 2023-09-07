import "../components/WalkNavigation.css";
import * as TTS from "./TTS";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Pg1() {
  useEffect(() => {
    setTimeout(function () {
      TTS.testFun("보행자도로를 따라 49m 이동");
    }, 2000);

    setTimeout(function () {
      navigate("/Pg2");
    }, 5000);
  });
  const navigate = useNavigate();
  return (
    <div className="WalkNavigation">
      <div className="Sign" id="Sign">
        <div id="img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
          >
            <path
              d="M67.5 135C67.5 139.142 70.8579 142.5 75 142.5C79.1421 142.5 82.5 139.142 82.5 135L67.5 135ZM80.3033 9.6967C77.3744 6.76777 72.6256 6.76777 69.6967 9.6967L21.967 57.4264C19.0381 60.3553 19.0381 65.1041 21.967 68.033C24.8959 70.9619 29.6447 70.9619 32.5736 68.033L75 25.6066L117.426 68.033C120.355 70.9619 125.104 70.9619 128.033 68.033C130.962 65.1041 130.962 60.3553 128.033 57.4264L80.3033 9.6967ZM82.5 135L82.5 15L67.5 15L67.5 135L82.5 135Z"
              fill="#172A46"
            />
          </svg>
        </div>
        <div
          id="context"
          style={{
            marginTop: "40px",
            fontSize: "20px",
          }}
        >
          보행자도로를 따라 49m 이동
        </div>
      </div>
      <div className="footer">
        <div className="Informations">
          남은 시간 &emsp; &emsp; &nbsp;&nbsp;15분
          <br />
          남은 거리 &emsp; &emsp; 1.2km
          <br />
          횡단보도 수 &emsp; &nbsp; &nbsp;2개
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

export default Pg1;
