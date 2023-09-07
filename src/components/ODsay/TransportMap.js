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


import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import "../NavigateContent.css";
/*global Tmapv2 */

function TransportMap() {
  const location = useLocation();
  console.log(location.state);
  var drawInfoArr = [];
  var resultdrawArr = [];
  const [totalTime, setTotalTime] = useState();
  const [totalDistance, setTotalDistance] = useState();
  const [totaltransit, setTotaltransit] = useState();
  const [board, setboard] = useState();

  useEffect(() => {
    const searchPubTransPathAxios = async () => {
      // 출발지와 도착지 좌표
      const SY = location.state.startLat;
      const SX = location.state.startLon;
      const EY = location.state.endLat;
      const EX = location.state.endLon;
      const type = location.state.type;
      const startName = location.state.startName;
      const endName = location.state.endName;
      console.log(SX, SY, EX, EY, startName, endName, type);
      var map = new Tmapv2.Map("map", {
        center: new Tmapv2.LatLng((SY + EY) / 2,(SX + EX) / 2),
        width: "390px",
        height: "400px",
        zoom: 11,
        zoomControl: true,
        scrollwheel: true,
      });
      

      try {
        const response = await axios.get(`http://safe-roadmap-prod-env.eba-56tfx8tr.ap-northeast-2.elasticbeanstalk.com/pathfinding/transport?SX=${SX}&SY=${SY}&EX=${EX}&EY=${EY}&type=${type}&SName=${startName}&EName=${endName}`);
        const data = response.data;  
        var info = data.result.info;
        console.log(info);
        setTotalTime(info.totalTime);
        setTotalDistance(info.totalDistance);
        setTotaltransit((info.totalStationCount > 1) ? info.busTransitCount + info.subwayTransitCount : 0);
        var ped = data.result.ped;
        var boardcount = 0;
        for (var p in ped) {
          if (ped[p].boardCount !== undefined)
          boardcount += ped[p].boardCount;
        }
        setboard(boardcount);
        
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
          

          var subPath = data.result.subPath;

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
            borderRadius: "23px",
            position: "fixed",
          }}
        ></div>
      </div>
      <div className="footer">
        <div className="Informations">
          예상 시간 &emsp; &emsp; &nbsp;&nbsp;{ totalTime } 분
          <br />총 거리 &emsp; &emsp; &emsp; &nbsp;{totalDistance} m
          <br />환승 수 &emsp; &emsp; &emsp; &nbsp;{totaltransit} 번
          <br />
          횡단보도 수 &emsp; &nbsp; &nbsp; {board} 개
          <br />
        </div>
        <div className="Buttons">
          <button className="StartBtn">첫 화면으로</button>
          <button className="NavigateStartBtn">안내 시작</button>
        </div>
      </div>
    </div>
  );
}

export default TransportMap;