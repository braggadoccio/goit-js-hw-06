const signInForm = document.querySelector(".login-form");
signInForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return console.log("All fields must be filled in!");
  }
  console.log(`email: ${email.value}, Password: ${password.value}`);
  form.reset();
}