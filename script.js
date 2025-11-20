// script.js - فكسو

function sendEmail(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent("استفسار من موقع فكسو - " + name);
  const body = encodeURIComponent(
    "الاسم: " + name + "\n" +
    "البريد: " + email + "\n\n" +
    message
  );

  window.location.href = "mailto:info@fixo.com?subject=" + subject + "&body=" + body;
}
