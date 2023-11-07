import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Report.css";
import * as TTS from "./TTS";

function PhotoOrReport() {
    const navigate = useNavigate();

    let clickCount1 = 0,
    clickCount2 = 0;
  function handleClickCountEvent1() {
    clickCount1 = clickCount1 + 1;
    if (clickCount1 == 1) {
      TTS.testFun("신고하기 버튼입니다.");
    } else if (clickCount1 == 2) {
      navigate("/ReportComplete");
    }
  }

  function handleClickCountEvent2() {
    clickCount2 = clickCount2 + 1;
    if (clickCount2 == 1) {
      TTS.testFun("사진 다시 찍기 버튼입니다.");
    }
    else if (clickCount2 == 2) {
      navigate("/Report");
    }
  }

    return (
      <div className="Report">
        <div className="Buttons">
          <button className="Camera" onClick={() => handleClickCountEvent1()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="210" height="197" viewBox="0 0 210 197" fill="none">
                <path d="M105.608 54.0248V28M139.032 63.3222L152.171 40.7841M157.242 85.7567L180 72.7443M72.6446 63.3222L59.5055 40.7841M52.7577 85.7567L30 72.7443M151.71 168.625V158.58C151.71 153.537 147.582 149.449 142.49 149.449H68.7259C63.6336 149.449 59.5055 153.537 59.5055 158.58V168.625H151.71ZM136.957 149.449V111.097C136.957 95.967 124.573 83.7021 109.296 83.7021H100.998C85.7206 83.7021 73.3362 95.967 73.3362 111.097V149.449H136.957Z" stroke="#FC6565" strokeWidth="15" strokeLinecap="round"/>
                </svg>
              
            <div className="btn-upload">신고하기</div>
            
          </button>
          <button className="Gallery" onClick={() => handleClickCountEvent2()}>
                
            <svg xmlns="http://www.w3.org/2000/svg" width="145" height="122" viewBox="0 0 145 122" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M40 64.5C40 46.5507 54.5507 32 72.5 32C90.4492 32 105 46.5507 105 64.5C105 82.4492 90.4492 97 72.5 97C54.5507 97 40 82.4492 40 64.5ZM72.5 47C62.835 47 55 54.835 55 64.5C55 74.165 62.835 82 72.5 82C82.165 82 90 74.165 90 64.5C90 54.835 82.165 47 72.5 47Z" fill="#172A46"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M109.984 7H122.5C134.926 7 145 17.0736 145 29.5V99.5C145 111.926 134.926 122 122.5 122H22.5C10.0736 122 0 111.926 0 99.5V29.5C0 17.0736 10.0736 7 22.5 7H35.0164C35.2737 3.09098 38.5259 0 42.5 0H102.5C106.474 0 109.726 3.09098 109.984 7ZM22.5 22C18.3579 22 15 25.3579 15 29.5V99.5C15 103.642 18.3579 107 22.5 107H122.5C126.642 107 130 103.642 130 99.5V29.5C130 25.3579 126.642 22 122.5 22H22.5Z" fill="#172A46"/>
                </svg>
                <div>사진 다시 찍기</div> 
            
          </button>
        </div>
      </div>
    );

}
export default PhotoOrReport;

