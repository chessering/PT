import "../components/WalkNavigation.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {testFun} from "./TTS.js";

function WalkNavigation() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [i, setI] = useState(0);
  const navigate = useNavigate();
  var navi = 1; // 횡단보도:0, 직진:1, 좌회전:2, 우회전:3, 계단:4, 경사로:5
  const location = useLocation();
  let blob = 0;
  var features = location.state.features;
  async function getDistance(lat1, lng1, lat2, lng2) {
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
  });
  // if (lat == 0 || long == 0) {
  //   return null;
  // }

async function setSign(i){
  let sel = "";
  console.log(i);
  blob = window.URL.revokeObjectURL(blob);
  blob = null;
  if (i == 0) {await testFun(`${features[i].properties.description}하세요.`);  setLat(features[2].geometry.coordinates[1]);
  setLong(features[2].geometry.coordinates[0]);}
  
  document.getElementById("context").innerText = `${features[i].properties.description}하세요.`;
  console.log(features[i].properties.description);
  const distance = await getDistance(
    lat,
    long,
    features[i+2].geometry.coordinates[1],
    features[i+2].geometry.coordinates[0]
  );
  setLat(features[i + 2].geometry.coordinates[1]);
  setLong(features[i + 2].geometry.coordinates[0]);
  console.log(distance);
  if (lat != 0 && i < features.length - 2) {
    if (
      distance <= 0.005
    ) {
      console.log("distance:",distance);
      if (features[i+2].properties.facilityType == "15") {
        sel = document.getElementById("img");
        sel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="137" height="112" viewBox="0 0 137 112" fill="none">
        <path d="M5.00324 0C1.65849 0 -0.743123 3.22052 0.210978 6.42627L30.5681 108.426C31.1991 110.546 33.1483 112 35.3604 112H41.5936C44.9383 112 47.3399 108.779 46.3858 105.574L16.0287 3.57373C15.3977 1.45355 13.4485 0 11.2364 0H5.00324Z" fill="#172A46"/>
        <path d="M35.0032 0C31.6585 0 29.2569 3.22052 30.211 6.42627L60.5681 108.426C61.1991 110.546 63.1483 112 65.3604 112H71.5936C74.9383 112 77.3399 108.779 76.3858 105.574L46.0287 3.57373C45.3977 1.45355 43.4485 0 41.2364 0H35.0032Z" fill="#172A46"/>
        <path d="M60.211 6.42627C59.2569 3.22052 61.6585 0 65.0032 0H71.2364C73.4485 0 75.3977 1.45355 76.0287 3.57373L106.386 105.574C107.34 108.779 104.938 112 101.594 112H95.3604C93.1483 112 91.1991 110.546 90.5681 108.426L60.211 6.42627Z" fill="#172A46"/>
        <path d="M95.0032 0C91.6585 0 89.2569 3.22052 90.211 6.42627L120.568 108.426C121.199 110.546 123.148 112 125.36 112H131.594C134.938 112 137.34 108.779 136.386 105.574L106.029 3.57373C105.398 1.45355 103.449 0 101.236 0H95.0032Z" fill="#172A46"/>
      </svg>`
      document.getElementById("context").innerText = `${features[i+2].properties.description}하세요.`;
      blob = await testFun(`${features[i+2].properties.description}하세요.`);
      } else if (features[i].properties.turnType == "11") {
        sel = document.getElementById("img");
        sel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
        <path d="M67.5 135C67.5 139.142 70.8579 142.5 75 142.5C79.1421 142.5 82.5 139.142 82.5 135L67.5 135ZM80.3033 9.6967C77.3744 6.76777 72.6256 6.76777 69.6967 9.6967L21.967 57.4264C19.0381 60.3553 19.0381 65.1041 21.967 68.033C24.8959 70.9619 29.6447 70.9619 32.5736 68.033L75 25.6066L117.426 68.033C120.355 70.9619 125.104 70.9619 128.033 68.033C130.962 65.1041 130.962 60.3553 128.033 57.4264L80.3033 9.6967ZM82.5 135L82.5 15L67.5 15L67.5 135L82.5 135Z" fill="#172A46"/>
      </svg>`;
      document.getElementById("context").innerText = `${features[i+2].properties.description}하세요.`;
      blob = await testFun(`${features[i+2].properties.description}하세요.`);
      } else if (
        features[i+2].properties.turnType == "12" ||
        features[i+2].properties.turnType == "16" ||
        features[i+2].properties.turnType == "17"
      ) {
        sel = document.getElementById("img");
        sel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="146" height="134" viewBox="0 0 146 134" fill="none">
        <path d="M2.6967 50.6967C-0.232233 53.6256 -0.232233 58.3744 2.6967 61.3033L50.4264 109.033C53.3553 111.962 58.1041 111.962 61.033 109.033C63.9619 106.104 63.9619 101.355 61.033 98.4264L18.6066 56L61.033 13.5736C63.9619 10.6447 63.9619 5.89592 61.033 2.96699C58.1041 0.0380592 53.3553 0.0380592 50.4264 2.96699L2.6967 50.6967ZM130.5 126C130.5 130.142 133.858 133.5 138 133.5C142.142 133.5 145.5 130.142 145.5 126H130.5ZM123 48.5H8V63.5H123V48.5ZM145.5 126V69.125H130.5V126H145.5ZM123 63.5C128.114 63.5 130.5 66.9278 130.5 69.125H145.5C145.5 56.8247 134.454 48.5 123 48.5V63.5Z" fill="#172A46"/>
      </svg>`
      document.getElementById("context").innerText = `${features[i+2].properties.description}하세요.`;
      blob = await testFun(`${features[i+2].properties.description}하세요.`);
        
      } else if (
        features[i+2].properties.turnType == "13" ||
        features[i+2].properties.turnType == "18" ||
        features[i+2].properties.turnType == "19"
      ) {
        sel = document.getElementById("img");
        sel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="146" height="134" viewBox="0 0 146 134" fill="none">
        <path d="M143.303 61.3033C146.232 58.3744 146.232 53.6256 143.303 50.6967L95.5736 2.96699C92.6447 0.0380592 87.8959 0.0380592 84.967 2.96699C82.0381 5.89592 82.0381 10.6447 84.967 13.5736L127.393 56L84.967 98.4264C82.0381 101.355 82.0381 106.104 84.967 109.033C87.8959 111.962 92.6447 111.962 95.5736 109.033L143.303 61.3033ZM0.5 126C0.5 130.142 3.85786 133.5 8 133.5C12.1421 133.5 15.5 130.142 15.5 126H0.5ZM23 63.5H138V48.5H23V63.5ZM15.5 126V71H0.5V126H15.5ZM23 48.5C10.5736 48.5 0.5 58.5736 0.5 71H15.5C15.5 66.8579 18.8579 63.5 23 63.5V48.5Z" fill="#172A46"/>
      </svg>`
      document.getElementById("context").innerText = `${features[i+2].properties.description}하세요.`;
      blob = await testFun(`${features[i+2].properties.description}하세요.`);
      } else if (
        features[i+2].properties.turnType == "127" ||
        features[i+2].properties.turnType == "129"
      ) {
        sel = document.getElementById("img");
        sel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="142" height="121" viewBox="0 0 142 121" fill="none">
        <path d="M96.5039 0C89.6003 0 84.0039 5.59644 84.0039 12.5V35.0041H54.5C47.5964 35.0041 42 40.6006 42 47.5041V70.009H12.5C5.59644 70.009 0 75.6054 0 82.509V112.513C0 116.656 3.35786 120.013 7.5 120.013C11.6421 120.013 15 116.656 15 112.513V85.009H49.4992C50.5854 85.009 51.6178 84.7781 52.5497 84.3626C55.172 83.1941 57 80.5648 57 77.5086V50.0041H91.4286C91.4537 50.0044 91.4788 50.0045 91.5039 50.0045C95.646 50.0045 99.0039 46.6466 99.0039 42.5045V15H133.503C137.645 15 141.003 11.6421 141.003 7.5C141.003 3.35786 137.645 0 133.503 0H96.5039Z" fill="#172A46"/>
      </svg>`
      document.getElementById("context").innerText = `${features[i+2].properties.description}하세요.`;
      blob = await testFun(`${features[i+2].properties.description}하세요.`);
      } else if (features[i+2].properties.turnType == "128") {
        sel = document.getElementById("img");
        sel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="142" height="121" viewBox="0 0 142 121" fill="none">
        <path d="M96.5039 0C89.6003 0 84.0039 5.59644 84.0039 12.5V35.0041H54.5C47.5964 35.0041 42 40.6006 42 47.5041V70.009H12.5C5.59644 70.009 0 75.6054 0 82.509V112.513C0 116.656 3.35786 120.013 7.5 120.013C11.6421 120.013 15 116.656 15 112.513V85.009H49.4992C50.5854 85.009 51.6178 84.7781 52.5497 84.3626C55.172 83.1941 57 80.5648 57 77.5086V50.0041H91.4286C91.4537 50.0044 91.4788 50.0045 91.5039 50.0045C95.646 50.0045 99.0039 46.6466 99.0039 42.5045V15H133.503C137.645 15 141.003 11.6421 141.003 7.5C141.003 3.35786 137.645 0 133.503 0H96.5039Z" fill="#172A46"/>
      </svg>`
      document.getElementById("context").innerText = `${features[i+2].properties.description}하세요.`;
      blob = await testFun(`${features[i+2].properties.description}하세요.`);
      } else {
        sel = document.getElementById("img");
        sel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
        <path d="M67.5 135C67.5 139.142 70.8579 142.5 75 142.5C79.1421 142.5 82.5 139.142 82.5 135L67.5 135ZM80.3033 9.6967C77.3744 6.76777 72.6256 6.76777 69.6967 9.6967L21.967 57.4264C19.0381 60.3553 19.0381 65.1041 21.967 68.033C24.8959 70.9619 29.6447 70.9619 32.5736 68.033L75 25.6066L117.426 68.033C120.355 70.9619 125.104 70.9619 128.033 68.033C130.962 65.1041 130.962 60.3553 128.033 57.4264L80.3033 9.6967ZM82.5 135L82.5 15L67.5 15L67.5 135L82.5 135Z" fill="#172A46"/>
      </svg>`;
      document.getElementById("context").innerText = `${features[i+2].properties.description}하세요.`;
      blob = await testFun(`${features[i+2].properties.description}하세요.`);
      }
      setI(i+2);
      console.log(i);
    }
  }
  }
  const si = setInterval(() => setSign(i), 60000);
  return (
    <div className="WalkNavigation">
      <div className="Sign" id="Sign">{si}
      <div id="img"><svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
        <path d="M67.5 135C67.5 139.142 70.8579 142.5 75 142.5C79.1421 142.5 82.5 139.142 82.5 135L67.5 135ZM80.3033 9.6967C77.3744 6.76777 72.6256 6.76777 69.6967 9.6967L21.967 57.4264C19.0381 60.3553 19.0381 65.1041 21.967 68.033C24.8959 70.9619 29.6447 70.9619 32.5736 68.033L75 25.6066L117.426 68.033C120.355 70.9619 125.104 70.9619 128.033 68.033C130.962 65.1041 130.962 60.3553 128.033 57.4264L80.3033 9.6967ZM82.5 135L82.5 15L67.5 15L67.5 135L82.5 135Z" fill="#172A46"/>
      </svg></div><div id="context">출발지입니다.</div></div>
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
