const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};



const a1e2 = () => {
  notas = prompt("Choose a month").toLowerCase();

  switch (notas) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "septiembre":
    case "noviembre":
      console.log("This month has 31 days");
      break;
    case "abril":
    case "junio":
    case "agosto":
    case "septiembre":
    case "diciembre":
      console.log("This month has 30 days");
      break;
    case "febrero":
      console.log("This month has 28 days");
      break;
    default:
      console.log("That´s not a real month");
      break;
  }
};
console.log(a1e2());

const a1e7 = () => {
  let euros = prompt("Dime tu cantidad en Euros");
  let dolarAmericano = 1.07;
  let yenJapones = 140.86;
  let libraEsterlina = 0.88;
  let francoSuico = 0.99;

  switch (!isNaN(euros)) {
    case true:
      cambiodolar = euros * dolarAmericano;
      cambioyen = euros * yenJapones;
      cambiolibra = euros * libraEsterlina;
      cambiofranco = francoSuico * euros;
      break;

    default:
      console.log("Introduzca un valor numerico valido");
      break;
  }
  let resultado = `Euros:${euros}\n Que en dolares son: ${cambiodolar}\n Que en Yenes Japoneses son: ${cambioyen}\n Que en Libra esterlina son:${cambiolibra}\n Que en Francos son: ${cambiofranco} Cambio en Francos`;
  console.log(resultado);
};
console.log(a1e7());
