const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

const password = document.getElementById('password');

//form not submitting without validating all elements
form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};
//Email properties
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  //userename succes and error messages
  if (usernameValue === '') {
    setError(username, 'Username is required');
  } else {
    setSuccess(username, 'Username is available');
  }
  //email success and error messages
  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Enter a valid email');
  } else {
    setSuccess(email, 'Email is available');
  }

  //password messages
  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password is a little secure');
  } else {
    setSuccess(password, 'Password is secure');
  }
};
