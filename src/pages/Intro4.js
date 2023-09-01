import "../components/page.css";

function Intro4() {
  return (
    <div className="startPage" style={{ position: "relative" }}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="100"
          viewBox="-79 -27 190 110"
          fill="none"
          style={{
            position: "absolute",
            left: "43",
            top: "205",
          }}
        >
          <path
            d="M100.111 76.8426C102.679 71.2858 104.241 65.1518 104.554 58.6617C105.858 31.633 85.0038 8.66481 57.975 7.36091C30.9463 6.05702 7.97814 26.9111 6.67424 53.9399C6.02019 67.4978 10.9414 80.034 19.4205 89.3267"
            stroke="white"
            strokeWidth="13"
            strokeLinecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="152.212px"
          height="184.019px"
          viewBox="0 0 166 198"
          fill="none"
          style={{
            position: "absolute",
            left: "93",
            top: "258",
          }}
        >
          <path
            d="M43.4851 94.4929C43.4851 94.4929 26.2104 91.4999 13.7099 108C1.20942 124.5 8.20322 152.5 18.2159 166C21.3414 170.214 31.7123 186 57.7123 191H130.281C156.712 186.5 159.212 159.5 159.212 159.5V90.2765C159.212 90.2765 159.392 75.742 144.926 74.5792C131.039 74.5792 130.281 85.6254 130.281 85.6254M43.4851 94.4929L43.485 20.4997C44.6423 2.47493 71.2596 2.47514 72.4168 20.4998V69.4916M43.4851 94.4929V126M72.4168 103.414V69.4916M72.4168 69.4916V74.5792C72.9955 55.9751 100.77 55.9751 101.349 75.1626M101.349 75.1626V103.414M101.349 75.1626C102.506 58.3006 129.123 57.7172 130.281 74.5792V85.6254M130.281 110V85.6254"
            stroke="white"
            strokeWidth="13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          marginTop: "360px",
          textAlign: "center",
          fontFamily: "EliceDigitalBaeum-Bd",
          fontSize: "35px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
        2
      </div>
      <div
        style={{
          position: "absolute",
          marginTop: "470px",
          textAlign: "center",
          fontFamily: "EliceDigitalBaeum-Bd",
          fontSize: "35px",
          fontStyle: "normal",
          fontWeight: "200",
          lineHeight: "normal",
        }}
      >
        두 번 터치하면
        <br />
        음성 안내를
        <br />
        들을 수 있어요
      </div>
    </div>
  );
}

export default Intro4;
