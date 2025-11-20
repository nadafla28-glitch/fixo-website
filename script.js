/* script.js - Fexu */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Fexu website loaded.");
});

/* منع إرسال الفورم الحقيقي لأنه نموذج فقط */
function submitForm() {
  alert("تم استلام رسالتك بنجاح! سنعود إليك قريبًا.");
  return false;
}
