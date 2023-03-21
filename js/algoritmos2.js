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
console.log(e2p2("no lemon, no melon"));
