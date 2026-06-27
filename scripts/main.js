// document.addEventListener("DOMContentLoaded", () => {
const hero = document.querySelector(".hero");

if (hero) {

    const slides = [
        {
            imagen: "./images/imagen1.png",
            posicion: "center 60%"
        },
        {
            imagen: "./images/imagen2.png",
            posicion: "center 25%"
        },
        {
            imagen: "./images/imagen3.png",
            posicion: "center 45%"
        },
        {
            imagen: "./images/imagen4.jpg",
            posicion: "center 40%"
        }
    ];

    let indice = 0;

    function cambiarImagen() {

        hero.style.backgroundImage = `
            linear-gradient(
                rgba(0,0,0,0.35),
                rgba(0,0,0,0.35)
            ),
            url('${slides[indice].imagen}')
        `;

        hero.style.backgroundPosition = slides[indice].posicion;

        indice++;

        if(indice >= slides.length){
            indice = 0;
        }

    }

    cambiarImagen();

    setInterval(cambiarImagen,5000);

}

/*=========================================
=       BOTÓN ASISTENTE VIRTUAL           =
=========================================*/

const btnAsistente = document.getElementById("btnAsistente");

if(btnAsistente){

    btnAsistente.addEventListener("click",()=>{

        console.log("Asistente Virtual");

    });

}





