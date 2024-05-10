

function enviargest(){

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let nombre = document.querySelector('input[type="text"]').value;
    let telefono = document.querySelector('input[type="email"]').value;
    let correo = document.querySelector('textarea').value;
    let mensaje = document.querySelector('input[type="email"]').value;

    let contenido = `Nombre: ${nombre} \nTelefono: ${telefono} \nCorreo: ${correo} \nMensaje: ${mensaje}`;

    window.open(`mailto:miguellabellaramirez@gmail.es?subject=Consulta&body=${contenido}`);
})

}