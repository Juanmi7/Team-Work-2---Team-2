const randomNumbers = (max, min) => {
 let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
};

//EJERCICIO 1
//Escribe un programa para contar las letras en la palabra: palindrome, mostrándolas una a una.

const a2e1 = () => {

    let array = ["palindrome"];

    for (let index = 0; index < array.length; index++) {

        let totalLetters = array[index].length;
        console.log(`La palabra ${array[index]} tiene un total de ${totalLetters} letras:`);

        for (let letter = 0; letter < totalLetters; letter++) {
            let singleLetter = array[index].charAt(letter);
            console.log(singleLetter);
        };
    };
};

//a2e1();

//EJERCICIO 2
//Escribe un programa que muestre las letras del palíndromo “no lemon, no melon” en orden inverso.

const a2e2 = () => {
  function a2e2(cad) {
    let separarCadena = cad.split("");
    let invertirArray = separarCadena.reverse();
    let unirArray = invertirArray.join("");
    return unirArray;
  }
  
  // console.log(a2e2("no lemon, no melon"));
};

//a2e2();

//EJERCICIO 4
//Escribe un programa con 7 variables con la temperatura de los 7 últimos días (Google). A continuación, muestra cuál ha sido la temperatura media.

const a2e4 = () => {
    let temp1 = parseInt("25");
    let temp2 = parseInt("27");
    let temp3 = parseInt("24");
    let temp4 = parseInt("26");
    let temp5 = parseInt("28");
    let temp6 = parseInt("25");
    let temp7 = parseInt("24");

    let tempMedia = ((temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7)/7).toFixed(2);
    console.log(`La temperatura media de los últimos 7 días es: ${tempMedia}°C.`);
}

//a2e4();

//EJERCICIO 5
//Escribe una función con el nombre “stringManager”, que recibirá 2 parámetros: un string, introducido por el usuario a través del prompt(), 
//y un segundo parámetro, que será un objeto con las funciones a realizar. 
//Genera un Lorem50 desde VS Code para probar el ejercicio.
//El ejercicio comenzará pidiendo un string al usuario, a través de la función prompt(). A continuación, mediante un menú de consola, 
//preguntará al usuario las siguientes opciones:
//• Replace chars by signs?
//• Capitalize?
//• Replace spaces with commas?
//La primera opción reemplazará de la siguiente forma:
//• a→@
//• e→3
//• i→1
//• o→0 
//• s→$
//La segunda opción pondrá la primera letra de cada palabra en mayúscula, y la tercera cambiará los espacios por comas. No puede haber 2 comas seguidas.
//El menú aceptará únicamente y para sí o n para no. Almacenará las respuestas en un objeto con las propiedades: 
//replaceChars, capitalize y replaceSpaces, cuyos valores asociados serán booleanos.
//La salida del programa deberá mostrar el string original, y a continuación el string con cada una de las modificaciones requeridas.
//Un ejemplo con todas las opciones marcadas como true:
//• Lorem ipsum dolor sit amet
//• L0r3m 1p$um d0l0r $1t @m3t
//• Lorem Ipsum Dolor Sit Amet
//• Lorem,ipsum,dolor,sit,amet
//** El programa deberá registrar el tiempo de realización, es decir, desde que comienza el proceso de transformación del string hasta que termina. 
//Después de los string requeridos, el programa mostrará las siguientes líneas: **
//• 5 words, 25 chars
//• work done in 750 miliseconds */

const a2e5 = () => {
  /*let stringTest = 
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id facere repellendus quisquam accusamus expedita, non nobis iste, soluta maiores, fuga sunt aspernatur asperiores iusto quidem autem earum temporibus totam aperiam magni rerum alias minima? Nemo laborum deserunt, dolore voluptatem, corporis nam culpa iste odit possimus soluta, fuga non earum?"*/
  function stringManager(text, option) {
    // take the text input and check if the text was input
    text = prompt("Write here your text!");

    if (text === "" || text === null) {
      alert("Sorry, you forgote to add a text, the operation is canceled");
      return -1;
    }
    // Operations option
    const transformOps = {
      replaceChars: false,
      capitalize: false,
      replaceSpaces: false,
    };
    while (true) {
      option = prompt(
        `Choose an option:
      1. Replace chars by signs?
      2. Capitalize?
      3. Replace spaces with commas?
      Enter '0' to finish.`
      );
      if (option === null) {
        // User clicked "cancel"
        alert("Operation canceled.");
        break;
      } else if (option === "0") {
        // User choose  "0" to "finished"
        alert("Operation complete.");
        break;
      }
      switch (option.toLowerCase()) {
        case "1":
          transformOps.replaceChars = true;
          break;
        case "2":
          transformOps.capitalize = true;
          break;
        case "3":
          transformOps.replaceSpaces = true;
          break;
        default:
          alert("Invalid option.");
          continue;
      }
      const changes = `Options chose:
              Replace chars by signs? ${transformOps.replaceChars}
              Capitalize? ${transformOps.capitalize}
              Replace spaces with commas? ${transformOps.replaceSpaces}
              Would you Like to add more changes? `;

      let confirmed = prompt(`${changes}(y/n)`);
      while (confirmed !== "y" && confirmed !== "n") {
        confirmed = prompt(`Please enter y or n. ${changes}(y/n)`);
      }
      if (confirmed === "n") {
        break;
      }
    }

    // Define operations object
    const strOps = {
      replaceChars: function (text) {
        // Replace characters
        let result = text
          .replace(/a/g, "@")
          .replace(/e/g, "3")
          .replace(/i/g, "1")
          .replace(/o/g, "0")
          .replace(/s/g, "$");

        return result;
      },

      capitalize: function (text) {
        // Capitalize words
        const arrStr = text.split(" ");
        for (let i = 0; i < arrStr.length; i++) {
          arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
        }
        // let result = arrStr.join(" ") join all the elements back into a string
        let result = arrStr.join(" ");
        return result;
      },

      replaceSpaces: function (text) {
        // Replace spaces with commas, unless there is a comma or a dot already in the word
        let result = text.replace(/([\.?!,])\s/g, "$1").replace(/\s/g, ",");
        return result;
      },
    };

    let result = text;
    // Perform string manipulation Start
    const startTime = performance.now();

    // Output results
    console.log(`Original string: ${text}`);
    if (transformOps.replaceChars) {
      text = strOps.replaceChars(result);
      console.log(`Modified string with replaceChars: ${text}`);
    }
    if (transformOps.capitalize) {
      text = strOps.capitalize(result);
      console.log(`Modified string with capitalize: ${text}`);
    }
    if (transformOps.replaceSpaces) {
      text = strOps.replaceSpaces(result);
      console.log(`Modified string with replaceSpace: ${text}`);
    }
    // Perform string manipulation End
    const endTime = performance.now();
    const timeOut = endTime - startTime;

    // Count words and characters
    const wordCount = text.split(" ").length;
    const charCount = text.length;
    console.log(`${wordCount} words, ${charCount} char.`);
    console.log(`Elapsed time: ${timeOut} milliseconds`);
    return result;
  }
  stringManager();
};
// a2e5();

//EJERCICIO 6
//Escribe un programa para generar estadísticas de texto. Recibirá un string proporcionado por el usuario, y a modo de ejemplo, para la entrada: Lorem ipsum dolor sit amet, mostrará la siguiente salida:
// • Length: 26 characters
// • Length witout white-space: 22 characters
// • Words: 5
// • Unique words: 5
// • Unique words(%): 100%
// • Length of shortest word: 3 characters
// • Length of longest word: 5 characters
// • Avg. word length: 4 (con redondeo al número entero más cercano)

const a2e6 = () => {

    let userPrompt = prompt("Introduce el texto:");
    let userPromptTest = /^[a-zA-Z]+/;

    if (userPromptTest.test(userPrompt) == true) {
        let length = userPrompt.length;
        let lengthNoSpaces = (userPrompt.replace(/\s+/g, "")).length;
        let words = (userPrompt.split(" ")).length;
        let uniqueWords = new Set(userPrompt.split(" ")).size;
        let uniqueWordsPer = (uniqueWords/words) * 100;
        let userWords = userPrompt.split(" ");

        let arrayLetters = [];
        let sumaArray = 0;
        for (let index = 0; index < userWords.length; index++) {
            arrayLetters.push(userWords[index].length);
            sumaArray += userWords[index].length;
        }
        let shortestWord = Math.min(...arrayLetters);
        let longestWord = Math.max(...arrayLetters);
        let average = sumaArray/words;

        //Console logs
        console.log(`Length: ${length} characters.`);
        console.log(`Length without spaces: ${lengthNoSpaces} characters.`);
        console.log(`Words: ${words}.`);
        console.log(`Unique words: ${uniqueWords}.`);
        console.log(`Unique words: ${uniqueWordsPer}%.`);
        console.log(`Length of shortest word: ${shortestWord} characters.`);
        console.log(`Length of longest word: ${longestWord} characters.`);
        console.log(`Avg. word length: ${Math.round(average)}.`);

    } else {
        alert("Por favor, introduce un texto válido.")
    };
};

//a2e6();

//EJERCICIO 7
//Mediante el objeto Math, genera un número aleatorio entero entre 0 y 10, y guárdalo en una variable. A continuación pide al usuario que adivine el número. Tendrá como máximo 3 intentos. El programa debe mostrar el número de intentos disponibles. Si acierta, mostramos el mensaje: “You win!”. Si falla, pero le quedan intentos, mostramos el mensaje “Try it again”. Si agota los intentos y no ha conseguido acertar, mostramos el mensaje: “Sorry, Good luck in love”.

const a2e7 = () => {
let randomNumbersa2e7 = randomNumbers(10, 0);
let intentosDisponibles = 3;
// Pedimos el numero al usuario desde el prompt y lo comparamos en un bucle while
while (intentosDisponibles > 0) {
  const input = prompt(
    `Adivina el número (te quedan ${intentosDisponibles} intentos):`
  );
// Verificamos si es correcto o no
  if (!isNaN(input)) {
    const numeroAdivinar = parseInt(input);

    if (numeroAdivinar === randomNumbersa2e7) {
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
};

// a2e7();
