document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('hipoteca-form');
    const contenedorResultado = document.getElementById('contenedor-resultado');
    const cuotaMensual = document.getElementById('cuota-mensual');
    const resultadoHipoteca = document.getElementById('resultado-hipoteca');

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
        form.querySelectorAll('input').forEach(function(input) {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        return isValid;
    }

    form.querySelectorAll('input').forEach(function(input) {
        input.addEventListener('input', function() {
            validateField(input);
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const valorHipotecario = parseFloat(document.getElementById('value').value);
        const ahorroAportado = parseFloat(document.getElementById('savings').value);
        const plazoAnios = parseInt(document.getElementById('years').value);
        const interes = parseFloat(document.getElementById('interest').value);

        const dineroPago = valorHipotecario - ahorroAportado;
        const numPlazos = plazoAnios * 12;
        const intMensual = interes / 12 / 100;

        let valid = true;

        if (dineroPago <= 0) {
            document.getElementById('savings').setCustomValidity("El ahorro aportado no puede ser mayor al valor hipotecario");
            validateField(document.getElementById('savings'));
            valid = false;
        } else {
            document.getElementById('savings').setCustomValidity("");
        }

        if (valorHipotecario <= 0) {
            document.getElementById('value').setCustomValidity("El valor hipotecario debe ser mayor a 0");
            validateField(document.getElementById('value'));
            valid = false;
        } else {
            document.getElementById('value').setCustomValidity("");
        }

        if (ahorroAportado < 0) {
            document.getElementById('savings').setCustomValidity("El ahorro aportado no puede ser menor a 0");
            validateField(document.getElementById('savings'));
            valid = false;
        } else {
            document.getElementById('savings').setCustomValidity("");
        }

        if (plazoAnios <= 0) {
            document.getElementById('years').setCustomValidity("El plazo en años debe ser mayor a 0");
            validateField(document.getElementById('years'));
            valid = false;
        } else {
            document.getElementById('years').setCustomValidity("");
        }

        if (interes < 0) {
            document.getElementById('interest').setCustomValidity("El interés no puede ser menor a 0%");
            validateField(document.getElementById('interest'));
            valid = false;
        } else {
            document.getElementById('interest').setCustomValidity("");
        }

        if (valid && validateForm()) {
            const pagoMensual = (intMensual * dineroPago) / (1 - Math.pow(1 + intMensual, -numPlazos));
            const hipoteca = pagoMensual * numPlazos;
            
         
            resultadoHipoteca.innerHTML = `
               
                <p>El pago total por la hipoteca será de: ${hipoteca.toFixed(2)} euros</p>
            `;
            cuotaMensual.innerHTML = `
                <p>Cada mes deberás pagar: ${pagoMensual.toFixed(2)} euros</p>
            `;

            contenedorResultado.classList.add('visible');
            contenedorResultado.focus();
        } else {
            contenedorResultado.classList.remove('visible');
        }
    });
});


// Obtener los elementos de los títulos
var valorHipotecarioTitulo = document.getElementById('valor-hipotecario-titulo');
var ahorroAportadoTitulo = document.getElementById('ahorro-aportado-titulo');
var plazoAniosTitulo = document.getElementById('plazo-anios-titulo');
var tipoInteresTitulo = document.getElementById('tipo-interes-titulo');

// Función para mostrar el contenido del párrafo en la ventana modal
function mostrarContenido(parrafo) {
    var modalContentParagraph = document.getElementById('modal-content-paragraph');
    modalContentParagraph.textContent = parrafo;
    document.getElementById('modal').style.display = 'block';
    modalContentParagraph.focus();
}

// Función para ocultar el contenido del párrafo en la ventana modal
function ocultarContenido() {
    document.getElementById('modal').style.display = 'none';
    if (lastFocusedElement) {
        lastFocusedElement.focus(); 
    }
}

// Asignar eventos de clic a los títulos
function addModalEventListeners(element, content) {
    element.addEventListener('click', function() {
        lastFocusedElement = element;
        mostrarContenido(content);
    });
    element.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            lastFocusedElement = element;
            mostrarContenido(content);
        }
    });
}

addModalEventListeners(valorHipotecarioTitulo, 'Es el precio estimado por una empresa acreditada mediante una tasación. Este precio se fija y será la cantidad máxima que el banco prestará para la operación. Este precio puede ser mayor o menor que el valor de venta, ya que el valor hipotecario ha de ser un valor objetivo y sin especulaciones.');
addModalEventListeners(ahorroAportadoTitulo, 'Es la cantidad de dinero que tú como comprador de la vivienda deberás de aportar antes de que se te conceda un préstamo bancario para la hipoteca. Está fijado que, como mínimo, deberás aportar el 20% del valor hipotecario del inmueble.');
addModalEventListeners(plazoAniosTitulo, 'Es el número de años fijado para pagar el coste total de la hipoteca, de donde se calcularán el número de cuotas mensuales que se deberán pagar en total y el precio en cada una de estas cuotas.');
addModalEventListeners(tipoInteresTitulo, 'El interés es la cantidad a pagar adicionalmente cada mes como remuneración de la concesión de un préstamo. Este interés puede ser fijo o variable.');


// Cerrar el modal haciendo clic en la "x"
var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', ocultarContenido);

// Cerrar el modal haciendo clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        ocultarContenido();
    }
});

// BOTÓN AYUDA

function toggleHelp() {
    var helpContent = document.getElementById('helpContent');
    helpContent.classList.toggle('active');
}

// FIN BOTÓN AYUDA //
