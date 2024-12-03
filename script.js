// Manejo básico del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir el envío del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("¡Gracias por tu mensaje, " + name + "! Nos alegra que estés tan desesperado.");
        document.getElementById("contact-form").reset(); // Limpiar el formulario
    } else {
        alert("¿En serio? ¿No vas a completar esto?");
    }
});
