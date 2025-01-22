document.addEventListener("DOMContentLoaded", function () {

    var mostrarFecha = document.getElementById("mostrarFecha");
    
    mostrarFecha.addEventListener("click", function () {
        
        fetch("fecha.php")
        .then(response => response.text())
        .then(data => {
            document.getElementById("contenedor").innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
    });
});