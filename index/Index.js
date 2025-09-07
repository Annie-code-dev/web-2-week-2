const form = document.getElementById("myForm");
const email= document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
    form.onsubmit = function (e) {
        if (!email.value){
            e.preventDefault();
            errorMessage.textContent = "Email is required";
        }
    };

const button = document.getElementById("Btn1");
const message = document.getElementById("message");

button.addEventListener("click", () =>{
    message.textContent = "Clicked!";
});
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});
// Select elements
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const successMsg = document.getElementById("successMsg");

// Regular expressions
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email pattern
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/; 
// At least 6 chars, 1 uppercase, 1 lowercase, 1 number

// Validate on form submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from refreshing
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent = 
      "Password must be 6+ chars, include uppercase, lowercase, and a number.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Confirm password validation
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    valid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  // If all good
  if (valid) {
    successMsg.textContent = "🎉 Form submitted successfully!";
    form.reset(); // clear form
  } else {
    successMsg.textContent = "";
  }
});

// Optional: Live validation while typing
emailInput.addEventListener("input", () => {
  if (emailRegex.test(emailInput.value)) {
    emailError.textContent = "";
  }
});