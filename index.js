let cartCount = 0;

const cartDisplay = document.querySelector("#cart-display h3");
const cartList = document.querySelector("#cart-display ul");

const buttons = document.querySelectorAll(".product button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const product = this.parentElement;
        const name = product.querySelector("h3").innerText;
        const qty = product.querySelector("input").value;

        cartCount += parseInt(qty);

        // Update cart title
        cartDisplay.innerText = `Your Cart (${cartCount} items)`;

        // Remove "No items added"
        if (cartList.children[0]?.innerText === "No items added") {
            cartList.innerHTML = "";
        }

        // Add item to list
        const li = document.createElement("li");
        li.innerText = `${name} x ${qty}`;
        cartList.appendChild(li);

        // Change button text temporarily
        button.innerText = "Added!";
        button.style.backgroundColor = "green";
        button.style.color = "white";

        setTimeout(() => {
            button.innerText = "Add to Cart";
            button.style.backgroundColor = "";
            button.style.color = "";
        }, 1500);
    });
});
