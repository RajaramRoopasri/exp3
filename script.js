document.getElementById("ecetForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const phone = document.getElementById("phone").value.trim();

  if (!/^\d{10}$/.test(phone)) {
    alert("📞 Phone number must be exactly 10 digits (no letters or symbols).");
    return;
  }

  alert("✅ Form submitted successfully!");
  this.reset(); // Optional: reset the form after submission
});
