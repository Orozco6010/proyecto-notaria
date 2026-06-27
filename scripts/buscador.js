document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("buscadorTramites");

    if (!input) return;

    const tarjetas = document.querySelectorAll(".tramite");
    const contador = document.getElementById("contadorResultados");
    const mensaje = document.getElementById("sinResultados");

    function normalizar(texto){

        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g,"");

    }

    input.addEventListener("input", ()=>{

        const busqueda = normalizar(input.value.trim());

        let encontrados = 0;

        tarjetas.forEach((tarjeta)=>{

            const titulo = normalizar(
                tarjeta.querySelector(".acordeon").textContent
            );

            if(titulo.includes(busqueda)){

                tarjeta.style.display = "";

                encontrados++;

            }else{

                tarjeta.style.display = "none";

            }

        });

        if(busqueda===""){

            contador.textContent="Mostrando todos los trámites";

        }else{

            contador.textContent=`${encontrados} trámite(s) encontrado(s)`;

        }

        mensaje.style.display = encontrados===0 ? "block" : "none";

    });

});