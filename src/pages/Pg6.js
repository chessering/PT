import "../components/WalkNavigation.css";
import * as TTS from "./TTS";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Pg6() {
  useEffect(() => {
    TTS.testFun("도착입니다.");
    setTimeout(function () {
      navigate("/Pg7");
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M100 62C100 75.8071 88.8071 87 75 87C61.1929 87 50 75.8071 50 62C50 48.1929 61.1929 37 75 37C88.8071 37 100 48.1929 100 62ZM85 62C85 67.5229 80.5229 72 75 72C69.4771 72 65 67.5229 65 62C65 56.4771 69.4771 52 75 52C80.5229 52 85 56.4771 85 62Z"
              fill="#172A46"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M121.704 80.8919C123.833 75.3366 125 69.3046 125 63C125 35.3858 102.614 13 75 13C47.3858 13 25 35.3858 25 63C25 69.514 26.2457 75.7371 28.5118 81.444L28.5159 81.5089L39.0052 99.6239L56.0433 126.273C64.8919 140.113 85.1081 140.113 93.9568 126.273L109.534 101.908L121.704 80.8919ZM104.907 81.192C108.138 75.8908 110 69.6628 110 63C110 43.67 94.33 28 75 28C55.67 28 40 43.67 40 63C40 70.2137 42.1823 76.9176 45.9228 82.4877C46.111 83.0216 46.363 83.5424 46.6811 84.04L66.1811 114.54C66.3678 114.832 66.5714 115.107 66.7898 115.364L68.1811 117.54C68.3728 117.84 68.5822 118.121 68.8072 118.384C71.3255 122.082 76.3479 122.643 79.6259 120.067C80.6866 119.482 81.6206 118.632 82.3189 117.54L83.7102 115.364C83.9286 115.107 84.1322 114.832 84.3189 114.54L103.819 84.04C104.39 83.1461 104.749 82.1768 104.907 81.192Z"
              fill="#172A46"
            />
          </svg>
        </div>
        <div id="context" style={{ marginTop: "40px", fontSize: "20px" }}>
          도착입니다.
        </div>
      </div>
      <div className="footer">
        <div className="Informations">
          남은 시간 &emsp; &emsp; &nbsp;&nbsp;0분
          <br />
          남은 거리 &emsp; &emsp; 0km
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

export default Pg6;
