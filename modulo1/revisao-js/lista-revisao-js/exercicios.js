// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    let tamanho = array.length
    return tamanho
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let invertido = array.reverse()
    return invertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let ordenado = array.sort(function (a, b) {
        return (a - b)
    })
    return ordenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i])
        }
    }

    return pares

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let elevadosADois = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            elevadosADois.push(array[i] * array[i])
        }
    }
    return elevadosADois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = null
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}



// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: (Math.max(num1, num2) % Math.min(num1, num2) === 0),
        diferenca: Math.max(num1, num2) - Math.min(num1, num2)
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosPares = []
    for (let i = 0; primeirosPares.length < n; i++) {
        if (i % 2 === 0)
            primeirosPares.push(i)
    }
    return primeirosPares
}
retornaNPrimeirosPares(3)

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
        if (ladoA == ladoB && ladoB == ladoC) {
            return "Equilátero"
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            return "Isósceles"
        } else {
            return "Escaleno"
        }
    }
    return classificaTriangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let segundoMaiorEMenor = []
    let ordenado = retornaArrayOrdenado(array)

    segundoMaiorEMenor.push(ordenado[ordenado.length - 2])
    segundoMaiorEMenor.push(ordenado[1])

    return segundoMaiorEMenor
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`)


}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO"

    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = []
    for (let pessoasMaiores of pessoas) {
        if (pessoasMaiores.altura >= 1.5 && pessoasMaiores.idade > 14 && pessoasMaiores.idade < 60) {
            pessoasAutorizadas.push(pessoasMaiores)
        }
    }
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizas = []
    for (let pessoasMenores of pessoas) {
        if (pessoasMenores.altura < 1.5 || pessoasMenores.idade <= 14 || pessoasMenores.idade > 60) {
            pessoasNaoAutorizas.push(pessoasMenores)
        }
    }
    return pessoasNaoAutorizas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.map(function (elemento, indice) {
        let totalCompras = contas[indice].compras.reduce(function (valorInicial, valorAtual) {
            return valorInicial + valorAtual
        }, 0)
        contas[indice].saldoTotal = contas[indice].saldoTotal - totalCompras
        contas[indice].compras = []
    })
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let ordemAlfabetica = consultas.sort(function (a, b) {
        if (a.nome > b.nome) {
            return 1
        } if (a.nome < b.nome) {
            return -1
        }
        return 0

    })
    return ordemAlfabetica
}


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}