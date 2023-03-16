let section2 = document.querySelector(".showPanel2");

let tabObj1 = [
  {
    img: "images/portfolio/portfolio-1.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-2.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-3.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "SMM",
  },
];

let tabObj2 = [
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-1.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-2.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-3.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "SMM",
  },
];

let tabObj3 = [
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-1.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-2.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-3.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "SMM",
  },
];

let tabObj4 = [
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-1.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-2.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-3.png",
    title: "SMM",
  },
];

let tabObj5 = [
  {
    img: "images/portfolio/portfolio-2.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-1.png",
    title: "Mobil ilova",
  },

  {
    img: "images/portfolio/portfolio-3.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "SMM",
  },
];

let arr2 = [
  tabObj1.slice(6),
  tabObj2.slice(6),
  tabObj3.slice(6),
  tabObj4.slice(6),
  tabObj5.slice(6),
];

function getCard(img, title) {
  return `<div class="showPanel__card">
      <img src="${img}" alt="">
      <span>${title}</span>
      <div class="showPanel__card-hover">
        <img src="./images/portfolio/arrow.svg" alt="">
        <p>UYMAKON ${title}</p>
      </div>
    </div>`;
}

function renderCardHome(obj) {
    for (const el of obj) {
        section2.innerHTML += getCard(el.img, el.title);
      }
}

renderCardHome(arr2[0]);
function showTabHome(index) {
  tabBtn.forEach((el) => {
    el.style.background = "transparent";
  });
  section2.innerHTML = "";
  tabBtn[index].style.background =
    "linear-gradient(93.5deg, #1E11AD 12.37%, rgba(105, 17, 173, 0.95) 85.28%)";
  renderCardPrf(arr2[index]);
}
