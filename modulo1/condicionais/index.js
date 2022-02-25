
// ******Exercícios de interpretação de código*******

// questao 1

//*const respostaDoUsuario = prompt("Digite o número que você quer testar")
/*const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/

//a) ele realiza um calculo para saber se o numero que voce digita no prompt é igual a zero
//b) imprime numeros pares 
//c) imprime numeros impares

//questao 2

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

//a) para informar os preços das frutas
//b) O preço da fruta  Maçã  é  R$  2.25
//c) Ele ira dar o valor do default que no caso é 5

//Questao 3

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/


//a) a primeira linha esta dando um prompt para voce digitar um valor
//b)se o numero for 10 ele irá por a msg "passou no teste", se for -10 "essa mensagem é secreta" */
//c) sim, pois o let mensagem nao é chamado para retornar a msg, teria que usar um else para ajeitar

// ******Exercícios de escrita de código*******

//Questao 1

/*1. Faça um programa que pergunta ao usuário qual a idade dele e imprima 
no console se ele/ela pode dirigir (apenas maiores de idade).

       
let pessoa = Number(prompt("Qual sua idade?"))

if (pessoa >=18){
    console.log("Parabens,Você pode dirigir")
}else{
    console.log("Você não pode dirigir =(")
}*/

//Questão 2

   /*Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar 
   M (matutino) ou V (Vespertino) ou N (Noturno). 
   Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else*/

   /*let turno = prompt("Qual o turno você estuda? Digite M para manha, V para vespertivo e N para noite")

   if (turno === "M"){
       console.log("Bom dia")
   }
   else if (turno === "V" ){
       console.log("Boa Tarde")
   } 
   else if(turno === "N")
       console.log("Bom noite")*/

//Questao 3

/*switch(turno){
    case "M" :
    console.log ("Bom dia")
    break 
     
    case "V":
    console.log("Boa tarde")
    break 

    case "N": 
    console.log("Boa noite")
    break

}*/

//Questao 4

/*Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme
com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e 
outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga 
vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário,
 imprima "Escolha outro filme :("*/

/*let filme = prompt("Qual o genero do filme que vamos assistir?")
let preço = Number(prompt("Qual o valor do filme?"))

if(filme === "fantasia" && preço <=15){
 console.log("Bom filme")
}else{
    console.log("Escolha outro filme :(")
}*/

// ---DESAFIO--

//Questao 1

/*let filme = prompt("Qual o genero do filme que vamos assistir?")
let preço = Number(prompt("Qual o valor do filme?"))
let lanchinho = prompt("O que vamos comer?")

if(filme === "fantasia" && preço <=15){
 console.log(`Bom filme e aproite o(a) seu(sua) ${lanchinho}`)
}else{
    console.log("Escolha outro filme :(")
}*/

//Questao 2

let nome = prompt("Qual seu nome completo?") 
let tipoJogo = prompt("Qual o jogo você irá ver? Digite IN para internacional ou DO para domestico")
let etapaJogo = prompt("Qual etapa do jogo? Digite SF para semi-final; DT para decisão de terceiro lugar; e FI para final" ) 
let categoria = Number(prompt("Qual a categoria?Pode ser as opções 1, 2, 3 ou 4" ))
let quantidadeIngresso = Number(prompt("Qual a quantidade de ingressos?"))

let valorIngresso

switch(etapaJogo){
    case "SF":
      etapaJogo = "Semi-final"
        
        switch(categoria){
            case 1:
                valorIngresso = (1320)     
                    break
            case 2:
                valorIngresso = (880)
                    break
            case 3:
                valorIngresso = (550)
                    break
            case 4:
                valorIngresso = (220)
                    break
    
    case "DT":
        etapaJogo = "Decisão de terceiro lugar"

        switch(categoria){
            case 1: 
            valorIngresso = (660)
                   break
            case 2:
                valorIngresso = (440)
                   break
            case 3:
            valorIngresso = (330)
                   break
            case 4:
                valorIngresso = (170)
                   break
        }
         

    case "FI":
        etapaJogo = "Final"
        
        switch(categoria){
            case 1: 
            valorIngresso = (1980)
                   break
            case 2:
            valorIngresso = (1320)
                   break
            case 3:
            valorIngresso = (880)
                   break
            case 4:
            valorIngresso = (330)
                   break
        }
    }
}
  
switch (tipoJogo) {
 case "DO":
     console.log(
        `---Dados da compra--- 
     Nome do cliente:  ${nome}
     Tipo do jogo:  Doméstico
     Etapa do jogo:  ${etapaJogo}
     Categoria:  ${categoria}
     Quantidade de Ingressos: ${quantidadeIngressos}
     ---Valores--- 
     Valor do ingresso: R$ ${valorIngresso}
     Valor total: R$ ${valorIngresso * quantidadeIngresso}`)
     
     break 
 
     case "IN":
     console.log(
        `---Dados da compra--- 
        Nome do cliente:  ${nome}
        Tipo do jogo:  Internacional
        Etapa do jogo:  ${etapaJogo}
        Categoria:  ${categoria}
        Quantidade de Ingressos: ${quantidadeIngresso}
        ---Valores--- 
        Valor do ingresso: U$ ${valorIngresso * 4.10}
        Valor total: U$ ${valorIngresso * quantidadeIngresso * 4.10}`
     )
     break
}






