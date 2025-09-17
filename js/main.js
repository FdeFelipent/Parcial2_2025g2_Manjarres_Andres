// filepath: c:\Users\andre\OneDrive\Desktop\Parcial2\js\main.js

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !subject || !message) {
                event.preventDefault();
                alert("Por favor, complete todos los campos.");
            }
        });
    }

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        const imageInput = document.getElementById('image');
        if (!imageInput.files || imageInput.files.length === 0) {
            alert('Por favor adjunta una imagen.');
            e.preventDefault();
        }
    });
});