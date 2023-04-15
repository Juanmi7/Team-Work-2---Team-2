const randomNumbers = (max, min) => {
 let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}; 

//EJERCICIO 1
//Escribe un programa que indique en la consola cuantos días tiene el mes en curso, obteniendo el mes real del sistema.

const a1e1 = () => {

    let month = new Date().getMonth();
    switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            console.log("El mes actual tiene 31 días.");
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            console.log("El mes actual tiene 30 días.");
            break;
        default:
            console.log("El mes actual tiene 28 días.");
            break;
    };

};

//a1e1();

//EJERCICIO 2
//Escribe un programa que le pregunte al usuario un mes, y le indique cuantos días tiene ese mes. En caso de error, indicarle el mensaje: “That’s not a real month!”.

const a1e2 = () => {
  let notas = prompt("Choose a month").toLowerCase();

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
      console.log("Thats not a real month");
      break;
  }
};

//a1e2();

//EJERCICIO 4
//Escribe un programa que simula un semáforo. El semáforo estará controlado por una variable “centinela” llamada “isGreen”.
//Si el semáforo está verde, mostrar por consola: “Cross the road”, en caso contrario mostrar: “Please wait”.

const a1e4 = () => {
  // set the Array constant isGreen with colors values
  const isGreen = [
    { color: "yellow", time: 2 },
  { color: "red", time: 5 },
  { color: "green", time: 10 },
  ];
  function trafficLight(index) { 
      const color = isGreen[index].color; 
    switch (color) {
      case "green":
        console.log("Cross the road");
        break;
      case "red":
        console.log(`Please wait (${index + 1})`);
        break;
      default:
        console.log(`Be cautious (${index + 1})`);
    }
    // setTimeout is setting a time loop
    setTimeout(() => {
      index++;
      if (index >= isGreen.length) {
        index = 0;
      }
      trafficLight(index);
    }, isGreen[index].time * 1000);
  }
  
  trafficLight(0);
};

// a1e4();

//EJERCICIO 5
// Teniendo en cuenta las siguientes temperaturas:
// • Absolute Zero → -273.15°C
// • Freezing point → 0°C
// • Body Temperature → 37°C
// • Boiling point → 100°C
// Escribe un programa que convierta estas temperaturas a Fahrenheit (mediante la estructura
// switch). ** Buscar la fórmula en Google**

const a1e5 = () => {

    let solve = false;

    do {
        let temp = parseInt(prompt("¿Cuál de las siguientes temperaturas quieres convertir a Farenheit? Introduce el número correspondiente:\n 1. Absolute Zero (-273.15°C)\n 2. Freezing Point (0°C)\n 3. Body Temperature (37°C)\n 4. Boiling Point (100°C)"));
        
        let farenheit = 0;
        switch (temp) {
            case 1:
                farenheit = -273.15 * (9/5) + 32;
                solve = true;
                break;
            case 2:
                farenheit = 0 * (9/5) + 32;
                solve = true;
                break;
            case 3:
                farenheit = 37 * (9/5) + 32;
                solve = true;
                break;
            case 4:
                farenheit = 100 * (9/5) + 32;
                solve = true;
                break;
            default:
                alert("Por favor, introduce una temperatura correcta.")
                break;
        };
        console.log(`La temperatura es de ${farenheit.toFixed(2)}°F.`);
    } while (solve !== true);
};

//a1e5();

//EJERCICIO 6
//Escribe un programa que pida al usuario email y contraseña. Deberá comparar los datos introducidos con los siguientes, que deberán estar guardados en variables:
//email: tolkien@lordofrings.com
//password: aNBR6ZeWPY
//En caso de que los datos introducidos sean correctos, mostrar una alerta con el mensaje: “Welcome Mr. Tolkien”, en caso contrario mostrar el mensaje: “Wrong password or email”.

const a1e6 = () => {

    let userEmail = prompt("Introduce your email:");
    let userPassword = prompt("Introduce your password:");

    let correctEmail = "tolkien@lordofrings.com";
    let correctPassword = "aNBR6ZeWPY";

    if (userEmail === correctEmail && userPassword === correctPassword) {
        alert("Welcome Mr. Tolkien");
    } else {
        alert("Wrong password or email.")
    };
};

//a1e6();

//EJERCICIO 7
// Mediante una estructura switch, escribe un programa para convertir euros a:
// • Dólar americano
// • Yen Japonés
// • Libra esterlina
// • Franco suizo
// Y muestre por consola el siguiente resultado: XXX euros equivalen a YYY dólares americanos, ZZZ yen japoneses, NNN libras esterlinas y MMM francos suizos. Aplicar template literal para mostrar el resultado.

const a1e7 = () => {
  let euros = prompt("Introduzca la cantidad en Euros");
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

//a1e7();

//EJERCICIO 9
// Preguntar al usuario su DNI o NIE. Comprobar, mediante las funciones para strings, si los datos
// introducidos son válidos, teniendo en cuenta lo siguiente.
// • El NIE debe escribirse con la X o T inicial, todos los números y la letra final, sin espacios ni
// guiones. Ejemplo: X0523821F.
// • El DNI está formado por ocho dígitos y un carácter alfabético de control. Ejemplo: 12345678ª.
// ** Consultar la tabla ASCII para poder resolver el ejercicio. **

const a1e9 = () => {

    let document = "";
    let finalDoc = false;

    do {
        document = prompt("Introduce tu DNI o NIE:");

        let initial = document.slice (0, 1);
        let medium = document.slice(1, 8);
        let final = document.slice(8);
        
        
        if (document.length !== 9) {
            console.log("Por favor, revise los datos. El dato introducido no es correcto.");
        } else {

            let numbers = /[0-9]{7}/;

            let nieFinal = /[A-Z]{1}/;
            
            let dniInitial = /[0-9]{1}/;
            let dniFinal = final.charCodeAt(0);
            
            if ((document.startsWith("X", 0) || document.startsWith("T", 0)) && numbers.test(medium) == true && nieFinal.test(final) == true) {
                console.log("El NIE introducido es correcto!");
                finalDoc = true;
            } else if (dniInitial.test(initial) == true && numbers.test(medium) == true && (dniFinal >= 65 && dniFinal <= 90)) {
                console.log("El DNI introducido es correcto!");
                finalDoc = true;
            } else {
                console.log("Los datos introducidos no se corresponden con un DNI o NIE válido.")
            }
        }
    } while (finalDoc !== true);
};

//a1e9();

//EJERCICIO 10
//Investiga el objeto Math, y genera 2 números aleatorios, entre 1 y 6, para simular un juego de dados. Comprueba los resultados obtenidos y
//muestra por consola el ganador. Por ejemplo: “Player 1 wins!”, o “draw”, en caso de empate.

const a1e10 = () => {
  //  Defining function which returns a random number between min and max
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const num1 = randomNumber(1, 6);
  const num2 = randomNumber(1, 6);
  console.log(num1);
  console.log(num2);
  // comparing the two numbers and displaying the winner or a draw
  function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return "Player 1 wins!";
  } else if (num1 < num2) {
    return "Player 2 wins!";
  } else {
    return "Draw";
  }
}
console.log(compareNumbers(num1, num2));
};

// a1e10();
