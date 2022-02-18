// ******Exercícios de interpretação de código ******

//Questao 01 a)

/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))   // valor 10 pois a variavel vai ser multiplicada por 5
console.log(minhaFuncao(10))   // valor 50 pois a variavel vai ser multiplicada por 5

// b) o valor nao sera retornado pois nao foi invocado nem um valor 

// Questao 02 a) 

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)  /* ela vai deixar todas as letras em minusculo quando for escrita no prompt e
                         quando voce informa a palavra cenoura ela ela da um true ou false*/

//b)todas irão dar true pois todas as frases dao a palavra cenoura */

// ******Exercícios de escrita de código *****

//Questao 01 a)

/*let name = "Erica"
let age = 25 
let city = "Fortaleza"
let profession = "Auxiliar de Farmacia"

function pessoa(){

    return (pessoa)

}

console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${profession}.`)*/

//b)
/*function pessoa1( nome, idade , cidade, profissao ){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}`)

}
pessoa1("Erica" , 25 , "Fortaleza" , "Auxiliar de Farmacia")*/


//Questao 02 a)

/*function soma( num1, num2){

    let soma1 = num1 + num2

    return soma1
}
console.log(soma(2,8)) */

//b) 
/*function boleano ( numero1, numero2){
    let resultado = numero1 >= numero2

    return resultado
}

console.log(boleano(10,9))*/

// c)
/*function par (numero){
    let numero2 = numero 


    return numero2

}

console.log(par(5 % 2 === 0))*/

//d)

function string (texto){
    console.log(texto.length , texto.toUpperCase())
    
       
    
}


let textoAlterado = "HEllo"
console.log(string(textoAlterado))


// Questao 03

/*let numeros = Number(prompt("Informe um digito"))
let numeros2 = Number(prompt("Informe outro digito"))

function calculosSoma(soma){

    soma = numeros + numeros2
    
    return soma
    
}

console.log("Soma", calculosSoma())

function calculoSub(subtraçao){
subtraçao = numeros - numeros2

return subtraçao
}
console.log("Subtração" ,calculoSub())

function calculoMult(multiplicacao){
    multiplicacao = numeros * numeros2

    return multiplicacao
}

console.log("Multiplicação", calculoMult())

function calculoDiv(divisao){
    divisao = numeros / numeros2

    return divisao
}

console.log("Divisão", calculoDiv())*/

