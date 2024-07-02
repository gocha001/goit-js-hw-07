const userName = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

userName.addEventListener("change", handleChange);

function handleChange(event) {
  const userName = event.currentTarget.value.trim();
  span.textContent = `${userName}`;

  if (userName == 0) {
    span.textContent = "Anonymous";
  }
}
