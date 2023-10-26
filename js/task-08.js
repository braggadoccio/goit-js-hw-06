const signInForm = document.querySelector(".login-form");
signInForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.dir(event.currentTarget);

  if (email.value === "" || password.value === "") {
    return console.log("All fields must be filled in!");
  }
  console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
