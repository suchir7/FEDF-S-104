const form = document.getElementById('registrationForm');
const inputs = {
  fullName: document.getElementById('fullName'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  phone: document.getElementById('phone')
};

const errors = {
  fullName: document.getElementById('nameError'),
  email: document.getElementById('emailError'),
  password: document.getElementById('passwordError'),
  phone: document.getElementById('phoneError')
};

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password);
}

function validatePhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

function showError(input, message) {
  input.classList.remove('valid');
  input.classList.add('invalid');
  errors[input.id].textContent = message;
}

function showSuccess(input) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  errors[input.id].textContent = '';
}

Object.values(inputs).forEach(input => {
  input.addEventListener('input', () => {
    const value = input.value.trim();
    switch (input.id) {
      case 'fullName':
        value.length >= 3 ? showSuccess(input) : showError(input, 'Name must be at least 3 characters');
        break;
      case 'email':
        validateEmail(value) ? showSuccess(input) : showError(input, 'Invalid email format');
        break;
      case 'password':
        validatePassword(value) ? showSuccess(input) : showError(input, 'Weak password');
        break;
      case 'phone':
        validatePhone(value) ? showSuccess(input) : showError(input, 'Invalid phone number');
        break;
    }
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  let allValid = true;

  Object.values(inputs).forEach(input => {
    input.dispatchEvent(new Event('input'));
    if (!input.classList.contains('valid')) {
      allValid = false;
    }
  });

  const successMessage = document.getElementById('successMessage');
  successMessage.textContent = allValid ? 'Registration successful!' : '';
});