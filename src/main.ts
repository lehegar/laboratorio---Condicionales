let puntuacion = 1;

function muestraPuntuacion() {
  const elementoPuntuacionHTML = document.getElementById(
    "puntuacionHTML"
  ) as HTMLDivElement;
  if (elementoPuntuacionHTML) {
    elementoPuntuacionHTML.textContent = `Puntuación Final: ${puntuacion}`;
  }
}

muestraPuntuacion();

/*
const MiNombre = "Leticia";
const nombreOtra = "Sandra";

const numeroUsuario = 15;

let nombreGanadora;

if (numeroUsuario <= 10) {
  nombreGanadora = MiNombre;
} else {
  nombreGanadora = nombreOtra;
}
console.log("Has ganado", nombreGanadora);
*/
