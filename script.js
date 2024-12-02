// Obtener referencias a los elementos del DOM
const counterDisplay = document.getElementById('counter-display');
const incrementButton = document.getElementById('increment-btn');
const decrementButton = document.getElementById('decrement-btn');
const resetButton = document.getElementById('reset-btn');

// Inicializar el contador
let counter = 0;

// Funciones para los botones
incrementButton.addEventListener('click', () => {
  counter++;
  updateDisplay();
});

decrementButton.addEventListener('click', () => {
  counter--;
  updateDisplay();
});

resetButton.addEventListener('click', () => {
  counter = 0;
  updateDisplay();
});

// Actualizar la visualización del contador
function updateDisplay() {
  counterDisplay.textContent = counter;
}
