import { showNotification } from "./notification.module.js";

export class Account {
  constructor(email = false, password = false) {
    this.email = email;
    this.password = password;
    this.loggedIn = false;
    this.cart = {
      items: [],
      totalQuantity: 0,
      totalPrice: 0,
    };
  }

  // Method to register a user
  register(email, password) {
    this.email = email;
    this.password = password;
    showNotification("Registration successful");
  }

  // Method to log in the user
  login(email, password) {
    if (this.email === email && this.password === password) {
      this.loggedIn = true;
      showNotification(`${email.split("@")[0]} logged in successful`);
    } else {
      console.log("Incorrect password!");
    }
  }

  // Method to log out the user
  logout() {
    if (this.loggedIn) {
      this.loggedIn = false;
      showNotification(`Hope to see you again ${this.email.split("@")[0]}`);
    } else {
      console.log("User is not logged in.");
    }
  }

  // Method to add items to the cart and save to localStorage
  addToCart(product) {
    // Check if the product already exists in the cart
    const existingItem = this.cart.items.find((item) => item.id === product.id);

    if (existingItem) {
      // If the item already exists, increase the quantity
      existingItem.quantity += 1;
    } else {
      // If the item does not exist, add it to the cart with quantity 1
      this.cart.items.push({ ...product, quantity: 1 });
    }

    // Update total quantity and total price
    this.cart.totalQuantity += 1;
    this.cart.totalPrice += product.price;
    showNotification(`${product.name} added to the cart.`);
  }

  // Method to remove an item from the cart and update the total price and quantity
  removeFromCart(itemId) {
    const itemIndex = this.cart.items.findIndex(
      (cartItem) => cartItem.id === Number(itemId)
    );

    if (itemIndex !== -1) {
      const itemToRemove = this.cart.items[itemIndex];

      // Update total quantity and price
      this.cart.totalQuantity -= itemToRemove.quantity;
      this.cart.totalPrice -= itemToRemove.price * itemToRemove.quantity;

      // Remove the item from the cart array
      this.cart.items.splice(itemIndex, 1);
      // Log the item that was removed
      showNotification(`${itemToRemove.name} removed from the cart.`, "warning");
    } else {
      console.log(`Item with ID ${itemId} not found in the cart.`);
    }
  }

  // Save the current user object to localStorage
  saveToLocalStorage() {
    localStorage.setItem("account", JSON.stringify(this));
    console.log("User data saved to localStorage.");
  }

  // Static method to load a user from localStorage
  static loadFromLocalStorage() {
    const userData = localStorage.getItem("account");
    if (userData) {
      const parsedData = JSON.parse(userData);
      const user = new Account(parsedData.email, parsedData.password);
      user.loggedIn = parsedData.loggedIn;
      user.cart = parsedData.cart;
      console.log("User data loaded from localStorage.");
      return user;
    }
    console.log("No user data found in localStorage.");
    return null;
  }
}
