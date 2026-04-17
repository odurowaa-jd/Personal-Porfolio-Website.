/ HOMEPAGE CONTACT FORM VALIDATION /
const homeForm = document.querySelector(".contact-form");
const homeMessage = document.querySelector(".form-message");

if (homeForm) {
  homeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = homeForm.querySelector("input[type='text']").value.trim();
    const email = homeForm.querySelector("input[type='email']").value.trim();
    const textarea = homeForm.querySelector("textarea").value.trim();

    if (!name || !email || !textarea) {
      homeMessage.textContent = "Please fill in all fields.";
      homeMessage.style.color = "red";
      return;
    }

    homeMessage.textContent = "Message sent successfully!";
    homeMessage.style.color = "#6f8f7b";

    homeForm.reset();
  });
}


/ CONTACT PAGE FORM VALIDATION /
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    if (name.value.trim() === "") {
      showError(name, "Name is required");
      isValid = false;
    }

    if (email.value.trim() === "") {
      showError(email, "Email is required");
      isValid = false;
    } else if (!validateEmail(email.value)) {
      showError(email, "Enter a valid email");
      isValid = false;
    }

    if (message.value.trim() === "") {
      showError(message, "Message cannot be empty");
      isValid = false;
    }

    if (isValid) {
      showSuccess(); // 👈 use animation instead of alert
      contactForm.reset();
    }
  });
}


/ HELPER FUNCTIONS /
function showError(input, msg) {
  const error = input.nextElementSibling;
  error.textContent = msg;
}

function validateEmail(email) {
  const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return regex.test(email);
}


/ SUCCESS ANIMATION FUNCTION /
function showSuccess() {
  const successMessage = document.getElementById("successMessage");
  successMessage.classList.add("show");

  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 3000);
}