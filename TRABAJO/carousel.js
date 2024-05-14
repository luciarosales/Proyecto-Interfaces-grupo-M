document.addEventListener("DOMContentLoaded", function() {
    // Accede al piso seleccionado almacenado en localStorage
    var pisoSeleccionado = JSON.parse(localStorage.getItem('pisoSeleccionado'));

    // Elemento contenedor del carrusel
    var carouselContainer = document.getElementById("carouselContainer");

    // Crear el elemento de carrusel
    var carousel = document.createElement("div");
    carousel.classList.add("carousel", "slide");
    carousel.setAttribute("id", "carouselE");
    carousel.setAttribute("data-bs-ride", "carousel");

    // Crear indicadores
    var indicators = document.createElement("div");
    indicators.classList.add("carousel-indicators");
    indicators.innerHTML = `
        <button type="button" data-bs-target="#carouselE" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselE" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselE" data-bs-slide-to="2" aria-label="Slide 3"></button>
    `;

    // Crear items del carrusel
    var carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel-inner");

    var images = [
        "img/FotosMalaga/malagaInicio.jpg",
        "img/FotosMalaga/catedral.jpg",
        "img/FotosMalaga/callelarios.jpg"
    ];

    images.forEach(function(imageSrc, index) {
        var item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
            item.classList.add("active");
        }
        item.innerHTML = `
            <img src="${imageSrc}" class="d-block w-100" alt="Slide ${index + 1}">
            <div class="carousel-caption">
            </div>
        `;
        carouselInner.appendChild(item);
    });

    // Botones de control
    var prevButton = document.createElement("button");
    prevButton.classList.add("carousel-control-prev");
    prevButton.setAttribute("type", "button");
    prevButton.setAttribute("data-bs-target", "#carouselE");
    prevButton.setAttribute("data-bs-slide", "prev");
    prevButton.innerHTML = `
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    `;

    var nextButton = document.createElement("button");
    nextButton.classList.add("carousel-control-next");
    nextButton.setAttribute("type", "button");
    nextButton.setAttribute("data-bs-target", "#carouselE");
    nextButton.setAttribute("data-bs-slide", "next");
    nextButton.innerHTML = `
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    `;

    // Agregar elementos al carrusel
    carousel.appendChild(indicators);
    carousel.appendChild(carouselInner);
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    // Agregar carrusel al contenedor
    carouselContainer.appendChild(carousel);

    // Inicializar el carrusel
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselE'), {
        interval: 2000 // Intervalo entre transiciones (en milisegundos)
    });
});
