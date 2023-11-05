import "../components/page.css";
import * as TTS from "./TTS";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Intro2() {
  const navigate = useNavigate();
  useEffect(() => {
    TTS.testFun(
      "지금부터 음향 신호기를 이용한 안전한 길 찾기와 모두의 안전을 위한 신고 서비스를 도와드릴게요."
    );
    setTimeout(function () {
      navigate("/Intro3");
    }, 10000);
  });

  return (
    <div className="startPage">
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
