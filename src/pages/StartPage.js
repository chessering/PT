import "../components/page.css";
import "../components/Startpage.css";
import * as TTS from "./TTS";
import { useEffect } from "react";

function Start() {
  useEffect(() => {
    window.addEventListener("load", function () {
      setTimeout(function () {
        console.log("hi");
        TTS.testFun("안녕하세요");
      }, 1000); // 5000 밀리초(5초)
    });
    return () => {
      window.removeEventListener("load", function () {
        setTimeout(function () {
          console.log("hi");
          TTS.testFun("안녕하세요");
        }, 1000); // 5000 밀리초(5초)
      });
    };
  }, []);
  return (
    <div className="startPage">
      <div className="image-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="204.129"
          height="113"
          viewBox="0 0 212 121"
          fill="none"
          style={{ position: "absolute", top: "300px", left: "0" }}
        >
          <ellipse
            cx="106.06"
            cy="60.5"
            rx="102.065"
            ry="56.5"
            transform="rotate(-180 106.06 60.5)"
            stroke="#FFFFFF"
            strokeWidth="7"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="103.611"
          height="103.611"
          viewBox="0 0 104 104"
          fill="none"
          style={{ position: "absolute", top: "304px", left: "52px" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M54.7292 0.0805488C53.7628 0.0268531 52.7893 -0.000353259 51.8094 -0.000353217C51.234 -0.000353191 50.6608 0.00903099 50.0899 0.0276467L50.0899 24.7718L54.7292 24.7718L54.7292 0.0805488ZM74.075 5.01515L74.075 98.5951C91.5433 90.2677 103.615 72.4461 103.615 51.8051C103.615 31.1641 91.5433 13.3426 74.075 5.01515ZM54.7292 103.53L54.7292 77.7711L50.0899 77.7711L50.0899 103.583C50.6608 103.601 51.234 103.611 51.8094 103.611C52.7893 103.611 53.7628 103.583 54.7292 103.53ZM30.005 98.8122L30.005 4.79807C12.2883 13.0299 0.00390308 30.9829 0.00390399 51.8051C0.0039049 72.6273 12.2883 90.5803 30.005 98.8122ZM50.0899 65.1392L50.0899 37.4474L54.7292 37.4474L54.7292 65.1392L50.0899 65.1392Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="136"
          height="31"
          viewBox="0 0 136 31"
          fill="none"
          style={{ position: "relative", top: "340px" }}
        >
          <g clipPath="url(#clip0_290_2883)">
            <path
              d="M135.079 7.56693C134.456 6.01621 133.593 4.68087 132.488 3.57527C131.384 2.4553 130.067 1.57943 128.553 0.947661C127.052 0.315887 125.395 0 123.611 0H116.306C114.522 0 112.866 0.315887 111.351 0.947661C109.836 1.57943 108.519 2.4553 107.415 3.57527C106.311 4.68087 105.433 6.01621 104.796 7.56693C104.173 9.10329 103.861 10.7976 103.861 12.6211V18.3789C103.861 20.2168 104.173 21.9111 104.796 23.4474C105.433 24.9838 106.296 26.3191 107.415 27.4391C108.533 28.5591 109.836 29.4349 111.351 30.0667C112.866 30.6841 114.522 30.9856 116.306 30.9856H123.611C125.395 30.9856 127.038 30.6841 128.553 30.0667C130.067 29.4349 131.384 28.5591 132.488 27.4391C133.593 26.3191 134.456 24.9838 135.079 23.4474C135.702 21.9111 136.014 20.2168 136.014 18.3789V12.6211C136.014 10.7976 135.702 9.11765 135.079 7.56693ZM130.62 18.3789C130.62 19.4558 130.45 20.4465 130.096 21.3224C129.77 22.1982 129.289 22.9449 128.666 23.5767C128.043 24.1941 127.293 24.6823 126.429 25.0269C125.565 25.3571 124.617 25.5294 123.569 25.5294H116.306C115.258 25.5294 114.296 25.3571 113.418 25.0269C112.554 24.6823 111.818 24.1941 111.195 23.5767C110.572 22.9449 110.091 22.1982 109.737 21.3224C109.411 20.4321 109.241 19.4558 109.241 18.3789V12.6211C109.241 11.5442 109.411 10.5679 109.737 9.69199C110.077 8.80176 110.572 8.05512 111.195 7.4377C111.818 6.80593 112.554 6.31774 113.418 5.98749C114.296 5.64289 115.244 5.45623 116.306 5.45623H123.611C124.645 5.45623 125.594 5.62853 126.457 5.98749C127.335 6.31774 128.071 6.80593 128.68 7.4377C129.303 8.05512 129.784 8.80176 130.11 9.69199C130.45 10.5679 130.634 11.5299 130.634 12.6211V18.3789H130.62Z"
              fill="#FFFFFF"
            />
            <path
              d="M10.3215 18.2927V18.2496H8.69336V25.113H10.3215V18.2927Z"
              fill="#FFFFFF"
            />
            <path
              d="M10.3215 5.94437V5.91565H8.69336V12.7647H10.3215V5.94437Z"
              fill="#FFFFFF"
            />
            <path
              d="M29.3201 18.8097C29.0511 17.9481 28.6972 17.2015 28.2441 16.541C27.8052 15.8805 27.2955 15.3205 26.7151 14.8611C26.1346 14.3872 25.5258 13.9852 24.8745 13.6837C24.2374 13.3821 23.6003 13.1524 22.9491 13.0088C22.2978 12.8509 21.689 12.7647 21.1086 12.7504H10.3345V18.264H21.0661C21.5616 18.264 22.0147 18.3502 22.4111 18.5225C22.8217 18.6948 23.1756 18.9245 23.4446 19.2404C23.7419 19.5419 23.9543 19.9153 24.11 20.3317C24.2658 20.7481 24.3366 21.2219 24.3366 21.7244C24.3366 22.7582 24.0392 23.591 23.4588 24.2085C22.8925 24.8259 22.0855 25.1274 21.0519 25.1274H10.3203V30.598H21.0519C21.6324 30.598 22.2412 30.5262 22.8925 30.3826C23.5579 30.239 24.2091 30.0236 24.8462 29.7365C25.4833 29.4493 26.0921 29.0616 26.6868 28.6021C27.2814 28.1427 27.8052 27.5827 28.2441 26.9222C28.683 26.2617 29.0369 25.5007 29.3059 24.6536C29.5891 23.7777 29.7165 22.8157 29.7165 21.7244C29.7165 20.6332 29.5891 19.6712 29.3201 18.824V18.8097Z"
              fill="#FFFFFF"
            />
            <path
              d="M8.69197 30.5406V26.0176V25.1418V25.113H0.253906V30.5836H8.69197V30.5406Z"
              fill="#FFFFFF"
            />
            <path
              d="M8.69241 0.488174V0.416382H8.64994C7.77216 0.416382 6.83774 0.574325 5.83253 0.904571C4.82733 1.2061 3.87876 1.72301 3.01513 2.44093C2.1515 3.1445 1.44361 4.06344 0.863141 5.19776C0.296828 6.31772 0.0136719 7.69614 0.0136719 9.34737C0.0136719 10.9986 0.296828 12.377 0.863141 13.5113C1.44361 14.6457 2.16566 15.5646 3.01513 16.2682C3.89291 16.9717 4.82733 17.4743 5.83253 17.8045C6.83774 18.1061 7.78631 18.264 8.64994 18.264H8.69241V12.7503H8.64994C7.63058 12.7503 6.82358 12.4488 6.24311 11.8457C5.6768 11.2283 5.39364 10.3955 5.39364 9.34737C5.39364 8.2992 5.6768 7.48076 6.24311 6.84899C6.82358 6.21722 7.63058 5.90133 8.64994 5.90133H8.69241V4.56599V0.488174Z"
              fill="#FFFFFF"
            />
            <path
              d="M10.3203 0.416382V0.473816V4.55163V5.88697H26.9982V0.416382H10.3203Z"
              fill="#FFFFFF"
            />
            <path
              d="M89.4069 20.7193C90.0723 20.7193 90.7802 20.6476 91.5164 20.4896C92.2809 20.3317 93.0171 20.0876 93.7533 19.7573C94.5037 19.4127 95.2116 18.9676 95.8912 18.4363C96.5708 17.9051 97.1654 17.2589 97.6751 16.5267C98.1989 15.7657 98.6095 14.9042 98.921 13.9134C99.2324 12.9227 99.374 11.8171 99.374 10.5679V7.07877C99.374 6.40392 99.2607 5.686 99.0201 4.91064C98.7935 4.13528 98.4254 3.41735 97.9016 2.77122C97.3919 2.09637 96.7265 1.55075 95.8912 1.10564C95.0559 0.660522 94.0507 0.430786 92.8472 0.430786H73.267V6.00188C73.267 6.00188 71.7804 6.01624 71.6388 6.04496V0.531296C71.5256 0.560013 71.4123 0.58873 71.299 0.631805C70.9734 0.77539 70.6761 0.962051 70.4213 1.2205C70.1806 1.47896 69.9965 1.76613 69.8549 2.11073C69.7134 2.45533 69.6426 2.79994 69.6426 3.18762V30.598H71.6105V25.2279H73.2387V30.598H75.0226V5.88702H92.8189C92.9322 5.88702 93.0455 5.88702 93.1729 5.90137C93.3144 5.90137 93.4419 5.95881 93.541 6.04496C93.6684 6.11675 93.7675 6.23162 93.8383 6.40392C93.9232 6.56186 93.9657 6.7916 93.9657 7.09313V10.5392C93.9657 11.2571 93.8524 11.8889 93.6401 12.4488C93.4136 12.9945 93.1021 13.4683 92.6915 13.856C92.2951 14.2437 91.8137 14.5595 91.2333 14.8036C90.6811 15.0334 90.0582 15.1626 89.3927 15.22H77.2029V20.6906H81.0821L92.3234 30.5549H100.662L89.4069 20.6906V20.7193ZM73.267 18.3646H72.0777C71.9361 18.3646 71.7804 18.3358 71.6247 18.3215V12.8078C71.7663 12.8078 71.9078 12.8365 72.0777 12.8365H73.267V18.3502V18.3646Z"
              fill="#FFFFFF"
            />
            <path
              d="M63.1719 2.09633C63.0303 1.76608 62.8463 1.46455 62.5914 1.2061C62.3366 0.947646 62.0534 0.760986 61.7136 0.617401C61.6145 0.574325 61.5154 0.559967 61.4163 0.53125V6.00184C61.4163 6.00184 59.9297 6.0162 59.7882 6.04491V0.416382H48.5185C46.3807 0.416382 44.3986 0.789703 42.5864 1.53634C40.7742 2.28299 39.2027 3.3168 37.8719 4.65214C36.541 5.98748 35.5075 7.58127 34.7571 9.43352C34.0068 11.2858 33.6387 13.3103 33.6387 15.5072V30.5836H39.0328V23.1746H57.9901V30.5836H59.7882V25.2279H61.4163V30.5836H63.3842V3.17321C63.3842 2.79989 63.3135 2.44093 63.1719 2.09633ZM57.9901 17.704H39.0328V15.4928C39.0328 13.9708 39.2452 12.6642 39.6557 11.6017C40.0805 10.5248 40.6185 9.62018 41.2697 8.90225C41.921 8.18433 42.6289 7.62435 43.4076 7.22231C44.1862 6.82027 44.9083 6.51874 45.602 6.31773C46.3099 6.11671 46.9187 6.00184 47.4425 5.95876C47.9805 5.90133 48.3345 5.87261 48.5044 5.87261H57.976V17.6897L57.9901 17.704ZM61.4163 18.3645H60.2271C60.0855 18.3645 59.9297 18.3358 59.774 18.3214V12.8078C59.9156 12.8078 60.0572 12.8365 60.2271 12.8365H61.4163V18.3501V18.3645Z"
              fill="#FFFFFF"
            />
          </g>
          <defs>
            <clipPath id="clip0_290_2883">
              <rect width="136" height="31" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="290"
          height="23"
          viewBox="0 0 290 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", top: "330" }}
        >
          <path
            d="M21.7773 15.8184C21.7773 16.5703 21.6797 17.249 21.4844 17.8545C21.2988 18.4502 21.0498 18.9775 20.7373 19.4365C20.4248 19.8955 20.0586 20.2861 19.6387 20.6084C19.2188 20.9307 18.7842 21.1943 18.335 21.3994C17.8857 21.6045 17.4268 21.7559 16.958 21.8535C16.499 21.9512 16.0645 22 15.6543 22H0.961914V18.1914H15.6543C16.3867 18.1914 16.9531 17.9766 17.3535 17.5469C17.7637 17.1172 17.9688 16.541 17.9688 15.8184C17.9688 15.4668 17.915 15.1445 17.8076 14.8516C17.7002 14.5586 17.5439 14.3047 17.3389 14.0898C17.1436 13.875 16.8994 13.709 16.6064 13.5918C16.3232 13.4746 16.0059 13.416 15.6543 13.416H6.89453C6.2793 13.416 5.61523 13.3086 4.90234 13.0938C4.18945 12.8691 3.52539 12.5127 2.91016 12.0244C2.30469 11.5361 1.79688 10.8965 1.38672 10.1055C0.986328 9.31445 0.786133 8.34766 0.786133 7.20508C0.786133 6.0625 0.986328 5.10059 1.38672 4.31934C1.79688 3.52832 2.30469 2.88867 2.91016 2.40039C3.52539 1.90234 4.18945 1.5459 4.90234 1.33105C5.61523 1.10645 6.2793 0.994141 6.89453 0.994141H19.8584V4.80273H6.89453C6.17188 4.80273 5.60547 5.02246 5.19531 5.46191C4.79492 5.90137 4.59473 6.48242 4.59473 7.20508C4.59473 7.9375 4.79492 8.51855 5.19531 8.94824C5.60547 9.36816 6.17188 9.57812 6.89453 9.57812H15.6543H15.6836C16.0938 9.58789 16.5283 9.64648 16.9873 9.75391C17.4463 9.85156 17.9004 10.0078 18.3496 10.2227C18.8086 10.4375 19.2432 10.7109 19.6533 11.043C20.0635 11.3652 20.4248 11.7559 20.7373 12.2148C21.0596 12.6738 21.3135 13.2012 21.499 13.7969C21.6846 14.3926 21.7773 15.0664 21.7773 15.8184ZM45.5518 22H41.7432V16.8438H28.3545V22H24.5459V11.4971C24.5459 9.96387 24.8096 8.55273 25.3369 7.26367C25.8643 5.97461 26.5967 4.86621 27.5342 3.93848C28.4717 3.01074 29.5801 2.28809 30.8594 1.77051C32.1387 1.25293 33.5352 0.994141 35.0488 0.994141H43.6328C43.8965 0.994141 44.1455 1.04297 44.3799 1.14062C44.6143 1.23828 44.8193 1.375 44.9951 1.55078C45.1709 1.72656 45.3076 1.93164 45.4053 2.16602C45.5029 2.40039 45.5518 2.64941 45.5518 2.91309V22ZM28.3545 13.0352H41.7432V4.80273H35.0488C34.9316 4.80273 34.6826 4.82227 34.3018 4.86133C33.9307 4.89062 33.4961 4.97363 32.998 5.11035C32.5098 5.24707 31.9922 5.45703 31.4453 5.74023C30.8984 6.02344 30.3955 6.41406 29.9365 6.91211C29.4775 7.41016 29.0967 8.03516 28.7939 8.78711C28.501 9.5293 28.3545 10.4326 28.3545 11.4971V13.0352ZM67.3633 13.416H55.3223V9.57812H67.3633V13.416ZM69.0625 4.80273H53.7988V22H49.9902V2.91309C49.9902 2.64941 50.0391 2.40039 50.1367 2.16602C50.2344 1.93164 50.3662 1.72656 50.5322 1.55078C50.708 1.375 50.9131 1.23828 51.1475 1.14062C51.3818 1.04297 51.6357 0.994141 51.9092 0.994141H69.0625V4.80273ZM89.4092 13.416H77.3828V9.57812H89.4092V13.416ZM91.123 22H77.3828C76.8555 22 76.2793 21.9072 75.6543 21.7217C75.0293 21.5361 74.4482 21.2334 73.9111 20.8135C73.3838 20.3838 72.9395 19.832 72.5781 19.1582C72.2266 18.4746 72.0508 17.6396 72.0508 16.6533V2.91309C72.0508 2.64941 72.0996 2.40039 72.1973 2.16602C72.2949 1.93164 72.4268 1.72656 72.5928 1.55078C72.7686 1.375 72.9736 1.23828 73.208 1.14062C73.4424 1.04297 73.6963 0.994141 73.9697 0.994141H91.123V4.80273H75.8594V16.6533C75.8594 17.1514 75.9912 17.5322 76.2549 17.7959C76.5186 18.0596 76.9043 18.1914 77.4121 18.1914H91.123V22ZM125.562 8.05469C125.562 8.92383 125.454 9.7002 125.239 10.3838C125.024 11.0674 124.731 11.6729 124.36 12.2002C123.999 12.7178 123.579 13.1621 123.101 13.5332C122.622 13.9043 122.119 14.2119 121.592 14.4561C121.074 14.6904 120.547 14.8613 120.01 14.9688C119.482 15.0762 118.984 15.1299 118.516 15.1299L126.47 22H120.581L112.642 15.1299H109.902V11.3213H118.516C118.994 11.2822 119.429 11.1846 119.819 11.0283C120.22 10.8623 120.562 10.6426 120.845 10.3691C121.138 10.0957 121.362 9.76855 121.519 9.3877C121.675 8.99707 121.753 8.55273 121.753 8.05469V5.65234C121.753 5.4375 121.724 5.27637 121.665 5.16895C121.616 5.05176 121.548 4.96875 121.46 4.91992C121.382 4.86133 121.294 4.82715 121.196 4.81738C121.108 4.80762 121.025 4.80273 120.947 4.80273H108.379V22H104.57V2.91309C104.57 2.64941 104.619 2.40039 104.717 2.16602C104.814 1.93164 104.946 1.72656 105.112 1.55078C105.288 1.375 105.493 1.23828 105.728 1.14062C105.962 1.04297 106.216 0.994141 106.489 0.994141H120.947C121.797 0.994141 122.515 1.15039 123.101 1.46289C123.687 1.76563 124.16 2.15137 124.521 2.62012C124.893 3.0791 125.156 3.57715 125.312 4.11426C125.479 4.65137 125.562 5.1543 125.562 5.62305V8.05469ZM151.431 13.5039C151.431 14.7832 151.211 15.96 150.771 17.0342C150.332 18.1084 149.722 19.0361 148.94 19.8174C148.159 20.5986 147.231 21.209 146.157 21.6484C145.093 22.0781 143.931 22.293 142.671 22.293H137.515C136.255 22.293 135.088 22.0781 134.014 21.6484C132.939 21.209 132.012 20.5986 131.23 19.8174C130.449 19.0361 129.834 18.1084 129.385 17.0342C128.945 15.96 128.726 14.7832 128.726 13.5039V9.49023C128.726 8.2207 128.945 7.04883 129.385 5.97461C129.834 4.89062 130.449 3.96289 131.23 3.19141C132.012 2.41016 132.939 1.7998 134.014 1.36035C135.088 0.920898 136.255 0.701172 137.515 0.701172H142.671C143.931 0.701172 145.093 0.920898 146.157 1.36035C147.231 1.7998 148.159 2.41016 148.94 3.19141C149.722 3.96289 150.332 4.89062 150.771 5.97461C151.211 7.04883 151.431 8.2207 151.431 9.49023V13.5039ZM147.622 9.49023C147.622 8.73828 147.5 8.05957 147.256 7.4541C147.021 6.83887 146.685 6.31641 146.245 5.88672C145.815 5.44727 145.293 5.11035 144.678 4.87598C144.072 4.63184 143.403 4.50977 142.671 4.50977H137.515C136.772 4.50977 136.094 4.63184 135.479 4.87598C134.873 5.11035 134.351 5.44727 133.911 5.88672C133.472 6.31641 133.13 6.83887 132.886 7.4541C132.651 8.05957 132.534 8.73828 132.534 9.49023V13.5039C132.534 14.2559 132.651 14.9395 132.886 15.5547C133.13 16.1602 133.472 16.6826 133.911 17.1221C134.351 17.5518 134.873 17.8887 135.479 18.1328C136.094 18.3672 136.772 18.4844 137.515 18.4844H142.642C143.384 18.4844 144.058 18.3672 144.663 18.1328C145.278 17.8887 145.806 17.5518 146.245 17.1221C146.685 16.6826 147.021 16.1602 147.256 15.5547C147.5 14.9395 147.622 14.2559 147.622 13.5039V9.49023ZM175.806 22H171.997V16.8438H158.608V22H154.8V11.4971C154.8 9.96387 155.063 8.55273 155.591 7.26367C156.118 5.97461 156.851 4.86621 157.788 3.93848C158.726 3.01074 159.834 2.28809 161.113 1.77051C162.393 1.25293 163.789 0.994141 165.303 0.994141H173.887C174.15 0.994141 174.399 1.04297 174.634 1.14062C174.868 1.23828 175.073 1.375 175.249 1.55078C175.425 1.72656 175.562 1.93164 175.659 2.16602C175.757 2.40039 175.806 2.64941 175.806 2.91309V22ZM158.608 13.0352H171.997V4.80273H165.303C165.186 4.80273 164.937 4.82227 164.556 4.86133C164.185 4.89062 163.75 4.97363 163.252 5.11035C162.764 5.24707 162.246 5.45703 161.699 5.74023C161.152 6.02344 160.649 6.41406 160.19 6.91211C159.731 7.41016 159.351 8.03516 159.048 8.78711C158.755 9.5293 158.608 10.4326 158.608 11.4971V13.0352ZM201.206 13.2109C201.206 14.4902 200.981 15.667 200.532 16.7412C200.093 17.8154 199.482 18.7432 198.701 19.5244C197.92 20.2959 196.992 20.9014 195.918 21.3408C194.844 21.7803 193.677 22 192.417 22H182.134C181.86 22 181.606 21.9512 181.372 21.8535C181.138 21.7559 180.933 21.624 180.757 21.458C180.591 21.2822 180.459 21.0771 180.361 20.8428C180.264 20.6084 180.215 20.3545 180.215 20.0811V2.91309C180.215 2.64941 180.264 2.40039 180.361 2.16602C180.459 1.93164 180.591 1.72656 180.757 1.55078C180.933 1.375 181.138 1.23828 181.372 1.14062C181.606 1.04297 181.86 0.994141 182.134 0.994141H192.417C193.677 0.994141 194.844 1.21387 195.918 1.65332C196.992 2.09277 197.92 2.70313 198.701 3.48438C199.482 4.25586 200.093 5.18359 200.532 6.26758C200.981 7.3418 201.206 8.51367 201.206 9.7832V13.2109ZM197.397 9.7832C197.397 9.04102 197.275 8.3623 197.031 7.74707C196.797 7.13184 196.46 6.60937 196.021 6.17969C195.581 5.74023 195.054 5.40332 194.438 5.16895C193.833 4.9248 193.159 4.80273 192.417 4.80273H184.023V18.1914H192.417C193.159 18.1914 193.833 18.0742 194.438 17.8398C195.054 17.5957 195.581 17.2588 196.021 16.8291C196.46 16.3896 196.797 15.8672 197.031 15.2617C197.275 14.6465 197.397 13.9629 197.397 13.2109V9.7832ZM239.146 22H235.308V9.49023L228.555 21.3701C228.389 21.6729 228.154 21.9023 227.852 22.0586C227.559 22.2148 227.241 22.293 226.899 22.293C226.567 22.293 226.255 22.2148 225.962 22.0586C225.679 21.9023 225.454 21.6729 225.288 21.3701L218.506 9.49023V22H214.697V2.62012C214.697 2.18066 214.824 1.79004 215.078 1.44824C215.342 1.10645 215.684 0.876953 216.104 0.759766C216.309 0.710938 216.514 0.696289 216.719 0.71582C216.924 0.725586 217.119 0.769531 217.305 0.847656C217.5 0.916016 217.676 1.01855 217.832 1.15527C217.988 1.28223 218.12 1.43848 218.228 1.62402L226.899 16.6973L235.571 1.62402C235.796 1.25293 236.104 0.989258 236.494 0.833008C236.895 0.676758 237.31 0.652344 237.739 0.759766C238.149 0.876953 238.486 1.10645 238.75 1.44824C239.014 1.79004 239.146 2.18066 239.146 2.62012V22ZM264.194 22H260.386V16.8438H246.997V22H243.188V11.4971C243.188 9.96387 243.452 8.55273 243.979 7.26367C244.507 5.97461 245.239 4.86621 246.177 3.93848C247.114 3.01074 248.223 2.28809 249.502 1.77051C250.781 1.25293 252.178 0.994141 253.691 0.994141H262.275C262.539 0.994141 262.788 1.04297 263.022 1.14062C263.257 1.23828 263.462 1.375 263.638 1.55078C263.813 1.72656 263.95 1.93164 264.048 2.16602C264.146 2.40039 264.194 2.64941 264.194 2.91309V22ZM246.997 13.0352H260.386V4.80273H253.691C253.574 4.80273 253.325 4.82227 252.944 4.86133C252.573 4.89062 252.139 4.97363 251.641 5.11035C251.152 5.24707 250.635 5.45703 250.088 5.74023C249.541 6.02344 249.038 6.41406 248.579 6.91211C248.12 7.41016 247.739 8.03516 247.437 8.78711C247.144 9.5293 246.997 10.4326 246.997 11.4971V13.0352ZM289.565 9.7832C289.565 10.6523 289.458 11.4287 289.243 12.1123C289.028 12.7959 288.735 13.4014 288.364 13.9287C288.003 14.4463 287.583 14.8906 287.104 15.2617C286.626 15.6328 286.123 15.9355 285.596 16.1699C285.078 16.4043 284.551 16.5752 284.014 16.6826C283.486 16.79 282.988 16.8438 282.52 16.8438H273.906V13.0352H282.52C283.008 12.9961 283.447 12.8984 283.838 12.7422C284.238 12.5762 284.58 12.3564 284.863 12.083C285.146 11.8096 285.366 11.4824 285.522 11.1016C285.679 10.7109 285.757 10.2715 285.757 9.7832V8.05469C285.708 7.57617 285.605 7.13672 285.449 6.73633C285.293 6.33594 285.078 5.99414 284.805 5.71094C284.541 5.42773 284.219 5.20801 283.838 5.05176C283.457 4.88574 283.018 4.80273 282.52 4.80273H273.936C273.428 4.80273 273.042 4.93457 272.778 5.19824C272.515 5.46191 272.383 5.84277 272.383 6.34082V22H268.574V6.34082C268.574 5.36426 268.75 4.53418 269.102 3.85059C269.463 3.16699 269.907 2.61523 270.435 2.19531C270.972 1.77539 271.553 1.47266 272.178 1.28711C272.803 1.0918 273.379 0.994141 273.906 0.994141H282.52C283.379 0.994141 284.15 1.10645 284.834 1.33105C285.518 1.5459 286.118 1.83887 286.636 2.20996C287.163 2.57129 287.607 2.99121 287.969 3.46973C288.34 3.94824 288.643 4.45117 288.877 4.97852C289.121 5.49609 289.297 6.02344 289.404 6.56055C289.512 7.08789 289.565 7.58594 289.565 8.05469V9.7832Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </div>
  );
}

export default Start;
