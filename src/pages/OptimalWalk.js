import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../components/OptimalWalk.css";
import * as TTS from "./TTS";
import axios from "axios";

function OptimalWalk() {
  let inform;
  var distance = 0;
  var time = 0;
  var board = 0;
  const navigate = useNavigate();
  const location = useLocation();
  const startLat = location.state.startLat;
  const startLon = location.state.startLon;
  const endLat = location.state.endLat;
  const endLon = location.state.endLon;
  const startName = location.state.startName;
  const endName = location.state.endName;
  var features = null;

  let clickCount1 = 0;
  function handleClickCountEvent1() {
    clickCount1 = clickCount1 + 1;
    if (clickCount1 == 1) {
      TTS.testFun("최소 시간 길 찾기 버튼입니다.");
    } else if (clickCount1 == 2) {
      axios
        .get(
          `http://safe-roadmap-prod-env.eba-56tfx8tr.ap-northeast-2.elasticbeanstalk.com/pathfinding/pedestrain?startX=${startLon}&startY=${startLat}&endX=${endLon}&endY=${endLat}&startName=${startName}&endName=${endName}&type=${0}`
        )
        .then((response) => {
          inform = response.data;
          console.log(inform);
          distance = response.data.result.currentTotalDistance;
          time = response.data.result.currentTotalTime;
          board = response.data.result.boardCount;
          features = response.data.result.finalResult.features;
          navigate("/Map", {
            state: {
              startLat: startLat,
              startLon: startLon,
              endLat: endLat,
              endLon: endLon,
              type: 0,
              currentTotalDistance: distance,
              currentTotalTime: time,
              boardCount: board,
              features: features,
            },
          });
        })
        .catch((error) => console.log(error));
    }
  }
  let clickCount2 = 0;
  function handleClickCountEvent2() {
    clickCount2 = clickCount2 + 1;
    if (clickCount2 == 1) {
      TTS.testFun("큰길 우선 길 찾기 버튼입니다.");
    } else if (clickCount2 == 2) {
      axios
        .get(
          `http://safe-roadmap-prod-env.eba-56tfx8tr.ap-northeast-2.elasticbeanstalk.com/pathfinding/pedestrain?startX=${startLon}&startY=${startLat}&endX=${endLon}&endY=${endLat}&startName=${startName}&endName=${endName}&type=${1}`
        )
        .then((response) => {
          inform = response.data;
          distance = response.data.result.currentTotalDistance;
          time = response.data.result.currentTotalTime;
          board = response.data.result.boardCount;
          features = response.data.result.finalResult.features;
          navigate("/Map", {
            state: {
              startLat: startLat,
              startLon: startLon,
              endLat: endLat,
              endLon: endLon,
              type: 1,
              currentTotalDistance: distance,
              currentTotalTime: time,
              boardCount: board,
              features: features,
            },
          });
        })
        .catch((error) => console.log(error));
    }
  }
  let clickCount3 = 0;
  function handleClickCountEvent3() {
    clickCount3 = clickCount3 + 1;
    if (clickCount3 == 1) {
      TTS.testFun("안전 우선 길 찾기 버튼입니다.");
    } else if (clickCount3 == 2) {
      axios
        .get(
          `http://safe-roadmap-prod-env.eba-56tfx8tr.ap-northeast-2.elasticbeanstalk.com/pathfinding/pedestrain?startX=${startLon}&startY=${startLat}&endX=${endLon}&endY=${endLat}&startName=${startName}&endName=${endName}&type=${2}`
        )
        .then((response) => {
          inform = response.data;
          distance = response.data.result.currentTotalDistance;
          time = response.data.result.currentTotalTime;
          board = response.data.result.boardCount;
          features = response.data.result.finalResult.features;
          navigate("/Map", {
            state: {
              startLat: startLat,
              startLon: startLon,
              endLat: endLat,
              endLon: endLon,
              type: 2,
              currentTotalDistance: distance,
              currentTotalTime: time,
              boardCount: board,
              features: features,
            },
          });
        })
        .catch((error) => console.log(error));
    }
  }
  let clickCount4 = 0;
  function handleClickCountEvent4() {
    clickCount4 = clickCount4 + 1;
    if (clickCount4 == 1) {
      TTS.testFun("최소 도보 길 찾기 버튼입니다.");
    } else if (clickCount4 == 2) {
      axios
        .get(
          `http://safe-roadmap-prod-env.eba-56tfx8tr.ap-northeast-2.elasticbeanstalk.com/pathfinding/pedestrain?startX=${startLon}&startY=${startLat}&endX=${endLon}&endY=${endLat}&startName=${startName}&endName=${endName}&type=${3}`
        )
        .then((response) => {
          inform = response.data;
          distance = response.data.result.currentTotalDistance;
          time = response.data.result.currentTotalTime;
          board = response.data.result.boardCount;
          features = response.data.result.finalResult.features;
          navigate("/Map", {
            state: {
              startLat: startLat,
              startLon: startLon,
              endLat: endLat,
              endLon: endLon,
              type: 3,
              currentTotalDistance: distance,
              currentTotalTime: time,
              boardCount: board,
              features: features,
            },
          });
        })
        .catch((error) => console.log(error));
    }
  }
  return (
    <div className="OptimalWalk">
      <div className="Buttons">
        <button
          className="MinTimeBtn"
          onClick={() => {
            handleClickCountEvent1();
          }}
        >
          최소
          <br />
          시간
        </button>
        <button
          className="MainStreetBtn"
          onClick={() => {
            handleClickCountEvent2();
          }}
        >
          큰길
          <br />
          우선
        </button>
        <br />
        <button
          className="SafeBtn"
          onClick={() => {
            handleClickCountEvent3();
          }}
        >
          안전
          <br />
          우선
        </button>
        <button
          className="MinWalkBtn"
          onClick={() => {
            handleClickCountEvent4();
          }}
        >
          최소
          <br />
          도보
        </button>
      </div>
    </div>
  );
}

export default OptimalWalk;
