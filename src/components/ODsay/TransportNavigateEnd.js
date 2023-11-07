import "./TransportNavigation.css"
import * as TTS from "../../pages/TTS";
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function TransportNavigateEnd() {

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
        TTS.testFun("목적지에 도착하였습니다. 안내를 종료합니다.");
      }, []);

  const navigate = useNavigate();
  return (
    <div className="End" onClick={() => navigate("/FindRoute")}>
          <p>
              목적지에
              <br/>
              도착했습니다
              <br/>
              안내를 종료합니다
          </p>
    </div>
  );
}

export default TransportNavigateEnd;
