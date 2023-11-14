const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});
function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');

    });
}
function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion(seccion);
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}
function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}
function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}
var estudioJuridico = {
    nombre: "Estudio Jurídico Blanco Asociadas",
    abogadas: ["Camila S. Blanco", "Natalia S. Blanco"],
    mostrarInformacion: function() {
      console.log("Nombre del estudio: " + this.nombre);
      console.log("Abogadas:");
      for (var i = 0; i < this.abogadas.length; i++) {
        console.log("- " + this.abogadas[i]);
      }
    }
};
estudioJuridico.mostrarInformacion();
function abrirDocumentoPDF() {
    var rutaDocumentoPDF = 'testimonios.pdf';

    window.open(rutaDocumentoPDF, '_blank');
}