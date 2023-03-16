let section = document.getElementById("card");

let obj = [
    {
        img: "images/home/card-img1.svg",
        title: "Individual yondashuv",
        content: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz",
    },
    {
        img: "images/home/card-img2.svg",
        title: "Ekspertiza",
        content: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz",
    }
    , {
        img: "images/home/card-img3.svg",
        title: "Professional xizmat",
        content: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz",
    },
    {
        img: "images/home/card-img1.svg",
        title: "Ekspertiza",
        content: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz",
    },
    {
        img: "images/home/card-img2.svg",
        title: "Individual yondashuv",
        content: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz",
    },
    {
        img: "images/home/card-img3.svg",
        title: "Professional xizmat",
        content: "Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz",
    }
]

function getCard(img, title, content) {
    return `<div class="card">
    <img src="${img}" alt="...">
    <h6 class="card-title">${title}</h6>
    <div class="line"></div>
    <p class="card-text">
       ${content}
    </p>
</div>`;
}

for (const el of obj) {
    section.innerHTML += getCard(el.img, el.title, el.content);
}