const buttons = document.querySelectorAll('button');
const resultadosDiv = document.querySelector('.resultados');
const puntuacionDiv = document.querySelector('.puntuacion');
let puntosPc = 0;
let puntosJugador = 0;
let empate = 0;

function pcEleccion(){ // Se encarga de devolver un valor random del array opciones.
    const opciones = ["Tijera", "Papel", "Piedra"]
    let num = Math.floor(Math.random() * 3);
    return opciones[num];
}

function rounds(pc, jugador){ // Es la logica detras de quien gana dependiendo del valor que se eliga
    if (pc.toUpperCase() == "TIJERA" && jugador.toUpperCase() == "PAPEL") {
        return "Perdiste, tijera gana a papel!!";
    } else if (pc.toUpperCase() == "PIEDRA" && jugador.toUpperCase() == "TIJERA") {
        return "Perdiste, piedra gana a tijera!!";
    } else if (pc.toUpperCase() == "PAPEL" && jugador.toUpperCase() == "PIEDRA") {
        return "Perdiste, papel gana a piedra!!";

    } else if (pc.toUpperCase() == "PAPEL" && jugador.toUpperCase() == "TIJERA") {
        return "Ganaste, tijera gana a papel!!";
    } else if (pc.toUpperCase() == "TIJERA" && jugador.toUpperCase() == "PIEDRA") {
        return "Ganaste, piedra gana a tijera!!";
    } else if (pc.toUpperCase() == "PIEDRA" && jugador.toUpperCase() == "PAPEL") {
        return "Ganaste, papel gana a piedra!!";
    } else {
        return "Empate";
    }
}

buttons.forEach(key => key.addEventListener('click', () => { // Guarda clases de los botones y pasa a funcion jugar(), y muestra en pantalla returns de jugar()
    let eleccionJugador = key.className;
    let eleccionPc = pcEleccion();
    let resultado = `${rounds(eleccionPc, eleccionJugador)}`;
    
    resultadosDiv.textContent = resultado;
    puntuacionDiv.textContent = jugar(resultado);

}))

function jugar(resultado){ // Suma los puntos y se encarga de decidir quien ha ganado el juego.

    if (resultado[0] == "G"){
        puntosJugador++;
    } else if (resultado[0] == "P") {
        puntosPc++;
    } else if (resultado[0] == "E"){
        empate++;
    }

    if (puntosJugador !== 5 && puntosPc !== 5 && empate !== 5) {
        return (`Puntos jugador: ${puntosJugador} | puntos PC: ${puntosPc} | Empate ${empate}`);
    } else if (puntosJugador == 5) {
        puntosPc = 0;
        puntosJugador = 0;
        empate = 0;
        return "Felicidades has ganado!!!";
    } else if (puntosPc == 5) {
        puntosPc = 0;
        puntosJugador = 0;
        empate = 0;
        return "Has perdido";
    } else if (empate == 5) {
        puntosPc = 0;
        puntosJugador = 0;
        empate = 0;
        return "Es empate"
    }

}