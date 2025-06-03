import "./style.css";

// PUNTUACION //

let puntuacion = 0;

const muestraPuntuacion = () => {
  const divPuntuacion = document.getElementById("puntuacionHTML");
  if (
    divPuntuacion !== null &&
    divPuntuacion !== undefined &&
    divPuntuacion instanceof HTMLElement
  ) {
    divPuntuacion.textContent = `Puntuación: ${puntuacion}`;
  }
};

// CARTA AZAR //

const dameCarta = () => {
  const numeroAzar = numeroAleatorio();
  const numeroCartaReal = dameNumerocarta(numeroAzar);
  const urlCarta = dameUrlCarta(numeroCartaReal);
  mostrarCarta(urlCarta);
  const puntosCartas = puntuacionCartas(numeroCartaReal);
  sumarPuntuacion(puntosCartas);
  muestraPuntuacion();
  gameOver();
};

const numeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const dameNumerocarta = (numero: number) => {
  if (numero > 7) return numero + 2;
  return numero;
};

const dameUrlCarta = (numeroCarta: number) => {
  switch (numeroCarta) {
    case 1:
      return "cartas/1_as-copas.jpg";
    case 2:
      return "cartas/2_dos-copas.jpg";
    case 3:
      return "cartas/3_tres-copas.jpg";
    case 4:
      return "cartas/4_cuatro-copas.jpg";
    case 5:
      return "cartas/5_cinco-copas.jpg";
    case 6:
      return "cartas/6_seis-copas.jpg";
    case 7:
      return "cartas/7_siete-copas.jpg";
    case 10:
      return "cartas/10_sota-copas.jpg";
    case 11:
      return "cartas/11_caballo-copas.jpg";
    case 12:
      return "cartas/12_rey-copas.jpg";
    default:
      return "cartas/back.jpg";
  }
};

const puntuacionCartas = (numeroCarta: number) => {
  if (numeroCarta > 7) {
    return 0.5;
  }
  return numeroCarta;
};

const mostrarCarta = (url: string) => {
  const elementoImagen = document.getElementById("cartaMostrada");

  if (
    elementoImagen !== null &&
    elementoImagen !== undefined &&
    elementoImagen instanceof HTMLImageElement
  ) {
    elementoImagen.src = url;
  }
};

const sumarPuntuacion = (puntos: number) => {
  puntuacion += puntos;
};

// GAME OVER //

const gameOver = () => {
  if (puntuacion > 7.5) {
    if (botonHTMLDarCarta instanceof HTMLButtonElement) {
      botonHTMLDarCarta.disabled = true;
    }
  }
};

// DOM CONTENT LOADER //

document.addEventListener("DOMContentLoaded", function () {
  muestraPuntuacion();
  dameCarta();
});

// BOTONES //

const botonHTMLDarCarta = document.getElementById("cartaAzar");
if (
  botonHTMLDarCarta !== null &&
  botonHTMLDarCarta !== undefined &&
  botonHTMLDarCarta instanceof HTMLButtonElement
) {
  botonHTMLDarCarta.addEventListener("click", dameCarta);
}
