function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}

document.querySelector('.toggle').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);
document.querySelectorAll('.pop-nav').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('myNav').style.display = 'none';
  });
});
const fields = {};

document.addEventListener('DOMContentLoaded', () => {
  fields.fullName = document.getElementById('name');
  fields.email = document.getElementById('email');
  fields.message = document.getElementById('msg');
});

// eslint-disable-next-line no-unused-vars
// function isEmail(email) {
//   const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
//   return regex.test(String(email).toLowerCase());
// }

// const email = document.getElementById('email');

// function validateEmail(email) {
//   const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (email.value.match(validRegex)) {
//     alert('Valid email address!');
//     document.form1.text1.focus();
//     return true;
//   }
//   else {
//   alert('Lowercase please!');
//   document.form1.text1.focus();
//   return false;
// }

/* eslint-enable */
// const name = document.getElementById('name').value;
// const email = document.getElementById('#email').value;
// const message = document.getElementById('msg').value;
// const errorMessage = document.getElementById('error_message');

// errorMessage.style.padding = '10px';

// let text;
// const mailFormat = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/;

const email = document.querySelector('#email');
const errorMessage = document.querySelector('#error_message');
const validate = document.querySelector('.form-section');

validate.addEventListener('submit', (event) => {
  const regex = /[A-Z]/;
  const emailContent = email.value;
  if (regex.test(emailContent)) {
    errorMessage.innerHTML = 'Sorry! your mail must be in lowerCase';
    event.preventDefault();
  }
});