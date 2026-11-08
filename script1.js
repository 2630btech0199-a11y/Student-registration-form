
// Select the contact form
const form = document.getElementById("contactForm");

// Add submit event
form.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get values entered by the user
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display confirmation message
    alert("Thank you, " + name + "! Your message has been received.");

    // Clear the form
    form.reset();

});
