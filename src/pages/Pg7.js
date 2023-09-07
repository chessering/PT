import "../components/page.css";
import * as TTS from "./TTS";
import { useEffect } from "react";
function Pg7() {
  useEffect(() => {
    TTS.testFun("안내를 종료합니다.");
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
        목적지에
        <br />
        도착했습니다.
        <br />
        안내를 종료합니다.
      </p>
    </div>
  );
}
export default Pg7;
