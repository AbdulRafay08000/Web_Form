document.getElementById('viewApplicationsButton').disabled = true;
document.getElementById('viewApplicationsButton').addEventListener('click', function () {
    document.getElementById('applicationTable').style.display = 'table';
});

document.getElementById('applicationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const street = document.getElementById('street').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zipCode = document.getElementById('zipCode').value.trim();
    const education = document.getElementById('education').value.trim();
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const company = document.getElementById('company').value.trim();
    const startDate = document.getElementById('startDate').value.trim();
    const relocate = document.getElementById('relocate').value.trim();

    if (!firstName || !lastName || !phone || !email || !street || !city || !state || !zipCode || !education || !jobTitle || !company || !startDate || !relocate) {
        alert("All fields are required!");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (firstName.length > 50) {
        alert("First name cannot exceed 50 characters.");
        return;
    }
    if (lastName.length > 50) {
        alert("Last name cannot exceed 50 characters.");
        return;
    }

    const zipPattern = /^\d{5}$/;
    if (!zipPattern.test(zipCode)) {
        alert("Please enter a valid 5-digit ZIP code.");
        return;
    }

    const tableBody = document.getElementById('tableBody');
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText = `${firstName} ${lastName}`;
    newRow.insertCell(1).innerText = phone;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = `${street}, ${city}, ${state}, ${zipCode}`;
    newRow.insertCell(4).innerText = education;
    newRow.insertCell(5).innerText = jobTitle;
    newRow.insertCell(6).innerText = company;
    newRow.insertCell(7).innerText = startDate;
    newRow.insertCell(8).innerText = relocate;

    document.getElementById('applicationForm').reset();
    document.getElementById('viewApplicationsButton').disabled = false;
});
