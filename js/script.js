document.addEventListener('DOMContentLoaded', function () {
    try {
        // Verifica si ya existe una variable de contador en el almacenamiento local
        let contador = localStorage.getItem('visitas') || 0;

        // Incrementa el contador y actualiza la página
        contador = parseInt(contador) + 1;

        // Actualiza el valor en el almacenamiento local
        localStorage.setItem('visitas', contador);

        // Encuentra el elemento con el ID 'contador' y actualiza su texto
        let contadorElement = document.getElementById('contador');

        if (contadorElement) {
            contadorElement.innerText = contador;
        } else {
            throw new Error("No se encontró el elemento con el ID 'contador'");
        }
    } catch (error) {
        console.error('Error en el contador:', error.message);
    }
});
