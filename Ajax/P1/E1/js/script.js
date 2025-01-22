document.addEventListener("DOMContentLoaded",function () {

    var mostrar = document.getElementById("mostrar");   
    var archivoSelect = document.getElementById("archivo"); 
    
    // Función Genérica para cargar archivos .txt y mostrarlos. 
    function cargarArchivoTxt(url, elementoDestino, boton) {
       
        if (boton) boton.disabled = true; // Deshabilitar el botón para evitar que se envie multiples solicitudes a la vez.
    
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar el archivo ${url}: ${response.status}`);
                    }
                return response.text();
            })
            .then(data => {
                // Usar innerText para párrafos, value para inputs o textareas
                if (elementoDestino.tagName === 'P') {
                    elementoDestino.innerText = data;
                } else {
                    elementoDestino.value = data;
                }
            })
            .catch(error => console.error(`Ocurrió un error: ${error}`))
            .finally(() => {
                if (boton) boton.disabled = false; // Rehabilitar el botón. 
            });
    }

    var contenido = document.getElementById("contenido"); 

    mostrar.addEventListener("click",function () {
        var url = archivoSelect.value; // Obtiene el valor del input de tipo file.
        cargarArchivoTxt(url,contenido)
    });
    
});