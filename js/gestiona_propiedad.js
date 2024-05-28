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

    // Crear un elemento de audio
    var audioElement = document.createElement('audio');

    // Establecer la ruta del archivo de audio
    audioElement.setAttribute('src', 'sonidos/Sonido_ventana.mp3');

    // Reproducir el sonido
    audioElement.play();
}
