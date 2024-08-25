document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    const responseMessage = document.getElementById('response-message');

    if (name && email && message) {
        responseMessage.textContent = 'Thank you for your message, ' + name + '! We will get back to you soon.';
        responseMessage.style.color = 'green';
    } else {
        responseMessage.textContent = 'Please fill in all fields.';
        responseMessage.style.color = 'red';
    }

    // Clear form fields
    document.getElementById('contact-form').reset();
});
