document.addEventListener('DOMContentLoaded', function() {
    limpiarCampo();
});

const campoEmail = document.getElementById('mail')



function limpiarCampo(){
    campoEmail.addEventListener('focus', function(){
        this.removeAttribute('placeholder');
    })

    const botonEnviar = document.getElementById('botonMail');

    botonEnviar.addEventListener('click', function() {
        const campoEmail = document.getElementById('mail').value;
        if (campoEmail === "ash@loremcompany.com") {
            enviarMail(campoEmail);
        } else {
            document.getElementById('mensajeError').classList.remove('ocultar')
        }
    });

}

function enviarMail() {
    document.getElementById('contenedorGeneral').classList.add('ocultar');
    document.getElementById('attribution').classList.add('ocultar');
    document.getElementById('mensajeCorrecto').style.display = 'flex';
    document.body.classList.add('fondo-gris');
}




