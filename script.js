
  <script>
    function validateForm() {
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const errorDiv = document.getElementById('error');

      errorDiv.textContent = '';

      if (!username || !email || !password || !confirmPassword) {
        errorDiv.textContent = "All fields are required.";
        return false;
      }

      if (password !== confirmPassword) {
        errorDiv.textContent = "Passwords do not match.";
        return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errorDiv.textContent = "Please enter a valid email address.";
        return false;
      }

      alert("Registration successful!");
      return true;
    }
  </script>