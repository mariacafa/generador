

/*function saludarCliente(primerNombre, segundoNombre, apellido, edadUsuario){
    return (`Hola! ${primerNombre} ${segundoNombre} ${apellido} tenés ${edadUsuario} años`)
}

document.querySelector('#ingresar').onclick = function(){
    const primerNombre = document.querySelector("#primer-nombre-usuario").value;
    const segundoNombre = document.querySelector("#segundo-nombre-usuario").value;
    const apellido = document.querySelector("#apellido-usuario").value;
    const edadUsuario = document.querySelector("#edad-usuario").value;

    document.querySelector("h1").innerText = `Bienvenid@ ${primerNombre}`;
    document.querySelector("h2").innerText = `Hola, ${primerNombre} ${segundoNombre} ${apellido} tenés ${edadUsuario} años`
    return false

} */

function insultarCliente(encabezado, resultado){
  return (encabezado + resultado);
}

let pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};





document.querySelector("#resultado").onclick=function(){
  let partesDelCuerpo = ["Cara", "Pierna", "Oreja", "Boca", "Panza"];
  let adjetivosRaros = ["Apestosa", "Aburrida", "Podrida", "Ruidosa", "Despelucada"];
  let palabrasRaras = ["Zarigueya", "Banana", "Mosca", "Mona", "Papa"];
  
  document.querySelector("h1").innerText = "Tu " +" " + pickRandomWord(partesDelCuerpo) + " " + "es como una " + pickRandomWord(palabrasRaras)+ " " + pickRandomWord(adjetivosRaros) + "!!!";
}

//let insultoRaro = "Tu " +" " + pickRandomWord(partesDelCuerpo) + " " + "es como una " + pickRandomWord(palabrasRaras)+ " " + pickRandomWord(adjetivosRaros) + "!!!";




//console.log(insultoRaro);
  //document.querySelector ("#resultado").onclick = function(){
  //  document.querySelector("h1").innerText =
