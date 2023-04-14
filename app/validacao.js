function verificaChute(chute){
    const numero = +chute
    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div>Número invalido!</div>`
        return
    }
    if(chuteMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto é ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else{
        elementoChute.innerHTML += maiorOuMenor(numero)
        
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}


function chuteMaiorMenor(numero){
    return numero > maiorValor || numero < menorValor
}

function maiorOuMenor(numero){
    if(numero > numeroSecreto){
        return '<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>'
    }else{
        return '<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>'
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})