import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../RouteSummary.css";
import TTS from "../../pages/TTS";

function RouteSummary() {

    const [path, setPath] = useState(null);
    const [subPathList, setSubPathList] = useState([]);
    
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state);

    const SX = location.state.SX;
    const SY = location.state.SY;
    const EX = location.state.EX;
    const EY = location.state.EY;
    const subPath = location.state.inform.subPath;
    const totalTime = location.state.info.totalTime;
    console.log(SX);

    let clickCount1 = 0,
    clickCount2 = 0;
    function handleClickCountEvent1() {
        clickCount1 = clickCount1 + 1;
        if (clickCount1 == 1) {
        TTS.testFun("초기화면으로 돌아가는 버튼입니다.");
        } else if (clickCount1 == 2) {
        navigate("/FindRoute");
        }
    }


    useEffect(() => {

        console.log(subPath);
        console.log(totalTime);

        for (var i in subPath) {
          subPathList.push(subPath[i]);
        }

        console.log(subPathList);
        // 이제 subPathList를 사용하여 렌더링할 수 있음
        for (var i in subPath) {
            if (subPath[i].trafficType == 1) {
                if (subPath[i].startName[subPath[i].startName.length - 1] != '역') {
                    subPath[i].startName += '역';
                }
                if (subPath[i].endName[subPath[i].endName.length - 1] != '역') {
                    subPath[i].endName += '역';
                }
            }
        }

        setPath(path);
        setSubPathList(subPathList);
      }, []);

    return(
        <div className="Content">
            <div className="TotalTime">{totalTime}분</div>

            {subPathList.map((item, index) => {
                return(
                    <div className="Container" key = {index}>
                        <div className="Time">
                            {item.sectionTime}분
                        </div>
                        <div className="image-wrap">
                            <div>
                                {item.trafficType == 1 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M36.9423 37.2814C37.5862 36.918 38.4095 37.1336 38.7812 37.763L41.7427 42.7768C42.1145 43.4061 41.8939 44.2108 41.25 44.5742C40.6061 44.9375 39.7829 44.7219 39.4111 44.0926L38.548 42.6314H12.5992L11.5889 44.3419C11.2172 44.9712 10.3939 45.1868 9.75 44.8235C9.10614 44.4602 8.88554 43.6554 9.25727 43.0261L12.2188 38.0123C12.5905 37.383 13.4138 37.1674 14.0577 37.5307C14.7015 37.894 14.9221 38.6988 14.5504 39.3281L14.1536 39.9998H36.9936L36.4496 39.0788C36.0779 38.4494 36.2985 37.6447 36.9423 37.2814Z" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0385 5C9.80808 5 8 6.76729 8 8.94735V35.263C8 37.4431 9.80808 39.2103 12.0385 39.2103H38.9615C41.1919 39.2103 43 37.4431 43 35.263V8.94735C43 6.76729 41.1919 5 38.9615 5H12.0385ZM13.3846 36.0525C14.8715 36.0525 16.0769 34.8743 16.0769 33.4209C16.0769 31.9675 14.8715 30.7893 13.3846 30.7893C11.8977 30.7893 10.6923 31.9675 10.6923 33.4209C10.6923 34.8743 11.8977 36.0525 13.3846 36.0525ZM40.3077 33.4209C40.3077 34.8743 39.1023 36.0525 37.6154 36.0525C36.1285 36.0525 34.9231 34.8743 34.9231 33.4209C34.9231 31.9675 36.1285 30.7893 37.6154 30.7893C39.1023 30.7893 40.3077 31.9675 40.3077 33.4209ZM14.7308 12.3684C13.2438 12.3684 12.0385 13.5466 12.0385 14.9999V25.5262C12.0385 26.9796 13.2438 28.1578 14.7308 28.1578H36.2692C37.7562 28.1578 38.9615 26.9796 38.9615 25.5262V14.9999C38.9615 13.5466 37.7562 12.3684 36.2692 12.3684H14.7308Z" fill="white"/>
                                    </svg>
                                    :
                                    (item.trafficType == 2 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M36.9423 37.2814C37.5862 36.918 38.4095 37.1336 38.7812 37.763L41.7427 42.7768C42.1145 43.4061 41.8939 44.2108 41.25 44.5742C40.6061 44.9375 39.7829 44.7219 39.4111 44.0926L38.548 42.6314H12.5992L11.5889 44.3419C11.2172 44.9712 10.3939 45.1868 9.75 44.8235C9.10614 44.4602 8.88554 43.6554 9.25727 43.0261L12.2188 38.0123C12.5905 37.383 13.4138 37.1674 14.0577 37.5307C14.7015 37.894 14.9221 38.6988 14.5504 39.3281L14.1536 39.9998H36.9936L36.4496 39.0788C36.0779 38.4494 36.2985 37.6447 36.9423 37.2814Z" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0385 5C9.80808 5 8 6.76729 8 8.94735V35.263C8 37.4431 9.80808 39.2103 12.0385 39.2103H38.9615C41.1919 39.2103 43 37.4431 43 35.263V8.94735C43 6.76729 41.1919 5 38.9615 5H12.0385ZM13.3846 36.0525C14.8715 36.0525 16.0769 34.8743 16.0769 33.4209C16.0769 31.9675 14.8715 30.7893 13.3846 30.7893C11.8977 30.7893 10.6923 31.9675 10.6923 33.4209C10.6923 34.8743 11.8977 36.0525 13.3846 36.0525ZM40.3077 33.4209C40.3077 34.8743 39.1023 36.0525 37.6154 36.0525C36.1285 36.0525 34.9231 34.8743 34.9231 33.4209C34.9231 31.9675 36.1285 30.7893 37.6154 30.7893C39.1023 30.7893 40.3077 31.9675 40.3077 33.4209ZM14.7308 12.3684C13.2438 12.3684 12.0385 13.5466 12.0385 14.9999V25.5262C12.0385 26.9796 13.2438 28.1578 14.7308 28.1578H36.2692C37.7562 28.1578 38.9615 26.9796 38.9615 25.5262V14.9999C38.9615 13.5466 37.7562 12.3684 36.2692 12.3684H14.7308Z" fill="white"/>
                                    </svg>
                                    :
                                    (index == 0 ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="37" viewBox="0 0 29 37" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.5 37C14.5 37 29 23.2843 29 15C29 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 14.5 37 14.5 37ZM14.5 20C17.5376 20 20 17.5375 20 14.5C20 11.4624 17.5376 8.99997 14.5 8.99997C11.4624 8.99997 9 11.4624 9 14.5C9 17.5375 11.4624 20 14.5 20Z" fill="white"/>
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
                                        <circle cx="13" cy="4.51514" r="4" fill="white"/>
                                        <path d="M3 22.4205L5.66667 16.907L10.6667 12.5151H14V18.0151M10 16.0151L9.33333 25.9881L5.66667 37.0151M17 37.0151L14 25.9881V18.0151M14 18.0151L17.5 22.4205" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    ))
                                }
                            </div>
                            <div>
                                {item.trafficType == 3 ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="75" viewBox="0 0 4 75" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 4.02531L0.5 0.939453L3.5 0.939453L3.5 4.02531L0.5 4.02531ZM0.500001 16.3687L0.5 10.197H3.5L3.5 16.3687H0.500001ZM0.500001 28.7122L0.500001 22.5405H3.5L3.5 28.7122H0.500001ZM0.500002 41.0556L0.500001 34.8839H3.5L3.5 41.0556H0.500002ZM0.500002 53.3991L0.500002 47.2273H3.5L3.5 53.3991H0.500002ZM0.500003 65.7425L0.500003 59.5708H3.5L3.5 65.7425H0.500003ZM0.500003 75.0001L0.500003 71.9142H3.5L3.5 75.0001H0.500003Z" fill="white"/>
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="65" viewBox="0 0 16 81" fill="none">
                                        <path d="M8.00001 64.6818C3.58173 64.6818 5.96779e-06 68.2635 6.35405e-06 72.6818C6.74031e-06 77.1001 3.58173 80.6818 8.00001 80.6818C12.4183 80.6818 16 77.1001 16 72.6818C16 68.2635 12.4183 64.6818 8.00001 64.6818ZM6.5 1.31134e-07L6.50001 72.6818L9.50001 72.6818L9.5 -1.31134e-07L6.5 1.31134e-07Z" fill="white"/>
                                        </svg>
                                }
                            </div>

                        </div>

                        <div className="text-wrap">
                        <div className="text">
                            {
                                item.trafficType == 3 ?
                                (index == 0 ?
                                <div>출발<br/>도보 {item.distance}m 이동</div>
                                : (
                                    subPathList[index-1].trafficType == 2 ? // 버스
                                    <div>{subPathList[index-1].lastEndStation} 하차<br/>{item.distance}m 이동</div>
                                    :
                                    <div>{subPathList[index-1].endName} 하차<br/>{item.distance}m 이동</div>
                                ))
                                :
                                (item.trafficType == 2 ?
                                //버스
                                <div>{item.firstStartStation} 승차<br/>{item.stationCount}개 정류장 이동</div>
                                :
                                //지하철
                                <div>{item.startName} <br/>{item.stationCount}개 역 이동</div>
                                )
                            }
                            </div>
                        </div>
                    </div>
                );

                })
            }
            <div>
                <div className="EndContainer">
                    <div className="endmark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="37" viewBox="0 0 29 37" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 37C14.5 37 29 23.2843 29 15C29 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 14.5 37 14.5 37ZM14.5 20C17.5376 20 20 17.5375 20 14.5C20 11.4624 17.5376 8.99997 14.5 8.99997C11.4624 8.99997 9 11.4624 9 14.5C9 17.5375 11.4624 20 14.5 20Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="endText">
                        도착
                    </div>
                </div>
            </div>
            <div className="Buttons">
            <button className="UpdateBtn">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 100 100"
                fill="none"
                >
                <rect width="100" height="100" rx="23" fill="#172A46" />
                <path
                    d="M75.7287 50C75.7287 43.6161 73.632 37.4106 69.7639 32.3459C65.8959 27.2812 60.4725 23.6404 54.335 21.9882C48.1975 20.3359 41.6888 20.7645 35.8185 23.2075C29.9481 25.6505 25.0441 29.9714 21.8671 35.5C18.6901 41.0286 17.4176 47.456 18.247 53.7852C19.0763 60.1145 21.9612 65.992 26.4542 70.5061C30.9472 75.0202 36.7971 77.9186 43.0968 78.7519C49.3965 79.5851 55.7938 78.3066 61.2965 75.1147M83 28.4885L77.2881 49.9058C77.079 50.6899 76.1034 50.9526 75.5321 50.3786L59.9269 34.7"
                    stroke="white"
                    strokeWidth="10"
                    strokeLinecap="round"
                />
                </svg>
            </button>
            <button className="StopBtn">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 100 100"
                fill="none"
                >
                <rect width="100" height="100" rx="23" fill="#172A46" />
                <path
                    d="M32 21V79M69 21V79"
                    stroke="white"
                    strokeWidth="10"
                    strokeLinecap="round"
                />
                </svg>
            </button>
            <button className="StartBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="23" fill="#172A46"/>
                <path d="M72.2349 44.4694C75.9217 47.5049 75.9217 52.4951 72.2349 55.5306L47.6475 75.7745C41.8205 80.572 32 77.101 32 70.2438L32 29.7562C32 22.8991 41.8205 19.428 47.6475 24.2255L72.2349 44.4694Z" stroke="white" strokeWidth="10"/>
                </svg>
            </button>
            </div>

            </div>
    );
}

export default RouteSummary;
