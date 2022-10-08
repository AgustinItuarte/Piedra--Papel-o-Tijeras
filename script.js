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

function jugar(){ // Suma los puntos y se encarga de decidir quien ha ganado el juego.
    let puntosPc = 0;
    let puntosJugador = 0;
    let empate = 0;
    for (let i = 0; i < 5; i++){
        let opcionPc = pcEleccion();
        let opcionJugador = prompt("Elije tu jugada: ");
        const resultado = rounds(opcionPc, opcionJugador);
    
        if (resultado[0] == "G"){
            puntosJugador++;
        } else if (resultado[0] == "P") {
            puntosPc++;
        } else if (resultado[0] == "E"){
            empate++;
        }
        console.log(`Puntos jugador: ${puntosJugador} / puntos PC: ${puntosPc} / Empate ${empate}`);
    }
    
    if (puntosJugador > puntosPc){
        return "Felicidades has ganado!!";
    } else if (puntosPc > puntosJugador) {
        return "Has perdido";
    } else if (puntosJugador == puntosPc) {
        return "Es empate";
    } else {
        return "Algo a salido mal";
    }
    
}

console.log(jugar());