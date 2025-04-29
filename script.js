// Simple contact form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        this.reset(); // Clear the form
    } else {
        alert('Please fill out all fields.');
    }
});
