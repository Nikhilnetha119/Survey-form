// Function to reset the form
function resetForm() {
    document.getElementById("survey-form").reset();
}

// Function to display the submitted values in a popup
function submitForm() {
    // Retrieve form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dateOfBirth = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelectorAll("input[type=checkbox]:checked");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    // Display the submitted values in the popup
    const submittedValues = document.getElementById("submitted-values");
    submittedValues.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.length > 0 ? [...gender].map(g => g.value).join(", ") : "Not selected"}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    `;

    // Display the popup
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
