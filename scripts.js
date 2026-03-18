document.addEventListener("DOMContentLoaded", () => {
    const mobileNavBar = document.getElementById('mobileNavBar');
    const desktopControllerBtn = document.getElementById('desktopControllerBtn');
    const mobileControllerBtn = document.getElementById('mobileControllerBtn')

    desktopControllerBtn.addEventListener('click', () => {
        mobileNavBar.classList.toggle('hidden');
        desktopControllerBtn.classList.add('hidden');
    });

    mobileControllerBtn.addEventListener('click',()=>{
        mobileNavBar.classList.toggle('hidden');
        desktopControllerBtn.classList.remove('hidden');
    })



});

function showAlert(title, message, type = "success") {
  const overlay = document.getElementById("custom-alert");
  const icon = document.getElementById("alert-icon");

  document.getElementById("alert-title").innerText = title;
  document.getElementById("alert-message").innerText = message;

  let svg = "";

  if (type === "success") {
    svg = `
      <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
        </svg>
      </div>
    `;
  }

  if (type === "error") {
    svg = `
      <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
      </div>
    `;
  }

  if (type === "warning") {
    svg = `
      <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="orange" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
        </svg>
      </div>
    `;
  }

  icon.innerHTML = svg;

  overlay.classList.add("active");

  // ⏱ auto close
  setTimeout(() => {
    overlay.classList.remove("active");
  }, 2500);
}

function closeAlert() {
  const overlay = document.getElementById("custom-alert");

  overlay.classList.remove("active");
}


function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showErrorById(id, message) {
  document.getElementById(id).innerText = message;
}

function clearErrors() {
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
}

function submitContactForm(event){
    event.preventDefault();

    let isValid = true;

    clearErrors();

    const form = event.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();

    if (name === "") {
      showErrorById("nameError", "Username is required");
      isValid = false;
    }

    if (!validateEmail(email)) {
      showErrorById("emailError", "Invalid email");
      isValid = false;
    }

    if (isValid) {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
        .then(() => {
            showAlert("Success!", "Message has been sent!", "success");
            form.reset(); // clear form fields
        })
        .catch((err) => {
            console.error(err);
            showAlert("Error!", "Failed to send message.", "error");
        });
    }
}


