import "../components/CheckPage.css";
import { useNavigate, useLocation } from "react-router-dom";

function DestCheck() {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state.name;
  const startLat = location.state.startLat;
  const startLon = location.state.startLon;
  const endLat = location.state.endLat;
  const endLon = location.state.endLon;
  console.log(startLat, startLon, endLat, endLon);

  return (
    <div className="CheckPage">
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

        <div className="Place">
          <div>{name}</div>
        </div>
      </div>

      <h2>입력한 정보가 맞나요?</h2>
      <div className="Btns">
        <div
          className="YesBtn"
          onClick={() =>
            navigate("/ChooseVehicle", {
              state: {
                startLat: startLat,
                startLon: startLon,
                endLat: endLat,
                endLon: endLon,
              },
            })
          }
        >
          네
        </div>
        <div
          className="NoBtn"
          onClick={() =>
            navigate("/DestInput", {
              state: {
                startLat: startLat,
                startLon: startLon,
              },
            })
          }
        >
          아니요
        </div>
      </div>
    </div>
  );
}

export default DestCheck;
