document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simulated email sending
        sendEmail(name, email, message);
    });

    function sendEmail(name, email, message) {
        // Simulated email sending logic
        console.log("Sending email to:", email);
        console.log("Subject: Contact Form Submission");
        console.log("Name:", name);
        console.log("Message:", message);

        // Reset form after submission
        form.reset();
    }
});
