const form = document.getElementById('form');
const pwd1El = document.getElementById('pwd1');
const pwd2El = document.getElementById('pwd2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  isValid = form.checkValidity();
  console.log('isValid: ', isValid);

  if (!isValid) {
    message.textContent = 'Please fill out all fields.'
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
  }

  if (pwd1El.value === pwd2El.value) {
    passwordsMatch = true;
    pwd1El.style.borderColor = 'lime';
    pwd2El.style.borderColor = 'lime';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    pwd1El.style.borderColor = 'red';
    pwd2El.style.borderColor = 'red';
  }
}

function processFormData(e) {
  e.preventDefault();

  // validate form
  validateForm();
}

form.addEventListener('submit', processFormData);