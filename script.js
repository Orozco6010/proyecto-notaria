const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordlValue = password.value;
  if (emailValue && passwordlValue) {
    window.open("views/principal.html", "_self");
  }
  console.log({ emailValue, passwordlValue });
});
