import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "../components/NavigateContent.css";
window.$ = $;
/*global Tmapv2 */
var map;
function Map() {
  const navigate = useNavigate();
  var marker_s, marker_e;
  const [tDistance, setTDistance] = useState(0);
  const [tTime, setTTime] = useState(0);
  var drawInfoArr = [];
  var resultdrawArr = [];
  const [data, setData] = useState([]);

  useEffect(() => {
    function initTmap() {
      console.log("map");
      // 1. 지도 띄우기
      map = new Tmapv2.Map("map_div", {
        center: new Tmapv2.LatLng(37.5652045, 126.98702028),
        width: "340px",
        height: "430px",
        zoom: 15,
        zoomControl: true,
        scrollwheel: true,
      });

      // 2. 시작, 도착 심볼찍기
      // 시작
      marker_s = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(37.564991, 126.983937),
        icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
        iconSize: new Tmapv2.Size(24, 38),
        map: map,
      });

      // 도착
      marker_e = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(37.566158, 126.98894),
        icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_p.png",
        iconSize: new Tmapv2.Size(24, 38),
        map: map,
      });

      // 3. 경로탐색 API 사용요청
      var headers = {};
      headers["appKey"] = "iwCIIowoVGaAn0LvGc5Urq7YJdae6qX8BcL31O89";

      $.ajax({
        method: "POST",
        headers: headers,
        url: "https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json&callback=result",
        async: false,
        data: {
          startX: "126.983937",
          startY: "37.564991",
          endX: "126.988940",
          endY: "37.566158",
          reqCoordType: "WGS84GEO",
          resCoordType: "EPSG3857",
          startName: "출발지",
          endName: "도착지",
        },
        success: function (response) {
          var resultData = response.features;

          //결과 출력
          var estimatedDistance = (
            resultData[0].properties.totalDistance / 1000
          ).toFixed(1);

          var estimatedTime = (resultData[0].properties.totalTime / 60).toFixed(
            0
          );

          setTDistance(estimatedDistance);
          setTTime(estimatedTime);

          //기존 그려진 라인 & 마커가 있다면 초기화
          if (resultdrawArr.length > 0) {
            for (var i in resultdrawArr) {
              resultdrawArr[i].setMap(null);
            }
            resultdrawArr = [];
          }

          drawInfoArr = [];

          for (var i in resultData) {
            //for문 [S]
            var geometry = resultData[i].geometry;
            var properties = resultData[i].properties;
            var polyline_;

            if (geometry.type == "LineString") {
              for (var j in geometry.coordinates) {
                // 경로들의 결과값(구간)들을 포인트 객체로 변환
                var latlng = new Tmapv2.Point(
                  geometry.coordinates[j][0],
                  geometry.coordinates[j][1]
                );
                // 포인트 객체를 받아 좌표값으로 변환
                var convertPoint =
                  new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlng);
                // 포인트객체의 정보로 좌표값 변환 객체로 저장
                var convertChange = new Tmapv2.LatLng(
                  convertPoint._lat,
                  convertPoint._lng
                );
                // 배열에 담기
                drawInfoArr.push(convertChange);
              }
            } else {
              var markerImg = "";
              var pType = "";
              var size;

              if (properties.pointType == "S") {
                //출발지 마커
                markerImg = "/upload/tmap/marker/pin_r_m_s.png";
                pType = "S";
                size = new Tmapv2.Size(24, 38);
              } else if (properties.pointType == "E") {
                //도착지 마커
                markerImg = "/upload/tmap/marker/pin_r_m_e.png";
                pType = "E";
                size = new Tmapv2.Size(24, 38);
              } else {
                //각 포인트 마커
                markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
                pType = "P";
                size = new Tmapv2.Size(8, 8);
              }

              // 경로들의 결과값들을 포인트 객체로 변환
              var latlon = new Tmapv2.Point(
                geometry.coordinates[0],
                geometry.coordinates[1]
              );

              // 포인트 객체를 받아 좌표값으로 다시 변환
              var convertPoint =
                new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlon);

              var routeInfoObj = {
                markerImage: markerImg,
                lng: convertPoint._lng,
                lat: convertPoint._lat,
                pointType: pType,
              };

              // Marker 추가
              var marker_p = new Tmapv2.Marker({
                position: new Tmapv2.LatLng(routeInfoObj.lat, routeInfoObj.lng),
                icon: routeInfoObj.markerImage,
                iconSize: size,
                map: map,
              });
            }
          } //for문 [E]
          drawLine(drawInfoArr);
        },
        error: function (request, status, error) {
          console.log(
            "code:" +
              request.status +
              "\n" +
              "message:" +
              request.responseText +
              "\n" +
              "error:" +
              error
          );
        },
      });
    }

    function drawLine(arrPoint) {
      var polyline_;

      polyline_ = new Tmapv2.Polyline({
        path: arrPoint,
        strokeColor: "#DD0000",
        strokeWeight: 6,
        map: map,
      });
      resultdrawArr.push(polyline_);
    }
    initTmap();
    return () => {};
  }, [data]);

  return (
    <div className="NavigateContent">
      <div className="MapBorder">
        <div
          className="Map"
          id="map_div"
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
          횡단보도 수 &emsp; &nbsp; &nbsp;-개
          <br />
        </div>
        <div className="Buttons">
          <button className="StartBtn">첫 화면으로</button>
          <button
            className="NavigateStartBtn"
            onClick={() => navigate("/WalkNavigation")}
          >
            안내 시작
          </button>
        </div>
      </div>
    </div>
  );
}

export default Map;
