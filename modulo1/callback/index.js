//----Exercícios de interpretação de código-----

//Questao 01

/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  }) // vai retornar o apelido e o nome de cada objeto*/

  //Questao 2

  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) // vai ser impresso o nome das pessoas

  // Questao 3

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC) // ira retornar o apelido que nao seja chijo*/
  
  //-----Exercícios de escrita de código---

  //Questao 1
//a)
 /*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
  ]
const nomes = pets.map((index) =>{
return index.nome
})
console.log(nomes)

//b) 
const salsicha = pets.filter((raça) => {
return raça.raca === "Salsicha"
})

console.log(salsicha)

//c)

const poodle = pets
.filter((racaPoodle) => {
    return racaPoodle.raca === "Poodle"
})

.map((descontoPoodle) =>{
    return(`Você ganhou um cupom de desconto de 10% para tosar o/a ${descontoPoodle.nome}!`)
}) 

console.log(poodle)*/

//Questao 02

//a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomes = produtos.map((nomeProdutos) =>{
  return nomeProdutos.nome

 })

 console.log(nomes)


 //b) 
 const promocao = produtos.map((descontos) =>{
     const novoPreco = (descontos.preco * 0.95)

     const saldao = {
       nome: descontos.nome,
       preco: novoPreco

     }
       
        
     return saldao
 
 })
console.log(promocao)


//c)

const bebidas = produtos.filter((categoria) => {
return categoria.categoria === "Bebidas"

})
 console.log(bebidas)

 //d) 

 const ype = produtos.filter((produtosYpe) => {
  
  
    return produtosYpe.nome.includes("Ypê")

 })
 console.log(ype)

 //e)
const frase = produtos
.filter((novo) =>{
    
    return novo.nome.includes("Ypê")

})
 
.map((fraseProdutos) => {
    return (`Compre ${fraseProdutos.nome} por ${fraseProdutos.preco}`)
})
 
console.log(frase)
 