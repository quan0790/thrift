// Fetch product data from the JSON file
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');
    data.forEach(product => {
      const item = document.createElement('div');
      item.classList.add('product-item');
      item.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      `;
      productList.appendChild(item);
    });

    // Add event listener for Add to Cart buttons
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(button => {
      button.addEventListener('click', addToCart);
    });
  });

// Shopping Cart functionality
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

let cart = [];

function addToCart(event) {
  const productItem = event.target.parentElement;
  const product = {
    name: productItem.querySelector('h3').textContent,
    price: parseFloat(productItem.querySelector('p').textContent.replace('$', '')),
  };

  cart.push(product);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(product => {
    const item = document.createElement('li');
    item.textContent = `${product.name} - $${product.price}`;
    cartItems.appendChild(item);
    total += product.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

checkoutBtn.addEventListener('click', () => {
  // Perform checkout process (e.g., payment, order confirmation, etc.)
  // ...

  // Clear the shopping cart
  cart = [];
  renderCart();
});
// Add event listener to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const button = event.target;
  const productName = button.getAttribute('data-name');
  const productPrice = parseFloat(button.getAttribute('data-price'));

  // Create a cart item object
  const cartItem = {
    name: productName,
    price: productPrice
  };

  // Add the cart item to the cart
  addToCartItems(cartItem);

  // Update the total amount in the cart
  updateCartTotal();
}

function addToCartItems(item) {
  const cartItems = document.getElementById('cart-items');
  const cartItemElement = document.createElement('div');
  cartItemElement.classList.add('cart-item');
  cartItemElement.innerHTML = `
    <p>${item.name}</p>
    <p>$${item.price.toFixed(2)}</p>
  `;
  cartItems.appendChild(cartItemElement);
}

function updateCartTotal() {
  const cartItems = document.querySelectorAll('.cart-item');
  let total = 0;

  cartItems.forEach(cartItem => {
    const itemPrice = parseFloat(cartItem.children[1].textContent.slice(1));
    total += itemPrice;
  });

  const totalAmountElement = document.getElementById('total-amount');
  totalAmountElement.textContent = total.toFixed(2);
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.add("visible");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("visible");
  }
}
