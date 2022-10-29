const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button'); /* para ativar o botao na hora necessaria */
const form = document.querySelector('.login-form');

const validarInput = ({target}) => {
    /*console.log(event.target.value); */
    if (target.value.length > 2){
        button.removeAttribute('disabled');
    }
    else {
        button.setAttribute('disabled', ' ');
    }

}

const enviarForm = (event) => {
    event.preventDefault();  /* bloquear comportamento padrao de da f5 na pagina */
    /*input.value = recupera oq a pessoa digitou no input */
    localStorage.setItem('Jogador:',input.value)
    window.location = 'pages/game.html';
}

input.addEventListener('input',validarInput);
form.addEventListener('submit', enviarForm);