//**Exercícios de interpretação de código **

//Questao 01

/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])                        //"Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) // "Virginia Cavendish"
console.log(filme.transmissoesHoje[2])            // canal: "Globo", horario: "14h"

// Questao 2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)    // nome: 'Juca', idade: 3, raca: 'SRD'
console.log(gato)       //nome: 'Juba', idade: 3, raca: 'SRD'
console.log(tartaruga) //nome: 'Jubo', idade: 3, raca: 'SRD'

//a) vai dar o nome dos animais alterando os nomes 
//b) ele repete todos os objetos ja colocado na variavel feita

//Questao 3

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/

//a) falso e indefinido 
/*b) o falso foi porque ele declarou que a pessoa nao era backender 
e o altura foi porque ele nao deu nenhum valor */

//***Exercícios de escrita de código****

//Questao 1 a)

/*let pessoa = {
    nome: "Erica", 
    apelidos: ["Eriquita", "Ericota", "Ericazita"]
 }
 
  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

  //b)
  
  let novaPessoa = {...pessoa, apelidos:["Eri","linda","maravilhosa"]}

  console.log(novaPessoa)*/

  //Questao 2 a)

  /*let pessoa1 = {
      nome: "Erica",
      idade: 25,
      profissao: "Farmaceutica"
  }

console.log([pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length])*/
 
//Questao 3

/*let carrinho = []

 
let frutasNaSacola = [
{nome: "Maçã" , disponibilidade: true},
{nome: "Banana", disponibilidade: true},
{nome: "Pera", disponibilidade: true}
]
function frutas(fruta){
    carrinho.push(fruta)
}
frutas(frutasNaSacola)


console.log(carrinho)*/

//**** Desafios ****

//Questao 01

/*let pessoa = {
   nome: prompt("Nome: "),
   idade: prompt("Idade:"),
   profissao:prompt("Profissão")

}

console.log(pessoa)*/

//Questao 02


let filmes1 = {
 filme: "Como se fosse a primeira vez",
 lançamento1: 2004

}

let filmes2 = {
    filme: "Todo mundo em panico",
    lançamento2: 2000
}


function filmes(datas){
    console.log("O primeiro filme foi lançado antes do segundo?", datas.lançamento1 < datas.lançamento2)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?" ,datas.lançamento1 == datas.lançamento2)
}

filmes(filmes1,filmes2)










  