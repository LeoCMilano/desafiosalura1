
let nAlugados = 1
function alterarStatus(id) {
    let gameclick = document.getElementById(`game-${id}`);
    let imagem = gameclick.querySelector('.dashboard__item__img');
    let botao = gameclick.querySelector('.dashboard__item__button');
    let nome = gameclick.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) { 
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        nAlugados--
        alert (`Obrigado por devolver o ${nome.textContent}`)
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        nAlugados++
    }
    
    if ( nAlugados == 1){
        fimDaFrase = 'jogo alugado';
        alert (`Há ${nAlugados} ${fimDaFrase}`);

    } else if(nAlugados== 0){
        alert ('Não há jogos alugados')
    }
     else {
        fimDaFrase = 'jogos alugados';
        alert (`Há ${nAlugados} ${fimDaFrase}`);
    }
}

   