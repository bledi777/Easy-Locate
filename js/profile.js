document.addEventListener("DOMContentLoaded", function () {

    let signUp = JSON.parse(localStorage.getItem('signup')) || [];


    const profileTableBody = document.getElementById('profileTableBody');


    signUp.forEach(function (user) {

        const row = document.createElement('tr');


        row.innerHTML = `
            <td>${user.fullName}</td>
            <td>${user.email}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.password}</td>
        `;

        profileTableBody.appendChild(row);
    });
});

document.getElementById("showPassword").addEventListener("change", function () {
    var passwordField = document.getElementById("password");
    if (this.checked) {
        passwordField.innerText = "mySuperSecretPassword"; // Replace with actual password
    } else {
        passwordField.innerText = ""; // Clear password
    }
});

let signUp = JSON.parse(localStorage.getItem('signup')) || [];
console.log(signUp);
let enteredName = document.getElementById('enteredName');
console.log(enteredName);
enteredName.innerText = signUp[0].fullName;
enteredName.innerText = signUp[0].email;
enteredName.innerText = signUp[0].number;
enteredName.innerText = signUp[0].password;
console.log(signUp);