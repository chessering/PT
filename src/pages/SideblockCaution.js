import "../components/Caution.css";
import * as TTS from "./TTS";

function SideblockCaution() {

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
        TTS.testFun("보도블록이 파손되었습니다");
        setTimeout(function () {
          navigate("/TakePhotoAgain");
        }, 3000);
      }, []);


    
    return(
        <div className="Caution">
            <div className="CautionBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 170 170" fill="none">
                <path d="M72.0096 22.5C77.7831 12.5 92.2169 12.5 97.9904 22.5L145.622 105C151.395 115 144.178 127.5 132.631 127.5H37.3686C25.8216 127.5 18.6047 115 24.3782 105L72.0096 22.5Z" stroke="#FF0000" stroke-width="10"/>
                <path d="M86 48V83" stroke="#FF0000" stroke-width="10" stroke-linecap="round"/>
                <circle cx="86" cy="102" r="5" fill="#FF0000"/>
                </svg>
                <div>
                    보도블록이 
                    <br/>
                    파손되었습니다
                </div>
            </div>
        </div>
    );
}
export default SideblockCaution;