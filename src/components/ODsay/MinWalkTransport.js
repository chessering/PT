/*gloval Tmapv2*/
import { useNavigate } from "react-router-dom";

let minWalk = {};

function MinWalkTransport() {
    const navigate = useNavigate();
    var xhr = new XMLHttpRequest();
    var url =
      "https://api.odsay.com/v1/api/searchPubTransPathT?SX=126.9027279&SY=37.5349277&EX=126.9145430&EY=37.5499421&apiKey=P7e7V2R2hHX%2BPv4%2BFlgsfHHJ5FvnKvJ%2FER5h0qInTgw";
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = JSON.parse(xhr.responseText);
            const pathArray = response.result.path;
            const totalTimemap = pathArray.map(pathItem => pathItem.info.totalWalk);
            let mapToArray = [...totalTimemap].sort((a,b) => a - b);

            for (var key in pathArray) {
                if (mapToArray[0] == pathArray[key].info.totalWalk) {
                    minWalk = pathArray[key];
                }
            }
            console.log(minWalk);
        }
    };

    return (
    <div onClick={() => navigate('/MinWalkMap', {state : {Path : minWalk}})}>최소<br/>도보</div>
    );
}
  
export default MinWalkTransport;