document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validación 
    if (!nombre || !email || !asunto || !mensaje) {
        alert("Por favor, complete todos los campos del formulario.");
        return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido: ejemplo@gmail.com");
        return;
    }

    // Si todo esta ok
    alert(`Gracias por su contacto, ${nombre}. En breve le estaré respondiendo.`);
    
    this.reset();
});
