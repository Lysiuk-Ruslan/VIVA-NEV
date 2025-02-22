// Модальне вікно
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close");
const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

openModalBtn.onclick = () => modal.style.display = "block";
closeModalBtn.onclick = () => closeModal();
window.onclick = (e) => { if (e.target === modal) closeModal(); };

function closeModal() {
    modal.style.display = "none";
    form.reset(); // Очищаємо форму після закриття
    responseMessage.innerHTML = ""; // Прибираємо повідомлення
}

// Відправка форми через fetch
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let formData = new FormData(form);

    let response = await fetch("/server/send.php", {
        method: "POST",
        body: formData
    });

    let result = await response.text();
    responseMessage.innerHTML = result;

    if (result.includes("✅")) {
        setTimeout(() => {
            closeModal(); // Закриваємо вікно через 2 секунди після успішної відправки
        }, 2000);
    }
});