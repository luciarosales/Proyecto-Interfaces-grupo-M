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

function showHelpMessage() {
    // Mostrar el mensaje de ayuda
    alert("Todos los campos con el símbolo '*' son obligatorios");


}

//BOTÓN AYUDA

function showModal() {
    // Mostrar el modal
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    // Enfocar el contenido del modal
    modal.querySelector('.modal-content').focus();
    // Capturar el evento de tabulación para redirigir el foco al modal
    document.addEventListener('keydown', trapTabKey);
}

function closeModal() {
    // Cerrar el modal
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
    // Detener la captura del evento de tabulación
    document.removeEventListener('keydown', trapTabKey);
    // Devolver el foco al botón de ayuda
    document.querySelector('.help-icon').focus();
}

function trapTabKey(e) {
    var modal = document.getElementById('modal');
    var modalContent = modal.querySelector('.modal-content');
    var focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    var firstFocusableElement = focusableElements[0];
    var lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
        if (e.shiftKey) {
            // Si se presiona Shift + Tab, enfocar el último elemento enfocable dentro del modal
            if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus();
            }
        } else {
            // Si se presiona solo Tab, enfocar el primer elemento enfocable dentro del modal
            if (document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }
}

//FIN BOTÓN AYUDA