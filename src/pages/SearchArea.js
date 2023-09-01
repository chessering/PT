import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "../components/SearchArea.css";
window.$ = $;
/*global Tmapv2 */

function SearchArea() {
  const [markerArr, setMarkerArr] = useState([]);
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [list, setList] = useState([]);

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

            var lat = projectionCng._lat;
            var lon = projectionCng._lng;

            updatedList.push({ name, lat, lon });
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
    <div className="basePage">
      <div className="InputAndButton">
        <svg
          className="Mark"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M20.5 16C20.5 18.4853 18.4853 20.5 16 20.5C13.5147 20.5 11.5 18.4853 11.5 16C11.5 13.5147 13.5147 11.5 16 11.5C18.4853 11.5 20.5 13.5147 20.5 16ZM16 23.5C20.1421 23.5 23.5 20.1421 23.5 16C23.5 11.8579 20.1421 8.5 16 8.5C11.8579 8.5 8.5 11.8579 8.5 16C8.5 20.1421 11.8579 23.5 16 23.5ZM30.5 16C30.5 24.0081 24.0081 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16Z"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
        <input
          type="text"
          className="textInput"
          id="searchKeyword"
          name="searchKeyword"
          value={searchKeyword}
          placeholder="출발지 입력"
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
                    padding: "10 32",
                    height: "280px",
                    width: "280px",
                    marginBottom: "30px",
                    borderRadius: "23px",
                  }}
                  onClick={() =>
                    navigate("/StartCheck", {
                      state: {
                        name: item.name,
                        startLat: item.lat,
                        startLon: item.lon,
                      },
                    })
                  }
                >
                  {item.name}
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
