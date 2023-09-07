import "../components/WalkNavigation.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as TTS from "./TTS";

function WalkNavigation() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const navigate = useNavigate();
  var navi = 1; // 횡단보도:0, 직진:1, 좌회전:2, 우회전:3, 계단:4, 경사로:5
  const location = useLocation();
  var features = location.state.features;
  function getDistance(lat1, lng1, lat2, lng2) {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }

    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  async function getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
            resolve([position.coords.latitude, position.coords.longitude]);
          },
          function (error) {
            console.error(error);
            reject(error);
          }
        );
      } else {
        console.log("GPS를 지원하지 않습니다");
        reject("GPS를 지원하지 않습니다");
      }
    });
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getLocation();
        // 이제 여기에서 lat 및 long 상태를 사용할 수 있습니다.
        setLat(result[0]);
        setLong(result[1]);
      } catch (error) {
        // 오류 처리
        console.error("오류 발생:", error);
      }
    }
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
    console.log(features);
    // setInterval(() => {
    //   getLocation();
    // }, 10000);
  }, [lat, long]);
  // if (lat == 0 || long == 0) {
  //   return null;
  // }

  for (let i = 0; i < features.length; i += 2) {
    TTS.testFun(`${features[i].properties.description}하세요.`);
    console.log(features[0].properties.description);
    console.log(
      getDistance(
        lat,
        long,
        features[2].geometry.coordinates[1],
        features[2].geometry.coordinates[0]
      )
    );
    while (1) {
      if (lat != 0 && i < features.length - 2) {
        if (
          getDistance(
            lat,
            long,
            features[i + 2].geometry.coordinates[1],
            features[i + 2].geometry.coordinates[0]
          ) <= 0.005
        ) {
          if (features[i + 2].properties.facilityType == "15") {
            navi = 0;
          } else if (features[i + 2].properties.turnType == "11") {
            navi = 1;
          } else if (
            features[i + 2].properties.turnType == "12" ||
            features[i + 2].properties.turnType == "16" ||
            features[i + 2].properties.turnType == "17"
          ) {
            navi = 2;
          } else if (
            features[i + 2].properties.turnType == "13" ||
            features[i + 2].properties.turnType == "18" ||
            features[i + 2].properties.turnType == "19"
          ) {
            navi = 3;
          } else if (
            features[i + 2].properties.turnType == "127" ||
            features[i + 2].properties.turnType == "129"
          ) {
            navi = 4;
          } else if (features[i + 2].properties.turnType == "128") {
            navi = 5;
          } else {
            navi = 1;
          }
          break;
        }
      }
      setTimeout(() => console.log("30초 후에 실행됨"), 30000);
    }
  }
  return (
    <div className="WalkNavigation">
      <div className="Sign"></div>
      <div className="footer">
        <div className="Informations">
          남은 시간 &emsp; &emsp; &nbsp;&nbsp;분
          <br />
          남은 거리 &emsp; &emsp; &emsp;m
          <br />
          횡단보도 수 &emsp; &nbsp; &nbsp;-개
          <br />
        </div>
        <div className="Buttons">
          <button className="UpdateBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 100 100"
              fill="none"
            >
              <rect width="100" height="100" rx="23" fill="#172A46" />
              <path
                d="M75.7287 50C75.7287 43.6161 73.632 37.4106 69.7639 32.3459C65.8959 27.2812 60.4725 23.6404 54.335 21.9882C48.1975 20.3359 41.6888 20.7645 35.8185 23.2075C29.9481 25.6505 25.0441 29.9714 21.8671 35.5C18.6901 41.0286 17.4176 47.456 18.247 53.7852C19.0763 60.1145 21.9612 65.992 26.4542 70.5061C30.9472 75.0202 36.7971 77.9186 43.0968 78.7519C49.3965 79.5851 55.7938 78.3066 61.2965 75.1147M83 28.4885L77.2881 49.9058C77.079 50.6899 76.1034 50.9526 75.5321 50.3786L59.9269 34.7"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className="StopBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 100 100"
              fill="none"
            >
              <rect width="100" height="100" rx="23" fill="#172A46" />
              <path
                d="M32 21V79M69 21V79"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className="ReportBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="90"
              viewBox="0 0 100 100"
              fill="none"
            >
              <rect width="100" height="100" rx="23" fill="#172A46" />
              <path
                d="M49.9005 31.1039V20M64.3284 35.0708L70 25.4545M35.6716 35.0708L30 25.4545M69.801 80V75.7143C69.801 73.5625 68.019 71.8182 65.8209 71.8182H33.9801C31.782 71.8182 30 73.5625 30 75.7143V80H69.801ZM63.4328 71.8182V55.4545C63.4328 48.9993 58.087 43.7662 51.4925 43.7662H47.9104C41.316 43.7662 35.9702 48.9993 35.9702 55.4545V71.8182H63.4328Z"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalkNavigation;
