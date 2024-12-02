// Array de frases del Grinch
const grinchQuotes = [
  "Tal vez la Navidad no viene de una tienda.",
  "¡Odio a toda la gente feliz allá afuera!",
  "Soy un genio. ¡Soy un genio amargado!",
  "¡Espera, no puedes esperar a odiar algo antes de probarlo primero!",
  "¿Un corazón dos tallas más pequeño? ¡Perfecto para mí!"
];

// Función para mostrar frases aleatorias
const quoteDisplay = document.getElementById("quote-display");
const quoteBtn = document.getElementById("quote-btn");
quoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * grinchQuotes.length);
  quoteDisplay.textContent = grinchQuotes[randomIndex];
});

// Botón interactivo "Roba la Navidad"
const actionBtn = document.getElementById("action-btn");
actionBtn.addEventListener("click", () => {
  alert("¡Felicidades, has robado la Navidad! 🎄❌");
});
