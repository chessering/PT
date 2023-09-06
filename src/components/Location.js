import React, { useEffect, useMemo, useState } from "react";
function getLocation() {
  let lat, long;
  if (navigator.geolocation) {
    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(
      function (position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        return { lat, long };
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
  } else {
    console.log("GPS를 지원하지 않습니다");
  }
}
export default getLocation;
