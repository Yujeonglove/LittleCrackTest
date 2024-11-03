// 다국어 언어 설정을 위한 react-i8next 또는 vue-i18n 활용

const qnaList = [
  {
    q: '1. 중요한 약속에 늦을 것 같다는 걸 알았을 때, 당신의 행동은?',
    a: [
      {answer: '속으로 안절부절못하며 사과할 핑계를 생각한다.', type: [1]},
      {answer: '약속 장소까지 무조건 빨리 가기 위해 최선을 다한다.', type: [0, 2, 3, 4, 5, 5]}
    ]
  },
  {
    q: '2. 친구가 갑자기 무거운 고민을 털어놓을 때, 당신의 반응은?',
    a: [
      {answer: '차분히 경청하고 공감 섞인 조언을 해준다', type: [2]},
      {answer: '친구가 혼자 해결할 수 있도록 현실적인 조언을 준다.', type: [0, 1, 3, 4, 5, 6]}
    ]
  },
  {
    q: '3. 중요한 결정을 앞두고 당신이 느끼는 감정은?',
    a: [
      {answer: '내가 제대로 할 수 있을지 걱정이 앞선다.', type: [3]},
      {answer: '최선을 다해보고 결과는 나중에 고민하자고 생각한다.', type: [0, 1, 2, 4, 5, 6]}
    ]
  },
  {
    q: '4. 당신이 속한 팀 프로젝트에서 리더 역할을 맡게 된다면?',
    a: [
      {answer: '팀원들의 의견을 수용하며 조율하는 리더가 되려고 한다.', type: [0, 1, 2, 3, 5, 6]},
      {answer: '창의적인 아이디어를 이끌어내고 프로젝트의 큰 그림을 그리는 데 집중한다.', type: [4]}
    ]
  },
  {
    q: '5. 사람들이 나에게 기대하는 이미지와 실제 나의 모습이 다를 때, <br> 당신은 어떻게 대처하나요?',
    a: [
      {answer: '나의 진짜 모습을 서서히 보여준다.', type: [0, 1, 2, 3, 4, 6]},
      {answer: '기대에 맞추기 위해 노력하지만 내면의 갈등을 느낀다.', type: [5]}
    ]
  },
  {
    q: '6. 중요한 발표나 면접을 앞두고 당신의 마음가짐은?',
    a: [
      {answer: '겉으로는 침착해 보이려고 하지만 속으로는 떨린다.', type: [5]},
      {answer: '나의 장점을 잘 보여줄 수 있다고 믿고 최선을 다한다.', type: [0, 1, 2, 3, 4, 6]}
    ]
  },
  {
    q: '7. 친구와 의견 충돌이 있을 때, 당신의 대처 방식은?',
    a: [
      {answer: '최대한 친구의 감정을 고려하며 대화를 이어간다.', type: [2]},
      {answer: '내 의견을 침착하게 설명하고, 필요하면 잠시 시간을 갖는다.', type: [0, 1, 3, 4, 5, 6]}
    ]
  },
  {
    q: '8. 친구들이 나를 부르는 별명이 마음에 들지 않는다면, 당신은 어떻게 할 것인가요?',
    a: [
      {answer: '불편하지만 크게 신경 쓰지 않고 넘어간다.', type: [1]},
      {answer: '내 마음에 드는 별명으로 바꿔달라고 부탁한다.', type: [0, 2, 3, 4, 5, 6]}
    ]
  },
  {
    q: '9. 당신이 지쳐있을 때 가장 먼저 찾는 사람은 누구인가요?',
    a: [
      {answer: '신뢰할 수 있는 친구나 가족에게 상담을 구한다.', type: [6]},
      {answer: '혼자 시간을 보내며 스스로 회복하려 한다.', type: [0, 1, 2, 3, 4, 5]}
    ]
  },
  {
    q: '10. 예상하지 못한 좋은 기회가 찾아왔을 때, 당신의 반응은?',
    a: [
      {answer: '내가 그 기회를 잡을 수 있을지 고민하며 망설인다.', type: [3]},
      {answer: '용기를 내어 도전해 본다.', type: [0, 1, 2, 4, 5, 6]}
    ]
  },
  {
    q: '11. 새로운 환경에서 당신이 가장 먼저 하는 일은?',
    a: [
      {answer: '적응하는 데 시간이 필요하다고 생각하며 조심스럽게 행동한다.', type: [1, 2, 3, 4, 5, 6]},
      {answer: '새로운 사람들과 빠르게 어울리기 위해 적극적으로 다가간다.', type: [0]}
    ]
  },
  {
    q: '12. 친구와의 여행 중 예상치 못한 문제가 발생했다면, 당신의 대처 방법은?',
    a: [
      {answer: '차분하게 해결 방안을 찾아 친구들과 함께 문제를 해결한다.', type: [1, 2, 3, 4, 5, 6]},
      {answer: '문제가 크지 않다면 가볍게 넘기고 분위기를 밝게 유지하려 한다.', type: [0]}
    ]
  }
]

const infoList = [
  {
    name: '뚱치타치'
  },
  {
    name: '왈라B'
  },
  {
    name: '윌리'
  },
  {
    name: '루돌프'
  },
  {
    name: '잭'
  },
  {
    name: '크록'
  },
  {
    name: '호피'
  }
]