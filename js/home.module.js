import { Display } from "./ui.module.js";
import { Account } from "./account.module.js";
import { products } from "../data/products.js";
import { Cart } from "./cart.module.js";
import { Login } from "./login.module.js";

export class Home {
  constructor() {
    this.display = new Display();
    this.account = Account.loadFromLocalStorage() || new Account();
    this.products = products;
    this.layout();
    this.setupEventListeners();
  }

  layout() {
    // Assuming user is logged in, we display their name and cart count
    const userName = this.account.email.split("@")[0];
    const cartCount = this.account.cart.totalQuantity;
    const products = this.products;

    // Update the display with user details and available products
    this.display.navbar(cartCount, userName);
    this.display.products(products);
  }

  setupEventListeners() {
    const homeBtn = document.getElementById("home");
    const cartBtn = document.getElementById("cart");
    const logoutBtn = document.getElementById("logoutBtn");
    homeBtn.addEventListener("click", () => new Home());
    cartBtn.addEventListener("click", () => new Cart());

    const addToCartBtns = document.querySelectorAll(".addToCart");

    addToCartBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.currentTarget.getAttribute("id");
        const product = this.products.find((item) => item.id == productId);

        if (product) {
          // Use the full product object when adding to the cart
          this.account.addToCart(product); // Pass the full product object
          // Save the updated cart data to localStorage
          this.account.saveToLocalStorage();

          // Update UI after adding items to the cart
          this.updateCartUI();
        }
      });
    });

    logoutBtn.addEventListener("click", () => {
      this.account.logout();
      this.account.saveToLocalStorage();
      setTimeout(() => {
        document.location.reload();
      }, 1500);      
    });
  }

  updateCartUI() {
    // Update the cart count in the navbar
    const cartCountElement = document.querySelector("#cartCount");
    cartCountElement.textContent = this.account.cart.totalQuantity;
  }
}
