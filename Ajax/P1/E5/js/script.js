document.addEventListener("DOMContentLoaded", function () {
    
    var button = document.getElementById("ejecutar");

    button.addEventListener("click", function(){

        fetch("js/archivo.js")
            .then(response => {
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                return response.text();
            })
            .then(data => {
                eval(data);
            })
            .catch(error => {console.error('Error:', error);});
    });
});