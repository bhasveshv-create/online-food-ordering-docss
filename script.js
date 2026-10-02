const foods = [
    {
        name: "Chicken Biryani",
        price: 120
    },
    {
        name: "Veg Fried Rice",
        price: 100
    },
    {
        name: "Pizza",
        price: 150
    },
    {
        name: "Burger",
        price: 90
    },
    {
        name: "Masala Dosa",
        price: 60
    },
    {
        name: "French Fries",
        price: 70
    }
];

let cart = [];

const foodMenu = document.getElementById("food-menu");
const cartArea = document.getElementById("cart");
const totalDisplay = document.getElementById("total");
const orderButton = document.getElementById("order-button");

function displayFoods() {
    foodMenu.innerHTML = "";

    foods.forEach((food, index) => {
        const card = document.createElement("div");

        card.className = "food-card";

        card.innerHTML = `
            <h3>${food.name}</h3>
            <p class="price">₹${food.price}</p>
            <button onclick="addToCart(${index})">
                Add to Cart
            </button>
        `;

        foodMenu.appendChild(card);
    });
}

function addToCart(index) {
    cart.push(foods[index]);
    displayCart();
}

function displayCart() {
    if (cart.length === 0) {
        cartArea.innerHTML = "<p>Your cart is empty.</p>";
        totalDisplay.textContent = "0";
        return;
    }

    cartArea.innerHTML = "";

    let total = 0;

    cart.forEach((food) => {
        const item = document.createElement("p");

        item.textContent = `${food.name} - ₹${food.price}`;

        cartArea.appendChild(item);

        total += food.price;
    });

    totalDisplay.textContent = total;
}

orderButton.addEventListener("click", function () {

    if (cart.length === 0) {
        alert("Please add food items to your cart first.");
    } else {
        alert("Order placed successfully!");
        cart = [];
        displayCart();
    }

});

displayFoods();
displayCart();