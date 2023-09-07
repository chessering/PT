import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import $ from "jquery";
import "../components/SearchArea.css";
import * as TTS from "./TTS";
window.$ = $;
/*global Tmapv2 */

function SearchArea() {
  const [markerArr, setMarkerArr] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [list, setList] = useState([]);
  const startName = location.state.startName;
  const startLat = location.state.startLat;
  const startLon = location.state.startLon;
  let clickCount1 = 0;

  const handleSearchClick = () => {
    $("#btn_select").ready(function () {
      var searchKeyword = $("#searchKeyword").val();
      var headers = {};
      headers["appKey"] = "42A56BlnlX8kJ6FHES50m5vsbOXz77jO8rSeP3Sq";

      $.ajax({
        method: "GET",
        headers: headers,
        url: "https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result",
        async: false,
        data: {
          searchKeyword: searchKeyword,
          resCoordType: "EPSG3857",
          reqCoordType: "WGS84GEO",
          count: 10,
        },
        success: function (response) {
          var resultpoisData = response.searchPoiInfo.pois.poi;

          // 기존 마커, 팝업 제거
          if (markerArr.length > 0) {
            for (var i in markerArr) {
              markerArr[i].setMap(null);
            }
          }
          const updatedList = [];

          for (var k in resultpoisData) {
            var noorLat = Number(resultpoisData[k].noorLat);
            var noorLon = Number(resultpoisData[k].noorLon);
            var name = resultpoisData[k].name;
            for (var p in resultpoisData[k].newAddressList.newAddress) {
              var address =
                resultpoisData[k].newAddressList.newAddress[p].fullAddressRoad;
            }

            var pointCng = new Tmapv2.Point(noorLon, noorLat);
            var projectionCng = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
              pointCng
            );
            var bizName = resultpoisData[k].middleBizName;
            var lat = projectionCng._lat;
            var lon = projectionCng._lng;

            updatedList.push({ name, lat, lon, address, bizName });
            var marker = new Tmapv2.Marker({
              fulladdress: address,
              title: name,
            });
            markerArr.push(marker);
          }
          setList(updatedList);
          console.log(updatedList);
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
    });
  };
  return (
    <div className="basePage" style={{ overflowY: "scroll" }}>
      <div className="InputAndButton">
        <svg
          className="Mark"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 30 40"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 37C14.5 37 29 23.2843 29 15C29 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 14.5 37 14.5 37ZM14.5 20C17.5376 20 20 17.5375 20 14.5C20 11.4624 17.5376 8.99997 14.5 8.99997C11.4624 8.99997 9 11.4624 9 14.5C9 17.5375 11.4624 20 14.5 20Z"
            fill="white"
          />
        </svg>

        <input
          type="text"
          className="textInput"
          id="searchKeyword"
          name="searchKeyword"
          value={searchKeyword}
          placeholder="목적지 입력"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button className="btn_select" onClick={handleSearchClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
          </svg>
        </button>
      </div>
      <div>
        {/* 검색 결과 영역 */}
        <div>
          <ul style={{ marginRight: "40px" }}>
            {list.map((item, index) => (
              <React.Fragment key={index}>
                <button
                  style={{
                    padding: "0px 25px",
                    height: "280px",
                    width: "280px",
                    marginBottom: "30px",
                    borderRadius: "23px",
                  }}
                  onClick={() => {
                    clickCount1 = clickCount1 + 1;
                    if (clickCount1 == 1) {
                      TTS.testFun(`${item.name}`);
                    } else if (clickCount1 == 2) {
                      navigate("/DestCheck", {
                        state: {
                          endName: item.name,
                          endLat: item.lat,
                          endLon: item.lon,
                          startLat: startLat,
                          startLon: startLon,
                          startName: startName,
                        },
                      });
                    }
                  }}
                >
                  <p
                    style={{
                      marginTop: "15px",
                      color: "#172A46",
                      fontFamily: "EliceDigitalBaeum-bd",
                      fontSize: "30px",
                      fontWeight: "1000",
                      textAlign: "left",
                      marginBottom: "15px",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      marginTop: "0px",
                      color: "#172A46",
                      fontFamily: "EliceDigitalBaeum-bd",
                      fontSize: "20px",
                      fontWeight: "0",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                    {item.address}{" "}
                  </p>
                  <p
                    style={{
                      color: "#172A46",
                      fontFamily: "EliceDigitalBaeum-bd",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "0",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                    {item.bizName}{" "}
                  </p>
                  <p
                    style={{
                      color: "#172A46",
                      fontFamily: "EliceDigitalBaeum-bd",
                      fontSize: "20px",
                      fontWeight: "0",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                    거리{" "}
                  </p>
                </button>
                <br />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchArea;
