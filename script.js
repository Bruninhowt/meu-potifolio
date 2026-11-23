const botaoTema = document.getElementById('botao-tema');

botaoTema.addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.toggle('dark-mode');
})