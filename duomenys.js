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

    contactData.firstname = firstName;
    contactData.lastname = lastName;
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

    displayDataInConsole();
    calculateAndDisplayAverage(contactData);
}

function displayDataOnPage(label, value) {
    const contactInfoDiv = document.getElementById('contactInfo');

    const dataLine = document.createElement('p');
    dataLine.textContent = `${label} ${value}`;
    contactInfoDiv.appendChild(dataLine);
}

function displayDataInConsole(contactData) {
    console.log('Duomenys:', contactData);
}

function calculateAndDisplayAverage(contactData) {
    const features = contactData.features;
    let sum = 0;

    for (const feature of features) {
        sum += feature;
    }

    const average = sum / features.length;
    const vidurkis = document.getElementById('vidurkis');

    vidurkis.textContent = `${contactData.firstname} ${contactData.lastname} (${contactData.email}): ${average.toFixed(2)}`;
}

document.getElementById('submitBtn').addEventListener('click', submitForm);
