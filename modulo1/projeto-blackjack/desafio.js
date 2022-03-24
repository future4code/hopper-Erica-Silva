/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// inicio jogo

if (confirm("Boas vindas ao jogo de Blackjack!" + "\n" + "Gostaria de iniciar a rodada?")) {

}else {
    alert("O jogo acabou!")
}

// escolha das primeiras cartas

let usuario = comprarCarta()
let computador = comprarCarta()
let pontuacaoAtualUsuario = 0
let cartasUsuario = ""
let pontuacaoAtualComputador = 0
let cartaComputador = ""
let podeContinuarJogo = true

const pontuacaoMaxima = 21

pontuacaoAtualUsuario = pontuacaoAtualUsuario + usuario.valor
cartasUsuario += usuario.texto

usuario = comprarCarta()
pontuacaoAtualUsuario = pontuacaoAtualUsuario + usuario.valor
cartasUsuario += usuario.texto

pontuacaoAtualComputador = pontuacaoAtualComputador + computador.valor
cartaComputador += computador.texto


while (podeContinuarJogo) {
    let compraCarta = confirm(`A carta do usuário é ${cartasUsuario} e a carta revelada pelo computador é ${cartaComputador}.\n Deseja comprar mais uma carta?`)

    
    computador = comprarCarta()
    pontuacaoAtualComputador = pontuacaoAtualComputador + computador.valor
    cartaComputador += computador.texto
    
    if (!compraCarta) {

        if (podeContinuarJogo && pontuacaoAtualUsuario === pontuacaoAtualComputador) {
            alert(`Usuário carta- ${cartasUsuario} -pontuação ${pontuacaoAtualUsuario} \n Computador- ${cartaComputador} -pontuação ${pontuacaoAtualComputador} \n Empate!`)
            podeContinuarJogo = false
        }

        if (podeContinuarJogo && pontuacaoAtualUsuario <= pontuacaoMaxima) {
            alert(`Usuário carta- ${cartasUsuario} -pontuação ${pontuacaoAtualUsuario} \n Computador- ${cartaComputador} -pontuação ${pontuacaoAtualComputador} \n Usuário ganhou!`)
            podeContinuarJogo = false
        }

        if (podeContinuarJogo && pontuacaoAtualComputador <= pontuacaoMaxima) {
            alert(`Usuário carta- ${cartasUsuario} -pontuação ${pontuacaoAtualUsuario} \n Computador- ${cartaComputador} -pontuação ${pontuacaoAtualComputador} \n Computador ganhou!`)
            podeContinuarJogo = false
        }
        
    }

    // Cartas extras 

    usuario = comprarCarta()
    pontuacaoAtualUsuario = pontuacaoAtualUsuario + usuario.valor
    cartasUsuario += usuario.texto

    if (podeContinuarJogo && pontuacaoAtualUsuario === pontuacaoAtualComputador) {
        alert(`Usuário carta- ${cartasUsuario} -pontuação ${pontuacaoAtualUsuario} \n Computador- ${cartaComputador} -pontuação ${pontuacaoAtualComputador} \n Empate!`)
        podeContinuarJogo = false
    }

    if (podeContinuarJogo && pontuacaoAtualUsuario <= pontuacaoMaxima) {
        alert(`Usuário carta- ${cartasUsuario} -pontuação ${pontuacaoAtualUsuario} \n Computador- ${cartaComputador} -pontuação ${pontuacaoAtualComputador} \n Usuário ganhou!`)
        podeContinuarJogo = false
    }

    if (podeContinuarJogo && pontuacaoAtualComputador <= pontuacaoMaxima) {
        alert(`Usuário carta- ${cartasUsuario} -pontuação ${pontuacaoAtualUsuario} \n Computador- ${cartaComputador} -pontuação ${pontuacaoAtualComputador} \n Computador ganhou!`)
        podeContinuarJogo = false
    }
}

