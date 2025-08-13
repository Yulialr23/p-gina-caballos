function mostrarMasInfo() {
    var infoExtra = document.getElementById('info-extra');
    if (infoExtra.style.display === 'none') {
        infoExtra.style.display = 'block';
    } else {
        infoExtra.style.display = 'none';
    }
}

function validarFormulario(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    
    if (nombre && email && mensaje) {
        document.getElementById('mensaje-exito').style.display = 'block';
        document.getElementById('contacto-form').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}