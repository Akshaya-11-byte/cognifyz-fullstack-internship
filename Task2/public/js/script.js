const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    const name = document.getElementsByName("name")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const age = document.getElementsByName("age")[0].value;
    const phonenumber = document.getElementsByName("phonenumber")[0].value;

    if (name.trim() === "") {
        alert("Name is required!");
        event.preventDefault();
        return;
    }

    if (email.trim() === "") {
        alert("Email is required!");
        event.preventDefault();
        return;
    }
    if (age.trim() === "") {
    alert("Age is required!");
    event.preventDefault();
    return;
}

if (age < 18) {
    alert("Age must be 18 or above!");
    event.preventDefault();
    return;
}
if (phonenumber.trim() === "") {
    alert("Phone Number is required!");
    event.preventDefault();
    return;
}

if (phonenumber.length !== 10) {
    alert("Phone Number must contain exactly 10 digits!");
    event.preventDefault();
    return;
}
});