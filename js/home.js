// alert("test");
// console.log('test');
let movingFrom = document.getElementById('movingFrom');
let movingTo = document.getElementById('movingTo');
let date = document.getElementById('date');
let sizeMove = document.getElementById('sizeMove');
let address = document.getElementById('address');
let namee = document.getElementById('name');
let email = document.getElementById('email');
let requestNewLocate = document.getElementById('requestNewLocate');
console.log(requestNewLocate);
let relocateForm = document.getElementById('relocateForm')

const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    let movingFromValue = movingFrom.value;
    let movingToValue = movingTo.value;
    let dateValue = date.value;
    let sizeMoveValue = sizeMove.value;
    let addressValue = address.value;
    let nameeValue = namee.value;
    let emailValue = email.value;
    console.log(movingFromValue);
    console.log(movingToValue);
    console.log(dateValue);
    console.log(sizeMoveValue);
    console.log(addressValue);
    console.log(nameeValue);
    console.log(emailValue);

}

relocateForm.addEventListener('submit', onSubmit);
localStorage.setItem("Value", relocateForm);


function saveData() {
    const movingFrom = document.getElementById('movingFrom').value;
    const movingTo = document.getElementById('movingTo').value;
    const date = document.getElementById('date').value;
    const sizeMove = document.getElementById('sizeMove').value;
    const address = document.getElementById('address').value;
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!movingFrom || !movingTo || !date || !sizeMove || !address || !fullName || !email) {
        alert("Please fill in all fields.");
        return;
    }

    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    const newEntry = {
        movingFrom,
        movingTo,
        date,
        sizeMove,
        address,
        fullName,
        email
    };
    entries.push(newEntry);
    localStorage.setItem('entries', JSON.stringify(entries));

    alert("Data saved successfully!");
    document.getElementById('dataForm').reset(); // Reset the form
}
let signUp = JSON.parse(localStorage.getItem('signup')) || [];
console.log(signUp);
let enteredName = document.getElementById('enteredName');
console.log(enteredName)
enteredName.innerText = signUp[0].fullName;


const isLoggedIn = true;

const loginLink = document.getElementById('login-link');


const signUpLink = document.getElementById('signup-link');