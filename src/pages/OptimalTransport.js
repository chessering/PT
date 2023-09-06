import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../components/OptimalTransport.css";

function OptimalTransport() {
  const navigate = useNavigate();
  const location = useLocation();
  const startLat = location.state.startLat;
  const startLon = location.state.startLon;
  const endLat = location.state.endLat;
  const endLon = location.state.endLon;

  console.log(startLat);
  return (
    <div className="OptimalTransport">
      <div className="Buttons" onClick = {() => navigate('/TransportMap', {
        state: {
          startLat: startLat,
          startLon: startLon,
          endLat: endLat,
          endLon: endLon,
        }}
      )}>
        <button className="MinTimeBtn">
          최소
          <br />
          시간
        </button>
        <button className="MinTransBtn">
          최소
          <br />
          환승
        </button>
        <br />
        <button className="SafeBtn">
          안전
          <br />
          우선
        </button>
        <button className="MinWalkBtn">
          최소
          <br />
          도보
        </button>
      </div>
    </div>
  );
}

export default OptimalTransport;
