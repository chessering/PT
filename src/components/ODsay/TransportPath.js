/*gloval Tmapv2*/

function TransportPath() {
	function searchPubTransPathAJAX() {
		var response;
		var xhr = new XMLHttpRequest();
		var url =
		  "https://api.odsay.com/v1/api/searchPubTransPathT?SX=126.9027279&SY=37.5349277&EX=126.9145430&EY=37.5499421&apiKey=P7e7V2R2hHX%2BPv4%2BFlgsfHHJ5FvnKvJ%2FER5h0qInTgw";
		xhr.open("GET", url, true);
		xhr.send();
		xhr.onreadystatechange = function () {
		  if (xhr.readyState == 4 && xhr.status == 200) {
			response = JSON.parse(xhr.responseText);
			console.log(response); // <- xhr.responseText 로 결과를 가져올 수 있음
			console.log(response["result"]["path"]);
		}
		  
		};
		console.log(response);
	  }
	
	  return <div>{searchPubTransPathAJAX()}</div>;
  }
  
  export default TransportPath;