const form = document.getElementById("form");

const email = document.getElementById("Email");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const postalCode = document.getElementById("postalCode");
const phoneNo = document.getElementById("phoneNo");
const cardNo = document.getElementById("cardNo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});

function validateInput() {
  const emailValue = email.value.trim();
  const fNameValue = fname.value.trim();
  const lNameValue = lname.value.trim();
  const postalCodeValue = postalCode.value.trim();
  const phoneNoValue = phoneNo.value.trim();
  const cardNoValue = cardNo.value.trim();

  if (fname === "") {
    setError(fname, "First Name is required");
  } else {
    setSuccess(fname);
  }

  if (lname === "") {
    setError(lname, "Last Name is required");
  } else {
    setSuccess(lname);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Please provide valid email address");
  } else {
    setSuccess(email);
  }

  if (postalCode === "") {
    setError(postalCode, "Postal Code is required");
  } else if (!isValidNumber(postalCodeValue) || postalCodeValue.length != 5) {
    setError(postalCode, "Please enter valid US Postal Code");
  } else {
    setSuccess(postalCode);
  }

  if (phoneNo === "") {
    setError(phoneNo, "Phone number is required to verify order and delivery");
  } else if (!isValidNumber(phoneNoValue)) {
    setError(phoneNo, "Please enter phone number");
  } else {
    setSuccess(phoneNo);
  }

  if (cardNo === "") {
    setError(cardNo, "Please enter card number");
  } else if (!isValidNumber(cardNoValue) || cardNoValue.length != 16) {
    setError(cardNo, "Card Number must be 16 digits");
  } else {
    setSuccess(cardNo);
  }
}

function isValidNumber(inputString) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(inputString);
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// This is for display ==================================================================================================================================================
function setError(element, message) {
  element.placeholder = message;
  element.classList.add("error");
  element.classList.remove("success");
}

function setSuccess(element) {
  element.classList.add("success");
  element.classList.remove("error");
}
