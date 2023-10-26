const signInForm = document.querySelector(".login-form");
signInForm.addEventListener("submit", handleSubmit);

let loginDetails = {};
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled in!");
  }
  loginDetails.email = email.value;
  loginDetails.password = password.value;
  console.log(loginDetails);
  // console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
