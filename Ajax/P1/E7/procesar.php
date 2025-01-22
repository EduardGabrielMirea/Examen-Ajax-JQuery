<?php
// Verificar si los parámetros 'nombre' y 'edad' están presentes
if(isset($_GET['nombre']) && isset($_GET['edad'])){
    $nombre = $_GET['nombre'];
    $edad = $_GET['edad'];

    // Aquí puedes hacer cualquier procesamiento con los datos

    // Responder con un mensaje
    echo "Hola, " . htmlspecialchars($nombre) . "! Tienes " . intval($edad) . " años.";
} else {
    echo "Faltan parámetros.";
}
?>
