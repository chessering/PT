import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../components/ChooseVehicle.css";

function ChooseVehicle() {
  const navigate = useNavigate();
  const location = useLocation();
  const startLat = location.state.startLat;
  const startLon = location.state.startLon;
  const endLat = location.state.endLat;
  const endLon = location.state.endLon;

  return (
    <div className="ChooseVehicle">
      <div className="Buttons">
        <button className="WalkBtn" onClick={() => navigate('/OptimalWalk')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="170"
            viewBox="0 0 137 112"
            fill="none"
          >
            <path
              d="M5.00324 0C1.65849 0 -0.743123 3.22052 0.210978 6.42627L30.5681 108.426C31.1991 110.546 33.1483 112 35.3604 112H41.5936C44.9383 112 47.3399 108.779 46.3858 105.574L16.0287 3.57373C15.3977 1.45355 13.4485 0 11.2364 0H5.00324Z"
              fill="#172A46"
            />
            <path
              d="M35.0032 0C31.6585 0 29.2569 3.22052 30.211 6.42627L60.5681 108.426C61.1991 110.546 63.1483 112 65.3604 112H71.5936C74.9383 112 77.3399 108.779 76.3858 105.574L46.0287 3.57373C45.3977 1.45355 43.4485 0 41.2364 0H35.0032Z"
              fill="#172A46"
            />
            <path
              d="M60.211 6.42627C59.2569 3.22052 61.6585 0 65.0032 0H71.2364C73.4485 0 75.3977 1.45355 76.0287 3.57373L106.386 105.574C107.34 108.779 104.938 112 101.594 112H95.3604C93.1483 112 91.1991 110.546 90.5681 108.426L60.211 6.42627Z"
              fill="#172A46"
            />
            <path
              d="M95.0032 0C91.6585 0 89.2569 3.22052 90.211 6.42627L120.568 108.426C121.199 110.546 123.148 112 125.36 112H131.594C134.938 112 137.34 108.779 136.386 105.574L106.029 3.57373C105.398 1.45355 103.449 0 101.236 0H95.0032Z"
              fill="#172A46"
            />
          </svg>
          <br />
          보행
        </button>
        <button className="PublicTransportBtn" onClick={() => navigate('/OptimalTransport', {
          state: {
            startLat: startLat,
            startLon: startLon,
            endLat: endLat,
            endLon: endLon,
          }
        })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="180"
            viewBox="0 0 130 160"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 15C0 6.71573 6.71573 0 15 0H115C123.284 0 130 6.71573 130 15V115C130 122.469 124.542 128.662 117.396 129.81L125.331 143.553C126.712 145.944 125.892 149.002 123.501 150.383C121.109 151.763 118.051 150.944 116.671 148.553L113.465 143H17.0837L13.331 149.5C11.9502 151.891 8.8923 152.711 6.50083 151.33C4.10937 149.949 3.29 146.891 4.67071 144.5L13.1103 129.882C5.7181 128.953 0 122.644 0 115V15ZM24.5605 130C24.4922 130.151 24.4157 130.301 24.331 130.447L22.8572 133H107.691L105.959 130H24.5605ZM110.073 122C110.023 121.999 109.972 121.999 109.922 122C104.435 121.958 100 117.497 100 112C100 106.477 104.477 102 110 102C115.523 102 120 106.477 120 112C120 117.498 115.562 121.96 110.073 122ZM30 112C30 117.523 25.5228 122 20 122C14.4772 122 10 117.523 10 112C10 106.477 14.4772 102 20 102C25.5228 102 30 106.477 30 112ZM10 33C10 27.4772 14.4772 23 20 23H110C115.523 23 120 27.4772 120 33V83C120 88.5229 115.523 93 110 93H20C14.4771 93 10 88.5229 10 83V33Z"
              fill="#172A46"
            />
          </svg>
          <br />
          대중교통
        </button>
      </div>
    </div>
  );
}

export default ChooseVehicle;
