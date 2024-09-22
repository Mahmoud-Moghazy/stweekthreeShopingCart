import { products } from "../data/products.js";
import { showNotification } from "./notification.module.js";
import { user } from "./login.module.js";

// Load cart items from localStorage, or initialize an empty array
export let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Save cart items to localStorage
export const saveCartItems = () => localStorage.setItem('cartItems', JSON.stringify(cartItems));

// Product card template function
const product = (title, image, description, price, id) => {
  return `
    <div class="col">
      <div class="card h-100 shadow-lg">
        <img src="${image}" class="card-img-top" alt="${title} image">
        <div class="card-body d-flex flex-column justify-content-between">
          <div class="card-content mb-4">
            <h6 class="card-title fw-bold">${title}</h6>
            <p class="card-text text-black-50">${description}</p>
          </div>
          <div class="card-footer border-info">
          <p>
            <span>Price:</span>
            <span class="text-info">${price}</span>
            <span>EGP</span>
          </p>
          <button id="${id}" class="addToCart btn btn-dark w-100">
            <span class="text-info me-2">Add to cart</span>
            <i class="fa-solid fa-cart-arrow-down text-light"></i>
          </button>
          </div>
        </div>
      </div>
    </div>`;
};

// Function to render the products layout
export const productsLayout = () => {
  const main = `
      <div class="container my-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 row-gap-3">
          ${products.map(pro => product(pro.name, pro.image, pro.description, pro.price, pro.id)).join(' ')}
        </div>
      </div>
  `;
  document.getElementsByTagName('main')[0].innerHTML = main;
  attachAddItemEvent();
};

// Function to update cart count in the navbar
export const updateCartCount = () => {
  const cartCountElement = document.getElementById('cartCount');
  cartCountElement.textContent = cartItems.reduce((acc, item) => acc + item.quantity, 0);
};

const attachAddItemEvent = () => {
  // Select all buttons with the class 'addToCart'
  const addToCartBtns = document.querySelectorAll('.addToCart');
  // Handle adding items to the cart
  addToCartBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = e.currentTarget.getAttribute('id');
      const cartItem = products.find(item => item.id == productId);

      if (cartItem) {
        // Check if the item is already in the cart
        const existingCartItem = cartItems.find(item => item.id == productId);

        if (existingCartItem) {
          // Item is already in the cart, update its quantity
          existingCartItem.quantity += 1;
        } else {
          // Item is not in the cart, add it with quantity 1
          cartItems.push({ ...cartItem, quantity: 1 });
        }

        // Save cart items and update UI
        saveCartItems();
        updateCartCount();
        showNotification('Product added successfully');
      } else {
        showNotification('Error: Product not found', 'danger');
      }
    });
  });
};

if (user && user?.loggedIn) {
  productsLayout();
}

