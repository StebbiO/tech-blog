// this file will handle both login and signup functionalities
// login
async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email-login"]').value.trim();
    const password = document.querySelector('input[name="password-login"]').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-type': 'application/json' }
        });
        // check the response status
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

// signup
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="username-signup"]').value.trim();
    const email = document.querySelector('input[name="email-signup"]').value.trim();
    const password = document.querySelector('input[name="password-signup"]').value.trim();
    console.log(username, email, password);

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-type': 'application/json' }
        });
        // check the response status
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);