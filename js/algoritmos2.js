const randomNumbers = (max, min) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
};   

const p2e2= "no lemon, no melon";
const reverseString = String => String.split("").reverse().join("");
console.log(reverseString(p2e2)); 