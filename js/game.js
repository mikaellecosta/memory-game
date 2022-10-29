const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [ 
    'i',
    'j',
    'k',
    'p',
    'o',
    'n',
    'r',
    'cha',
    'tog',
    'kra'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


let first = '';
let second = '';

const checkEnd = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    if (disabledCards.length == 20 ){
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}s`);
    }

}

const checarCard = () => {
    const firstCharacter = first.getAttribute('data-character');
    const secondCharacter = second.getAttribute('data-character');

    if (firstCharacter == secondCharacter){
        first.firstChild.classList.add('disabled-card');
        second.firstChild.classList.add('disabled-card');
    
        first = '';
        second = '';

        checkEnd();
        
    } else {
        setTimeout(() => { 
            first.classList.remove('reveal-card');
            second.classList.remove('reveal-card');

            first = '';
            second = '';

        }, 500);
        
    }
}

const revealCard = ({ target }) => {
    
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (first == ''){
        target.parentNode.classList.add('reveal-card');
        first = target.parentNode;
    }
    else if (second == ''){
        target.parentNode.classList.add('reveal-card');
        second = target.parentNode;

        checarCard();
    }
}

const createCard = (character) => { /* cria as cardas automaticamente pelas div, grid e card */

    const card = createElement('div','card'); /* cria uma tag automatica */
    const front = createElement('div','face front');
    const back = createElement('div','face back');

    front.style.backgroundImage = `url('../imagens/${character}.gif')`;

    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click',revealCard);
    card.setAttribute('data-character',character);

    return card;
}

const loadGame = () => {
    const duplicarCharacters = [...characters,...characters]; /*espalha um array dentro de outro--2x pra duplicar*/
    const embaralharArray = duplicarCharacters.sort( () => Math.random() - 0.5);

    embaralharArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

const crono = () => {
    this.loop = setInterval(() => {
        const atual = Number(timer.innerHTML);
        timer.innerHTML = atual + 1;
    },1000  );
}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('Jogador:');
    crono();
    loadGame();

}

