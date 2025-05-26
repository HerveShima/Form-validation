const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput(username, "Username cannot be blank");
  validateEmail(email);
  validateInput(password, "Password cannot be blank");
});

function validateInput(input, message) {
  const errorDiv = input.nextElementSibling.nextElementSibling.nextElementSibling;
  if (input.value.trim() === "") {
    showError(input, message, errorDiv);
  } else {
    showSuccess(input, errorDiv);
  }
}

function validateEmail(input) {
  const errorDiv = input.nextElementSibling.nextElementSibling.nextElementSibling;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (input.value.trim() === "") {
    showError(input, "Email cannot be blank", errorDiv);
  } else if (!input.value.match(emailPattern)) {
    showError(input, "Enter a valid email", errorDiv);
  } else {
    showSuccess(input, errorDiv);
  }
}

function showError(input, message, errorDiv) {
  input.classList.add("error-border");
  input.nextElementSibling.style.opacity = "1"; // failure icon
  input.nextElementSibling.nextElementSibling.style.opacity = "0"; // success icon
  errorDiv.innerText = message;
}

function showSuccess(input, errorDiv) {
  input.classList.remove("error-border");
  input.nextElementSibling.style.opacity = "0"; // failure icon
  input.nextElementSibling.nextElementSibling.style.opacity = "1"; // success icon
  errorDiv.innerText = "";
}
