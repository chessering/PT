import $ from "jquery";
window.$ = $;
let isPlayingAudio = false;
export function testFun(text) {
  if (isPlayingAudio) {
    return; // 이미 음성이 재생 중이면 추가 호출을 막음
  }

  isPlayingAudio = true; // 음성 재생 중임을 표시

  var audioFile = new Audio();
  audioFile.onended = function () {
    isPlayingAudio = false; // 재생이 종료되면 플래그를 다시 false로 설정
  };

  var data = {
    voice: {
      languageCode: "ko-KR",
      name: "ko-KR-Neural2-C",
    },
    input: {
      text: text,
    },
    audioConfig: {
      audioEncoding: "mp3",
    },
  };
  $.ajax({
    type: "POST",
    url: "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyAJt6tKIsgCHl3e9FAzUDg3n9GT9o3Q66c",
    data: JSON.stringify(data),
    dataType: "JSON",
    contentType: "application/json; charset=UTF-8",
    success: function (res) {
      let audioBlob = base64ToBlob(res.audioContent, "mp3");
      audioFile.src = window.URL.createObjectURL(audioBlob);
      audioFile.playbackRate = 1; //재생속도
      audioFile.play();
    },
    error: function (request, status, error) {
      console.log("오류입니다.");
    },
  });
}
export function base64ToBlob(base64, fileType) {
  let typeHeader = "data:application/" + fileType + ";base64,"; // base64 헤더 파일 유형 정의
  let audioSrc = typeHeader + base64;
  let arr = audioSrc.split(",");
  let array = arr[0].match(/:(.*?);/);
  let type;
  let mime = (array && array.length > 1 ? array[1] : type) || type;
  // url헤더 제거하고 btye로 변환
  let bytes = window.atob(arr[1]);
  // 예외를 처리하고 0보다 작은 ASCII 코드를 0보다 큰 값으로 변환
  let ab = new ArrayBuffer(bytes.length);
  // 뷰 생성(메모리에 직접): 8비트 부호 없는 정수, 길이 1바이트
  let ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], {
    type: mime,
  });
}
function TTS() {
  return (
    <div>
      <button
        onClick={() => {
          testFun("안녕하세요. 시각장애인을 위한 길안내 서비스 새로입니다.");
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default TTS;
