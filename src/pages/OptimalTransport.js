import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../components/OptimalTransport.css";
import * as TTS from "./TTS";
import axios from "axios";

function OptimalTransport() {
  const navigate = useNavigate();
  const location = useLocation();
  var inform;
  const startName = location.state.startName;
  const endName = location.state.endName;
  const startLat = location.state.startLat;
  const startLon = location.state.startLon;
  const endLat = location.state.endLat;
  const endLon = location.state.endLon;
  console.log(location.state);

  let clickCount1 = 0;
  function handleClickCountEvent1() {
    clickCount1 = clickCount1 + 1;
    if (clickCount1 === 1) {
      TTS.testFun("최소 시간 길 찾기 버튼입니다.");
    } else if (clickCount1 === 2) {
      // axios
      //   .get(
      //     `https://safe-roadmap.shop/pathfinding/transport?SX=${startLon}&SY=${startLat}&EX=${endLon}&EY=${endLat}&type=${0}&SName=${startName}&EName${endName}`
      //   )
      //   .then((response) => {
      //     inform = response.data.result;
      //     console.log(inform);
      //     navigate("/RouteP1", {
      //       state: {
      //         startLat: startLat,
      //         startLon: startLon,
      //         endLat: endLat,
      //         endLon: endLon,
      //         type: 1,
      //         inform : inform,
      //       },
      //     });
      //   })
      //   .catch((error) => console.log(error));
      navigate('/RouteP1');
    }
  }
  
  let clickCount2 = 0;
  function handleClickCountEvent2() {
    clickCount2 = clickCount2 + 1;
    if (clickCount2 == 1) {
      TTS.testFun("최소 환승 길 찾기 버튼입니다.");
    } else if (clickCount2 == 2) {
      // axios
      //   .get(
      //     `https://safe-roadmap.shop/pathfinding/transport?SX=${startLon}&SY=${startLat}&EX=${endLon}&EY=${endLat}&type=${1}&SName=%EC%B6%9C%EB%B0%9C&EName=%EB%8F%84%EC%B0%A9`
      //   )
      //   .then((response) => {
      //     inform = response.data.result;
      //     navigate("/RouteP1", {
      //       state: {
      //         startLat: startLat,
      //         startLon: startLon,
      //         endLat: endLat,
      //         endLon: endLon,
      //         type: 1,
      //         inform : inform,
      //       },
      //     });
      //   })
      //   .catch((error) => console.log(error));
      navigate('/RouteP1');
    }
  }
  let clickCount3 = 0;
  function handleClickCountEvent3() {
    clickCount3 = clickCount3 + 1;
    if (clickCount3 == 1) {
      TTS.testFun("안전 우선 길 찾기 버튼입니다.");
    } else if (clickCount3 == 2) {
      // axios
      //   .get(
      //     `https://safe-roadmap.shop/pathfinding/transport?SX=${startLon}&SY=${startLat}&EX=${endLon}&EY=${endLat}&type=${2}&SName=%EC%B6%9C%EB%B0%9C&EName=%EB%8F%84%EC%B0%A9`
      //   )
      //   .then((response) => {
      //     inform = response.data.result;
      //     navigate("/RouteP1", {
      //       state: {
      //         startLat: startLat,
      //         startLon: startLon,
      //         endLat: endLat,
      //         endLon: endLon,
      //         type: 2,
      //         inform : inform,
      //       },
      //     });
      //   })
      //   .catch((error) => console.log(error));
      navigate('/RouteP1');
    }
  }
  let clickCount4 = 0;
  function handleClickCountEvent4() {
    clickCount4 = clickCount4 + 1;
    if (clickCount4 == 1) {
      TTS.testFun("최소 도보 길 찾기 버튼입니다.");
    } else if (clickCount4 == 2) {
      // axios
      //   .get(
      //     `https://safe-roadmap.shop/pathfinding/transport?SX=${startLon}&SY=${startLat}&EX=${endLon}&EY=${endLat}&type=${3}&SName=%EC%B6%9C%EB%B0%9C&EName=%EB%8F%84%EC%B0%A9`
      //   )
      //   .then((response) => {
      //     inform = response.data.result;
      //     navigate("/RouteP1", {
      //       state: {
      //         startLat: startLat,
      //         startLon: startLon,
      //         endLat: endLat,
      //         endLon: endLon,
      //         type: 3,
      //         inform : inform,
      //       },
      //     });
      //   })
      //   .catch((error) => console.log(error));
      navigate('/RouteP1');
    }
  }

  return (
    <div className="OptimalTransport">
      <div className="Buttons">
        <button className="MinTimeBtn" onClick = {() => {handleClickCountEvent1()}}>
          최소
          <br />
          시간
        </button>
        <button className="MinTransBtn" onClick = {() => {handleClickCountEvent2()}}>
          최소
          <br />
          환승
        </button>
        <br />
        <button className="SafeBtn" onClick = {() => {handleClickCountEvent3()}}>
          안전<br/>우선
        </button>
        <button className="MinWalkBtn" onClick = {() => {handleClickCountEvent4()}}>
          최소
          <br />
          도보
        </button>
      </div>
    </div>
  );
}

export default OptimalTransport;
