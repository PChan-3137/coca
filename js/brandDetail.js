import { brandData } from "./brandData.js";



// URL id
const params = new URLSearchParams(location.search);
const brandId = params.get("id");

// 현재 브랜드
const brand = brandData.find(b => b.id === brandId);
if (!brand) {
  document.body.innerHTML = "<h1>브랜드를 찾을 수 없습니다.</h1>";
  throw new Error("Brand not found");
}

// index
const index = brandData.findIndex(b => b.id === brandId);

// 기본 정보 바인딩
document.getElementById("brandEN").textContent = brand.nameEN;
document.getElementById("brandKR").textContent = brand.nameKR;
document.getElementById("brandDescTitle").textContent = brand.description.title;
document.getElementById("brandDescText").textContent = brand.description.text;

// Hero Video
const hero = document.getElementById("heroSection");
const heroText = document.getElementById("heroText");
const video = document.getElementById("heroVideo");
const videoSource = document.getElementById("heroSource");
const heroInner = document.getElementById("heroInner");
videoSource.src = brand.heroVideo;
video.load();
video.muted = true;
video.playsInline = true;

let played = false;

window.addEventListener("scroll", () => {
  const rect = hero.getBoundingClientRect();
  const triggerPoint = window.innerHeight / 2;
  const scrollY = window.scrollY;
  if (rect.top < triggerPoint && rect.bottom > triggerPoint) {
    heroInner.classList.add("fullscreen");
    if (!played) {
      video.play();
      played = true;
    }
  }
  if (scrollY > 800) {
    heroText.classList.add("show");
    heroInner.classList.add("dim");
  }
  if (scrollY > 2000) {
    heroText.classList.remove("show");
    heroInner.classList.remove("fullscreen");
  }
});

// Product Swiper
const productWrapper = document.getElementById("productWrapper");

brand.products.forEach((product, idx) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
    <div class="card">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <p class="title">${product.name}</p>
  `;
  slide.addEventListener("click", () => {
    location.href = `brand-product.html?id=${brand.id}&product=${idx}`;
  });
  productWrapper.appendChild(slide);
});


document.querySelector(".product-bg").style.backgroundImage =`url(${brand.productBg})`;


const swiper = new Swiper(".productSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: false,
  speed: 600,
  breakpoints: {
    0: { slidesPerView: 3,spaceBetween: 16 },
    768: { slidesPerView:"auto",spaceBetween: 24 },
    1024: { spaceBetween: 40 },
  },
  navigation: {
    prevEl: ".swiper-btn.prev",
    nextEl: ".swiper-btn.next",
  },
});




document.querySelector(".productSwiper").addEventListener("click", e => {
  const slideEl = e.target.closest(".swiper-slide");
  if (!slideEl) return;

  const index = swiper.realIndex; // 항상 진짜 index
  const product = brand.products[index];

  console.log(product.name);
});


// Media Section
const mediaSection = document.querySelector(".media");
const mediaList = document.getElementById("mediaList");

if (!brand.media || brand.media.length === 0) {
  mediaSection.remove();
} else {
  brand.media.forEach(m => {
    const item = document.createElement("a");
    item.href = m.link;
    item.target = "_blank";
    item.dataset.title = m.mediatitle;
    const img = document.createElement("img");
    img.src = m.thumb;
    img.alt = m.mediatitle;
    item.appendChild(img);
    mediaList.appendChild(item);
  });
}
// Prev / Next Brand
const total = brandData.length;

const prevIndex = (index - 1 + total) % total;
const nextIndex = (index + 1) % total;

const prev = brandData[prevIndex];
const next = brandData[nextIndex];

// prev
const prevEl = document.getElementById("prevBrand");
prevEl.style.backgroundImage = `url(${prev.visualImage})`;
prevEl.onclick = () => {
  location.href = `brand.html?id=${prev.id}`;
};

// next
const nextEl = document.getElementById("nextBrand");
nextEl.style.backgroundImage = `url(${next.visualImage})`;
nextEl.onclick = () => {
  location.href = `brand.html?id=${next.id}`;
};
// ----------------------
// AOS
// ----------------------
AOS.init();
