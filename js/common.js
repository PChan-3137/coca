let seLect = document.querySelectorAll('.select');
let mainHeader = document.querySelector('.header')

seLect.forEach(enter => {
  let hoverText = enter.querySelector('.hover-text');
  enter.addEventListener('mouseenter', function(){
    hoverText.classList.add('on')
  })
  mainHeader.addEventListener('mouseleave', function(){
    hoverText.classList.remove('on')
  })
})

let menuToggle = document.querySelector('.menu-toggle');
let mobileMenu = document.querySelector('.mobile-menu');
let menuItems = document.querySelectorAll('.mobile-menu-item');

menuToggle.addEventListener('click', function(){
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// 아코디언 메뉴 로직
menuItems.forEach(item => {
  const title = item.querySelector('.menu-title-select');
  
  if (title) {
    title.addEventListener('click', function(e) {
      e.preventDefault();

      const isActive = item.classList.contains('active');

      menuItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherList = otherItem.querySelector('.menu-select');
        if(otherList) otherList.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
        const subMenu = item.querySelector('.menu-select');
        if(subMenu) subMenu.classList.add('active');
      }
    });
  }
});

// 헤더 자바스크립트 코드


document.addEventListener('DOMContentLoaded', () => {
  const serviceSections = document.querySelectorAll('.footer-service');

  serviceSections.forEach(section => {
    const header = section.querySelector('h4');

    header.addEventListener('click', () => {
      // 768px 이하(모바일 환경)에서만 동작
      if (window.innerWidth <= 768) {        
        const isOpen = section.classList.contains('is-active');

        serviceSections.forEach(s => s.classList.remove('is-active'));

        if (!isOpen) {
          section.classList.add('is-active');
        }
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      serviceSections.forEach(s => s.classList.remove('is-active'));
    }
  });
});
// 푸터 자바스크립트 코드



const section = document.querySelector(".magic-video");
const box = document.querySelector(".magic-video-box");

window.addEventListener("scroll", () => {
  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  // 50% 지점부터 진행
  let progress = (vh * 0.3 - rect.top) / (rect.height - vh * 0.5);
  progress = Math.max(0, Math.min(1, progress)); 
  progress = 1 - Math.pow(1 - progress, 3); 

  let videoWidth, videoHeight;

  if (progress < 0.5) {
    let t = progress / 0.5;
    videoWidth = vw - (vw - vh) * t;
    videoHeight = vh;
  } else {
    let t = (progress - 0.5) / 0.5;
    videoWidth = vh - (vh - 400) * t;
    videoHeight = videoWidth;
  }

  box.style.width = videoWidth + "px";
  box.style.height = videoHeight + "px";

  section.classList.toggle("active", progress > 0.6);
});
