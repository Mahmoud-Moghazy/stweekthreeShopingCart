import { saveUser, user } from "./login.module.js";
import { cartItems } from "./products.module.js";
import { productsLayout } from "./products.module.js";
import { viewCart } from "./cart.module.js";
import { showNotification } from "./notification.module.js";

export const navbar = (cartCount, userName) => {
  const layout = `
      <div class="container">
        <a class="navbar-brand" href="#" id="home">
          <i class="fa-brands fa-opencart fa-xl me-3 text-info"></i>
          <span class="h6 fw-bold text-light">Shopping Cart</span>
        </a>
        <button class="navbar-toggler border-info focus-ring focus-ring-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars text-light"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 py-5 py-md-0">
            <li class="nav-item">
              <a class="nav-link" href="#" aria-label="View Cart" id="cart">
                <i class="fa-brands fa-opencart text-info"></i>
                <i id="cartCount" class="count text-light">${cartCount}</i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" aria-label="User Profile">
                <i class="fa-solid fa-user text-info"></i>
                <span class="user-name text-light text-capitalize ms-1">${userName}</span>
              </a>
            </li>
            <li class="nav-item ms-0 ms-md-4 mt-4 mt-md-0 d-flex align-items-center">
              <button class="btn btn-outline-info btn-sm" id="logoutBtn" aria-label="logout Button">Logout</button>
            </li>
          </ul>
        </div>
      </div>
  `;
  document.getElementsByTagName('nav')[0].innerHTML = layout;
  document.getElementsByTagName('nav')[0].className = 'navbar navbar-expand-md bg-dark py-3';
};

if (user && user.loggedIn) {
  const cartCount = cartItems.length;
  const userName = user?.email.split('@')[0];

  navbar(cartCount, userName);

  const logoutButton = document.getElementById('logoutBtn');
  // Attach event listener to the logout button
  logoutButton.addEventListener('click', () => {
    // Update user object to indicate they are logged out
    user.loggedIn = false;
    user.welcome = false;
    // Save the updated user object to localStorage
    saveUser();
    // Show a notification before reloading the page
    showNotification('Hope to see you again', 'warning');
    // delay the reload to give time for the notification to display
    setTimeout(() => {
      document.location.reload();
    }, 1500);  // 1 second delay
  });

  const cartButton = document.getElementById('cart');
  cartButton.addEventListener('click', viewCart);

  const homeButton = document.getElementById('home');
  homeButton.addEventListener('click', productsLayout);
}
