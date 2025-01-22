document.addEventListener("DOMContentLoaded", function () {   

    const imagen = document.getElementById("imagen");

    // Lista de URLs de imágenes (enlaces de Internet)
    const urls = [
        "https://cdn.pixabay.com/photo/2024/12/15/10/40/australian-pelican-9268481_640.jpg",
        "https://cdn.pixabay.com/photo/2024/07/01/10/50/flycatcher-8864922_640.jpg"
    ];

    let indiceActual = 0; 

    // Función para cargar una nueva imagen de forma asíncrona
    function cargarImagen() {
       
        indiceActual =  (indiceActual + 1) % urls.length; // Cambiar al siguiente índice
        const nuevaImg = urls [indiceActual];
        
        fetch(nuevaImg)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la imagen');
            }
            return imagen.src = nuevaImg;
        })
        .catch(error => {
            console.error(error);
            alert("No se pudo cargar la imagen");
        });
    }

    var button = document.getElementById("cambiar");
   
    button.addEventListener("click", cargarImagen);
});