// main.js
import { juegoDados } from './juegoDados.js';
import { juegoApuestas } from './juegoApuestas.js';

const juegos = document.getElementById("gameContainer");
let currentGame = null;

document.getElementById("juegoDados").addEventListener("click", () => {
    cargarJuegoDados();
});

document.getElementById("juegoApuestas").addEventListener("click", () => {
    cargarJuegoAuestas();
});

function cargarJuegoDados() {
    juegos.innerHTML = "";
    // const checkGuess = juegoDados();

    const juegoDadosHTML = `
        <h1>Juego de Dados</h1>
       
        
        <button id="lanzarDadosBtn">Lanzar Dados</button>
        <p id="message"></p>
    `;
    juegos.insertAdjacentHTML("beforeend", juegoDadosHTML);

    document.getElementById("lanzarDadosBtn").addEventListener("click", juegoDados());

    // currentGame = checkGuess;
}

function cargarJuegoAuestas() {
    juegos.innerHTML = "";
    const jugarJuego = juegoApuestas();
    
    const juegoApuestasHTML = `
        <h1>Juego de Apuestas</h1>
        <p>Elije una opción:</p>
        <button id="opcion1button">Opcion 1</button>
        <button id="opcion2button">Opcion 2</button>
        <button id="opcion3button">Opcion 3</button>
        <p id="result"></p>
    `;
    juegos.insertAdjacentHTML("beforeend", juegoApuestasHTML);   
    document.getElementById("opcion1button").addEventListener("click", () => jugarJuego("opcion1"));
    document.getElementById("opcion2button").addEventListener("click", () => jugarJuego("opcion2"));
    document.getElementById("opcion3button").addEventListener("click", () => jugarJuego("opcion3"));

    currentGame = jugarJuego;
}

