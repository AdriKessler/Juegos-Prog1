
let saldo = 50

export function juegoApuestas() {
    return function jugarJuego(eleccion) {      
        const opciones = ["opcion1", "opcion2", "opcion3"];
        const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
        if(saldo > 0){
            if (eleccion === eleccionComputadora) {
            saldo += 10
            document.getElementById("result").textContent = "Ganaste! Tu saldo es " + saldo;
        } else {
            saldo -= 10
            document.getElementById("result").textContent = "La computadora ganó. Inténtalo de nuevo. Tu saldo es " + saldo;
        }
        }else{
            document.getElementById("result").textContent = "Te quedaste sin saldo!";
            return
        }
        
    };
}

