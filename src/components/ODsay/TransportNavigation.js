import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { testFun } from "./TTS.js";

function TransportNavigation() {

//   const [lat, setLat] = useState(0);
//   const [long, setLong] = useState(0);
//   const [i, setI] = useState(0);
//   const navigate = useNavigate();
//   const location = useLocation();
//   let blob = 0;
//   async function getDistance(lat1, lng1, lat2, lng2) {
//     function deg2rad(deg) {
//       return deg * (Math.PI / 180);
//     }
//     var R = 6371; // Radius of the earth in km
//     var dLat = deg2rad(lat2 - lat1); // deg2rad below
//     var dLon = deg2rad(lng2 - lng1);
//     var a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(deg2rad(lat1)) *
//         Math.cos(deg2rad(lat2)) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     var d = R * c; // Distance in km
//     return d;
//   }
//     console.log(location.state);
//     const inform = location.state.inform;
//     var IsBus = [];
//     var IsSubway = [];
//     for (let i = 0; i < inform.subPath.length; i++) {
//         if (inform.subPath[i].trafficType == 2)
//         IsBus.push(subPath[i]);
//     }
//     for (let i = 0; i < inform.subPath.length; i++) {
//         if (inform.subPath[i].trafficType == 1)
//         IsSubWay.push(subPath[i]);
//     }
//     for (let i = 0; i < inform.subPath.length; i++) {
//         var response;
//         if (inform.subPath[i].trafficType == 2) { // bus
//             response = axios.get(`http://safe-roadmap-prod-env.eba-56tfx8tr.ap-northeast-2.elasticbeanstalk.com/arrival/bus?stationId=${stations[0].stationId}&stationName=${stations[0].stationName}&busRouteId=${}&EY=${endLat}&type=${0}`);
//             console.log(response);
//         }
//         else if (inform.subPath[i].trafficType == 1) {
//             response = axios.get(`http://safe-roadmap-prod-env.eba-56tfx8tr.ap-northeast-2.elasticbeanstalk.com/arrival/bus?stationId=${stations[0].stationId}&stationName=${stations[0].stationName}&busRouteId=${}&EY=${endLat}&type=${0}`);
//             console.log(response);
//         }
//     }


//     async function getLocation() {

//     }
    return(
        <div>dd</div>
    );


}

export default TransportNavigation;