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

const nameSection = document.querySelector('#name');
const emailSection = document.querySelector('#email');
const messageSection = document.querySelector('#msg');

validate.addEventListener('input', () => {
  const userData = {
    name: nameSection.value,
    email: emailSection.value,
    message: messageSection.value,
  };

  localStorage.setItem('userData', JSON.stringify(userData));
});
const userDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
nameSection.value = userDataFromLocalStorage.name;
emailSection.value = userDataFromLocalStorage.email;
messageSection.value = userDataFromLocalStorage.message;