const campoNome = document.querySelector("#contato__nome");
const campoEmail = document.querySelector("#contato__email");
const campoAssunto = document.querySelector("#contato__assunto");
const campoMensagem = document.querySelector("#contato__mensagem");
const btnEnviar = document.querySelector(".form__btn");
const inputs = document.querySelectorAll(".campo__texto");

campoNome.addEventListener("input", function() {
    let campoErro = document.querySelector(".contato__erro-nome");

    if(this.value.length <= 0) {
        campoErro.innerHTML = 'O campo "Nome" deve ser preenchido.';
        this.classList.add("campo__texto--invalido");
        this.classList.remove("campo__texto--valido");
        return;
    } else if(this.value.length > 50) {
        campoErro.innerHTML = 'O campo "Nome" deve ter no máximo 50 caracteres.';
        this.classList.add("campo__texto--invalido");
        this.classList.remove("campo__texto--valido");
        return;
    } else {
        campoErro.innerHTML = "";
        this.classList.remove("campo__texto--invalido");
        this.classList.add("campo__texto--valido");
    }
});

campoEmail.addEventListener("input", function() {
    let campoErro = document.querySelector(".contato__erro-email");

    if(this.value.length <= 0) {
        campoErro.innerHTML = 'O campo "Email" deve ser preenchido.';
        this.classList.add("campo__texto--invalido");
        this.classList.remove("campo__texto--valido");
        return;
    } else if(!/[@]/.test(this.value.split(""))) {
        campoErro.innerHTML = 'O email deve possuir "@".';
        this.classList.add("campo__texto--invalido");
        this.classList.remove("campo__texto--valido");
        return;
    } else if(!/(\.\w{2,3})+/.test(this.value)) {
        campoErro.innerHTML = 'O email deve possuir um domínio. Ex.: ".com"';
        this.classList.add("campo__texto--invalido");
        this.classList.remove("campo__texto--valido");
    } else if(!/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/.test(this.value)) {
        campoErro.innerHTML = 'Email inválido';
        this.classList.add("campo__texto--invalido");
        this.classList.remove("campo__texto--valido");
        return;
    } else {
        campoErro.innerHTML = "";
        this.classList.remove("campo__texto--invalido");
        this.classList.add("campo__texto--valido");
    }
});

campoAssunto.addEventListener("input", function() {
    let campoErro = document.querySelector(".contato__erro-assunto");

    if(this.value.length <= 0) {
        campoErro.innerHTML = 'O campo "Assunto" deve ser preenchido.';
        this.classList.add("campo__texto--invalido");
        this.classList.remove("campo__texto--valido");
        return;
    } else if(this.value.length > 50) {
        campoErro.innerHTML = 'O campo "Assunto" deve ter no máximo 50 caracteres.';
        this.classList.add("campo__texto--invalido");
        this.classList.remove("campo__texto--valido");
        return;
    } else {
        campoErro.innerHTML = "";
        this.classList.remove("campo__texto--invalido");
        this.classList.add("campo__texto--valido");
    }
});

campoMensagem.addEventListener("input", function() {
    let campoErro = document.querySelector(".contato__erro-mensagem");

    if(this.value.length <= 0) {
        campoErro.innerHTML = 'O campo "Mensagem" deve ser preenchido.';
        this.classList.add("campo__texto--invalido");
        this.classList.remove("campo__texto--valido");
        return;
    } else if(this.value.length > 300) {
        campoErro.innerHTML = 'A mensagem deve ter no máximo 300 caracteres.';
        this.classList.add("campo__texto--invalido");
        this.classList.remove("campo__texto--valido");
        return;
    } else {
        campoErro.innerHTML = "";
        this.classList.remove("campo__texto--invalido");
        this.classList.add("campo__texto--valido");
    }
});

btnEnviar.disabled = true;

inputs.forEach(function(input) {
    input.addEventListener("input", function() {
        if(campoNome.classList.contains("campo__texto--valido")
        && campoEmail.classList.contains("campo__texto--valido")
        && campoAssunto.classList.contains("campo__texto--valido")
        && campoMensagem.classList.contains("campo__texto--valido")) {
            btnEnviar.disabled = false;
        } else {
            btnEnviar.disabled = true;
        }
    })
});

btnEnviar.onclick = function() {
    formulario.classList.remove("contato__form__conteudo--aberto");
}