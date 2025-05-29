import "./style.css";

let puntuacion = 0;
let cartaLocalizacion = "";

function muestraPuntuacion() {
  const elementoPuntuacionHTML = document.getElementById(
    "puntuacionHTML"
  ) as HTMLDivElement;
  if (elementoPuntuacionHTML) {
    elementoPuntuacionHTML.textContent = `Puntuación: ${puntuacion}`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  muestraPuntuacion();
  dameCarta();
  nuevaPartida();
  botonMePlanto();
});

function dameCarta() {
  const botonCarta = document.getElementById("cartaAzar") as HTMLButtonElement;
  if (botonCarta) {
    botonCarta.addEventListener("click", function () {
      let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
      console.log(numeroAleatorio);

      if (numeroAleatorio > 7) {
        numeroAleatorio += 2;
      }

      let valorCarta = 0;

      switch (numeroAleatorio) {
        case 1:
          cartaLocalizacion = "cartas/1_as-copas.jpg";
          valorCarta = 1;
          break;
        case 2:
          cartaLocalizacion = "cartas/2_dos-copas.jpg";
          valorCarta = 2;
          break;
        case 3:
          cartaLocalizacion = "cartas/3_tres-copas.jpg";
          valorCarta = 3;
          break;
        case 4:
          cartaLocalizacion = "cartas/4_cuatro-copas.jpg";
          valorCarta = 4;
          break;
        case 5:
          cartaLocalizacion = "cartas/5_cinco-copas.jpg";
          valorCarta = 5;
          break;
        case 6:
          cartaLocalizacion = "cartas/6_seis-copas.jpg";
          valorCarta = 6;
          break;
        case 7:
          cartaLocalizacion = "cartas/7_siete-copas.jpg";
          valorCarta = 7;
          break;
        case 10:
          cartaLocalizacion = "cartas/10_sota-copas.jpg";
          valorCarta = 0.5;
          break;
        case 11:
          cartaLocalizacion = "cartas/11_caballo-copas.jpg";
          valorCarta = 0.5;
          break;
        case 12:
          cartaLocalizacion = "cartas/12_rey-copas.jpg";
          valorCarta = 0.5;
          break;
        default:
          cartaLocalizacion = "cartas/back.jpg";
          break;
      }

      puntuacion = puntuacion + valorCarta;

      muestraPuntuacion();

      const imagenMostrada = document.getElementById(
        "cartaMostrada"
      ) as HTMLImageElement;
      if (imagenMostrada) {
        imagenMostrada.src = cartaLocalizacion;
      }

      const imagen = document.getElementById("back") as HTMLImageElement;
      if (imagen) {
        imagen.src = cartaLocalizacion;
      }

      console.log(`Carta seleccionada: ${cartaLocalizacion}`);

      gameOver();
    });
  }
}

function nuevaPartida(): void {
  const botonNuevaPartida = document.getElementById(
    "nuevaPartida"
  ) as HTMLButtonElement;

  if (botonNuevaPartida) {
    botonNuevaPartida.addEventListener("click", () => {
      puntuacion = 0;
      muestraPuntuacion();

      const cartaReverso = "cartas/back.jpg";

      const imagenMostrada = document.getElementById(
        "cartaMostrada"
      ) as HTMLImageElement;
      if (imagenMostrada) {
        imagenMostrada.src = cartaReverso;
      }
      const contenedor = document.getElementById("mensaje") as HTMLDivElement;
      const mensaje = "";
      if (contenedor) {
        contenedor.textContent = mensaje;
      }
      reset();
    });
  }
}

function gameOver(): void {
  if (puntuacion > 7.5) {
    const boton = document.getElementById("cartaAzar") as HTMLButtonElement;
    if (boton) {
      boton.disabled = true;
    }
  }
}

function reset(): void {
  const boton = document.getElementById("cartaAzar") as HTMLButtonElement;
  if (boton) {
    boton.disabled = false;
  }
}

function mePlanto() {
  if (puntuacion < 4) {
    const contenedor = document.getElementById("mensaje") as HTMLDivElement;
    const mensaje = "Has sido muy conservador";
    if (contenedor) {
      contenedor.textContent = mensaje;
    }
  } else if (puntuacion > 4 && puntuacion < 5.5) {
    const contenedor = document.getElementById("mensaje") as HTMLDivElement;
    const mensaje = "Te ha entrado el canguelo, eh?";
    if (contenedor) {
      contenedor.textContent = mensaje;
    }
  } else if (puntuacion > 6 && puntuacion < 7) {
    const contenedor = document.getElementById("mensaje") as HTMLDivElement;
    const mensaje = "Casi casi..";
    if (contenedor) {
      contenedor.textContent = mensaje;
    }
  } else if (puntuacion === 7.5) {
    const contenedor = document.getElementById("mensaje") as HTMLDivElement;
    const mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    if (contenedor) {
      contenedor.textContent = mensaje;
    }
  }

  const botonCarta = document.getElementById("cartaAzar") as HTMLButtonElement;
  if (botonCarta) {
    botonCarta.disabled = true;
  }
}

function botonMePlanto() {
  const boton = document.getElementById("mePlanto") as HTMLButtonElement;
  if (boton) {
    boton.addEventListener("click", mePlanto);
  }
}
