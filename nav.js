// 메뉴 항목 선택
const menuItems = document.querySelectorAll('.nav_menu li');
const logo = document.querySelector('#logo');


logo.addEventListener('click', () => {
  const mainSection = document.getElementById('main');
  if (mainSection) {
    mainSection.scrollIntoView({ behavior: 'smooth' });
  }
});


// 각 메뉴 항목에 클릭 이벤트 리스너 추가
menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    const targetSection = getTargetSection(index);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 각 메뉴 항목에 해당하는 섹션 반환하는 함수
function getTargetSection(index) {
  switch (index) {
    case 0: // 기획
      return document.querySelector('#section1');
    case 1: // 디자인
      return document.querySelector('.section6');
    case 2: // 서비스
      return document.querySelector('.section7');
    case 3: // 팀소개
    return document.querySelector('img[src="img/team.png"]');
    default:
      return null;
  }
}