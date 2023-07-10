// Simulador interactivo: Selección Argentina, campeona del Mundial 2022, donde se puede elegir tu jugador favorito.

console.log("¡Bienvenido al simulador de la selección argentina, campeones del Mundial Qatar 2022!");


var jugadorFavorito = prompt("Eligí tu jugador favorito de la alineación: Martinez, Molina, Romero, Otamendi, Tagliafico, De Paul, Paredes, Fernandez, Messi, Alvarez, Di María");

// Jugador elegido y su información sobre él
if (jugadorFavorito === "Messi") {
    console.log("Has elegido a Lionel Messi como tu jugador favorito. ¡Anota goles y lidera el ataque de la selección!");
} else if (jugadorFavorito === "Alvarez") {
    console.log("Has elegido a la araña como tu jugador favorito. ¡Anota goles y crea oportunidades de gol!");
} else if (jugadorFavorito === "Di Maria") {
    console.log("Has elegido a El Fideo como tu jugador favorito. ¡Anota goles muy importantes!");
} else if (jugadorFavorito === "Fernandez") {
    console.log("Has elegido a Enzo Fernandez como tu jugador favorito. ¡Controla el centro del campo y crea oportunidades de gol!");
} else if (jugadorFavorito === "Paredes") {
    console.log("Has elegido a Leandro Paredes como tu jugador favorito. ¡Controla el centro del campo y crea oportunidades de gol!");
} else if (jugadorFavorito === "De Paul") {
    console.log("Has elegido a Rodri De Paul como tu jugador favorito. ¡Controla el centro del campo y crea oportunidades de gol!");
} else if (jugadorFavorito === "Otamendi") {
    console.log("Has elegido a Nicolás Otamendi como tu jugador favorito. ¡Defiende con solidez y evita los ataques del equipo contrario!");
} else if (jugadorFavorito === "Tagliafico") {
    console.log("Has elegido a Tagliafico como tu jugador favorito. ¡Defiende con solidez y evita los ataques del equipo contrario!");
} else if (jugadorFavorito === "Molina") {
    console.log("Has elegido a Molina como tu jugador favorito. ¡Defiende con solidez y evita los ataques del equipo contrario!");
} else if (jugadorFavorito === "Romero") {
    console.log("Has elegido a Romero como tu jugador favorito. ¡Defiende con solidez y evita los ataques del equipo contrario!");
} else if (jugadorFavorito === "Martinez") {
    console.log("Has elegido a Emiliano Martínez como tu jugador favorito. ¡Sé el último obstáculo y realiza grandes paradas para mantener el arco seguro!");
} else {
    console.log("Jugador no reconocido. Comenzaremos la simulación con Lionel Messi como tu jugador favorito.");
    jugadorFavorito = "Messi";
}

// Alineación de la selección
console.log("Alineación del equipo campeón de la selección argentina en el Mundial 2022:");

// Array con los jugadores
var alineacion = ["Martinez", "Molina", "Romero", "Otamendi", "Tagliafico", "De Paul", "Paredes", "Fernandez", "Messi", "Alvarez", "Di María"];

// Mostrar los jugadores
for (var i = 0; i < alineacion.length; i++) {
    var jugador = alineacion[i];
    if (jugador === jugadorFavorito) {
        console.log("- ¡" + jugador + " (Tu jugador favorito)!");
    } else {
        console.log("- " + jugador);
    }
}

// Mensaje de celebración de la tercera estrella
console.log("¡La Selección Argentina es campeón mundial de Qatar 2022! ¡Felicitaciones por la tercera!");

