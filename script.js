// Inicializar el contador
let counter = 0;

// Obtener el display del contador
const counterDisplay = document.getElementById('counter-display');

// Agregar evento a todas las imágenes
const images = document.querySelectorAll('.collage img');
images.forEach((img) => {
  img.addEventListener('click', () => {
    counter++;
    updateDisplay();
  });
});

// Actualizar la visualización del contador
function updateDisplay() {
  counterDisplay.textContent = `Clicks totales: ${counter}`;
}
