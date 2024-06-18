var marker = new google.maps.Marker({position: myCenter});

marker.setMap(map);
function saveInfo() {
    var name = document.getElementById('nameE').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var message = document.getElementById('messageE').value;
    var contactInfo = {
        name: name,
        phoneNumber: phoneNumber,
        message: message
    };
    var contactInfoJSON = JSON.stringify(contactInfo)
    localStorage.setItem('contactInfo', contactInfoJSON);
    alert('Contact information saved!');
}
