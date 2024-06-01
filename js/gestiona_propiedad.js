document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var submitBtn = document.getElementById('submit-btn');
    var firstAttempt = true;

    function validateField(field) {
        if (!field.checkValidity()) {
            field.classList.add('is-invalid');
            return false;
        } else {
            field.classList.remove('is-invalid');
            return true;
        }
    }

    function validateForm() {
        var isValid = true;

        form.querySelectorAll('input, textarea').forEach(function(input) {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        submitBtn.disabled = !isValid;
    }

    form.querySelectorAll('input, textarea').forEach(function(input) {
        input.addEventListener('input', function() {
            if (!firstAttempt) {
                validateField(input);
                validateForm();
            }
        });
    });

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            firstAttempt = false;
            validateForm();
        } else {
            event.preventDefault(); // Prevenir el comportamiento de envío por defecto

            // Obtiene los valores de los campos del formulario
            let nombre = document.querySelector('input[type="text"]').value;
            let telefono = document.querySelector('input[type="tel"]').value;
            let correo = document.querySelector('input[type="email"]').value;
            let mensaje = document.querySelector('textarea').value;

            // Construye el contenido del correo
            let contenido = `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}\nMensaje: ${mensaje}`;

            // Abre el cliente de correo con los datos predefinidos
            window.open(`mailto:iumalagadreamhome@gmail.com?subject=Consulta&body=${encodeURIComponent(contenido)}`);

            form.classList.add('was-validated');
        }
    }, false);
});




// BOTÓN AYUDA

// BOTÓN AYUDA

function showModal() {
    // Mostrar el modal
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    // Enfocar el contenido del modal
    modal.querySelector('.modal-content').focus();
    // Capturar el evento de teclas para redirigir el foco al modal
    document.addEventListener('keydown', trapKey);
}

function closeModal() {
    // Cerrar el modal
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
    // Detener la captura del evento de teclas
    document.removeEventListener('keydown', trapKey);
    // Devolver el foco al botón de ayuda
    document.querySelector('.help-icon').focus();
}

function trapKey(e) {
    var modal = document.getElementById('modal');
    var focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    var firstFocusableElement = focusableElements[0];
    var modalContent = modal.querySelector('.modal-content');
    var keyCode = e.keyCode || e.which;

    if (keyCode === 9) { // Tabulador
        if (e.shiftKey && document.activeElement === firstFocusableElement) {
            e.preventDefault();
            modalContent.focus(); // Enfocar el contenido del modal
        }
    } else if (keyCode === 37 || keyCode === 39 || keyCode === 38 || keyCode === 40) { // Flechas izquierda, derecha, arriba o abajo
        e.preventDefault(); // Evitar el comportamiento predeterminado de las flechas
        modalContent.focus(); // Enfocar el contenido del modal
    }
}
