// Support modal

const downloadBtn = document.getElementById("download-btn");
const modal = document.getElementById("download-modal");
const continueBtn = document.getElementById("continue-download");
const closeBtn = document.getElementById("close-modal");

const downloadLink =
    "https://github.com/Sebian12/SnapPress/releases/download/v1.11.1/SnapPress.exe";

// Open the support modal instead of downloading immediately
downloadBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    modal.style.display = "flex";

    return false;
});

// Continue to the download
continueBtn.addEventListener("click", () => {
    modal.style.display = "none";
    window.location.href = downloadLink;
});

// Close the modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});