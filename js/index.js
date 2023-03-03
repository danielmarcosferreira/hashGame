let gifs = ['./imagens/bobrossparrot.gif', './imagens/bobrossparrot.gif', './imagens/explodyparrot.gif', './imagens/explodyparrot.gif', './imagens/fiestaparrot.gif', './imagens/fiestaparrot.gif', './imagens/metalparrot.gif', './imagens/metalparrot.gif', './imagens/revertitparrot.gif', './imagens/revertitparrot.gif', './imagens/tripletsparrot.gif', './imagens/tripletsparrot.gif', './imagens/unicornparrot.gif', './imagens/unicornparrot.gif'];
let arrGif = [];
let selecionada = [];

let contador = 0;
let val;

let contadorDeJogadas = 0;

function pergunta() {
    val = Number(prompt('Com quantas cartas voce quer jogar?'));

    if (val % 2 === 0 && val >= 4 && val <= 14) {
        qtdeCartas(val);
    } else {
        pergunta();
    }
}
pergunta();

function qtdeCartas(val) {
    for (let i = 0; val > i; i++) {
        arrGif.push(gifs[i]);
    }
    
    for (let i = 0; val > i; i++) {
        const carta = document.querySelector('.cartas');
        carta.innerHTML += `
    <li onclick="virar(this)"class="carta">
        <div class="front-face"><img src="./imagens/front.png"></div>
        <div class="back-face"><img class="image" src="${arrGif[i]}"></div>
    </li>`;
    }
}

const cards = document.querySelectorAll('.carta');

function virar(card) {
    if(card.classList.contains('virada')) {
        card.classList.remove('virada');
    } else {
        card.classList.add('virada');
        contadorDeJogadas++;
    }

    verificar(card);
}

function comparador() {
    return Math.random() - 0.5;
}

function verificar (card) {
    const cartaa = card.querySelector('.carta .back-face');

    if (selecionada.length < 2) {
        selecionada.push(card);
    } 

    const primeiroItem = selecionada[0];
    const primeiroItemImg = primeiroItem.querySelector('.image').src;
    
    const segundoItem = selecionada[1];
    const segundoItemImg = segundoItem.querySelector('.image').src;
    
    if (primeiroItemImg !== segundoItemImg) {
        setTimeout(()=>{
            const primeiroItemArray = selecionada[0];
            primeiroItemArray.classList.remove('virada');
            const segundoItemArray = selecionada[1];
            segundoItemArray.classList.remove('virada');
            selecionada = [];
        }, 2000);

    } else {
        contador ++;
        selecionada = [];
        final ();
    }
}

function final () {
    if (contador === val/2) {
        setTimeout(() => {
            alert(`terminou o jogo com ${contadorDeJogadas} jogadas`);
            const pergunta = prompt('Deseja jogar novamente?');
            if (pergunta === 'sim' || pergunta === 's') {
                window.location.reload(true);
            } else {
                alert('Obrigado por Jogar!');
            }
        }, 500) 
    }
}