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

// Outros jeitos de se testar
// let results = str.match(regex);
// let results = regex.test(str);
// let results = regex.exec(str);

function validarNome(){
    let nameRegex = /^([a-zA-Z]\s?){4,30}$/g;
    let resultsName = nameRegex.test(nameInput.value);

    if(nameInput.value === ""){
        alert("Campo de nome está vazio!");
        nameStyle.borderColor = "red";
        return false;
    }else if(resultsName === false){
        alert("Tem certeza que esse é seu nome?!");
        return false;
    }else{
        nameStyle.borderColor = "green";
        return true; 
    };
};

function validarEmail(){

    let emailRegex = /^(?!\.)([a-z0-9\.\-\_]{2,20})@([a-z0-9]{1,61})\.([a-z0-9\-\_]{2,61})([a-z0-9\-\.\_]{1,61})?/gi;
    let resultsEmail = emailRegex.test(emailInput.value);

    if(emailInput.value == ""){
        alert("O campo de e-mail está vazio!");
        emailStyle.borderColor = "red";
        return false;
    };
    if(resultsEmail === false){
        alert("O e-mail é invalido!");
        emailStyle.borderColor = "red";
        return false;
    }else{
        alert("O e-mail é valido!");
        emailStyle.borderColor = "green";
        return true;
    };

};

function validarSenha(){
    let passwordRegex = /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+)(?=.*[@$!%*?&]+)[A-Za-z\d@$!%*?&]{8,16}$/g;
    let resultsPassword = passwordRegex.test(passwordInput.value);

    if(passwordInput.value == ""){
        alert("O campo de senha está vazio!");
        passwordStyle.borderColor = "red";
        return false;
    }else if(resultsPassword === false){
        alert("A senha é invalida!");
        passwordStyle.borderColor = "red";
        return false;
    }else{
        alert("Senha segue padrão correto!");
        passwordStyle.borderColor = "green";
        return true;
    };
};

function confirmPassword(){
    if(passwordInput.value == ""){
        confirmStyle.borderColor = "red";
        return false;
    }else if(passwordInput.value !== confirmInput.value){
        alert("As senhas NÃO conferem!");
        confirmStyle.borderColor = "red";
        return false;
    }else{
        alert("As senhas conferem!");
        confirmStyle.borderColor = "green";
        return true;
    };
};

function recaptcha(){
    if(grecaptcha.getResponse() != ""){
        alert("deu boa!")
        return true;
    }else{
        alert("Por favor selecione a verificação Recaptcha!");
        return false;
    };
};


form.addEventListener("submit", (event) => {
    event.preventDefault();



    if(validarNome() && validarEmail() && validarSenha() && confirmPassword() && recaptcha()){
        form.submit();
    };
});



