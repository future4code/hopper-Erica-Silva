const nome = process.argv[2]
const age = Number(process.argv[3])
const newAge = Number(process.argv[4])

// console.log(`Olá,${nome}!Você tem ${age} anos.`)
console.log(`Olá,${nome}!Você tem ${age} anos. Em sete anos você terá ${age+newAge}`)