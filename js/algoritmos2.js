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
