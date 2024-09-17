
$(document).ready(function() {
    // Hacer una petición AJAX para obtener la lista de Digimons
    $.ajax({
        url: "https://digimon-api.vercel.app/api/digimon",
        method: "GET",
        success: function(response) {
            // Seleccionar solo los primeros 3 Digimons de la respuesta
            var digimons = response.slice(0, 3);

            // Recorrer el array de Digimons y mostrarlos
            digimons.forEach(function(digimon) {
                // Crear el HTML para mostrar el nombre, nivel y la imagen del Digimon
                var digimonHtml = `
                    <div>
                        <h2>${digimon.name}</h2>
                        <p><strong>Nivel:</strong> ${digimon.level}</p>
                        <img src="${digimon.img}" alt="${digimon.name}" width="150">
                    </div>
                `;
                // Agregar el HTML al contenedor
                $('#digimon-list').append(digimonHtml);
            });
        },
        error: function() {
            $('#digimon-list').html('<p>Error al cargar los Digimons.</p>');
        }
    });
});