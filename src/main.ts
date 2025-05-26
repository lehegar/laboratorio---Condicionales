// Mostrar Puntuacion

let puntuacion = 0;

function muestraPuntuacion() {
  const elementoPuntuacionHTML = document.getElementById(
    "puntuacionHTML"
  ) as HTMLDivElement;
  if (elementoPuntuacionHTML) {
    elementoPuntuacionHTML.textContent = `Puntuación Final: ${puntuacion}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  muestraPuntuacion();
  console.log("Puntuacion");
});

// Pedir carta - Aleatoria

function dameCarta() {
  const botonCarta = document.getElementById("cartaAzar") as HTMLButtonElement;
  if (botonCarta) {
    botonCarta.addEventListener("click", function () {
      const numeroAleatorio = Math.floor(Math.random() * 100);
      console.log(numeroAleatorio);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  dameCarta();
  console.log("Puntuacion");
});

dameCarta();

//Mostrar carta

//
