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
