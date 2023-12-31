import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "../components/ReportComplete.css";
import * as TTS from "./TTS";
function ReportComplete() {
  const navigate = useNavigate();

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
    TTS.testFun("신고가 접수되었습니다. 감사합니다.");
    setTimeout(function () {
      navigate("/AdditionalReport");
    }, 6000);
  }, []); 


  return (
    <div className="ReportComplete">
      <div className="Mark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="155"
          height="181"
          viewBox="0 0 155 181"
          fill="none"
        >
          <path
            d="M76.1072 0C80.2493 0 83.6072 3.35786 83.6072 7.5V37.1104C83.6072 41.2525 80.2493 44.6104 76.1072 44.6104C71.9651 44.6104 68.6072 41.2525 68.6072 37.1104V7.5C68.6072 3.35786 71.9651 0 76.1072 0Z"
            fill="#F15555"
          />
          <path
            d="M12.1225 15.9555C15.4858 13.5379 20.1723 14.3045 22.5899 17.6679L41.0228 43.3113C43.4404 46.6746 42.6737 51.3611 39.3104 53.7787C35.947 56.1964 31.2606 55.4297 28.8429 52.0663L10.4101 26.423C7.99243 23.0596 8.75909 18.3732 12.1225 15.9555Z"
            fill="#F15555"
          />
          <path
            d="M141.878 15.9555C145.241 18.3732 146.008 23.0596 143.59 26.423L125.157 52.0663C122.739 55.4297 118.053 56.1964 114.69 53.7787C111.326 51.3611 110.56 46.6746 112.977 43.3113L131.41 17.6679C133.828 14.3045 138.514 13.5379 141.878 15.9555Z"
            fill="#F15555"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M132.5 145.5C144.926 145.5 155 155.574 155 168V171C155 176.247 150.747 180.5 145.5 180.5H9.5C4.25327 180.5 0 176.247 0 171V168C0 155.574 10.0736 145.5 22.5 145.5V105.5C22.5 75.1243 47.1243 50.5 77.5 50.5C107.876 50.5 132.5 75.1243 132.5 105.5V145.5ZM117.5 145.5V105.5C117.5 83.4086 99.5914 65.5 77.5 65.5C55.4086 65.5 37.5 83.4086 37.5 105.5V145.5H117.5ZM22.5 160.5C19.2345 160.5 16.4564 162.587 15.4268 165.5H139.573C138.544 162.587 135.766 160.5 132.5 160.5H22.5Z"
            fill="#F15555"
          />
        </svg>
        <div className="Text">
          신고가 접수되었습니다
          <br />
          감사합니다
        </div>
      </div>
    </div>
  );
}

export default ReportComplete;
