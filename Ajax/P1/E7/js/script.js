$(document).ready(function() {
    $("#formulario").submit(function(event) {
        event.preventDefault(); // Prevenir el envío tradicional del formulario

        // Obtener los valores del formulario
        var nombre = $("#nombre").val();
        var edad = $("#edad").val();

        // Enviar datos al archivo PHP utilizando Ajax
        $.ajax({
            url: 'procesar.php', // El archivo PHP que procesará los datos
            type: 'GET',
            data: {nombre: nombre, edad: edad}, // Parámetros GET
            success: function(response) {
                // Mostrar la respuesta del servidor
                $("#respuesta").html(response);
            },
            error: function() {
                alert("Hubo un error en la solicitud.");
            }
        });
    });
});