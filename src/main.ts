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
  const sumaPuntos = sumarPuntuacion(puntosCartas);
  actualizarPuntuacion(sumaPuntos);
  muestraPuntuacion();
  gestionPartida();
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
  return puntuacion + puntos;
};

const actualizarPuntuacion = (puntosActualizados: number) => {
  puntuacion = puntosActualizados;
};

// GAME OVER //

const contenedorMensaje = document.getElementById("mensaje");

const gestionPartida = () => {
  if (puntuacion > 7.5) {
    if (botonHTMLDarCarta instanceof HTMLButtonElement) {
      botonHTMLDarCarta.disabled = true;
    }

    visibleBotonQueHubieraPasado();

    if (botonMePlanto instanceof HTMLButtonElement) {
      botonMePlanto.disabled = true;
    }

    mostrarMensaje("Te has pasado... 😢");
  } else if (puntuacion === 7.5) {
    mostrarMensaje("Has ganado!!!");
  }
};

const mostrarMensaje = (mensaje: string) => {
  if (contenedorMensaje instanceof HTMLDivElement) {
    contenedorMensaje.textContent = mensaje;
  }
};
// ME PLANTO //

const mensajeCuandoMePlanto = () => {
  if (puntuacion < 4) {
    return "Has sido muy conservador";
  } else if (puntuacion < 5) {
    return "Te ha entrado el canguelo eh?";
  } else if (puntuacion >= 6 && puntuacion <= 7) {
    return "Casi casi...";
  } else if (puntuacion === 7.5) {
    return "¡ Lo has clavado! ¡Enhorabuena!";
  } else {
    return "Error";
  }
};

const mePlanto = () => {
  if (botonHTMLDarCarta instanceof HTMLButtonElement) {
    botonHTMLDarCarta.disabled = true;
  }

  const mensaje = mensajeCuandoMePlanto();
  mostrarMensaje(mensaje);

  const btnQueHubieraPasado = document.getElementById("queHubieraPasado");
  if (btnQueHubieraPasado instanceof HTMLButtonElement) {
    btnQueHubieraPasado.addEventListener("click", elementoQueHubieraPasado);
  }
};

// NUEVA PARTIDA //

const reset = () => {
  puntuacion = 0;
  muestraPuntuacion();

  const elementoImagen = document.getElementById("cartaMostrada");
  if (elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = "cartas/back.jpg";
  }

  const contenedorMensaje = document.getElementById("mensaje");
  if (contenedorMensaje instanceof HTMLDivElement) {
    contenedorMensaje.textContent = "";
  }

  if (botonHTMLDarCarta instanceof HTMLButtonElement) {
    botonHTMLDarCarta.disabled = false;
  }

  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = false;
  }

  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.style.display = "";
  }
  ocultarBotonQueHubieraPasado();
};

// QUE HUBIERA PASADO //

const elementoQueHubieraPasado = () => {
  dameCarta();

  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = true;
  }

  if (botonHTMLDarCarta instanceof HTMLButtonElement) {
    botonHTMLDarCarta.disabled = true;
  }

  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = true;
  }

  if (btnQueHubieraPasado instanceof HTMLButtonElement) {
    btnQueHubieraPasado.disabled = true;
  }
};

const visibleBotonQueHubieraPasado = () => {
  if (btnQueHubieraPasado instanceof HTMLButtonElement) {
    btnQueHubieraPasado.style.display = "";
  }
};

const ocultarBotonQueHubieraPasado = () => {
  if (btnQueHubieraPasado instanceof HTMLButtonElement) {
    btnQueHubieraPasado.style.display = "none";
  }
};

// DOM CONTENT LOADER //

document.addEventListener("DOMContentLoaded", function () {
  muestraPuntuacion();
  dameCarta();
  reset();
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

const botonMePlanto = document.getElementById("mePlanto");
if (botonMePlanto !== null && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", mePlanto);
}

const botonNuevaPartida = document.getElementById("nuevaPartida");
if (
  botonNuevaPartida !== null &&
  botonNuevaPartida instanceof HTMLButtonElement
) {
  botonNuevaPartida.addEventListener("click", reset);
}

const btnQueHubieraPasado = document.getElementById("queHubieraPasado");
if (
  btnQueHubieraPasado !== null &&
  btnQueHubieraPasado instanceof HTMLButtonElement
) {
  btnQueHubieraPasado.addEventListener("click", elementoQueHubieraPasado);
}

if (
  botonNuevaPartida !== null &&
  botonNuevaPartida instanceof HTMLButtonElement
) {
  botonNuevaPartida.addEventListener("click", reset);
}
