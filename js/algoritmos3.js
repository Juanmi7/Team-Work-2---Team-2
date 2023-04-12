const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};
const e3p2 = () => {
  // Array para almacenar los códigos generados
  let codigosGenerados = [];

  // Bucle while para generar los 10 códigos
  while (codigosGenerados.length < 10) {
    // Generar un código hexadecimal aleatorio
    let codigoAleatorio =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Comprobar si el código generado ya existe en el array
    if (!codigosGenerados.includes(codigoAleatorio)) {
      // Si no existe, agregarlo al array
      codigosGenerados.push(codigoAleatorio);
    }
  }
  codigosGenerados.forEach((codigo) => {
    console.log("%cHello World!", `color: ${codigo}`);
  });
};

//console.log(e3p2());


function e3p7(){
  const citas = [
    "La mente que se abre a una nueva idea jamás volverá a su tamaño original",
    "Mentalidad Mamba, Ser la mejor version de ti mismo ",
    "La excelencia no es un acto, sino un hábito. No hacemos lo correcto una vez, lo hacemos todos los días",
    "No puedo cambiar la dirección del viento, pero puedo ajustar mis velas para llegar a mi destino",
    "La locura es hacer lo mismo una y otra vez esperando resultados diferentes",
    "No esperes que las cosas sucedan, haz que sucedan",
    "Si haces algo con pasión, no importa lo que sea, el éxito llegará",
    "Si tienes miedo de fallar, entonces probablemente fallarás",
    "El talento es el don natural, la habilidad es el trabajo duro",
    "El fracaso no es fracaso si aprendes de él",
    "No tengo miedo a tomar decisiones. Usted no puede estar paralizado por el miedo al fracaso o usted nunca emprenderá nada",
    "La paciencia es la clave para el éxito",
    "El odio no puede impulsar el odio. Sólo el amor puede hacer eso",
    "La creatividad sin estrategia se llama arte. La creatividad con estrategia se llama publicidad",
    "La fuerza no proviene de la capacidad física. Viene de una voluntad indomable",
    "La imaginación es más importante que el conocimiento",
    "La verdadera prueba no es que evitas este fracaso, porque no puedes. Es si lo permites definirte o no",
    "Soy un soñador. Creo que si no sueñas, estás vivo, pero no vives",
  ];
  
  // Generar una cita aleatoria cada 10 segundos
  let contador = 0;
  const intervalo = setInterval(() => {
    const citaAleatoria = citas[Math.floor(Math.random() * citas.length)];
    console.log(citaAleatoria);
    contador++;
    if (contador === 12) {
      clearInterval(intervalo);
    }
  }, 10000);
  
  // Detener el intervalo después de 2 minutos
  setTimeout(() => {
    clearInterval(intervalo);
    console.log("Fin del programa");
  }, 120000);
  
}
// console.log(e3p7());