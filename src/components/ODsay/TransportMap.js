// function DrawMap() {
//     useEffect(() => {
//         const mapOptions = {
//           center: new navermaps.LatLng(37.3595704, 127.105399),
//           zoom: 10,
//         };
    
//         const map = new navermaps.Map('map', mapOptions);
    
//         const sx = 126.93737555322481;
//         const sy = 37.55525165729346;
//         const ex = 126.88265238619182;
//         const ey = 37.481440035175375;
    
//         const searchPubTransPathAJAX = () => {
//           const xhr = new XMLHttpRequest();
//           const url = `https://api.odsay.com/v1/api/searchPubTransPathT?SX=${sx}&SY=${sy}&EX=${ex}&EY=${ey}&apiKey={YOUR_API_KEY}`;
//           xhr.open('GET', url, true);
//           xhr.send();
//           xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//               const response = JSON.parse(xhr.responseText);
//               callMapObjApiAJAX(response.result.path[0].info.mapObj);
//             }
//           };
//         };
    
//         const callMapObjApiAJAX = (mapObj) => {
//           const xhr = new XMLHttpRequest();
//           const url = `https://api.odsay.com/v1/api/loadLane?mapObject=0:0@${mapObj}&apiKey={YOUR_API_KEY}`;
//           xhr.open('GET', url, true);
//           xhr.send();
//           xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//               const resultJsonData = JSON.parse(xhr.responseText);
//               drawNaverMarker(sx, sy);
//               drawNaverMarker(ex, ey);
//               drawNaverPolyLine(resultJsonData);
//               if (resultJsonData.result.boundary) {
//                 const boundary = new navermaps.LatLngBounds(
//                   new navermaps.LatLng(resultJsonData.result.boundary.top, resultJsonData.result.boundary.left),
//                   new navermaps.LatLng(resultJsonData.result.boundary.bottom, resultJsonData.result.boundary.right)
//                 );
//                 map.panToBounds(boundary);
//               }
//             }
//           };
//         };
    
//         const drawNaverMarker = (x, y) => {
//           new navermaps.Marker({
//             position: new navermaps.LatLng(y, x),
//             map,
//           });
//         };
    
//         const drawNaverPolyLine = (data) => {
//           for (let i = 0; i < data.result.lane.length; i++) {
//             for (let j = 0; j < data.result.lane[i].section.length; j++) {
//               const lineArray = data.result.lane[i].section[j].graphPos.map(pos => new navermaps.LatLng(pos.y, pos.x));
//               const strokeColor = (data.result.lane[i].type === 1) ? '#003499' : (data.result.lane[i].type === 2) ? '#37b42d' : '';
              
//               new navermaps.Polyline({
//                 map,
//                 path: lineArray,
//                 strokeWeight: 3,
//                 strokeColor,
//               });
//             }
//           }
//         };
    
//         searchPubTransPathAJAX();
//       }, []);
    
//       return (
//         <div>
//           <div id="map" style={{ width: '100%', height: '400px' }}></div>
//         </div>
//       );
//     }

    


// export default DrawMap;


// function DrawMap() {
//     useEffect(() => {
//         const mapOptions = {
//           center: new navermaps.LatLng(37.3595704, 127.105399),
//           zoom: 10,
//         };
    
//         const map = new navermaps.Map('map', mapOptions);
    
//         const sx = 126.93737555322481;
//         const sy = 37.55525165729346;
//         const ex = 126.88265238619182;
//         const ey = 37.481440035175375;
    
//         const searchPubTransPathAJAX = () => {
//           const xhr = new XMLHttpRequest();
//           const url = `https://api.odsay.com/v1/api/searchPubTransPathT?SX=${sx}&SY=${sy}&EX=${ex}&EY=${ey}&apiKey={YOUR_API_KEY}`;
//           xhr.open('GET', url, true);
//           xhr.send();
//           xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//               const response = JSON.parse(xhr.responseText);
//               callMapObjApiAJAX(response.result.path[0].info.mapObj);
//             }
//           };
//         };
    
//         const callMapObjApiAJAX = (mapObj) => {
//           const xhr = new XMLHttpRequest();
//           const url = `https://api.odsay.com/v1/api/loadLane?mapObject=0:0@${mapObj}&apiKey={YOUR_API_KEY}`;
//           xhr.open('GET', url, true);
//           xhr.send();
//           xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//               const resultJsonData = JSON.parse(xhr.responseText);
//               drawNaverMarker(sx, sy);
//               drawNaverMarker(ex, ey);
//               drawNaverPolyLine(resultJsonData);
//               if (resultJsonData.result.boundary) {
//                 const boundary = new navermaps.LatLngBounds(
//                   new navermaps.LatLng(resultJsonData.result.boundary.top, resultJsonData.result.boundary.left),
//                   new navermaps.LatLng(resultJsonData.result.boundary.bottom, resultJsonData.result.boundary.right)
//                 );
//                 map.panToBounds(boundary);
//               }
//             }
//           };
//         };
    
//         const drawNaverMarker = (x, y) => {
//           new navermaps.Marker({
//             position: new navermaps.LatLng(y, x),
//             map,
//           });
//         };
    
//         const drawNaverPolyLine = (data) => {
//           for (let i = 0; i < data.result.lane.length; i++) {
//             for (let j = 0; j < data.result.lane[i].section.length; j++) {
//               const lineArray = data.result.lane[i].section[j].graphPos.map(pos => new navermaps.LatLng(pos.y, pos.x));
//               const strokeColor = (data.result.lane[i].type === 1) ? '#003499' : (data.result.lane[i].type === 2) ? '#37b42d' : '';
              
//               new navermaps.Polyline({
//                 map,
//                 path: lineArray,
//                 strokeWeight: 3,
//                 strokeColor,
//               });
//             }
//           }
//         };
    
//         searchPubTransPathAJAX();
//       }, []);
    
//       return (
//         <div>
//           <div id="map" style={{ width: '100%', height: '400px' }}></div>
//         </div>
//       );
//     }

    


// export default DrawMap;


import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import "../NavigateContent.css";
import * as TTS from "../../pages/TTS";
/*global Tmapv2 */

function TransportMap() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  var drawInfoArr = [];
  var resultdrawArr = [];
  const info = location.state.inform.info;
  const totalTime = info.totalTime;
  const totalDistance = (info.totalDistance / 1000).toFixed(1);
  const totalTransit = info.busTransitCount + info.subwayTransitCount;
  var boardCount = 0;
  console.log(location.state);
  console.log(location.state.inform);
  console.log(location.state.inform.info);

  for (var p = 0; p < location.state.inform.ped.length; p++) {
    if (location.state.inform.ped[p] == "") continue;
    boardCount += location.state.inform.ped[p].boardCount;
  }


  let clickCount1 = 0,
    clickCount2 = 0;
  function handleClickCountEvent1() {
    clickCount1 = clickCount1 + 1;
    if (clickCount1 == 1) {
      TTS.testFun("초기화면으로 돌아가는 버튼입니다.");
    } else if (clickCount1 == 2) {
      navigate("/FindRoute");
    }
  }
  function handleClickCountEvent2() {
    clickCount2 = clickCount2 + 1;
    if (clickCount2 == 1) {
      TTS.testFun("안내 시작 버튼입니다.");
    } else if (clickCount2 == 2) {
      TTS.testFun("안내를 시작합니다.");
      navigate("/RouteP1", {
        state: { 
          SX : location.state.startLat, 
          SY : location.state.startLon,
          EX : location.state.endLat,
          EY : location.state.endLon,
          inform: location.state.inform, 
          info: info },
      });
    }
  }
  

  useEffect(() => {
    const searchPubTransPathAxios = async () => {
      // 출발지와 도착지 좌표
      const SY = location.state.startLat;
      const SX = location.state.startLon;
      const EY = location.state.endLat;
      const EX = location.state.endLon;
      console.log(SY, SX, EY, EX)
      var map = new Tmapv2.Map("map", {
        center: new Tmapv2.LatLng((SY + EY) / 2,(SX + EX) / 2),
        width: "340px",
        height: "430px",
        zoom: 12,
        zoomControl: true,
        scrollwheel: true,
      });
      

      try {
        // const response = await axios.get(`http://safe-roadmap-prod-env.eba-56tfx8tr.ap-northeast-2.elasticbeanstalk.com/pathfinding/transport?SX=${SX}&SY=${SY}&EX=${EX}&EY=${EY}&type=${type}&SName=${startName}&EName=${endName}`);
        const response = await axios.get(`https://api.odsay.com/v1/api/searchPubTransPathT?SX=${SX}&SY=${SY}&EX=${EX}&EY=${EY}&apiKey=P7e7V2R2hHX%2BPv4%2BFlgsfHHJ5FvnKvJ%2FER5h0qInTgw`);
        const data = response.data;
        console.log(data);
        var path = data.result.path;
        var keys = Object.keys(path);
        var values = Object.values(path);
        var keys_arr = [];
        var values_arr = [];
        keys.sort();
        for (var i = 0; i < keys.length; i++) {
          values_arr.push(values[keys[i]]);
        }
        
        if (response.status === 200) {
          
          // 결과 데이터를 출력
          const startPoint = {
            x: SX,
            y: SY,
          };
          const endPoint = {
            x: EX,
            y: EY,
          };
  
          
          // 출발지와 도착지 마커 추가
          const startMarker = new Tmapv2.Marker({
            position: new Tmapv2.LatLng(startPoint.y, startPoint.x),
            icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
            iconSize: new Tmapv2.Size(24, 38),
            map: map,
          });
  
          const endMarker = new Tmapv2.Marker({
            position: new Tmapv2.LatLng(endPoint.y, endPoint.x),
            icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_p.png",
            iconSize: new Tmapv2.Size(24, 38),
            map: map,
          });
          

          if (resultdrawArr.length > 0) {
            for (var i in resultdrawArr) {
              resultdrawArr[i].setMap(null);
            }
            resultdrawArr = [];
          }
          drawInfoArr = [];
          

          var subPath = location.state.inform.subPath;
          console.log(subPath);

          for (var key in subPath) {
            var x = "";
            var y = "";
            if (subPath[key].trafficType == 3) {
              if (key == 0) {
                var latlng = new Tmapv2.LatLng(
                  startPoint.y, startPoint.x
                );
                drawInfoArr.push(latlng);
                x = startPoint.x;
                y = startPoint.y;
              }
              else if (key == Object.values(subPath) - 1) {
                var latlng = new Tmapv2.LatLng(
                  endPoint.y, startPoint.x
                );
                drawInfoArr.push(latlng);
                x = endPoint.x;
                y = endPoint.y;
              }
              else continue;
              var markerImg = "";
              var size;

              if (key == 0) {
                markerImg = "/upload/tmap/marker/pin_r_m_s.png";
                size = new Tmapv2.Size(24, 38);
              }
               else if (key == drawInfoArr.length - 1) {
                //도착지 마커
                markerImg = "/upload/tmap/marker/pin_r_m_e.png";
                size = new Tmapv2.Size(24, 38);
              } else {
                //각 포인트 마커
                markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
                size = new Tmapv2.Size(8, 8);
              }

              var routeInfoObj = {
                markerImage: markerImg,
                lng: x,
                lat: y
              };
    
              // Marker 추가
              var marker_p = new Tmapv2.Marker({
                position: new Tmapv2.LatLng(routeInfoObj.lat, routeInfoObj.lng),
                icon: routeInfoObj.markerImage,
                iconSize: size,
                map: map,
              });
            }
            else {
              const stations = subPath[key].passStopList.stations;
              for (var j in stations) {
                var latlng = new Tmapv2.LatLng(
                  stations[j].y, stations[j].x
                );
                drawInfoArr.push(latlng);
                x = stations[j].x;
                y = stations[j].y;
                var markerImg = "";
              var size;

              if (key == 0) {
                markerImg = "/upload/tmap/marker/pin_r_m_s.png";
                size = new Tmapv2.Size(24, 38);
              }
              else if (key == drawInfoArr.length - 1) {
                //도착지 마커
                markerImg = "/upload/tmap/marker/pin_r_m_e.png";
                size = new Tmapv2.Size(24, 38);
              } else {
                //각 포인트 마커
                markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
                size = new Tmapv2.Size(8, 8);
              }

              var routeInfoObj = {
                markerImage: markerImg,
                lng: x,
                lat: y,
              };
    
              // Marker 추가
              var marker_p = new Tmapv2.Marker({
                position: new Tmapv2.LatLng(routeInfoObj.lat, routeInfoObj.lng),
                icon: routeInfoObj.markerImage,
                iconSize: size,
                map: map,
              });
              }
              
            }

          }
  
          const route = new Tmapv2.Polyline({
            path: drawInfoArr,
            strokeColor: "#DD0000",
            strokeWeight: 6,
            map: map,
          });
          resultdrawArr.push(route);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    searchPubTransPathAxios();
  }, []);
  return (
    <div className="NavigateContent">
      <div className="MapBorder">
        <div
          className="Map"
          id="map"
          style={{
            width: "350px",
            borderRadius: "23px",
            position: "fixed",
          }}
        ></div>
      </div>
      <div className="footer">
        <div className="Informations">
          예상 시간 &emsp; &emsp; &nbsp;&nbsp;{ totalTime } 분
          <br />총 거리 &emsp; &emsp; &emsp; &nbsp;{totalDistance} km
          <br />환승 수 &emsp; &emsp; &emsp; &nbsp;{totalTransit} 번
          <br />
          횡단보도 수 &emsp; &nbsp; {boardCount} 개
          <br />
        </div>
        <div className="Buttons">
          <button className="StartBtn" onClick={() => {handleClickCountEvent1()}}>첫 화면으로</button>
          <button className="NavigateStartBtn" onClick = {() => {handleClickCountEvent2()}}>안내 시작</button>
        </div>
      </div>
    </div>
  );
}

export default TransportMap;