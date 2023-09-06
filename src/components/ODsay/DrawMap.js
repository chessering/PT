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
import axios from "axios";
import $ from "jquery";
import "../NavigateContent.css";
window.$ = $;
/*global Tmapv2 */


function DrawMap() {
  const [map, setMap] = useState(null);
  var tDistance = 0,
  tTime = 0;

  useEffect(() => {
    const initMap = async () => {
      // Tmap API 초기화
      const tmap = new Tmapv2.Map("map",{
        width: "340px",
        height: "400px",
        zoom: 12,
        zoomControl: true,
        scrollwheel: true,
      });

      setMap(tmap);

      // 출발지와 도착지 좌표 가져오기 (ODSay API 사용)
      try {
        const response = await axios.get(
          "https://api.odsay.com/v1/api/searchPubTransPathT",
          {
            params: {
              SX: "126.983937",
              SY: "37.564991",
              EX: "126.988940",
              EY: "37.566158",
              apiKey: "P7e7V2R2hHX%2BPv4%2BFlgsfHHJ5FvnKvJ%2FER5h0qInTgw",
              
            },
          }
        );

        const path = response.data.result.path[0];
        const startPoint = path.info.start;
        const endPoint = path.info.end;

        // 출발지와 도착지 마커 추가
        const startMarker = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(startPoint.y, startPoint.x),
          icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
          iconSize: new Tmapv2.Size(24, 38),
          map: tmap,
        });

        const endMarker = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(endPoint.y, endPoint.x),
          icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_p.png",
          iconSize: new Tmapv2.Size(24, 38),
          map: tmap,
        });

        // 경로 그리기
        const points = path.info.mapObj.split(" ");
        const routePoints = points.map((point) => {
          const [x, y] = point.split(",");
          return new Tmapv2.LatLng(y, x);
        });

        const route = new Tmapv2.Polyline({
          path: routePoints,
          strokeColor: "#DD0000",
          strokeWeight: 6,
          map: tmap,
        });
        
      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };
    return () => {
        initMap();
      };
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
          예상 시간 &emsp; &emsp; &nbsp;&nbsp;{tTime}분
          <br />총 거리 &emsp; &emsp; &emsp; &nbsp;{tDistance}m
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

export default DrawMap;