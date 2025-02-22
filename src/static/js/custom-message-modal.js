
window.openMessageModal = function openMessageModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }
}

window.closeMessageModal = function closeMessageModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Закриваємо модальне вікно при натисканні на кнопку закриття
document.querySelectorAll(".message-close").forEach(button => {
    button.addEventListener("click", function () {
        closeMessageModal(this.parentElement.parentElement.id);
    });
});

// Видаляємо можливі залишки sessionStorage при оновленні сторінки
window.addEventListener("load", () => {
    sessionStorage.removeItem("modalOpened");
});
