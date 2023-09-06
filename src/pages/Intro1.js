import "../components/page.css";
import * as TTS from "./TTS";
import { useNavigate } from "react-router-dom";
function Intro1() {
  // useEffect(() => {
  //   let audio = new Audio("../Audio/intro1.mp3");
  //   audio.muted = true;
  //   audio.play();
  // });
  const navigate = useNavigate();
  function MovePage() {
    setTimeout(function () {
      navigate("/Intro2");
    }, 5000);
  }
  return (
    <div
      className="startPage"
      onClick={() => {
        TTS.testFun("안녕하세요. 시각장애인을 위한 길안내 서비스 새로입니다.");
        MovePage();
      }}
    >
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
