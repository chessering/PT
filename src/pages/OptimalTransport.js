import React from "react";
import "../components/OptimalTransport.css";

function OptimalTransport() {
  return (
    <div className="OptimalTransport">
      <div className="Buttons">
        <button className="MinTimeBtn">
          최소
          <br />
          시간
        </button>
        <button className="MainStreetBtn">
          큰길
          <br />
          우선
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
