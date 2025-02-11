function handleYesClick() {
    // Ambil nama file halaman saat ini
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "" || currentPage === "index.html") {
        window.location.href = "page2.html"; // Pindah ke Page 2
    } else if (currentPage === "page2.html") {
        window.location.href = "page3.html"; // Pindah ke Page 3
    }
}

// Jika ada tombol "No", tetap jalankan logika sebelumnya
const messages = [
    "Beneran gatau kah?",
    "Pura-pura ya",
    "BJIR SERIUSAN?",
    "HIH?",
    "Au deh Shell",
    "Pencet tidak terus donk smpe akhir",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    if (noButton && yesButton) {
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;

        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    if (noButton) noButton.addEventListener("click", handleNoClick);
    if (yesButton) yesButton.addEventListener("click", handleYesClick);
});
