import React from "react";
import "../components/ChooseInput.css";
import { useNavigate } from "react-router-dom";

function ChooseInput() {
  const navigate = useNavigate();
  return (
    <div className="ChooseInput">
      <div className="Buttons">
        <button className="StartPointBtn" onClick={() => navigate("/Map")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 150 155"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M100 62C100 75.8071 88.8071 87 75 87C61.1929 87 50 75.8071 50 62C50 48.1929 61.1929 37 75 37C88.8071 37 100 48.1929 100 62ZM85 62C85 67.5229 80.5229 72 75 72C69.4771 72 65 67.5229 65 62C65 56.4771 69.4771 52 75 52C80.5229 52 85 56.4771 85 62Z"
              fill="#172A46"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M121.704 80.8919C123.833 75.3366 125 69.3046 125 63C125 35.3858 102.614 13 75 13C47.3858 13 25 35.3858 25 63C25 69.514 26.2457 75.7371 28.5118 81.444L28.5159 81.5089L39.0052 99.6239L56.0433 126.273C64.8919 140.113 85.1081 140.113 93.9568 126.273L109.534 101.908L121.704 80.8919ZM104.907 81.192C108.138 75.8908 110 69.6628 110 63C110 43.67 94.33 28 75 28C55.67 28 40 43.67 40 63C40 70.2137 42.1823 76.9176 45.9228 82.4877C46.111 83.0216 46.363 83.5424 46.6811 84.04L66.1811 114.54C66.3678 114.832 66.5714 115.107 66.7898 115.364L68.1811 117.54C68.3728 117.84 68.5822 118.121 68.8072 118.384C71.3255 122.082 76.3479 122.643 79.6259 120.067C80.6866 119.482 81.6206 118.632 82.3189 117.54L83.7102 115.364C83.9286 115.107 84.1322 114.832 84.3189 114.54L103.819 84.04C104.39 83.1461 104.749 82.1768 104.907 81.192Z"
              fill="#172A46"
            />
          </svg>
          <br />
          현재 위치
        </button>
        <br />
        <button
          className="DestinationBtn"
          onClick={() => navigate("/SearchArea")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 120 135"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M95 60C95 79.33 79.33 95 60 95C40.67 95 25 79.33 25 60C25 40.67 40.67 25 60 25C79.33 25 95 40.67 95 60ZM80 60C80 71.0457 71.0457 80 60 80C48.9543 80 40 71.0457 40 60C40 48.9543 48.9543 40 60 40C71.0457 40 80 48.9543 80 60Z"
              fill="#172A46"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60ZM105 60C105 84.8528 84.8528 105 60 105C35.1472 105 15 84.8528 15 60C15 35.1472 35.1472 15 60 15C84.8528 15 105 35.1472 105 60Z"
              fill="#172A46"
            />
          </svg>
          <br />
          출발지 입력
        </button>
      </div>
    </div>
  );
}

export default ChooseInput;
