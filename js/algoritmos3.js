const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

//EJERCICIO 2
// Escribe un programa que recoge la hora del sistema, y al cargar la página pregunta al usuario su nombre. A continuación, muestra un saludo personalizado (alerta) en función de la hora, teniendo en cuenta los siguientes rangos:
// • Entre las 5:00 y las 11:59 → “Good Morning, {userName}!”
// • Entre las 12:00 y las 17:59 → “Good Afternoon, {userName}!”
// • Entre las 18:00 y las 04:59 → “Good Evening, {userName}!”
// Los saludos deberán estar predefinidos en un objeto con el identificador “greeting”.

const a3e2 = () => {

  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();

  let userName = prompt("¿Cuál es tu nombre?");

  if (hour >= 5 && hour <= 11 && minutes >= 00 && minutes <= 59) {
      alert(`Good Morning, ${userName}!`);
  } else if (hour >= 12 && hour <= 17 && minutes >= 00 && minutes <= 59) {
      alert(`Good Afternoon, ${userName}!`);
  } else if (hour >= 18 || hour <= 4 && minutes >= 00 && minutes <= 59) {
      alert(`Good Evening, ${userName}!`);
  };
};

//a3e2();

// EJERCICIO 4
// Para verificar el DNI, se divide el número entre 23 y el resto se sustituye por una letra que se determina por la siguiente tabla.
// Escribe un programa que almacena un DNI dado por el usuario, y verifica si es un DNI válido, lanzando una alerta “Valid DNI” o “The data entered is wrong”.

const a3e4 = () => {
  let dni = prompt("Introduce tu DNI");

  let dniNumberRest = parseInt(dni.slice(0, 8)) % 23;
  let dniLetter = dni.slice(8).toString();

  let array = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

  let validDni = /^[0-9]{8}[A-Z]$/;
  if (validDni.test(dni) == true) {

    if (dniLetter === array[dniNumberRest]) {
      alert("Valid DNI.");
    } else {
      alert("The data entered is wrong.");
    }
  } else {
    alert("Please, check your data. DNI was not valid.");
  }
};

//a3e4();

//EJERCICIO 4 Bonus
const a3e4Bonus = () => {
  let max = 99999999;
  let min = 00000001;
  let randomDniNumber = Math.floor(Math.random() * (max - min + 1) + min);

  let array = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

  console.log(`El DNI aleatorio es: ${randomDniNumber}${array[randomDniNumber % 23]}.`);

};

//a3e4Bonus();

//EJERCICIO 8
// Escribe un programa para jugar a la carta más alta. Para el juego se utilizará la baraja de poker, por lo que:
// • Habrá 2 arrays, uno con los palos (clubs, hearts, spades, diamonds) y otro con las cartas.
// • El array de cartas incluirá las siguientes, cuyo valor está ordenado de mayor a menor:
// ACE, KING, QUEEN JACK, 10, 9, 8, 7, 6, 5, 4, 3, 2.
// Se juega contra la banca, con un saldo inicial de 500 €. En cada mano se preguntará al usuario
// cuanto quiere apostar.
// Si la apuesta del usuario supera su saldo, se le notificará y se le pedirá que apueste de nuevo. Si la apuesta es válida, se generarán 2 cartas aleatorias,
// se mostrarán por consola, y se indicará una alerta “You win!”, “You lose” o “Draw”, según corresponda. Se sumará o restará el saldo en función del resultado.
// Al final de cada mano se le preguntará si quiere seguir jugando, siendo “y” la opción para seguir, y “n” la opción para retirarse.
// En caso de perder todo el saldo, la partida finaliza. En caso de retirarse, se calcula si ha habido beneficios o pérdidas, y se indica mediante una alerta:
// “Betting benefits: XXX €”, mostrando las pérdidas con un número negativo, y las ganacias con un número positivo. A continuación, otra alerta con el saldo total: “Total balance: YYY €”.

const a3e8 = () => {
  let suit = ["clubs", "hearts", "spades", "diamonds"];
  let cards = ["ACE", "KING", "QUEEN", "JACK", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

  let userCredit = 500;
  let betUser = "";

  do {
    let shouldContinue = true;

    //Card 1 - Computer
    let random = Math.floor(Math.random() * cards.length);
    let random2 = Math.floor(Math.random() * suit.length);

    //Card 2 - User
    let random3 = Math.floor(Math.random() * cards.length);
    let random4 = Math.floor(Math.random() * suit.length);

    betUser = parseInt(prompt("¿Cuánto quieres apostar?"));
    let betUserTest = /^[0-9]+$/;

    if (betUserTest.test(betUser) == true) {
      if (betUser > userCredit) {
        alert("Su apuesta es mayor que su saldo. Apueste de nuevo para seguir jugando.");
      } else {
        console.log(`La carta aleatoria del ordenador es: ${cards[random]} de ${suit[random2]}.`);
        console.log(`La carta aleatoria del usuario es: ${cards[random3]} de ${suit[random4]}.`);

        if (random3 < random) {
          alert("You win!");
          userCredit += betUser;
        } else if (random3 == random) {
          alert("Draw!");
        } else {
          alert("You lose!");
          userCredit -= betUser;
        }
        console.log(`Su saldo actual es de: ${userCredit}€.`);

        if (userCredit !== 0) {
          shouldContinue = prompt("¿Quieres seguir jugando? Introduzca 'y' para continuar o 'n' para salir.");
          if (shouldContinue === "y") {
              continue;
            } else if (shouldContinue === "n") {
    
              let benefits = userCredit - 500;
              if (benefits > 0) {
                alert(`Betting benefits: +${benefits}€.`);
              } else {
                alert(`Betting benefits: ${benefits}€.`);
              }
              alert(`Su saldo actual es de: ${userCredit}€.`);
              break;
    
            } else {
              alert("Por favor, introduzca un dato válido.");
              shouldContinue = prompt("¿Quieres seguir jugando? Introduzca 'y' para continuar o 'n' para salir.");
            }
          break;
        } else {
          console.log("Has perdido todo tu dinero.");
        };
      };
    } else {
      alert("Por favor, introduzca un número válido.");
    };
  } while (userCredit !== 0);
};

//a3e8();

//EJERCICIO 9
//El cifrado César es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.
// Por ejemplo, con un desplazamiento de 3, la A sería sustituida por la D (situada 3 lugares a la derecha de la A), la B sería reemplazada por la E, etc. Este método debe su nombre a Julio César, que lo usaba para comunicarse con sus generales.
// Escribe un programa con una función que recibe 2 parámetros, el primero para indicar si hay que cifrar o descifrar, y el segundo bien texto en claro, o bien el texto codificado mediante el cifrado Cesar. El programa mostrará por consola el string resultante, codificado o no, según corresponda.

const a3e9 = () => {

  const cesar = (coded, text) => {

    let userText = prompt("Introduce el texto:").split("");

    if (coded == true && text == true) {
      let decodedText = "";
      userText.forEach(element => {
        let ascii = element.charCodeAt() + 3;
        let decodedLetter = String.fromCharCode(ascii);

        if (decodedLetter == "#") {
          decodedLetter = " ";
        } else if (decodedLetter == "[") {
          decodedLetter = "A";
        } else if (decodedLetter == "\\") {
          decodedLetter = "B";
        } else if (decodedLetter == "]") {
          decodedLetter = "C";
        } else if (decodedLetter == "{") {
          decodedLetter = "a";
        } else if (decodedLetter == "|") {
          decodedLetter = "b";
        } else if (decodedLetter == "}") {
          decodedLetter = "c";
        } else {
          decodedLetter = String.fromCharCode(ascii);
        };
        decodedText += `${decodedLetter}`;
      });
      console.log(decodedText);

    } else if (coded == false && text == false) {
      let decodedText = "";
      userText.forEach(element => {
        let ascii = element.charCodeAt() - 3;
        let decodedLetter = String.fromCharCode(ascii);

        if (ascii == 29) {
          decodedLetter = " ";
        } else if (decodedLetter == ">") {
          decodedLetter = "X";
        } else if (decodedLetter == "?") {
          decodedLetter = "Y";
        } else if (decodedLetter == "@") {
          decodedLetter = "Z";
        } else if (decodedLetter == "^") {
          decodedLetter = "x";
        } else if (decodedLetter == "_") {
          decodedLetter = "y";
        } else if (decodedLetter == "`") {
          decodedLetter = "z";
        } else {
          decodedLetter = String.fromCharCode(ascii);
        };
        decodedText += `${decodedLetter}`;
      });
      console.log(decodedText);
      
    } else {
      alert("Revise los datos. El tipo de cifrado y el texto introducido no coinciden con las opciones de cifrado.")
    };
  };
  cesar(false, false);
};

//a3e9()