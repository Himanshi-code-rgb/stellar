document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Simple validation
    if (username === '' || password === '') {
        messageElement.textContent = 'Both fields are required.';
        return;
    }

    // Perform login logic (for demonstration, we'll just display a success message)
    if (username === 'user' && password === 'pass') {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid username or password.';
        messageElement.style.color = 'red';
    }
});
