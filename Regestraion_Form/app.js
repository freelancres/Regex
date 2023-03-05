// Define Events Handlers :

const validateName = () => {
  const name = document.getElementById("name");
  // Name must between 2 and 10, starts with Capital
  const re = /^[A-Z][a-zA-Z\s]{1,9}$/;
  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");
  }
};

const validateZipcode = () => {
  const zipcode = document.getElementById("zipcode");
  const re = /^[1-9]\d{4}$/;
  if (!re.test(zipcode.value)) {
    zipcode.classList.add("is-invalid");
  } else {
    zipcode.classList.remove("is-invalid");
    zipcode.classList.add("is-valid");
  }
};

const validateEmail = () => {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-]+)\.([a-zA-Z]{2,5})$/;
  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  }
};

const validatePassword = () => {
  const password = document.getElementById("password");
  /**
   * contains letters small case (at least 1)
   * contains letters capital case (at least 1)
   * contains numbers (at least 1)
   * special charachters (at least 1)
   * min length 8
   */
//   const re = / /;
//   if (!re.test(password.value)) {
//     password.classList.add("is-invalid");
//   } else {
//     password.classList.remove("is-invalid");
//     password.classList.add("is-valid");
//   }
};

const validatePhone = () => {
    const phone = document.getElementById("phone");
    const re = /^01[0-9]{10}$/;
    if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
    phone.classList.add("is-valid");
  }
};


// Add Events listeners:

document.getElementById("name").addEventListener("blur", validateName);

document.getElementById("zipcode").addEventListener("blur", validateZipcode);

document.getElementById("email").addEventListener("blur", validateEmail);

document.getElementById("password").addEventListener("blur", validatePassword);

document.getElementById("phone").addEventListener("blur", validatePhone);
