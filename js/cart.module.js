import { Display } from "./ui.module.js";
import { Account } from "./account.module.js";

export class Cart {
  constructor() {
    this.display = new Display();
    this.account = Account.loadFromLocalStorage() || new Account();
    this.layout();
    this.setupEventListeners();
  }

  layout() {
    const userCart = this.account.cart;
    const cartItems = userCart.items;
    const totalPrice = userCart.totalPrice;

    if (userCart.totalQuantity === 0) {
      this.display.emptyCart();
    } else {
      this.display.cart(cartItems, totalPrice);
    }
  }

  setupEventListeners() {
    // Select all remove buttons
    const removeBtns = document.querySelectorAll(".removeItem");

    removeBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.currentTarget.getAttribute("id");
        // Call the removeFromCart method
        this.removeItemFromCart(productId);
      });
    });
  }

  removeItemFromCart(productId) {
    this.account.removeFromCart(productId); // Remove item from cart
    this.account.saveToLocalStorage(); // Save updated cart to localStorage
    // Update UI after adding items to the cart
    this.updateCartUI();

    // Re-render the cart layout
    this.layout();

    // Re-attach event listeners after layout re-rendering
    this.setupEventListeners();
  }

  updateCartUI() {
    // Update the cart count in the navbar
    const cartCountElement = document.querySelector("#cartCount");
    cartCountElement.textContent = this.account.cart.totalQuantity;
  }
}
