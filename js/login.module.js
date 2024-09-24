import { Display } from "./ui.module.js";
import { Register } from "./register.module.js";
import { validateEmailInput,validatePasswordInput } from "./validation.module.js";
import { Account } from "./account.module.js";
import { Home } from "./home.module.js";
import { showNotification } from "./notification.module.js";

export class Login {
  constructor() {
    this.display = new Display();
    this.user = Account.loadFromLocalStorage() || false;
    this.layout();
    this.setupEventListeners();
  }
  layout() {
    this.display.loginPage();
  }
  
  // Attach event listeners for form validation and registration
  setupEventListeners() {
    const emailInput = document.getElementById("loginInput");
    const passwordInput = document.getElementById("loginPassword");
    const loginBtn = document.getElementById("loginBtn");
    const registerHere = document.getElementById("registerHere");

    // Focus on the email input initially
    emailInput.focus();

    // Real-time validation feedback for email and password inputs
    emailInput.addEventListener("input", () => validateEmailInput(emailInput));
    passwordInput.addEventListener("input", () => validatePasswordInput(passwordInput));

    // Register button click event to handle registration
    loginBtn.addEventListener("click", () => this.handleLogin(emailInput, passwordInput));

    // Navigate to login page
    registerHere.addEventListener("click", () => new Register());
  }

  handleLogin(emailInput, passwordInput){
    const user = this.user;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Ensure the inputs are valid before proceeding
    if (!validateEmailInput(emailInput) || !validatePasswordInput(passwordInput)) {
      showNotification("Please enter a valid email and password.", "danger");
      return;
    } else if (user.email !== email || user.password !== password) {
      showNotification("Please check your email or password.", "danger");
    } else{
      try {
        // Register the user using the Auth class
        this.user.login(email,password);
        this.user.saveToLocalStorage();
        new Home();
      } catch (error) {
        // Handle registration errors, e.g., if the user already exists
        console.log(error.message);
      }
    }
  }
}
