const title = document.getElementById("formTitle");
const emailField = document.getElementById("emailField");
const submitBtn = document.getElementById("submitBtn");
const loginText = document.getElementById("loginText");

function showSignup() {
    title.innerText = "Create Account";
    emailField.style.display = "block";
    submitBtn.innerText = "Signup";
    loginText.classList.remove("hidden");
}

function showLogin() {
    title.innerText = "Customer Login";
    emailField.style.display = "none";
    submitBtn.innerText = "Login";
    loginText.classList.add("hidden");
}
