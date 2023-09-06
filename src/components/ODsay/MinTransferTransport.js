/*gloval Tmapv2*/
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

let minTransfer = {};

function MinTransferTransport() {

    const navigate = useNavigate();

    useEffect(() => {
        
    }, []);
    var xhr = new XMLHttpRequest();
    var url =
      "https://api.odsay.com/v1/api/searchPubTransPathT?SX=126.9027279&SY=37.5349277&EX=126.9145430&EY=37.5499421&apiKey=P7e7V2R2hHX%2BPv4%2BFlgsfHHJ5FvnKvJ%2FER5h0qInTgw";
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = JSON.parse(xhr.responseText);
            const pathArray = response.result.path;
            const totalTimemap = pathArray.map(pathItem => pathItem.info.totalStationCount);
            let mapToArray = [...totalTimemap].sort((a,b) => a - b);
            //만약 mapToArray가 모두 값이 0이라면..?
            for (var key in pathArray) {
                if (mapToArray[0] == pathArray[key].info.totalStationCount) {
                    minTransfer = pathArray[key];
                }
            }
            console.log(minTransfer);
          }
    };
    return <div onClick={navigate('/MinTransferMap', {state : {Path : minTransfer}})}>최소<br/>환승</div>;
}


  
  export default MinTransferTransport;