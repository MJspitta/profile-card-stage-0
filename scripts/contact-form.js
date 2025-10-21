// FORM VALIDATION

const contactForm = document.getElementById('contact-form');
const fullName = document.getElementById('name');
const cEmail = document.getElementById('email');
const cSubject = document.getElementById('subject');
const cMessage = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const subjectError = document.getElementById('subject-error');
const messageError = document.getElementById('message-error');
const successMessage = document.getElementById('success-message');

const checkIsNotEmpty = (inputElement, errorElement) => {
  if (!inputElement.value.trim()) {
    errorElement.textContent = "This field cannot be empty.";
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
};

const checkIsValid = (inputElement, errorElement) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(inputElement.value)) {
    errorElement.textContent = "Please enter a valid email address.";
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
};

const checkMinLength = (inputElement, minLength, errorElement) => {
  const msgLen = inputElement.value.length;
  if (msgLen < minLength) {
    errorElement.textContent = `Text must be at least ${minLength} characters long.`;
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  let isValid = true;

  if (!checkIsNotEmpty(fullName, nameError)) {
    isValid = false;
  }

  if (!checkIsNotEmpty(cEmail, emailError) || !checkIsValid(cEmail, emailError)) {
    isValid = false;
  }

  if (!checkIsNotEmpty(cSubject, subjectError)) {
    isValid = false;
  }

  if (!checkIsNotEmpty(cMessage, messageError) || !checkMinLength(cMessage, 10, messageError)) {
    isValid = false;
  }

  if(isValid) {
    successMessage.textContent = "Form submitted successfully!!!";
    successMessage.scrollIntoView({ behavior: 'smooth' });
    contactForm.reset();
  } else {
    successMessage.textContent = "";
  }

}

contactForm.addEventListener('submit', handleSubmit);