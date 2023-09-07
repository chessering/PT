import "../components/Report.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'; 
import React from "react";
import axios from 'axios';
import * as TTS from "./TTS";

function Report() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  let photoId;
  let stat;

  let clickCount1 = 0,
    clickCount2 = 0;
  function handleClickCountEvent1() {
    clickCount1 = clickCount1 + 1;
    if (clickCount1 == 1 && !visible) {
      TTS.testFun("카메라로 이동하는 버튼입니다.");
      setVisible(!visible);
    } 
  }

  function handleClickCountEvent2() {
    clickCount2 = clickCount2 + 1;
    if (clickCount2 == 1) {
      TTS.testFun("지도로 이동하는 버튼입니다.");
    }
    else if (clickCount2 == 2) {
      navigate("/ChooseInput");
    }
  }
  

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      let imageUrl; 
      reader.onload = (event) => {
      imageUrl = event.target.result;
      //console.log("선택된 이미지 URL: ", imageUrl);

        // 이제 imageUrl을 상태나 컴포넌트의 데이터에 저장하거나 활용할 수 있습니다.
      };
    reader.readAsDataURL(file);
    console.log(reader.result);
    let body = new FormData();
    

    body.append("photo", file,`${Date.now()}`)
    console.log(body);
    axios.post('http://safe-roadmap-prod-env.eba-56tfx8tr.ap-northeast-2.elasticbeanstalk.com/photo/analysis?x=127.254424&y=37.24141414',body)
      .then((response) => {
        console.log(response);
        
        photoId = response.data.result.postPhotoResult;
        stat = response.data.result.predictResult.displayName;
        console.log(photoId);
        console.log(stat);
      })
    }
  };
  return (
    <div className="Report">
      <div className="Buttons">
        <div className="Camera" style={{marginLeft: "40px"}}onClick={() => {handleClickCountEvent1()}}>
          {visible && <label htmlFor="file">
            <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="210"
              viewBox="0 0 145 122"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40 64.5C40 46.5507 54.5507 32 72.5 32C90.4492 32 105 46.5507 105 64.5C105 82.4492 90.4492 97 72.5 97C54.5507 97 40 82.4492 40 64.5ZM72.5 47C62.835 47 55 54.835 55 64.5C55 74.165 62.835 82 72.5 82C82.165 82 90 74.165 90 64.5C90 54.835 82.165 47 72.5 47Z"
                fill="#FC6565"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M109.984 7H122.5C134.926 7 145 17.0736 145 29.5V99.5C145 111.926 134.926 122 122.5 122H22.5C10.0736 122 0 111.926 0 99.5V29.5C0 17.0736 10.0736 7 22.5 7H35.0164C35.2737 3.09098 38.5259 0 42.5 0H102.5C106.474 0 109.726 3.09098 109.984 7ZM22.5 22C18.3579 22 15 25.3579 15 29.5V99.5C15 103.642 18.3579 107 22.5 107H122.5C126.642 107 130 103.642 130 99.5V29.5C130 25.3579 126.642 22 122.5 22H22.5Z"
                fill="#FC6565"
              />
            </svg>
            <br/>
            <div className="btn-upload">카메라로 이동</div>
            <input
            type="file"
            name="file"
            id="file"
            capture="camera"
            onChange={(e) => {
              handleImageSelect(e);
              navigate('/LoadingPage', {state: {
                id : {photoId},
                stat : {stat},
              }});
            }}
            style={{ display: "none" }}
          />
          </div>
          </label>
          }
           {!visible && (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="210"
                height="230"
                viewBox="0 0 210 197"
                fill="none"
              >
                <path
                  d="M105.608 54.0248V28M139.032 63.3222L152.171 40.7841M157.242 85.7567L180 72.7443M72.6446 63.3222L59.5055 40.7841M52.7577 85.7567L30 72.7443M151.71 168.625V158.58C151.71 153.537 147.582 149.449 142.49 149.449H68.7259C63.6336 149.449 59.5055 153.537 59.5055 158.58V168.625H151.71ZM136.957 149.449V111.097C136.957 95.967 124.573 83.7021 109.296 83.7021H100.998C85.7206 83.7021 73.3362 95.967 73.3362 111.097V149.449H136.957Z"
                  stroke="#FC6565"
                  strokeWidth="15"
                  strokeLinecap="round"
                />
              </svg>
              <br />
              신고하기
            </div>
          )}
        </div>
        <button className="Gallery" onClick={handleClickCountEvent2} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="197"
            viewBox="0 0 150 151"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M100 49C100 62.8071 88.8071 74 75 74C61.1929 74 50 62.8071 50 49C50 35.1929 61.1929 24 75 24C88.8071 24 100 35.1929 100 49ZM85 49C85 54.5229 80.5229 59 75 59C69.4771 59 65 54.5229 65 49C65 43.4771 69.4771 39 75 39C80.5229 39 85 43.4771 85 49Z"
              fill="#172A46"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M121.704 67.8919C123.833 62.3366 125 56.3046 125 50C125 22.3858 102.614 0 75 0C47.3858 0 25 22.3858 25 50C25 56.514 26.2457 62.7371 28.5118 68.444L28.5159 68.5089L39.0052 86.6239L56.0433 113.273C64.8919 127.113 85.1081 127.113 93.9568 113.273L109.534 88.9083L121.704 67.8919ZM104.907 68.192C108.138 62.8908 110 56.6628 110 50C110 30.67 94.33 15 75 15C55.67 15 40 30.67 40 50C40 57.2137 42.1823 63.9176 45.9228 69.4877C46.111 70.0216 46.363 70.5424 46.6811 71.04L66.1811 101.54C66.3678 101.832 66.5714 102.107 66.7898 102.364L68.1811 104.54C68.3728 104.84 68.5822 105.121 68.8072 105.384C71.3255 109.082 76.3479 109.643 79.6259 107.067C80.6866 106.482 81.6206 105.632 82.3189 104.54L83.7102 102.364C83.9286 102.107 84.1322 101.832 84.3189 101.54L103.819 71.04C104.39 70.1461 104.749 69.1768 104.907 68.192Z"
              fill="#172A46"
            />
            <path
              d="M46.4004 105.093C50.2152 106.706 51.9995 111.107 50.3858 114.922C49.4708 117.085 49.2794 119.268 49.7437 121.385C50.214 123.531 51.4025 125.796 53.4916 127.94C55.5914 130.095 58.5009 132.015 62.0967 133.41C65.6867 134.803 69.7493 135.588 73.9476 135.652C78.1455 135.716 82.2602 135.054 85.9461 133.763C89.6379 132.47 92.685 130.624 94.9366 128.502C97.18 126.388 98.5163 124.121 99.114 121.96C99.703 119.83 99.6222 117.652 98.8424 115.503C97.4295 111.609 99.4407 107.307 103.334 105.894C107.228 104.481 111.53 106.493 112.943 110.386C114.773 115.429 115 120.793 113.571 125.958C112.151 131.092 109.199 135.673 105.223 139.419C101.255 143.158 96.3219 146.023 90.9034 147.92C85.479 149.82 79.6033 150.739 73.7206 150.65C67.8383 150.561 62.0067 149.465 56.671 147.394C51.3411 145.326 46.5382 142.297 42.7488 138.409C38.9487 134.509 36.2326 129.802 35.0916 124.597C33.9447 119.365 34.4795 114.022 36.571 109.078C38.1848 105.263 42.5855 103.479 46.4004 105.093Z"
              fill="#172A46"
            />
          </svg>
          <br />
          지도로 이동
        </button>
      </div>
    </div>
  );
}

export default Report;
