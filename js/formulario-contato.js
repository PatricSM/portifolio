let btnVerFormulario = document.querySelector(".contato__btn");
let formulario = document.querySelector(".contato__form__conteudo");
let btnFecharFormulario = document.querySelector(".contato__form__btn-fechar");

btnVerFormulario.onclick = function() {
    formulario.classList.add("contato__form__conteudo--aberto");
}

btnFecharFormulario.onclick = function() {
    formulario.classList.remove("contato__form__conteudo--aberto");
}