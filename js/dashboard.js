function loadEntries() {
    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    const tableBody = document.getElementById('entriesTableBody');
    tableBody.innerHTML = ''; // Clear the table body

    if (entries.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="8">No data saved</td></tr>';
        return;
    }

    entries.forEach((entry, index) => {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        cell1.innerHTML = index + 1;
        cell2.innerHTML = entry.movingFrom;
        cell3.innerHTML = entry.movingTo;
        cell4.innerHTML = entry.date;
        cell5.innerHTML = entry.sizeMove;
        cell6.innerHTML = entry.address;
        cell7.innerHTML = entry.fullName;
        cell8.innerHTML = entry.email;
    });
}

document.addEventListener('DOMContentLoaded', loadEntries);

let signUp = JSON.parse(localStorage.getItem('signup')) || [];
console.log(signUp);
let enteredName = document.getElementById('enteredName');
console.log(enteredName)
enteredName.innerText = signUp[0].fullName;

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            number: document.getElementById('number').value,
            ccaddress: document.getElementById('ccaddress').value,
            newaddress: document.getElementById('newaddress').value,
            datemp: document.getElementById('datemp').value,
            dateap: document.getElementById('dateap').value,
            Apartment: document.getElementById('Apartment').value,
            House: document.getElementById('House').value,
            Office: document.getElementById('Office').value,
            StorageUnit: document.getElementById('Storage-Unit').value,
            Other1: document.getElementById('Other-1').value,
            Apartment2: document.getElementById('Apartment2').value,
            House2: document.getElementById('House2').value,
            Office2: document.getElementById('Office2').value,
            StorageUnit2: document.getElementById('Storage-Unit2').value,
            Other2: document.getElementById('Other-2').value,
            Packing: document.getElementById('Packing').value,
            Unpacking: document.getElementById('Unpacking').value,
            Loading: document.getElementById('Loading').value,
            Unloading: document.getElementById('Unloading').value,
            FurnitureAssemblyDisassembly: document.getElementById('Furniture-Assembly-Disassembly').value,
            Storage: document.getElementById('Storage').value,
            Other3: document.getElementById('Other-3').value,
            Loading: document.getElementById('Loading').value,
            // Add more fields as needed
        };

        // Store data in local storage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Optionally, you can redirect to a success page or perform other actions
        alert('Form data has been saved to local storage.');

        // Reset the form if needed
        form.reset();
    });
});