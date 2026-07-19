// Toggle sidebar visibility
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

function openCertificate(src) {
    // show modal
    document.getElementById("certificateModal").style.display = "block";
    // set image source
    document.getElementById("certificateImage").src = src;
}

function closeCertificate() {
    // hide modal
    document.getElementById("certificateModal").style.display = "none";
}

// Optional: close modal with ESC key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeCertificate();
    }
});
