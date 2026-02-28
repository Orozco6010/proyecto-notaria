const setActiveLink = () => {
  const currentPath = window.location.pathname;
  console.log({ currentPath });
  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (currentPath === linkPath) {
      link.classList.add("activo");
    }
  });
};

const loadComponent = async (elementId, path) => {
  const res = await fetch(path);
  const data = await res.text();
  document.getElementById(elementId).innerHTML = data;

  if (elementId === "header") {
    setActiveLink();
  }
};

const basePath = window.location.pathname.includes("/proyecto-notaria/")
  ? "../"
  : "";

loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");
