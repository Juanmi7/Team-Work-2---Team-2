const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};


function e2p2(cad) {
  var separarCadena = cad.split("");
  var invertirArray = separarCadena.reverse();
  var unirArrai = invertirArray.join("");
  return unirArrai;
}
// Ejercicio 2 pdf 2 descomentar para ver
// console.log(e2p2("no lemon no melon"));


const e2p7 = () => {
let randomNumberse2p7 = randomNumbers(10, 0);
let intentosDisponibles = 3;
// Pedimos el numero al usuario desde el prompt y lo comparamos en un bucle while
while (intentosDisponibles > 0) {
  const input = prompt(
    `Adivina el número (te quedan ${intentosDisponibles} intentos):`
  );
// Verificamos si es correcto o no
  if (!isNaN(input)) {
    const numeroAdivinar = parseInt(input);

    if (numeroAdivinar === randomNumberse2p7) {
      alert("¡You win!");
      break;
    } else {
      intentosDisponibles--;
      if (intentosDisponibles > 0) {
        alert("Try it again");
      } else {
        alert("Sorry, Good luck in love");
      }
    }
  } else {
    alert("Introduce un caracter numérico");
  }
}
}
// Ejercicio 7 pdf 2 descomentar para ver
// console.log(e2p7());