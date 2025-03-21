// Lista de dulces con sus probabilidades (en porcentaje)
const dulces = [
  { nombre: "Sandias", probabilidad: 18 },
  { nombre: "Tiras", probabilidad: 15 },
  { nombre: "Tuvos", probabilidad: 15 },
  { nombre: "Caramelos", probabilidad: 18 },
  { nombre: "Cintas Melon", probabilidad: 15 },
  { nombre: "Chocomelos", probabilidad: 4 },
  { nombre: "Chocobrake", probabilidad: 4 },
  { nombre: "Candys", probabilidad: 3 },
  { nombre: "Chaos Fresa", probabilidad: 3 },
  { nombre: "Muu", probabilidad: 3 },
  { nombre: "Papas", probabilidad: 1 },
  { nombre: "Chokis", probabilidad: 1 }
];

// Referencias a elementos del DOM
const dulceInput = document.getElementById("dulceInput");
const girarBtn = document.getElementById("girarBtn");

// Variables para el carrusel
let intervalId;
let currentIndex = 0;
let velocidad = 50; // Velocidad inicial en milisegundos
let decelerationSteps = 20; // Pasos para disminuir la velocidad
let selectedDulce;

// Función para seleccionar un dulce basado en su probabilidad
function seleccionarDulce() {
  const random = Math.random() * 100; // Número aleatorio entre 0 y 100
  let acumulado = 0;

  for (const dulce of dulces) {
    acumulado += dulce.probabilidad;
    if (random < acumulado) {
      return dulce.nombre;
    }
  }
}

// Función para iniciar el carrusel
function iniciarCarrusel() {
  girarBtn.disabled = true; // Desactivar el botón mientras gira
  velocidad = 50; // Reiniciar la velocidad
  currentIndex = 0;

  // Intervalo para cambiar rápidamente los nombres
  intervalId = setInterval(() => {
    dulceInput.value = dulces[currentIndex].nombre;
    currentIndex = (currentIndex + 1) % dulces.length;

    // Disminuir la velocidad gradualmente
    if (velocidad < 500) {
      velocidad += 20; // Aumentar la duración del intervalo
    }
  }, velocidad);

  // Detener el carrusel después de unos segundos
  setTimeout(detenerCarrusel, 3000);
}

// Función para detener el carrusel y mostrar el dulce seleccionado
function detenerCarrusel() {
  clearInterval(intervalId); // Detener el intervalo
  selectedDulce = seleccionarDulce(); // Seleccionar el dulce ganador
  dulceInput.value = selectedDulce; // Mostrar el dulce seleccionado
  girarBtn.disabled = false; // Reactivar el botón
}

// Evento para el botón "Girar"
girarBtn.addEventListener("click", iniciarCarrusel);