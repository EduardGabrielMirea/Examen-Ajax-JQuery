<?php
// Simular un tiempo de espera (3 segundos)
sleep(3);

// Devolver datos simulados como JSON
echo json_encode([
    "mensaje" => "¡Datos cargados exitosamente!",
    "fecha" => date("Y-m-d H:i:s")
]);
?>
