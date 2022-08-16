const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password2");

function passwordMatching() {
    if (password.value !== passwordConfirmation.value) {
        passwordConfirmation.setCustomValidity("Passwords do not match");
    } else {
        passwordConfirmation.setCustomValidity(" ");
    }
}

password.onchange = passwordMatching;
passwordConfirmation.onkeyup = passwordMatching;