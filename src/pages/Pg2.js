import "../components/WalkNavigation.css";
import * as TTS from "./TTS";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Pg2() {
  useEffect(() => {
    TTS.testFun("경희대학교 교시탑에서 우회전 후 보행자도로를 따라 17m 이동");
    setTimeout(function () {
      navigate("/Pg3");
    }, 5000);
  });
  const navigate = useNavigate();
  return (
    <div className="WalkNavigation">
      <div className="Sign" id="Sign">
        <div id="img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="146"
            height="134"
            viewBox="0 0 146 134"
            fill="none"
          >
            <path
              d="M143.303 61.3033C146.232 58.3744 146.232 53.6256 143.303 50.6967L95.5736 2.96699C92.6447 0.0380592 87.8959 0.0380592 84.967 2.96699C82.0381 5.89592 82.0381 10.6447 84.967 13.5736L127.393 56L84.967 98.4264C82.0381 101.355 82.0381 106.104 84.967 109.033C87.8959 111.962 92.6447 111.962 95.5736 109.033L143.303 61.3033ZM0.5 126C0.5 130.142 3.85786 133.5 8 133.5C12.1421 133.5 15.5 130.142 15.5 126H0.5ZM23 63.5H138V48.5H23V63.5ZM15.5 126V71H0.5V126H15.5ZM23 48.5C10.5736 48.5 0.5 58.5736 0.5 71H15.5C15.5 66.8579 18.8579 63.5 23 63.5V48.5Z"
              fill="#172A46"
            />
          </svg>
        </div>
        <div id="context" style={{ marginTop: "40px", fontSize: "20px" }}>
          경희대학교 교시탑에서 우회전 후
          <br />
          보행자도로를 따라 17m 이동
        </div>
      </div>
      <div className="footer">
        <div className="Informations">
          남은 시간 &emsp; &emsp; &nbsp;&nbsp;9분
          <br />
          남은 거리 &emsp; &emsp; 0.8km
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

export default Pg2;
