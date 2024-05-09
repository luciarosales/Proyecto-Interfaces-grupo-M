// Espera a que el contenido del documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtén el identificador del piso de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const pisoId = urlParams.get('pisoId');

    // Llama a una función para obtener los detalles del piso usando su id
    obtenerDetallesDelPiso(pisoId);
});

// Función para obtener los detalles del piso usando su id
function obtenerDetallesDelPiso(pisoId) {
    // Aquí puedes hacer una llamada a un servidor para obtener los detalles del piso
    // Por ahora, simularemos algunos datos de ejemplo

    const detallesDelPiso = {
        nombre: "Nombre del Piso",
        operacion: "Compra",
        municipio: "Municipio 1",
        tipo: "Piso",
        habitaciones: 3,
        banos: 2,
        precio: 150000,
        distrito: "Distrito 1",
        superficie: 120,
        estado: "Buen estado",
        descripcion: "Descripción del piso."
    };

    // Llama a una función para mostrar los detalles del piso en la página
    mostrarDetallesDelPiso(detallesDelPiso);
}

// Función para mostrar los detalles del piso en la página
function mostrarDetallesDelPiso(detallesDelPiso) {
    // Obtiene el contenedor donde se mostrarán los detalles del piso
    const detallePisoContainer = document.getElementById("detallePisoContainer");

    // Crea un HTML con los detalles del piso
    const detallesHTML = `
        <h2>${detallesDelPiso.nombre}</h2>
        <p><strong>Operación:</strong> ${detallesDelPiso.operacion}</p>
        <p><strong>Municipio:</strong> ${detallesDelPiso.municipio}</p>
        <p><strong>Tipo:</strong> ${detallesDelPiso.tipo}</p>
        <p><strong>Número de Habitaciones:</strong> ${detallesDelPiso.habitaciones}</p>
        <p><strong>Número de Baños:</strong> ${detallesDelPiso.banos}</p>
        <p><strong>Precio:</strong> ${detallesDelPiso.precio}</p>
        <p><strong>Distrito:</strong> ${detallesDelPiso.distrito}</p>
        <p><strong>Superficie:</strong> ${detallesDelPiso.superficie}</p>
        <p><strong>Estado:</strong> ${detallesDelPiso.estado}</p>
        <p><strong>Descripción:</strong> ${detallesDelPiso.descripcion}</p>
    `;

    // Inserta los detalles del piso en el contenedor
    detallePisoContainer.innerHTML = detallesHTML;
}
