const form = document.getElementById("form");

const email = document.getElementById("Email");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const postalCode = document.getElementById("postalCode");
const phoneNo = document.getElementById("phoneNo");
const cardNo = document.getElementById("cardNo");
const expDate = document.getElementById("expDate");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});

// Ensure expiration date is not earlier than the next day
let today = new Date();
today = new Date(today.setDate(today.getDate() + 1))
  .toISOString()
  .split("T")[0];
expDate.setAttribute("min", today);

function validateInput() {
  const emailValue = email.value.trim();
  const fNameValue = fname.value.trim();
  const lNameValue = lname.value.trim();
  const postalCodeValue = postalCode.value.trim();
  const phoneNoValue = phoneNo.value.trim();
  const cardNoValue = cardNo.value.trim();
  const expDateValue = expDate.value; // YYYY-MM-DD

  console.log(expDateValue);

  if (fNameValue === "") {
    setError(fname, "First Name is required");
  } else {
    setSuccess(fname);
  }

  if (lNameValue === "") {
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

  if (postalCodeValue === "") {
    setError(postalCode, "Postal Code is required");
  } else if (isNaN(Number(postalCodeValue)) || postalCodeValue.length != 5) {
    setError(postalCode, "Please enter valid US Postal Code");
  } else {
    setSuccess(postalCode);
  }

  if (phoneNoValue === "") {
    setError(phoneNo, "Phone number is required to verify order and delivery");
  } else if (isNaN(Number(phoneNoValue))) {
    setError(phoneNo, "Please enter phone number");
  } else {
    setSuccess(phoneNo);
  }

  if (cardNoValue === "") {
    setError(cardNo, "Card number");
  } else if (isNaN(Number(cardNoValue)) || cardNoValue.length != 16) {
    setError(cardNo, "Invalid Card Number");
  } else {
    setSuccess(cardNo);
  }
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
