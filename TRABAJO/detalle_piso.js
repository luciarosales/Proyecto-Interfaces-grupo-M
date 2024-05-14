document.addEventListener("DOMContentLoaded", function() {
    // Obtener el ID del piso de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const pisoId = parseInt(urlParams.get('pisoId'));

    // Buscar el piso correspondiente en el conjunto de datos de pisos
    const pisoSeleccionado = pisos.find(piso => piso.id === pisoId);

    if (pisoSeleccionado) {
        // Crear elemento para mostrar información del piso
        var pisoInfoContainer = document.createElement("div");
        pisoInfoContainer.classList.add("piso-info");

        // Agregar nombre del piso como título
        var pisoName = document.createElement("h2");
        pisoName.textContent = pisoSeleccionado.nombre;
        pisoInfoContainer.appendChild(pisoName);

        // Agregar atributos del piso
        var pisoAttributes = document.createElement("ul");
        var attributes = [
            { label: "Operación", value: pisoSeleccionado.operacion },
            { label: "Municipio", value: pisoSeleccionado.municipio },
            { label: "Tipo", value: pisoSeleccionado.tipo },
            { label: "Nº Habitaciones", value: pisoSeleccionado.numHabitaciones },
            { label: "Nº Baños", value: pisoSeleccionado.numBanos },
            { label: "Precio", value: pisoSeleccionado.precio },
            { label: "Distrito", value: pisoSeleccionado.distrito },
            { label: "Superficie", value: pisoSeleccionado.superficie },
            { label: "Estado", value: pisoSeleccionado.estado },
            { label: "Descripción", value: pisoSeleccionado.descripcion }
        ];

        attributes.forEach(function(attribute) {
            var listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${attribute.label}:</strong> ${attribute.value}`;
            pisoAttributes.appendChild(listItem);
        });

        pisoInfoContainer.appendChild(pisoAttributes);

        // Agregar información del piso debajo del carrusel
        var carouselContainer = document.getElementById("carouselContainer");
        carouselContainer.appendChild(pisoInfoContainer);
    } else {
        console.error('No se encontró ningún piso con el ID proporcionado.');
    }
});
