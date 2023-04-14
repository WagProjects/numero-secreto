const menorValor = 0
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)

function gerarNumeroAleatorio(){
    const valor = parseInt(Math.random()* maiorValor + 1)
    return valor
}

function menorMaior(){
    document.querySelector('#menor-valor').innerHTML = menorValor
    document.querySelector('#maior-valor').innerHTML = maiorValor
}
menorMaior()
