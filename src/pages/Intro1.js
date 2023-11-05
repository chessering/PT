import "../components/page.css";
import * as TTS from "./TTS";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Intro1() {
  const navigate = useNavigate();
  var AudioContext;
  var audioContext;
  useEffect(() => {
    function permiss() {
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
    permiss();
  });
  function Audio() {
    TTS.testFun("안녕하세요. 시각장애인을 위한 길안내 서비스 새로입니다.");
    setTimeout(function () {
      navigate("/Intro2");
    }, 7000);
  }

  return (
    <div className="startPage" onClick={Audio}>
      <p
        style={{
          textAlign: "center",
          fontFamily: "EliceDigitalBaeum-Bd",
          fontSize: "35px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          marginTop: "350px",
        }}
      >
        시각 장애인을 위한
        <br />길 안내 서비스입니다
      </p>
    </div>
  );
}

export default Intro1;
