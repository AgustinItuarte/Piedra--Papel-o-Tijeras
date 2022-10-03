function pcEleccion(){
    const opciones = ["Tijera", "Papel", "Piedra"]
    let num = Math.floor(Math.random() * 3);
    return opciones[num];
}

function rounds(pc, jugador){
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

function jugar(){
    for (let i = 0; i < 5; i++){
        let opcionPc = pcEleccion();
        let opcionJugador = "piedra";
        const resultado = rounds(opcionPc, opcionJugador);
        let puntosPc = 0;
        let puntosJugador = 0;
        if (resultado.slice(0) == "G"){
            puntosJugador++;
        } else if (resultado.slice(0) == "P") {
            puntosPc++;
        } else {
            console.log("Empate");
        }
        console.log(`Puntos jugador: ${puntosJugador} / Puntos PC: ${puntosPc}`);
    }
}

console.log(jugar());

//console.log(rounds(opcionPc, opcionJugador));