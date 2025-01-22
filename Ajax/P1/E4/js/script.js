document.addEventListener("DOMContentLoaded",function () {

    const contenedor = document.getElementById("contenedor");

    var button = document.getElementById("mostrar");
    button.addEventListener("click", function(){

        fetch("archivo.xml")
        .then(response => {
            if (!response.ok){
                throw new Error(`Error al cargar el archivo XML: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser(); // Convierte una cadena XML o HTML en un objeto DOM manipulable, lo que te permite usar métodos como getElementsByTagName o querySelector.
            const xmlDoc = parser.parseFromString(data, "application/xml");
            mostrarXML(xmlDoc, contenedor);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});

function mostrarXML(xml, contenedor) {
    // Limpiar contenido anterior.
    contenedor.innerHTML = "";

    //obtener elementos del xml y mostrarlos
    var items = xml.getElementsByTagName("item");
    
    // Si hay muchos elementos es mejor un FOR ...OF, el forEach es solo para pocas iteraciones.
    Array.from(items).forEach(item => {
        var title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        var description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;

        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<h2>${title}</h2><p>${description}</p>`;

        contenedor.appendChild(itemDiv);
    });
    
}