document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("cargarDatos");
    const loadingDiv = document.getElementById("loading");
    const resultadoDiv = document.getElementById("resultado");

    boton.addEventListener("click", function () {
        // Mostrar el logo de espera
        loadingDiv.style.display = "block";
        resultadoDiv.innerHTML = "";

        // Realizar la solicitud Ajax
        fetch("datos.php")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar los datos");
                }
                return response.json();
            })
            .then(data => {
                // Ocultar el logo de espera
                loadingDiv.style.display = "none";

                // Mostrar los datos devueltos por PHP
                resultadoDiv.innerHTML = `
                    <p><strong>Mensaje:</strong> ${data.mensaje}</p>
                    <p><strong>Fecha:</strong> ${data.fecha}</p>
                `;
            })
            .catch(error => {
                // Ocultar el logo de espera y mostrar un mensaje de error
                loadingDiv.style.display = "none";
                resultadoDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
            });
    });
});
