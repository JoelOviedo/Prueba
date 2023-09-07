document.addEventListener("DOMContentLoaded", function () {
    const modalButton = document.getElementById("modal-button");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("close-button");

    modalButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
