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


import { useEffect } from "react";
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


  useEffect(() => {
    const searchPubTransPathAxios = async () => {
      // 출발지와 도착지 좌표
      const sx = 126.93737555322481;
      const sy = 37.55525165729346;
      const ex = 126.88265238619182;
      const ey = 37.481440035175375;

      var map = new Tmapv2.Map("map", {
        center: new Tmapv2.LatLng(37.5652045, 126.98702028),
        width: "100%",
        height: "400px",
        zoom: 12,
        zoomControl: true,
        scrollwheel: true,
      });

      // ODsay API 키

      // ODsay API 엔드포인트
      const url = `https://api.odsay.com/v1/api/searchPubTransPathT?SX=${sx}&SY=${sy}&EX=${ex}&EY=${ey}&apiKey=P7e7V2R2hHX%2BPv4%2BFlgsfHHJ5FvnKvJ%2FER5h0qInTgw`;

      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          const data = response.data;

          // 결과 데이터를 출력
          console.log(data);
          const startPoint = {
            x: location.state.startLat,
            y: location.state.startLon,
          };
          const endPoint = {
            x: location.state.endtLat,
            y: location.state.endLon,
          };
  
          const path = response.data.result.path[0];
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
          
          console.log(path.info.mapObj);

          if (resultdrawArr.length > 0) {
            for (var i in resultdrawArr) {
              resultdrawArr[i].setMap(null);
            }
            resultdrawArr = [];
          }
          drawInfoArr = [];
          // 경로 그리기

          var subPath = path.subPath;

          for (var key in subPath) {
            if (subPath[key].trafficType == 3) {
              if (key == 0) {
                var latlng = new Tmapv2.Point(
                  startPoint.x, startPoint.y
                );
              }
              else {

              }
            }
            var convertPoint = 
              new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlng);
            var convertChange = new Tmapv2.LatLng(
              convertPoint._lat,
              convertPoint._lng
            );
            drawInfoArr.push(convertChange);

            var markerImg = "";
              var size;

              if (key == 0) {
                markerImg = "/upload/tmap/marker/pin_r_m_s.png";
                size = new Tmapv2.Size(24, 38);
              }
               else if (key == Object.values(subPath) - 1) {
                //도착지 마커
                markerImg = "/upload/tmap/marker/pin_r_m_e.png";
                size = new Tmapv2.Size(24, 38);
              } else {
                //각 포인트 마커
                markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
                size = new Tmapv2.Size(8, 8);
              }

              // 경로들의 결과값들을 포인트 객체로 변환
              var latlon = new Tmapv2.Point(
                
              );

              // 포인트 객체를 받아 좌표값으로 다시 변환
              var convertPoint =
                new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlon);

              var routeInfoObj = {
                markerImage: markerImg,
                lng: convertPoint._lng,
                lat: convertPoint._lat,
              };

              // Marker 추가
              var marker_p = new Tmapv2.Marker({
                position: new Tmapv2.LatLng(routeInfoObj.lat, routeInfoObj.lng),
                icon: routeInfoObj.markerImage,
                iconSize: size,
                map: map,
              });
            
          }



          const points = path.info.mapObj.split(":");
          const routePoints = points.map((point) => {
            const [x, y] = point.split(",");
            return new Tmapv2.LatLng(y, x);
          });
  
          const route = new Tmapv2.Polyline({
            path: routePoints,
            strokeColor: "#DD0000",
            strokeWeight: 6,
            map: map,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    searchPubTransPathAxios();
  }, [location.state]);

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
          예상 시간 &emsp; &emsp; &nbsp;&nbsp;분
          <br />총 거리 &emsp; &emsp; &emsp; &nbsp;m
          <br />환승 수 &emsp; &emsp; &emsp; &nbsp;번
          <br />
          횡단보도 수 &emsp; &nbsp; &nbsp;5개
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