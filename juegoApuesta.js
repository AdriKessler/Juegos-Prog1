// Variables para el juego
let saldo = Number(prompt("¿Cuantos créditos tenés?"));
let opcionGanadora;
let opcionSeleccionada;

// Función para realizar una apuesta
function apostar(opcion) {
  if (saldo <= 0) {
    alert("¡No tenés suficiente saldo para seguir jugando!");
    return;
  } else if (saldo === 50) {
    alert("Llegaste a 50! Te ganaste otra entrada al casino");
    return;
  }
  // Actualizar la opción seleccionada
  opcionSeleccionada = opcion;

  // Elegir la opción ganadora al azar
  opcionGanadora = Math.floor(Math.random() * 3) + 1;

  // Mostrar el resultado
  mostrarResultado();
}

// Función para mostrar el resultado del juego
function mostrarResultado() {
  let mensaje = document.getElementById('mensaje');
  if (opcionGanadora === opcionSeleccionada) {
    saldo += 10; // Incrementar el saldo si ganas
    mensaje.textContent = "¡Ganaste! Tu saldo actual es" + saldo;
  } else {
    saldo -= 10; // Reducir el saldo si pierdes
    mensaje.textContent = "Perdiste. Tu saldo actual es" + saldo;
  }

  // Reiniciar el juego
  opcionGanadora = null;
  opcionSeleccionada = null;
}

// Función para mostrar el resultado final
function mostrarResultadoFinal() {
  alert("Resultado final: Tu saldo es" + saldo);
}
