let puntuacion = 0;

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

      console.log(numeroAleatorio);

      let cartaLocalizacion = "";

      switch (numeroAleatorio) {
        case 1:
          cartaLocalizacion = "cartas/1_as-copas.jpg";
          break;
        case 2:
          cartaLocalizacion = "cartas/2_dos-copas.jpg";
          break;
        case 3:
          cartaLocalizacion = "cartas/3_tres-copas.jpg";
          break;
        case 4:
          cartaLocalizacion = "cartas/4_cuatro-copas.jpg";
          break;
        case 5:
          cartaLocalizacion = "cartas/5_cinco-copas.jpg";
          break;
        case 6:
          cartaLocalizacion = "cartas/6_seis-copas.jpg";
          break;
        case 7:
          cartaLocalizacion = "cartas/7_siete-copas.jpg";
          break;
        case 10:
          cartaLocalizacion = "cartas/10_sota-copas.jpg";
          break;
        case 11:
          cartaLocalizacion = "cartas/11_caballo-copas.jpg";
          break;
        case 12:
          cartaLocalizacion = "cartas/12_rey-copas.jpg";
          break;
        default:
          cartaLocalizacion = "cartas/back.jpg";
          break;
      }

      const imagen = document.getElementById("uno") as HTMLImageElement;
      if (imagen) {
        imagen.src = cartaLocalizacion;
      }

      console.log(`Carta seleccionada: ${cartaLocalizacion}`);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  dameCarta();
});
