// JavaScript code

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('nav ul');
    const navItems = document.querySelectorAll('nav ul li');

    menuIcon.addEventListener('click', function () {
        // Toggle the 'active' class to control visibility
        navLinks.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            // Apply animation delay to individual li elements
            navItems.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.1}s`; // Adjust the delay as needed
            });
        } else {
            // Reset animation delay when closing the menu
            navItems.forEach(item => {
                item.style.transitionDelay = '0s';
            });
        }
    });



    const shoesCards = document.querySelectorAll('.shoes-card');

    shoesCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const cardLinks = card.querySelectorAll('a')
            const cardImg = card.querySelector('img')
            cardLinks.forEach(link => {
                link.classList.add('active')
            });
            cardImg.classList.add('active')
        });

        card.addEventListener('mouseleave', function () {
            const cardLinks = card.querySelectorAll('a');
            const cardImg = card.querySelector('img')
            cardLinks.forEach(link => {
                link.classList.remove('active');
            });
            cardImg.classList.remove('active')
        });
    });

});







class Product {
    constructor(name, imageUrl, link) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.link = link;
    }
}

const products = [
    new Product("Mans Brooks", "./image/Screenshot-removebg-preview.png", "./public/mans-brooks.html"),
    new Product("Mens Asics", "./image/Screenshot-removebg-preview (2).png", "./public/mens-asics.html"),
    new Product("Men Hoke", "./image/Screenshot-removebg-preview (1).png", "./public/mens-hoka.html"),
    new Product("TYSON Pro", "./image/CG-120-G-FULLBLK-2.jpg-removebg-preview.png", "./public/mens-running-shoes.html"),
];


function generateProductCards(productList) {
    const productsContainer = document.querySelector(".shoes-container");

    productList.forEach((product) => {
        const card = document.createElement("span");
        card.classList.add("shoes-card");

        const anchor = document.createElement("a");
        anchor.href = product.link;

        const img = document.createElement("img");
        img.classList.add("shoes-img");
        img.src = product.imageUrl;
        img.alt = "shoes";

        const watermark = document.createElement("img");
        watermark.classList.add("watermark");
        watermark.src = "./image/watermark .png";
        watermark.alt = "Watermark for shoe shop";

        const name = document.createElement("b");
        name.textContent = product.name;

        anchor.appendChild(img);
        anchor.appendChild(watermark);
        anchor.appendChild(document.createElement("br"));
        anchor.appendChild(name);

        card.appendChild(anchor);
        productsContainer.appendChild(card);
    });
}

generateProductCards(products);
