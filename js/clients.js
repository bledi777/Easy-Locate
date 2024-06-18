let costumors = document.getElementById('formId');

let costumorsName = document.getElementsByClassName('costumorsNameId');
let phoneNumber = document.getElementById('phoneNumberId');
let country = document.getElementById('countryId');

let container = document.getElementById('containereId')
let button = document.getElementById('buttonId')
let costumorEmpty = [];
let tr = document.getElementById('trId')


const createCustomors = () => {
    container.innerHTML="";
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    thead.innerHTML = `
    <tr>
        <th>firstname</th>
        <th>firstname</th>
        <th>firstname</th>
    </tr>
 `
    let tbody = document.createElement('tbody');
    costumorEmpty.forEach(costumor => {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${costumor.firstName}</td>
          <td>${costumor.phoneNumber}</td>
            <td>${costumor.country}</td>
           

        `

        tbody.appendChild(row);
    })
    table.appendChild(tbody)
    table.appendChild(thead);
    container.appendChild(table)

}
const createCostumor = (e) => {
    e.preventDefault();
    let formData = {
        costumorsName: costumorsName.value,
        phoneNumber: phoneNumber.value,
        country: country.value
    }
    costumorEmpty.push(formData);
    createCustomors();
}
costumors.addEventListener('submit', createCostumor)