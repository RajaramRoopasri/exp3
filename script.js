<script>
  function validateForm() {
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;
    const errorDiv = document.querySelector('#error');

    let errors = [];

    errorDiv.textContent = ''; // Clear previous errors

    // Required fields check
    if (!username || !email || !password || !confirmPassword) {
      errors.push("All fields are required");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    // Password match
    if (password && confirmPassword && password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }

    // Password strength (minimum 8 chars, uppercase, lowercase, number, special char)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (password && !passwordPattern.test(password)) {
      errors.push("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
    }

    if (errors.length > 0) {
      errorDiv.innerHTML = errors.map(err => `<p>${err}</p>`).join('');
      errorDiv.style.color = "red";
      return false;
    }

    alert("Registration successful!");
    return true;
  }
</script>
