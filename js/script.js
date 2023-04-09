// queries

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirm");
const jsForm = document.querySelector("#select");
const txtArea = document.querySelector("#presentation");

const formStyle = document.getElementById("form").style;
const nameStyle = document.getElementById("name").style;
const emailStyle = document.getElementById("email").style;
const passwordStyle = document.getElementById("password").style;
const confirmStyle = document.getElementById("confirm").style;

const inputs = document.querySelectorAll("input");
console.log(inputs);

// Outros jeitos de se testar
// let results = str.match(regex);
// let results = regex.test(str);
// let results = regex.exec(str);

function validarNome(){
    let nameRegex = /^(?!\s)[a-zA-Z\sàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,20}$/g;
    let resultsName = nameRegex.test(nameInput.value);

    let msg = document.getElementById("name-error");

    if(nameInput.value === ""){
        msg.style.display = "block";
        msg.innerHTML = "Campo obrigatório*";
        nameStyle.borderColor = "red";
        return false;
    }else if(resultsName === false){
        msg.style.display = "block";
        msg.innerHTML = "Tem certeza que esse é seu nome?!";
        nameStyle.borderColor = "red";
        return false;
    }else{
        msg.style.display = "none";
        msg.innerHTML = "";
        nameStyle.borderColor = "green";
        return true; 
    };
};

function validarEmail(){

    let emailRegex = /^(?!\.)([a-z0-9\.\-\_]{2,20})@([a-z0-9]{1,61})\.([a-z0-9\-\_]{2,61})([a-z0-9\-\.\_]{1,61})?(?<=[a-z]$)$/gi;
    let resultsEmail = emailRegex.test(emailInput.value);

    let msg = document.getElementById("email-error");

    if(emailInput.value == ""){
        msg.style.display = "block";
        msg.innerHTML = "E-mail é obrigatório*";
        emailStyle.borderColor = "red";
        return false;
    };
    if(resultsEmail === false){
        msg.style.display = "block";
        msg.innerHTML = "E-mail é invalido!*";
        emailStyle.borderColor = "red";
        return false;
    }else{
        msg.style.display = "none";
        msg.innerHTML = "";
        emailStyle.borderColor = "green";
        return true;
    };

};

function validarSenha(){
    let passwordRegex = /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+)(?=.*[@$!%*?&]+)[A-Za-z\d@$!%*?&]{8,16}$/g;
    let resultsPassword = passwordRegex.test(passwordInput.value);

    let msg = document.getElementById("password-error");

    if(passwordInput.value == ""){
        msg.style.display = "block";
        msg.innerHTML = "Campo obrigatório*";
        passwordStyle.borderColor = "red";
        return false;
    }else if(resultsPassword === false){
        msg.style.display = "block";
        msg.innerHTML = "Senha é invalida!*";
        passwordStyle.borderColor = "red";
        return false;
    }else{
        msg.style.display = "none";
        msg.innerHTML = "";
        passwordStyle.borderColor = "green";
        return true;
    };
};

function confirmPassword(){

    let msg = document.getElementById("confirm-error");

    if(passwordInput.value == ""){
        msg.style.display = "block";
        msg.innerHTML = "Digite a senha novamente!";
        confirmStyle.borderColor = "red";
        return false;
    }else if(passwordInput.value !== confirmInput.value){
        msg.style.display = "block";
        msg.innerHTML = "Senhas não conferem!";
        confirmStyle.borderColor = "red";
        return false;
    }else{
        msg.style.display = "none";
        msg.innerHTML = "";
        confirmStyle.borderColor = "green";
        return true;
    };
};

function recaptcha(){

    let msg = document.getElementById("cptcha-error");

    if(grecaptcha.getResponse() != ""){
        return true;
    }else{
        msg.style.display = "block";
        msg.innerHTML = "Preencha a validação RECAPTCHA";
        return false;
    };
};

// evento mudança no input

inputs[0].addEventListener("input", (event) =>{
    validarNome();
});

inputs[1].addEventListener("input", (event) =>{
    validarEmail();
});
inputs[2].addEventListener("input", (event) =>{
    validarSenha();
});
inputs[3].addEventListener("input", (event) =>{
    confirmPassword();
});
    // validarNome();
    // validarEmail();
    // validarSenha();
    // confirmPassword();
    // recaptcha();


form.addEventListener("submit", (event) => {
    event.preventDefault();

    

    if(validarNome() && validarEmail() && validarSenha() && confirmPassword() && recaptcha()){
        form.submit();
    };
});



