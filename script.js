const form = document.querySelector(".contact-form");
const message = document.querySelector(".form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const textarea = form.querySelector("textarea").value.trim();

  if (!name || !email || !textarea) {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Message sent successfully!";
  message.style.color = "#6f8f7b";

  form.reset();
});