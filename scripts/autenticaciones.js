/* ----------------------------------------------------------
    3. ACORDEÓN AUTENTICACIONES — una sola sección abierta
        (.acordeon-header / .acordeon-item)

  ---------------------------------------------------------- */
const itemsAutenticaciones = document.querySelectorAll(
  ".acordeon-item .acordeon-header",
);

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
