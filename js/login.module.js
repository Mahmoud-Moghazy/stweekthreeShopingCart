import { showNotification } from "./notification.module.js";

// Load user from localStorage, or initialize a user object
export const user = JSON.parse(localStorage.getItem("user")) || {
  loggedIn: false,
  loggedInCount: 0,
  welcome: false,
};

// Save user to localStorage
export const saveUser = () =>
  localStorage.setItem("user", JSON.stringify(user));

export const loginPage = () => {
  const layout = `
    <div class="vh-100 d-flex justify-content-center align-items-center">
      <div class="container py-5">
        <div class="card shadow-lg bg-info p-3">
          <div class="row">
            <div class="col-md-5 d-none d-md-flex justify-content-center align-items-center">
              <img src="./images/cartLogo.png" class="img-fluid" alt="logo image">
            </div>
            <div class="col-12 col-md-7 d-flex flex-column justify-content-center bg-light py-5 rounded-2 shadow-lg">
              <div class="mb-3">
                <div class="d-flex align-items-center justify-content-center mb-5">
                  <i class="fa-brands fa-opencart fa-2x me-3 mb-3 text-info"></i>
                  <h1 class="fw-bold mb-3">Shopping Cart</h1>
                </div>
                <p class="text-info fw-normal my-3">Sign into your account</p>
              </div>
              <div class="mb-5">
                <form class="">
                  <div class="form-floating mb-3">
                    <input type="email" id="floatingInput" class="form-control border-0 border-bottom border-info focus-ring focus-ring-info" placeholder="name@example.com">
                    <label class="form-label" for="floatingInput">Email address</label>
                    <div class="invalid-feedback mt-2">Please provide a valid email.</div>
                  </div>
                  <div class="form-floating mb-5">
                    <input type="password" id="floatingPassword" class="form-control border-0 border-bottom border-info focus-ring focus-ring-info" placeholder="Password">
                    <label class="form-label" for="floatingPassword">Password</label>
                    <div class="invalid-feedback mt-2">Please provide a valid Password.</div>
                  </div>
                  <div class="mb-3"><button id="loginBtn" class="btn btn-dark btn-lg w-100" type="button">Login</button></div>
                </form>
              </div>
              <div class="mb-3"><a class="small text-muted text-decoration-none" href="#!">Forgot password ?</a>
                <p class="my-2">Don't have an account ?<a class="small text-info text-decoration-none" href="#!"> Register here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementsByTagName("section")[0].innerHTML = layout;
};

// Email validation regex function
const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

if (user.email) {
  const userName = user?.email.split("@")[0];
  const welcomeMessage = `${
    user.loggedInCount == 1 ? "Welcome" : "Welcome back"
  } ${userName}`;
  if (!user.welcome && user.loggedIn) {
    showNotification(welcomeMessage);
    user.welcome = true;
    saveUser();
  }
}

if (!user.loggedIn) {
  loginPage();
  const emailInput = document.getElementById("floatingInput");
  const passwordInput = document.getElementById("floatingPassword");
  const loginButton = document.getElementById("loginBtn");

  // Function to validate email input and toggle 'is-invalid' class
  const validateEmailInput = () => {
    const emailValue = emailInput.value.trim();

    if (validateEmail(emailValue)) {
      emailInput.classList.remove("is-invalid");
      return true;
    } else {
      emailInput.classList.add("is-invalid");
      return false;
    }
  };

  // Function to validate password input
  const validatePasswordInput = () => {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue.length <= 5) {
      passwordInput.classList.add("is-invalid");
      return false;
    } else {
      passwordInput.classList.remove("is-invalid");
      return true;
    }
  };

  // Function to handle the login process
  const handleLogin = () => {
    const isEmailValid = validateEmailInput();
    const isPasswordValid = validatePasswordInput();

    if (isEmailValid && isPasswordValid) {
      const emailValue = emailInput.value.trim();

      // Update user object and increment login count
      user.email = emailValue;
      user.loggedIn = true;
      user.loggedInCount += 1;
      user.welcomeShown = false;

      // Save the user object to localStorage
      saveUser();
      document.location.reload();
    } else {
      // Show invalid feedback if validation fails
      validateEmailInput();
      validatePasswordInput();
      showNotification("Please provide a valid data", "danger");
    }
  };

  // Attach event listeners for email and password validation
  emailInput.addEventListener("blur", validateEmailInput);
  passwordInput.addEventListener("blur", validatePasswordInput);

  // Attach click event listener to login button
  loginButton.addEventListener("click", handleLogin);
}
