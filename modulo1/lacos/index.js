//****Exercícios de interpretação de código****

//Questao 1

/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) // irá retornar numeros menores que 5*/

//questao 2

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) { 
  if (numero > 18) {
		console.log(numero) // a) irá retornar numeros maiores que 18
	}                     // b) teria que usar uma .length para acessar 
}*/

//Questao 3

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} */// acrescentará 4 linhas e em kda linha irá adicionar mais 1 asterisco

//*****Exercícios de escrita de código ****

//Questao 1

//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

/*let bichos = Number (prompt("Quantos bichos você tem?"))
let nomesBichos = [] 

    //a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    if(bichos === 0){
     console.log("Que pena! Você pode adotar um pet!") 
    }

    
    //b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    else{
    while(bichos > nomesBichos.length){
     
      let pergunta = prompt("Qual o nome do seu bichinho?")
      nomesBichos.push(pergunta)
    }
   
   //c)
    console.log(nomesBichos)  
  }*/

  //questao 2

  /*2. Considere que você tenha acesso a um `array`  (chamado de 'array original')
   que é composto somente de números. Baseando-se nisso, crie uma função para cada 
   um dos itens abaixo, realizando as operações pedidas:*/
   let arrayOriginal = [8,15,20,21,23,25,80]
    
  //  a) Escreva um programa que **imprime** cada um dos valores do array original.
  /*for( let i = 0; i < arrayOriginal.length; i++){
   console.log(arrayOriginal[i])
  }

 
  // b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
let divisor = 10
for( let i = 0; i < arrayOriginal.length; i++){
  console.log(arrayOriginal[i] / divisor)
 }*/

  
    
  /*  c) Escreva um programa que **crie** um novo array contendo, somente, os números pares 
         do array original e **imprima** esse novo array*/
  let novaArrayPar = []
  for( let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] % 2 === 0){
      novaArrayPar.push(arrayOriginal[i])
    }
    console.log(novaArrayPar)
  }
  
   
   
  
  
  

  
    
  // d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
  // e) Escreva um programa que imprima no console o maior e o menor números contidos no array original


   
      
     
  
  
      