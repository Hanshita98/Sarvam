let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartContainer");
const totalEl = document.getElementById("cartTotal");

function renderCart() {
  container.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p style='text-align:center'>Your cart is empty 🛒</p>";
    totalEl.innerText = 0;
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-details">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
          <div>
            <button onclick="changeQty(${index}, -1)">−</button>
            ${item.qty}
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalEl.innerText = total;
}

function changeQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
