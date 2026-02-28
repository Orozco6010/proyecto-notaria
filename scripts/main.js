const loadComponent = async (elementId, path) => {
  const res = await fetch(path);
  const data = await res.text();
  document.getElementById(elementId).innerHTML = data;
};

loadComponent("footer", "/components/footer.html");
