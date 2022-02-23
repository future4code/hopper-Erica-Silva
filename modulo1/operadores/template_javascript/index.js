/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2


console.log('a. ', resultado)

//false

resultado = bool1 && bool2 && bool3
console.log('b.', resultado)
//false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//true

console.log("d. ", typeof resultado)
//boolean

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
/*o comando esta em forma de string, pois nao foi enviado um numero então ele nao entende,
 entao a forma correta seria*/

/*let primeiroNumero = Number (prompt("Digite um numero!"))  //FORMA CORRETA
let segundoNumero = Number (prompt("Digite outro numero!")) 

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

//Questão 01
/*let idade = Number (prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu amigo?"))

console.log("Sua idade é menor que a do seu amigo?", idade < idadeAmigo)*/

//Questao 02

/*let par = Number (prompt("Insira aqui um numero"))

console.log(par % 2)   // colocando um numero par, o resto é 0 e impar o resto é 1*/

//Questão 03

/*let idadeEmAnos = Number (prompt("Qual sua idade em anos?"))

console.log("Sua idade em meses é ", idadeEmAnos*12)
console.log("Sua idade em dias é ", idadeEmAnos*365)
console.log("Sua idade em horas é ", idadeEmAnos*8760)*/

//Questao 04

let numero1 = Number (prompt("Digite um numero aqui"))
let numero2 = Number (prompt("Digite um numero aqui"))


console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?" , numero1 == numero2)
console.log("O primeiro numero é divisivel pelo segundo?" , numero1 % numero1 === 0)
console.log("O segundo numero é divisivel pelo primeiro?" , numero2 % numero1 === 0)
