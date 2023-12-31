import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "../components/LoadingPage.css"
import * as TTS from "../pages/TTS";

function LoadingPage() {

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state);
    const name = location.state.name;
    const photoId = location.state.photoId;
    console.log(name);
    console.log(photoId);


    useEffect(() => {
      var AudioContext;
      var audioContext;
      async function dd() {
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
      TTS.testFun("사진을 분석 중입니다. 잠시만 기다려주세요.");
      setTimeout(function () {
        navigate("/BrailleBlockCaution");
      }, 9000);
    }, []);
    
    
    return(
      <div className="LoadingPage">
        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="90" viewBox="0 0 86 90" fill="none">
        <path d="M40.0123 2.84089C40.3433 -0.796715 45.6567 -0.796692 45.9877 2.84091L47.6963 21.6229C47.9353 24.2497 51.204 25.3117 52.9413 23.3271L65.3634 9.13646C67.7693 6.3881 72.068 9.5113 70.1976 12.6487L60.5401 28.848C59.1895 31.1135 61.2097 33.894 63.7817 33.3096L82.1725 29.1307C85.7343 28.3213 87.3762 33.3747 84.0189 34.8136L66.6842 42.2426C64.2598 43.2815 64.2598 46.7185 66.6842 47.7574L84.0189 55.1865C87.3762 56.6253 85.7343 61.6787 82.1724 60.8693L63.7817 56.6904C61.2096 56.106 59.1895 58.8865 60.5401 61.152L70.1975 77.3513C72.0679 80.4887 67.7693 83.6119 65.3634 80.8635L52.9413 66.6729C51.204 64.6883 47.9353 65.7503 47.6963 68.3771L45.9877 87.1591C45.6567 90.7967 40.3433 90.7967 40.0123 87.1591L38.3037 68.3771C38.0647 65.7503 34.796 64.6883 33.0587 66.6729L20.6366 80.8635C18.2307 83.6119 13.932 80.4887 15.8024 77.3513L25.4599 61.152C26.8105 58.8865 24.7903 56.106 22.2183 56.6904L3.82753 60.8693C0.265709 61.6787 -1.37622 56.6253 1.98108 55.1864L19.3158 47.7574C21.7402 46.7185 21.7402 43.2815 19.3158 42.2426L1.98106 34.8135C-1.37624 33.3747 0.265728 28.3213 3.82756 29.1307L22.2183 33.3096C24.7904 33.894 26.8105 31.1135 25.4599 28.848L15.8025 12.6487C13.9321 9.51132 18.2307 6.38811 20.6366 9.13649L33.0587 23.3271C34.796 25.3117 38.0647 24.2497 38.3037 21.6229L40.0123 2.84089Z" fill="white"/>
        </svg>
        <div>
          사진을 분석 중입니다
          <br/>
          잠시만 기다려주세요
        </div>
      </div>  
    );
}
export default LoadingPage;