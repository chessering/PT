import "../components/page.css";
import { useNavigate } from 'react-router-dom';

function NavigateEnd() {
  const navigate = useNavigate();
  return (
    <div className="EndPage" onClick={() => navigate("/FindRoute")}>
          <p style={{
              marginTop: "305px",
          }}>
              목적지에
              <br/>
              도착했습니다.
              <br/>
              안내를 종료합니다.
          </p>
    </div>
  );
}

export default NavigateEnd;
