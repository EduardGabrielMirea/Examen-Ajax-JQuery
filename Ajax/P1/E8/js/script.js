document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("mostrarJson");
    const contenidoDiv = document.getElementById("contenido");

    boton.addEventListener("click", function () {
        // Realizar la solicitud asíncrona para obtener el fichero JSON
        fetch("data.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar el fichero JSON");
                }
                return response.json(); // Convertir la respuesta en JSON
            })
            .then(data => {
                mostrarContenidoJSON(data, contenidoDiv);
            })
            .catch(error => {
                console.error("Error:", error);
                contenidoDiv.innerHTML = `<p style="color: red;">Ocurrió un error al cargar el fichero JSON.</p>`;
            });
    });

    function mostrarContenidoJSON(data, container) {
        // Limpiar el contenido anterior
        container.innerHTML = "";

        // Crear una tabla para mostrar el contenido del JSON
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        // Encabezados de la tabla
        thead.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
            </tr>
        `;

        // Rellenar las filas con los datos del JSON
        data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.edad}</td>
                <td>${item.email}</td>
            `;
            tbody.appendChild(row);
        });

        // Agregar encabezados y cuerpo a la tabla
        table.appendChild(thead);
        table.appendChild(tbody);

        // Mostrar la tabla en el contenedor
        container.appendChild(table);
    }
});
