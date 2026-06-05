const form = document.getElementById("applicationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email address";
    isValid = false;
  }

  const phonePattern = /^[0-9]{10}$/;

  if (phone === "") {
    document.getElementById("phoneError").textContent = "Phone number is required";
    isValid = false;
  } else if (!phone.match(phonePattern)) {
    document.getElementById("phoneError").textContent = "Phone number must be 10 digits";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent =
      "Application submitted successfully!";
    form.reset();
  }
});