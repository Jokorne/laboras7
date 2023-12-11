const contactData = {};

function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const feature1 = parseFloat(document.getElementById('feature1').value);
    const feature2 = parseFloat(document.getElementById('feature2').value);
    const feature3 = parseFloat(document.getElementById('feature3').value);
    const feature4 = parseFloat(document.getElementById('feature4').value);
    const feature5 = parseFloat(document.getElementById('feature5').value);

    if (!validateEmail(email)) {
        alert('Netinkamas el. pašto adresas');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Netinkamas telefono numeris');
        return;
    }

    if (!validateAddress(address)) {
        alert('Adresas yra privalomas');
        return;
    }

    contactData.firstName = firstName;
    contactData.lastName = lastName;
    contactData.email = email;
    contactData.phone = phone;
    contactData.address = address;
    contactData.features = [feature1, feature2, feature3, feature4, feature5];

    displayDataOnPage('Vardas:', firstName);
    displayDataOnPage('Pavardė:', lastName);
    displayDataOnPage('El. paštas:', email);
    displayDataOnPage('Telefonas:', phone);
    displayDataOnPage('Adresas:', address);
    displayDataOnPage('Kursas:', feature1);
    displayDataOnPage('Semestras:', feature2);
    displayDataOnPage('Dalykai šiame semestre:', feature3);
    displayDataOnPage('Amžius:', feature4);
    displayDataOnPage('Vaikų skaičius:', feature5);

    const average = calculateAverage(contactData.features);
    displayDataOnPageWithColor(`${firstName} ${lastName} (${email}): ${average.toFixed(2)}`, average);
}

function displayDataOnPage(label, value) {
    const contactInfoDiv = document.getElementById('contactInfo');

    const dataLine = document.createElement('p');
    dataLine.textContent = `${label} ${value}`;
    contactInfoDiv.appendChild(dataLine);
}

function displayDataOnPageWithColor(value, average) {
    const contactInfoDiv = document.getElementById('contactInfo');

    const dataLine = document.createElement('p');
    dataLine.textContent = value;
    
    if (average < 10) {
        dataLine.style.color = 'red';
    } else if (average >= 10 && average <= 20) {
        dataLine.style.color = 'orange';
    } else {
        dataLine.style.color = 'green';
    }

    contactInfoDiv.appendChild(dataLine);
}

function validateAddress(address) {
    return address.trim() !== '';
}

function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{9}$/;
    return phoneRegex.test(phone);
}

function calculateAverage(features) {
    let sum = 0;
    for (const feature of features) {
        sum += feature;
    }
    return sum / features.length;
}

document.getElementById('submitBtn').addEventListener('click', submitForm);
