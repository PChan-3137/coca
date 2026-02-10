
(() => {
  const section = document.getElementById("historyCta");
  const bottomText = document.getElementById("bottomText");
  const bottomLine = section.querySelector(".bottom-line");

  function pxVar(name, fallback) {
    const v = getComputedStyle(section).getPropertyValue(name).trim();
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : fallback;
  }

  function measure() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      section.style.setProperty("--bottomStart", `0px`);
      section.style.setProperty("--bottomTarget", `0px`);

      const bottomLineWidth = bottomLine.offsetWidth;
      section.style.setProperty("--bottom-line-width", `${bottomLineWidth}px`);
      return;
    }
    
    const bottomLineRect = bottomLine.getBoundingClientRect();
    const bottomRect = bottomText.getBoundingClientRect();

    const bottomStart = Math.round(-bottomLineRect.left);

    const gap = pxVar("--bottomGap", 100);
    let target = Math.max(0, Math.round(bottomRect.left - gap));

    const maxLen = pxVar("--bottomMax", 99999);
    target = Math.min(target, maxLen);

    section.style.setProperty("--bottomStart", `${bottomStart}px`);
    section.style.setProperty("--bottomTarget", `${target}px`);
  }

  // 스크롤 애니메이션 트리거
  function checkScroll() {
  const sectionTop = section.getBoundingClientRect().top;
  const sectionBottom = section.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;
  
  // 섹션이 화면에 조금이라도 보이면 애니메이션 유지
  if (sectionTop < windowHeight * 0.8 && sectionBottom > windowHeight * 0.2) {
    section.classList.add('is-anim');
  } else {
    section.classList.remove('is-anim');
  }
}

  window.addEventListener("load", () => {
    measure();
    checkScroll();  // ← 로드 시에도 체크
  });

  window.addEventListener("resize", measure);
  
  window.addEventListener("scroll", checkScroll);  // ← 스크롤 이벤트 추가
})();