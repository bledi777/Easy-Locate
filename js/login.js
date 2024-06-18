const wrapper = document.querySelector(".wrapper"),
    signupHeader = document.querySelector(".signup header"),
    loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
    wrapper.classList.add("active");
    signupHeader.textContent = "Dont Have a Account";
});

signupHeader.addEventListener("click", () => {
    wrapper.classList.remove("active");
    loginHeader.textContent = "Have A Account";
});

let login = document.getElementById("logIn");
function toggleLoginText() {
    login.textContent = login.textContent === "Have A Account" ? "Log in" : "Log in";
}
login.addEventListener('click', toggleLoginText);

let signup = document.getElementById("signUp");
function toggleSignupText() {
    signup.textContent = signup.textContent === "Signup" ? "Don't have an account?" : "Signup";
}
signup.addEventListener('click', toggleSignupText);

function saveName() {
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('passWord').value;

    // if (!fullName || !email) {
    //     alert("Please fill in all fields.");
    //     return;
    // }

    let signUp = JSON.parse(localStorage.getItem('signUp')) || [];
    const newEntry = {
        fullName,
        email,
        number,
        password,
    };
    signUp.push(newEntry);
    localStorage.setItem('signup', JSON.stringify(signUp));

    alert("Data saved successfully!");
    document.getElementById('dataForm').reset(); // Reset the form
}
