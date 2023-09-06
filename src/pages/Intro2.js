import "../components/page.css";
import * as TTS from "./TTS";
import { useNavigate } from "react-router-dom";

function Intro2() {
  const navigate = useNavigate();
  function MovePage() {
    setTimeout(function () {
      navigate("/Intro3");
    }, 6000);
  }
  return (
    <div
      className="startPage"
      onClick={() => {
        TTS.testFun("정해야함");
        MovePage();
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontFamily: "EliceDigitalBaeum-Bd",
          fontSize: "35px",
          fontStyle: "normal",
          fontWeight: "200",
          lineHeight: "normal",
          marginTop: "350px",
        }}
      >
        길찾기 및 점자블럭
        <br />
        파손 신고 기능을
        <br />
        이용할 수 있습니다
      </p>
    </div>
  );
}
export default Intro2;
