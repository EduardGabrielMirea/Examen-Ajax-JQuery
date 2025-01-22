document.addEventListener("DOMContentLoaded",function () {

    // Función para cargar un archivo HTML en un contenedor
    function cargarHtml(url, contenedor) {
        fetch(url)
            .then(response => {
                if (!response.ok){
                    throw new Error(`Error en la carga del archivo ${url}: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                contenedor.innerHTML = html;
            })
            .catch(error => console.error(`Ocurrio un error: ${error}`));
    }

    var contenedor = document.getElementById("contenedor");

    // Manejo de los enlaces de navegación
    document.querySelectorAll("nav a").forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault(); // Evitar la recarga de la página
            const url = this.getAttribute("data-url");
            cargarHtml(url,contenedor);
        });
    });
});