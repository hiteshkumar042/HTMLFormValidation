
//Name validation
const text = document.querySelector('#text');
const texterror = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value)) {
        texterror.textContent = ""
    }
    else {
        texterror.textContent = "Incorrect Name ";
    }
});
//Email Validation
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email.value)) {
        emailError.textContent = " ";
    } else {
        emailError.textContent = "Invalid Email";
    }
});
//Mobile Number validate
const mobile = document.querySelector('#mobile');
const mobileError = document.querySelector('.mobile-error');
mobile.addEventListener('input', function () {
    let mobRegex = /^91[ ]*[6-9]{1}[0-9]{9}$/;
    if (mobRegex.test(mobile.value)) {
        mobileError.textContent = " ";
    } else {
        mobileError.textContent = "Invalid Mobile";
    }
});
//Password min 8 characters
const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
pwd.addEventListener('input', function () {
    let PwdRegex = /^[A-Z][a-z][0-9]{8,}$/;
    if (pwd.value.length > 8) {
        pwdError.textContent = " ";
    } else {
        pwdError.textContent = "Weak Password";
    }
});

