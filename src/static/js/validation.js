document.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("invalid", function () {
        this.setCustomValidity("Будь ласка, заповніть це поле");
    });
    input.addEventListener("input", function () {
        this.setCustomValidity("");
    });
});



export function validateForm() {
    let valid = true;
    const fields = ["surname", "name", "email", "phone", "text"];
    fields.forEach(field => {
        const input = document.getElementById(field);
        const error = document.getElementById(field + "Error");
        if (!input.value.trim()) {
            input.classList.add("error");
            error.innerText = "Поле не може бути порожнім";
            valid = false;
        } else {
            input.classList.remove("error");
            error.innerText = "";
        }
    });

    const email = document.getElementById("email").value.trim();
    if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
        document.getElementById("email").classList.add("error");
        document.getElementById("emailError").innerText = "Некоректний email";
        valid = false;
    }

    return valid;
}
