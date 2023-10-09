let numeroDeEmpates = 0
let numeroPartidas = 0
let numeroVitoriasJogador = 0
let numeroVitoriasComputador = 0

let empate = document.querySelector("#empate")
let partida = document.querySelector("#partida")
let jogador = document.querySelector("#nome")
let resultado = document.querySelector("#resultado")
let computador = document.querySelector("#computador")

jogador.innerHTML = `${nome}: 0`

function jogar(jogada) {
    let jogadaComputador = Math.floor(Math.random() * 3)
    let imagemPc = document.querySelector("#imagemPc")

    if (jogadaComputador == 0) {
        // Ele jogou Pedra

        if (jogada == 0) {
            //Empate
            resultado.innerHTML = "RESULTADO: Empate"
            numeroDeEmpates++
        } else if (jogada == 1) {
            // Jogador ganhou
            resultado.innerHTML = `RESULTADO: ${nome} ganhou`
            numeroVitoriasJogador++
        } else {
            // Jogador perdeu
            resultado.innerHTML = "RESULTADO: Computador ganhou"
            numeroVitoriasComputador++
        }

        imagemPc.src = "pcpedra.png"
    } else if (jogadaComputador == 1) {
        // Ele jogou Papel

        if (jogada == 0) {
            // Jogador perdeu
            resultado.innerHTML = "RESULTADO: Computador ganhou"
            numeroVitoriasComputador++
        } else if (jogada == 1) {
            // Empate
            resultado.innerHTML = "RESULTADO: Empate"
            numeroDeEmpates++
        } else {
            // Jogador ganhou
            resultado.innerHTML = `RESULTADO: ${nome} ganhou`
            numeroVitoriasJogador++
        }

        imagemPc.src = "pcpapel.png"
    } else {
        // Ele jogou tesoura

        if (jogada == 0) {
            // Jogador ganhou
            resultado.innerHTML = `RESULTADO: ${nome} ganhou`
            numeroVitoriasJogador++
        } else if (jogada == 1) {
            // Jogador perdeu
            resultado.innerHTML = "RESULTADO: Computador ganhou"
            numeroVitoriasComputador++
        } else {
            // Empate
            resultado.innerHTML = "RESULTADO: Empate"
            numeroDeEmpates++
        }

        imagemPc.src = "pctesoura.png"
    }
    

    numeroPartidas++

    empate.innerHTML = "Empates: " + numeroDeEmpates
    partida.innerHTML = "Partidas: " + numeroPartidas
    jogador.innerHTML = `${nome}: ` + numeroVitoriasJogador
    computador.innerHTML = "Computador: " + numeroVitoriasComputador
}