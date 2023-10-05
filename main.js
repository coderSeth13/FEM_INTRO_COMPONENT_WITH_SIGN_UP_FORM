// Fetching form and input elements
const submitForm = document.querySelector("[data-js-submit-form]");
const firstNameEl = document.querySelector("[data-js-first-name]");
const lastNameEl = document.querySelector("[data-js-last-name]");
const emailEl = document.querySelector("[data-js-email]");
const passwordEl = document.querySelector("[data-js-password]");

// Error function
const error = (element, message) => {
  const formSection = element.parentElement;
  const errorState = formSection.querySelector("[data-js-validate-error]");

  errorState.textContent = message;
  formSection.classList.add("error");
  formSection.classList.remove("success");
};

// Success function
const success = (element) => {
  const formSection = element.parentElement;
  const errorState = formSection.querySelector("[data-js-validate-error]");

  errorState.textContent = "";
  formSection.classList.add("success");
  formSection.classList.remove("error");
};

// Validate function
const formValidate = () => {
  firstName = firstNameEl.value.trim();
  lastName = lastNameEl.value.trim();
  email = emailEl.value.trim();
  password = passwordEl.value.trim();

  if (firstName === "") {
    error(firstNameEl, "First name can't be empty");
  } else {
    success(firstNameEl);
  }

  if (lastName === "") {
    error(lastNameEl, "Last name can't be empty");
  } else {
    success(lastNameEl);
  }

  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email === "") {
    error(emailEl, "Email can't be empty");
  } else if (!email.match(validEmail)) {
    error(emailEl, "Looks like this isn't an email");
  } else {
    success(emailEl);
  }

  if (password === "") {
    error(passwordEl, "Password can't be empty");
  } else if (password.length < 6) {
    error(passwordEl, "Password must be atleast 6 letters");
  } else {
    success(passwordEl);
  }
};

// Validating form on submiting
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formValidate();
});
