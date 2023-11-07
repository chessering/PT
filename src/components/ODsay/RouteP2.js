import "./TransportNavigation.css";
import * as TTS from "../../pages/TTS";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RouteP2() {

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
    TTS.testFun("소요산행 열차가 곧 도착합니다");
    setTimeout(function () {
      navigate("/RouteP3");
    }, 6000);
  }, []);


  const navigate = useNavigate();
  return (
    <div className="TransportNavigation">
      <div className="Sign" id="Sign">
        <div id="img">
            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="152" viewBox="0 0 130 152" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 15C0 6.71573 6.71573 0 15 0H115C123.284 0 130 6.71573 130 15V115C130 122.469 124.542 128.662 117.396 129.81L125.331 143.553C126.712 145.944 125.892 149.002 123.501 150.383C121.109 151.763 118.051 150.944 116.671 148.553L113.465 143H17.0837L13.331 149.5C11.9502 151.891 8.8923 152.711 6.50083 151.33C4.10937 149.949 3.29 146.891 4.67071 144.5L13.1103 129.882C5.7181 128.953 0 122.644 0 115V15ZM24.5605 130C24.4922 130.151 24.4157 130.301 24.331 130.447L22.8572 133H107.691L105.959 130H24.5605ZM110.073 122C110.023 121.999 109.972 121.999 109.922 122C104.435 121.958 100 117.497 100 112C100 106.477 104.477 102 110 102C115.523 102 120 106.477 120 112C120 117.498 115.562 121.96 110.073 122ZM30 112C30 117.523 25.5228 122 20 122C14.4772 122 10 117.523 10 112C10 106.477 14.4772 102 20 102C25.5228 102 30 106.477 30 112ZM10 33C10 27.4772 14.4772 23 20 23H110C115.523 23 120 27.4772 120 33V83C120 88.5229 115.523 93 110 93H20C14.4771 93 10 88.5229 10 83V33Z" fill="#172A46"/>
            </svg>
        </div>
        <div style={{
            display:"flex",
            justifyContent: "space-between",
        }}>
            <div
          id="context"
          style={{
            marginTop: "40px",
            fontSize: "30px",
            color:"#172A46",
            fontWeight: "600",
            fontFamily: "EliceDigitalBaeum-Bd",
            marginRight: "50px",
            verticalAlign: "center",
          }}
        >
          소요산행
        </div>
        <div style={{
            marginTop: "50px",
            fontSize: "18px",
            color:"#FF0000",
            fontFamily: "EliceDigitalBaeum-Bd",
            verticalAlign: "center",
        }}>곧 도착</div>
        </div>
        
      </div>
      <div className="footer">
        <div className="Informations">
          남은 시간 &emsp; &emsp; &nbsp;&nbsp;20분
          <br />
          남은 거리 &emsp; &emsp; 8.5km
          <br />
          횡단보도 수 &emsp; &nbsp; &nbsp; 0개
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

export default RouteP2;
