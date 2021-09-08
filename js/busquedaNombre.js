// Búsqueda filtrada 
const busqueda = document;

filtroNombre('.barra-busqueda', '.contenido')

function filtroNombre (input, selector) {
  busqueda.addEventListener("keyup", e => {
    if(e.target.matches(input)) {
      busqueda.querySelectorAll(selector).forEach((elemento) => 
        elemento.textContent.toLowerCase().includes(e.target.value) 
        ? elemento.classList.remove("filtro") 
        : elemento.classList.add("filtro") 
      );
   }
  });
}
