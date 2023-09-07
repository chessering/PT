import "../components/WalkNavigation.css";
import * as TTS from "./TTS";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Pg4() {
  useEffect(() => {
    TTS.testFun("좌측 횡단보도를 건넌 후 보행자도로를 따라 26m 이동");
    setTimeout(function () {
      navigate("/Pg5");
    }, 5000);
  });
  const navigate = useNavigate();
  return (
    <div className="WalkNavigation">
      <div className="Sign" id="Sign">
        <div id="img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="137"
            height="112"
            viewBox="0 0 137 112"
            fill="none"
          >
            <path
              d="M5.00324 0C1.65849 0 -0.743123 3.22052 0.210978 6.42627L30.5681 108.426C31.1991 110.546 33.1483 112 35.3604 112H41.5936C44.9383 112 47.3399 108.779 46.3858 105.574L16.0287 3.57373C15.3977 1.45355 13.4485 0 11.2364 0H5.00324Z"
              fill="#172A46"
            />
            <path
              d="M35.0032 0C31.6585 0 29.2569 3.22052 30.211 6.42627L60.5681 108.426C61.1991 110.546 63.1483 112 65.3604 112H71.5936C74.9383 112 77.3399 108.779 76.3858 105.574L46.0287 3.57373C45.3977 1.45355 43.4485 0 41.2364 0H35.0032Z"
              fill="#172A46"
            />
            <path
              d="M60.211 6.42627C59.2569 3.22052 61.6585 0 65.0032 0H71.2364C73.4485 0 75.3977 1.45355 76.0287 3.57373L106.386 105.574C107.34 108.779 104.938 112 101.594 112H95.3604C93.1483 112 91.1991 110.546 90.5681 108.426L60.211 6.42627Z"
              fill="#172A46"
            />
            <path
              d="M95.0032 0C91.6585 0 89.2569 3.22052 90.211 6.42627L120.568 108.426C121.199 110.546 123.148 112 125.36 112H131.594C134.938 112 137.34 108.779 136.386 105.574L106.029 3.57373C105.398 1.45355 103.449 0 101.236 0H95.0032Z"
              fill="#172A46"
            />
          </svg>
        </div>
        <div id="context" style={{ marginTop: "40px", fontSize: "20px" }}>
          좌측 횡단보도를 건넌 후
          <br />
          보행자도로를 따라 26m 이동
        </div>
      </div>
      <div className="footer">
        <div className="Informations">
          남은 시간 &emsp; &emsp; &nbsp;&nbsp;4분
          <br />
          남은 거리 &emsp; &emsp; 0.4km
          <br />
          횡단보도 수 &emsp; &nbsp; &nbsp;1개
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

export default Pg4;
