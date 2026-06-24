

document.addEventListener("DOMContentLoaded", () => {
const hero = document.querySelector(".hero");

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

    if (indice >= slides.length) {
        indice = 0;
    }
}

cambiarImagen();

setInterval(cambiarImagen, 5000);
});

  /* ----------------------------------------------------------
    2. ACORDEÓN REGISTRO CIVIL — una sola sección abierta
        (.acordeon / .panel)
  ---------------------------------------------------------- */
  const botonesRegistro = document.querySelectorAll(".grid-tramites .acordeon");

  if (botonesRegistro.length > 0) {
    botonesRegistro.forEach((btn) => {
      btn.addEventListener("click", function () {
        const panelActual = this.nextElementSibling;
        const estaAbierto = this.classList.contains("activo");

        // Cerrar todos
        botonesRegistro.forEach((b) => {
          b.classList.remove("activo");
          b.nextElementSibling.style.maxHeight = null;
        });

        // Abrir solo el clickeado (si estaba cerrado)
        if (!estaAbierto) {
          this.classList.add("activo");
          panelActual.style.maxHeight = panelActual.scrollHeight + "px";
        }
      });
    });
  }

  /* ----------------------------------------------------------
    3. ACORDEÓN AUTENTICACIONES — una sola sección abierta
        (.acordeon-header / .acordeon-item)
  ---------------------------------------------------------- */
  const itemsAutenticaciones = document.querySelectorAll(".acordeon-item .acordeon-header");

  if (itemsAutenticaciones.length > 0) {
    itemsAutenticaciones.forEach((item) => {
      item.addEventListener("click", () => {
        const activo = document.querySelector(".activo-acordeon");

        if (activo && activo !== item.parentElement) {
          activo.classList.remove("activo-acordeon");
        }

        item.parentElement.classList.toggle("activo-acordeon");
      });
    });
  }

  /* ----------------------------------------------------------
    4. MODAL ESCRITURACIÓN
        (.acordeon → abre modal con el contenido del panel)
  ---------------------------------------------------------- */
  const botonesEscrituracion = document.querySelectorAll(".acordeon");
  const modal       = document.getElementById("modal");
  const modalBody   = document.getElementById("modalBody");
  const modalTitulo = document.getElementById("modalTitulo");
  const cerrar      = document.getElementById("cerrarModal");
  const overlay     = document.querySelector(".modal-overlay");

  if (modal && cerrar && overlay) {
    botonesEscrituracion.forEach((btn) => {
      btn.addEventListener("click", () => {
        const panel = btn.nextElementSibling;
        modalBody.innerHTML   = panel.innerHTML;
        modalTitulo.innerHTML = `<h2>${btn.innerHTML}</h2>`;
        modal.classList.add("activo");
        document.body.style.overflow = "hidden";
      });
    });

    function cerrarModal() {
      modal.classList.remove("activo");
      document.body.style.overflow = "auto";
    }

    cerrar.addEventListener("click", cerrarModal);
    overlay.addEventListener("click", cerrarModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") cerrarModal();
    });
  }

  /* ----------------------------------------------------------
    5. ACORDEÓN PREGUNTAS FRECUENTES
        (.faq-question / .faq-answer) — una sola abierta
  ---------------------------------------------------------- */
  const preguntas = document.querySelectorAll(".faq-question");

  if (preguntas.length > 0) {
    preguntas.forEach((pregunta) => {
      pregunta.addEventListener("click", () => {
        const activa = document.querySelector(".faq-question.active");

        if (activa && activa !== pregunta) {
          activa.classList.remove("active");
          activa.nextElementSibling.style.maxHeight = null;
        }

        pregunta.classList.toggle("active");
        const respuesta = pregunta.nextElementSibling;

        if (respuesta.style.maxHeight) {
          respuesta.style.maxHeight = null;
        } else {
          respuesta.style.maxHeight = respuesta.scrollHeight + 30 + "px";
        }
      });
    });
  }

  /* ----------------------------------------------------------
    6. ACORDEÓN CONTACTO
        (.acordeon / .toggle-btn) — toggle extensiones
  ---------------------------------------------------------- */
  const acordeonContacto = document.querySelector(".acordeon");
  const btnContacto = acordeonContacto?.querySelector(".toggle-btn");

  if (btnContacto) {
    btnContacto.addEventListener("click", () => {
      acordeonContacto.classList.toggle("activo");
      btnContacto.textContent = acordeonContacto.classList.contains("activo")
        ? "Ocultar extensiones"
        : "Ver extensiones";
    });
  }


