// Define la clase Piso
class Piso {
    constructor(id, nombre, operacion, municipio, tipo, numHabitaciones, numBanos, precio, distrito, superficie, estado, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.operacion = operacion;
        this.municipio = municipio;
        this.tipo = tipo;
        this.numHabitaciones = numHabitaciones;
        this.numBanos = numBanos;
        this.precio = precio;
        this.distrito = distrito;
        this.superficie = superficie;
        this.estado = estado;
        this.descripcion = descripcion
    }
}

// Array de objetos que representan los diferentes pisos (Ejemplo)
const pisos = [
    new Piso(1, "Piso 1", "Compra", "Municipio 1", "Piso", 3, 2, 150000, "Distrito 1", 120, "Buen estado", "descripcion"),
    new Piso(2, "Piso 2", "Alquiler", "Municipio 2", "Apartamento", 2, 1, 800, "Distrito 2", 90, "Excelente estado","descripcion"),
    new Piso(3, "Piso 3", "Ambos", "Municipio 3", "Casa", 4, 3, 250000, "Distrito 3", 150, "Regular estado","descripcion"),
    new Piso(4, "Piso 4", "Compra", "Municipio 4", "Piso", 2, 1, 120000, "Distrito 4", 100, "Buen estado", "Descripción del Piso 4"),
    new Piso(5, "Piso 5", "Alquiler", "Municipio 5", "Apartamento", 1, 1, 600, "Distrito 5", 70, "Excelente estado", "Descripción del Piso 5"),
    new Piso(6, "Piso 6", "Compra", "Municipio 6", "Casa", 3, 2, 200000, "Distrito 6", 150, "Regular estado", "Descripción del Piso 6"),
    new Piso(7, "Piso 7", "Ambos", "Municipio 7", "Piso", 2, 1, 130000, "Distrito 7", 110, "Buen estado", "Descripción del Piso 7"),
    new Piso(8, "Piso 8", "Alquiler", "Municipio 8", "Casa", 4, 3, 1200, "Distrito 8", 180, "Excelente estado", "Descripción del Piso 8"),
    new Piso(9, "Piso 9", "Compra", "Municipio 9", "Apartamento", 1, 1, 75000, "Distrito 9", 80, "Regular estado", "Descripción del Piso 9")

];

// Function to generate HTML for displaying the information of each floor
function generateHTMLForPisos(pisosMostrados) {
    const pisosContainer = document.getElementById("pisosContainer");
    pisosContainer.innerHTML = ""; // Limpiar el contenido actual

    // Iterate over each floor and generate HTML to display its information
    pisosMostrados.forEach((piso, index) => {
        var foto = "img/Casas/casa"+piso.id+".jpg";
        const pisoHTML = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card text-light text-center bg-dark pb-2">
                    <div class="card-body text-white">
                        <div class="img-area mb-4">
                            <img src="img/Casas/casa1.jpg" class="img-fluid" alt="">
                        </div>
                        <h3>${piso.nombre}</h3>
                        <p class="lead"> ${piso.descripcion}</p>
                        <a href="detalle_piso.html?pisoId=${piso.id}" class="btn bg-primary text-white">Más Información</a>
                        </div>
                </div>
            </div>
        `;
        pisosContainer.innerHTML += pisoHTML;
    });
}


// Function to apply filters based on search criteria
function aplicarFiltros() {
    const filtroCalle = document.getElementById("filtroCalle").value.toLowerCase();
    const filtroOperacion = document.getElementById("filtroOperacion").value.toLowerCase();
    const filtroMunicipio = document.getElementById("filtroMunicipio").value.toLowerCase();
    const filtroTipo = document.getElementById("filtroTipo").value.toLowerCase();
    const filtroHabitaciones = parseInt(document.getElementById("filtroHabitaciones").value);
    const filtroBanos = parseInt(document.getElementById("filtroBanos").value);
    const filtroPrecioDesde = parseFloat(document.getElementById("filtroPrecioDesde").value);
    const filtroPrecioHasta = parseFloat(document.getElementById("filtroPrecioHasta").value);
    const filtroDistrito = document.getElementById("filtroDistrito").value.toLowerCase();
    const filtroSuperficieDesde = parseFloat(document.getElementById("filtroSuperficieDesde").value);
    const filtroSuperficieHasta = parseFloat(document.getElementById("filtroSuperficieHasta").value);
    const filtroEstado = document.getElementById("filtroEstado").value.toLowerCase();

    const pisosFiltrados = pisos.filter(piso => 
        (filtroCalle === '' || piso.nombre.toLowerCase().includes(filtroCalle)) &&
        (filtroOperacion === 'cualquiera' || piso.operacion.toLowerCase() === filtroOperacion) &&
        (filtroMunicipio === '' || piso.municipio.toLowerCase().includes(filtroMunicipio)) &&
        (filtroTipo === '' || piso.tipo.toLowerCase().includes(filtroTipo)) &&
        (isNaN(filtroHabitaciones) || piso.numHabitaciones === filtroHabitaciones) &&
        (isNaN(filtroBanos) || piso.numBanos === filtroBanos) &&
        (isNaN(filtroPrecioDesde) || piso.precio >= filtroPrecioDesde) &&
        (isNaN(filtroPrecioHasta) || piso.precio <= filtroPrecioHasta) &&
        (filtroDistrito === '' || piso.distrito.toLowerCase().includes(filtroDistrito)) &&
        (isNaN(filtroSuperficieDesde) || piso.superficie >= filtroSuperficieDesde) &&
        (isNaN(filtroSuperficieHasta) || piso.superficie <= filtroSuperficieHasta) &&
        (filtroEstado === '' || piso.estado.toLowerCase().includes(filtroEstado))
    );

    generateHTMLForPisos(pisosFiltrados);
    }


// Function to navigate to the detailed information page of a floor
function verDetallePiso(index) {
    const pisoSeleccionado = pisos[index];
    localStorage.setItem('pisoSeleccionado', JSON.stringify(pisoSeleccionado));
    window.location.href = 'detalle_piso.html';
}

// Attach the generateHTMLForPisos function to the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', () => {
    generateHTMLForPisos(pisos);
});


// Attach the generateHTMLForPisos function to the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', () => {
    generateHTMLForPisos(pisos);
});
