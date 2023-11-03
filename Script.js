// JavaScript code
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const menuIcon = document.getElementById('menu-icon');
        const navLinks = document.querySelector('nav ul');
        const navItems = document.querySelectorAll('nav ul li');

        menuIcon.addEventListener('click', toggleMenu);

        function toggleMenu() {
            navLinks.classList.toggle('active');
            navLinks.classList.contains('active')
                ? navItems.forEach((item, index) => item.style.transitionDelay = `${index * 0.1}s`)
                : navItems.forEach(item => item.style.transitionDelay = '0s');
        }

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

        const generateProductCard = (product) => {
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

            return card;
        };

        const productCards = shoeData.map(generateProductCard);
        const shoesContainer = document.querySelector(".shoes-container");
        productCards.forEach((card) => shoesContainer.appendChild(card));

        const filteredProducts = shoeData.filter((product) => product.name.includes("Mans"));

        const totalProductLinks = shoeData.reduce((total, product) => total + product.link, "");
    });
})();
