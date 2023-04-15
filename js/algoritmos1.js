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

//a1e5()

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