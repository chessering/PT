import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../components/OptimalTransport.css";

function OptimalTransport() {
  const navigate = useNavigate();
  const location = useLocation();
  const startName = location.state.startName;
  const endName = location.state.endName;
  const startLat = location.state.startLat;
  const startLon = location.state.startLon;
  const endLat = location.state.endLat;
  const endLon = location.state.endLon;

  console.log(startLat);
  return (
    <div className="OptimalTransport">
      <div className="Buttons">
        <button className="MinTimeBtn" onClick = {() => navigate('/TransportMap', {
        state: {
          type : 0,
          startName: startName,
          endName: endName,
          startLat: startLat,
          startLon: startLon,
          endLat: endLat,
          endLon: endLon,
          }}
        )}>
          최소
          <br />
          시간
        </button>
        <button className="MinTransBtn" onClick = {() => navigate('/TransportMap', {
          state: {
          type : 1,
          startName: startName,
          endName: endName,
          startLat: startLat,
          startLon: startLon,
          endLat: endLat,
          endLon: endLon,
          }}
        )}>
          최소
          <br />
          환승
        </button>
        <br />
        <button className="SafeBtn" onClick = {() => navigate('/TransportMap', {
        state: {
          type : 2,
          startName: startName,
          endName: endName,
          startLat: startLat,
          startLon: startLon,
          endLat: endLat,
          endLon: endLon,
          }}
        )}>
          안전<br/>우선
        </button>
        <button className="MinWalkBtn" onClick = {() => navigate('/TransportMap', {
        state: {
          type : 3,
          startName: startName,
          endName: endName,
          startLat: startLat,
          startLon: startLon,
          endLat: endLat,
          endLon: endLon,
          }}
        )}>
          최소
          <br />
          도보
        </button>
      </div>
    </div>
  );
}

export default OptimalTransport;
