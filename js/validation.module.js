const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) => password.length >= 6;

export const validateEmailInput = (emailInput) => {
  const feedback = emailInput.nextElementSibling; ; // Assuming feedback is a sibling element
  if (validateEmail(emailInput.value.trim())) {
    emailInput.classList.remove("is-invalid");
    feedback.textContent = ""; // Clear error message
    return true;
  } else {
    emailInput.classList.add("is-invalid");
    feedback.textContent = "Please enter a valid email address."; // Set error message
    return false;
  }
}

export const validatePasswordInput = (passwordInput) => {
  const feedback = passwordInput.nextElementSibling; // Assuming feedback is a sibling element
  if (validatePassword(passwordInput.value.trim())) {
    passwordInput.classList.remove("is-invalid");
    feedback.textContent = ""; // Clear error message
    return true;
  } else {
    passwordInput.classList.add("is-invalid");
    feedback.textContent = "Password must be at least 6 characters."; // Set error message
    return false;
  }
}
