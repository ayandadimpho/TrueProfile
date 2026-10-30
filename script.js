const form = document.getElementById("verificationForm");

form.addEventListener("submit", function (event){
    event.preventDefault();
    const message = document.getElementById("confirmationMessage");
    message.textContent = "✔ Verification request submitted!";


});