/**
 * Email Field Matching Validation
 * Validation occurs in real time
 */
function doEmailsMatch(event) {
    // fields must match each other as typing occurs on the validation field
    if (emailValidField.value !== emailField.value) {
        emailField.classList.remove('valid');
        emailValidField.classList.remove('valid');
        emailField.classList.add('invalid');
        emailValidField.classList.add('invalid');
        matchWarning.style.display = "block";
        emailsMatch = false;
    } else if ((emailValidField.value === "") && (emailField.value === "")) {
        // no styles if empty
        emailField.classList.remove('invalid');
        emailField.classList.remove('valid');
        emailValidField.classList.remove('invalid');
        emailValidField.classList.remove('valid');
        matchWarning.style.display = "none";
        emailsMatch = false;
    } else {
        emailField.classList.remove('invalid');
        emailValidField.classList.remove('invalid');
        emailField.classList.add('valid');
        emailValidField.classList.add('valid');
        matchWarning.style.display = "none";
        emailsMatch = true;
    }
}

// real-time match warning
let matchWarning = document.createElement("p");
matchWarning.innerHTML = "Emails do not match";
matchWarning.classList.add("email-warning");

// Main form element
let contactForm = document.querySelector("#contact-form");
contactForm.before(matchWarning);

// real-time validation for email fields
let emailField = document.querySelector("#email");
let emailValidField = document.querySelector("#emailValidation");
// warning and success banners
let warningBanner = document.querySelector("#submission-warning");
let successBanner = document.querySelector("#submission-success");

let emailsMatch = false; // just for demo purposes
emailValidField.addEventListener("input", doEmailsMatch);
emailField.addEventListener("input", doEmailsMatch);

/**
 * JavaScript Form Post
 * goes nowhere and does nothing except displays
 * a success or error banner
 */

// take over form submission and prevent default behavior
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (emailsMatch) {
        successBanner.style.display = "block";
        warningBanner.style.display = "none";
    } else {
        successBanner.style.display = "none";
        warningBanner.style.display = "block";
    }

    event.preventDefault();
})