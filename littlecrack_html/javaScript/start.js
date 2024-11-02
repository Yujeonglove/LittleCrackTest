document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector("#story-page");
  const qna = document.querySelector("#question-page");
  const result = document.querySelector("#result-page");
  const startButton = document.querySelector('.start-button');
  const restartButton = document.querySelector('#button-restart');
  const backButton = document.querySelector(".button-back button"); // 뒤로 가기 버튼 선택자

  const endPoint = 12;
  let qIdx = 0; // 전역 변수로 qIdx 선언
  const select = [0, 0, 0, 0, 0, 0, 0];

  function calResult() {
    console.log(select);
    var result = select.indexOf(Math.max(...select));
    return result;
  }

  function setResult() {
    const maxValueIndex = select.indexOf(Math.max(...select));

    // infoList 배열이 잘 정의되었는지 확인합니다
    if (!infoList || !infoList[maxValueIndex]) {
        console.error("infoList 배열이 정의되지 않았거나, maxValueIndex를 찾을 수 없습니다.");
        return;
    }

    // 결과 텍스트 업데이트
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[maxValueIndex].name;

    // 결과 이미지 업데이트
    const imgDiv = document.querySelector('#resultImg');
    imgDiv.innerHTML = '';  // 기존 이미지를 지우기 위해 초기화
    const resultImg = document.createElement('img');
    resultImg.src = `./img/img-${maxValueIndex}.jpg`;  // 경로 설정
    resultImg.alt = infoList[maxValueIndex].name;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    // 이미지가 잘 들어갔는지 확인
    console.log("결과 이미지가 표시되었습니다.");
}

  function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";
      setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block";
      }, 450);
    });
    setResult();
  }

  function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList', 'my-3', 'py-3', 'mx-auto', 'fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
      var children = document.querySelectorAll('.answerList');
      for(let i = 0; i < children.length; i++){
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(()=> {
        var target = qnaList[qIdx].a[idx].type;
        for(let i = 0; i < target.length; i++){
          select[target[i]] += 1;
        }

        for(let i = 0; i < children.length; i++){
          children[i].style.display = 'none';
        }
        goNext(++qIdx);
      }, 450);
    }, false);
  }

  function goNext(newIdx){
    qIdx = newIdx; // 현재 qIdx 업데이트
    if(qIdx === endPoint){
      goResult();
      return;
    }

    // 첫 번째 질문일 경우 뒤로 가기 버튼 숨기기
    if (qIdx === 0) {
      backButton.style.display = 'none';
    } else {
      backButton.style.display = 'inline-block';
    }

    var q = document.querySelector('.questionBox');
    q.innerHTML = qnaList[qIdx].q;
    var a = document.querySelector('.answerBox');
    a.innerHTML = '';  // 이전 답변을 지우기 위해 초기화
    for (let i in qnaList[qIdx].a){
      addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }

    // 상태바 업데이트
    var status = document.querySelector('.statusBar');
    status.style.width = (100 / endPoint) * (qIdx + 1) + '%';

    // 진행 상황 텍스트 업데이트
    const statusText = document.querySelector('.statusText');
    statusText.innerText = `${qIdx + 1} / ${endPoint}`;
  }

  function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
      qna.style.WebkitAnimation = "fadeIn 1s";
      qna.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block";
        result.style.display = "none"; // question-page에서도 result-page 숨기기
      }, 450);
      qIdx = 0;
      goNext(qIdx);
    }, 450);
  }

  function goBack(){
    if (qIdx > 0) {
      goNext(qIdx - 1); // 이전 질문으로 돌아가기
    }
  }

  startButton.addEventListener("click", begin); // 버튼 클릭 시 테스트 시작
  restartButton.addEventListener("click", begin); // '다시 검사하기' 버튼
  backButton.addEventListener("click", goBack); // '뒤로 가기' 버튼
});
