// JavaScript code
const shoeData = [
    {
        imageUrl: "./image/Screenshot-removebg-preview.png",
        link: "./public/mans-brooks.html",
        name: "Mans Brooks",
    },
    {
        imageUrl: "./image/Screenshot-removebg-preview (2).png",
        link: "./public/mens-asics.html",
        name: "Mens Asics",
    },
    {
        imageUrl: "./image/Screenshot-removebg-preview (1).png",
        link: "./public/mens-hoka.html",
        name: "Men Hoke",
    },
    {
        imageUrl: "./image/CG-120-G-FULLBLK-2.jpg-removebg-preview.png",
        link: "./public/mens-running-shoes.html",
        name: "TYSON Pro",
    },
];

function generateShoeCards() {
    const shoesContainer = document.querySelector(".shoes-container");

    shoeData.forEach((shoe) => {
        const card = document.createElement("span");
        card.classList.add("shoes-card");

        const anchor = document.createElement("a");
        anchor.href = shoe.link;

        const img = document.createElement("img");
        img.classList.add("shoes-img");
        img.src = shoe.imageUrl;
        img.alt = "shoes";

        const watermark = document.createElement("img");
        watermark.classList.add("watermark");
        watermark.src = "./image/watermark .png";
        watermark.alt = "Watermark for shoe shop";

        const name = document.createElement("b");
        name.textContent = shoe.name;

        anchor.appendChild(img);
        anchor.appendChild(watermark);
        anchor.appendChild(document.createElement("br"));
        anchor.appendChild(name);

        card.appendChild(anchor);
        shoesContainer.appendChild(card);
    });
}

generateShoeCards();
