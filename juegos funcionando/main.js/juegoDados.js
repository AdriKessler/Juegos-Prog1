/*El participante lanzará los dados buscando cifras específicas, según lo que salga se determinará como sigue el juego:
Si sale un 7 o un 11, el jugador gana automáticamente lo apostado.
Si sale un 2, 3 o un 12, el jugador pierde al instante y necesita apostar de nuevo para seguir jugando.
Si sale un 1, 4, 5, 6, 8, 9 o un 10, se puntúa y el juego pasa a una segunda etapa.
¿Qué es puntuar? Es sacar la cifra con la que se buscará ganar la partida. Por ejemplo, si se saca un 8, 
el jugador debe seguir lanzando los dados, buscando sacar nuevamente un 8 para ganar lo apostado. 
Pero, si el lanzador obtiene un 7, pierde la partida.*/

  
    function lanzarDados() {
      // Genera un número aleatorio entre 1 y 6 para el primer dado y el segundo dado.
      const dado1 = Math.floor(Math.random() * 6) + 1;
      const dado2 = Math.floor(Math.random() * 6) + 1;
      const total= dado1 + dado2;
  
      // Devuelve los valores de la suma de los dados.
      return total;
    }
  
    function segundaOportunidad(puntuacion){
      const total = lanzarDados();
      console.log(total);
      
      if (total === puntuacion) {
        console.log('Felicitaciones: Ganaste porque sacaste nuevamente ' + total);
        
      } else if (total === 7) {
        console.log('Perdiste. Tu puntuación fue igual a 7');
      }
    }
  
    export function juegoDados() {
      const sumaDados = lanzarDados();
      console.log(sumaDados);
  
      if (sumaDados == 7 || sumaDados == 11) {
        console.log('Felicitaciones: Ganaste la partida');
      } else if (sumaDados == 2 || sumaDados == 3 || sumaDados == 12) {
        console.log('Perdiste la jugada, inténtalo de nuevo');
        
      } else {
        console.log('El valor que sacaste fue: ' + sumaDados + ' Intenta nuevamente para sacar el mismo valor');
        lanzarDadosBtn.addEventListener('click', function() {
          segundaOportunidad(sumaDados);
        });
      }
    }

  