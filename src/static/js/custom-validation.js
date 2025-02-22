window.openMessageModal = function (modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }
};


window.sendCustomForm = async function (form, responseId, modalId, formId) {
    if (!validateCustomForm(formId)) return;

    let formData = new FormData(form);
    let response = await fetch("/server/sender.php", { method: "POST", body: formData });

    let result = await response.text();

    let responseMessage = document.getElementById(responseId);
    responseMessage.innerHTML = result;

    openMessageModal(modalId); // Викликаємо без імпорту

    form.reset();

    setTimeout(() => {
        closeMessageModal(modalId);
    }, 3000);
};




// Обробники форм
document.getElementById("contactForm1")?.addEventListener("submit", function (e) {

    e.preventDefault();
    sendCustomForm(this, "responseMessage1", "messageModal1", "1");
});

document.getElementById("contactForm2")?.addEventListener("submit", function (e) {

    e.preventDefault();
    sendCustomForm(this, "responseMessage2", "messageModal2", "2");
});


function validateCustomForm(formId) {
    let isValid = true;

    let surname = document.getElementById("surname" + formId);
    let name = document.getElementById("name" + formId);
    let email = document.getElementById("email" + formId);
    let phone = document.getElementById("phone" + formId);
    let text = document.getElementById("text" + formId);

    let surnameError = document.getElementById("surnameError" + formId);
    let nameError = document.getElementById("nameError" + formId);
    let emailError = document.getElementById("emailError" + formId);
    let phoneError = document.getElementById("phoneError" + formId);
    let textError = document.getElementById("textError" + formId);

    // Очищаємо попередні помилки
    [surnameError, nameError, emailError, phoneError, textError].forEach(error => error.innerText = "");

    if (!surname.value.trim()) {
        surnameError.innerText = "Поле обов'язкове";
        isValid = false;
    }

    if (!name.value.trim()) {
        nameError.innerText = "Поле обов'язкове";
        isValid = false;
    }

    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
        emailError.innerText = "Некоректний email";
        isValid = false;
    }

    if (!phone.value.trim() || !/^\+?\d{10,15}$/.test(phone.value)) {
        phoneError.innerText = "Некоректний номер телефону";
        isValid = false;
    }

    if (!text.value.trim()) {
        textError.innerText = "Поле обов'язкове";
        isValid = false;
    }

    return isValid;
}

document.addEventListener("DOMContentLoaded", function () {


    let form1 = document.getElementById("contactForm1");
    let form2 = document.getElementById("contactForm2");



    if (form1) {
        form1.addEventListener("submit", function (e) {

            e.preventDefault();
            sendCustomForm(this, "responseMessage1", "messageModal1", "1");
        });
    }

    if (form2) {
        form2.addEventListener("submit", function (e) {

            e.preventDefault();
            sendCustomForm(this, "responseMessage2", "messageModal2", "2");
        });
    }
});
