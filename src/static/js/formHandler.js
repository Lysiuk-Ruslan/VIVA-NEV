import { closeModal } from "./modal.js";
import { validateForm } from "./validation.js";

document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    let formData = new FormData(this);
    let response = await fetch("/server/send.php", {
        method: "POST",
        body: formData
    });

    let result = await response.text();
    document.getElementById("responseMessage").innerHTML = result;

    if (result.includes("✅")) {
        setTimeout(() => { closeModal(); }, 2000);
    }
});
