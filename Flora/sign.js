window.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
  
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Perform form validation here
      const email = document.getElementById('email').value;
      const name = document.getElementById('name').value;
      const dob = document.getElementById('dob').value;
      const sex = document.getElementById('sex').value;
      const nationality = document.getElementById('nationality').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
  
      // Perform validation checks
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (!isValidPassword(password)) {
        alert('Password should contain at least 8 characters with letters and numbers.');
        return;
      }
  
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
  
      // Submit the form if validation passes
      signupForm.submit();
    });
  
    function isValidEmail(email) {
      // Email validation logic
      // Example: Regular expression pattern matching
      const emailPattern = /\S+@\S+\.\S+/;
      return emailPattern.test(email);
    }
  
    function isValidPassword(password) {
      // Password validation logic
      // Example: Regular expression pattern matching
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return passwordPattern.test(password);
    }
  });
  window.addEventListener('DOMContentLoaded', () => {
    const createAccountLink = document.getElementById('create-account-link');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
  
    createAccountLink.addEventListener('click', (event) => {
      event.preventDefault();
      signinForm.style.display = 'none';
      signupForm.style.display = 'block';
    });
  
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Perform account creation and validation logic
      // ...
      // After successful account creation, you can redirect or show a success message
    });
  });
    