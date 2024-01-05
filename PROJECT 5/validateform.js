function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phno").value.trim();
    const dropDown = document.getElementById("job").value.trim();
    const password = document.getElementById("Password").value.trim();
    const address = document.getElementById("Address").value.trim();
  
    // Regular Expressions for Email and Phone Number validation
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPhone = /^\d{10}$/;
    const regName = /\d+$/;
  
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
    const creditCardValue = document.getElementById("pay").value.trim();
    const regCreditCard = /^\d{16}$/;
  
    if (!regCreditCard.test(creditCardValue)) {
      alert("Please enter a 16-digit credit card number.");
      return false;
    }
  
    if (regName.test(name)) {
      alert("Please enter a valid name without numbers.");
      return false;
    }
  
    if (address === "") {
      alert("Please enter your address.");
      return false;
    }
  
    if (email === "") {
      alert("Please enter your email.");
      return false;
    }
  
    if (!regEmail.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (password === "") {
      alert("Please enter your password.");
      return false;
    }
  
    if (password.length < 8) {
      alert("Password should be at least 8 characters long.");
      return false;
    }
  
    if (phone === "") {
      alert("Please enter your phone number.");
      return false;
    }
  
    if (!regPhone.test(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }
  
    if (dropDown === "") {
      alert("Please enter your job title.");
      return false;
    }
  
    alert("Form Successfully Submitted");
    Redirect();
    return true;
  }
  
  function Redirect() {
    window.location.href = "http://www.w3schools.com";
  }