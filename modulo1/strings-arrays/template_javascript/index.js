//EXERCICIO 01

//Questão 01

/*let array 
console.log('a. ', array)   // undefined porque não tem representação na variavel

// Questao 02
array = null
console.log('b. ', array)  // null porque a variavel ja informa isso
//Questao 03

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // da 11 pois é o numero de objetos que tem na array

//Questao 04
let i = 0
console.log('d. ', array[i]) // de acordo com a questão 3 a array de indice 0 é igual ao numero 3

//Questao 05 
array[i+1] = 19
console.log('e. ', array) // faz a troca do 4 para o 19

//Questao 06
const valor = array[i+6]  // é 9 pois é o valor depois do primeiro indice + 6 numeros
console.log('f. ', valor)*/

//EXERCICIO 02

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27*/

// **EXERCICIO DE ESCRITA**

//Questão 1

/*let nomeUsuario = prompt("Qual seu nome")
let emailUsuario = prompt("Qual o seu email?")

console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeUsuario}!! `)*/

//Questao 2

let comidas = ['lasanha', 'macarronada', 'coxinha', 'pastel', 'hamburguer']

//console.log(comidas)

/*console.log(`Essas são minhas comidas favoritas:
${comidas[0]},
${comidas[1]},
${comidas[2]},
${comidas[3]},
${comidas[4]},`)*/

let comidasUsuario = prompt("Qual sua comida favorita?")
comidas[1] = comidasUsuario


console.log(comidas)






