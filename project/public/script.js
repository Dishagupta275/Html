document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation
    if (!username || !password || !confirmPassword) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // Proceed with registration logic (e.g., send data to the server)
    console.log(`Username: ${username}, Password: ${password}`);
    errorMessage.textContent = 'Registration successful!'; // Simulate success
});

// Real-time validation for username
document.getElementById('username').addEventListener('input', function() {
    const username = this.value;
    const errorMessage = document.getElementById('error-message');

    if (username.length < 3) {
        errorMessage.textContent = 'Username must be at least 3 characters long.';
    } else {
        errorMessage.textContent = '';
    }
});

// Real-time validation for password strength
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthIndicator = document.getElementById('password-strength');

    if (password.length < 6) {
        strengthIndicator.textContent = 'Weak';
        strengthIndicator.style.color = 'red';
    } else if (password.length < 10) {
        strengthIndicator.textContent = 'Moderate';
        strengthIndicator.style.color = 'orange';
    } else {
        strengthIndicator.textContent = 'Strong';
        strengthIndicator.style.color = 'green';
    }
});