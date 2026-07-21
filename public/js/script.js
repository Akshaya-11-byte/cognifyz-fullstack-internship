const form = document.getElementById("registerForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

form.addEventListener("submit", function(event){

    event.preventDefault();

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmError.innerHTML = "";

    let valid = true;

    if(name.value.trim() === ""){
        nameError.innerHTML = "Name is required";
        valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.value.trim() === ""){
        emailError.innerHTML = "Email is required";
        valid = false;
    }
    else if(!email.value.match(emailPattern)){
        emailError.innerHTML = "Enter a valid email";
        valid = false;
    }

    if(password.value.length < 8){
        passwordError.innerHTML = "Password must contain at least 8 characters";
        valid = false;
    }

    if(confirmPassword.value !== password.value){
        confirmError.innerHTML = "Passwords do not match";
        valid = false;
    }

   if(valid){
    alert("Registration Successful!");
    form.reset();
}

});