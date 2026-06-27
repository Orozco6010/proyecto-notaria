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
