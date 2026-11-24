const botaoTema = document.getElementById('botao-tema');
const icone = document.querySelector('.botao-tema i');
const temaSalvo = localStorage.getItem('tema');

// localStorage serve para guardar dados do navegador ao atualizar a página!

if(temaSalvo === 'escuro') {
    document.body.classList.add('dark-mode');
}else(
    document.body.classList.remove('dark-mode')
)

function atualizarTema(){
    if(document.body.classList.contains('dark-mode')){
        icone.classList.replace('fa-moon', 'fa-sun');
    }else{
        icone.classList.replace('fa-sun', 'fa-moon')
    }
}

atualizarTema();

botaoTema.addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        icone.classList.remove('fa-moon');
        icone.classList.add('fa-sun');

        localStorage.setItem('tema', 'escuro');
    }else{
        icone.classList.remove('fa-sun');
        icone.classList.add('fa-moon')

        localStorage.setItem('tema', 'claro');
    }

    atualizarTema();
})