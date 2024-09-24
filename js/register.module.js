import { Display } from "./ui.module.js";
import { Login } from "./login.module.js";
import { validateEmailInput,validatePasswordInput } from "./validation.module.js";
import { Account } from "./account.module.js";
import { showNotification } from "./notification.module.js";

export class Register {
  constructor() {
    this.display = new Display();
    this.account = new Account();
    this.layout();
    this.setupEventListeners();
  }
  layout() {
    this.display.registerPage();
  }

  // Handle the registration process
handleRegister(emailInput, passwordInput) {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Ensure the inputs are valid before proceeding
  if (!validateEmailInput(emailInput) || !validatePasswordInput(passwordInput)) {
    showNotification("Please provide a valid email and password", "danger")
    return;
  }

  // Check if an account with the same email already exists in localStorage
  const existingAccount = Account.loadFromLocalStorage();

  if (existingAccount && existingAccount.email === email) {
    // If the email is already registered, show an error message
    showNotification("This email is already registered. Please use a different email.");
    return;
  }

  try {
    // Register the user
    this.account.register(email, password);
    this.account.saveToLocalStorage();
    
    // Navigate to login page after successful registration
    new Login();
  } catch (error) {
    // Handle registration errors
    alert(error.message);
  }
}


  // Attach event listeners for form validation and registration
  setupEventListeners() {
    const emailInput = document.getElementById("registerEmail");
    const passwordInput = document.getElementById("registerPassword");
    const registerBtn = document.getElementById("registerBtn");
    const loginHereBtn = document.getElementById("loginHere");

    // Focus on the email input initially
    emailInput.focus();

    // Real-time validation feedback for email and password inputs
    emailInput.addEventListener("input", () => validateEmailInput(emailInput));
    passwordInput.addEventListener("input", () => validatePasswordInput(passwordInput));

    // Register button click event to handle registration
    registerBtn.addEventListener("click", () => this.handleRegister(emailInput, passwordInput));

    // Navigate to login page
    loginHereBtn.addEventListener("click", () => new Login());
  }

}
