// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Mock data for products
    const products = [
        { name: "Product 1st", price: "$10", description: "Description of Product 1" },
        { name: "Product 2nd", price: "$15", description: "Description of Product 2" },
        { name: "Product 3rd", price: "$20", description: "Description of Product 3" }
    ];

    const productsSection = document.getElementById("products");

    // Loop through products and create product cards
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <p>${product.description}</p>
        `;

        productsSection.appendChild(productCard);
    });
});
