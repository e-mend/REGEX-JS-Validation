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
    if(nameInput.value != ""){
        nameStyle.borderColor = "green";
        return true;
    }else{
        alert("Campo de nome está vazio!");
        nameStyle.borderColor = "red";
        return false;
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
        return;
    };
};

function confirmPassword(){
    if(passwordInput.value == ""){
        confirmStyle.borderColor = "red";
    }else if(passwordInput.value !== confirmInput.value){
        alert("As senhas NÃO conferem!");
        confirmStyle.borderColor = "red";
    }else{
        alert("As senhas conferem!");
        confirmStyle.borderColor = "green";
        return;
    };
};


form.addEventListener("submit", (event) => {
    event.preventDefault();

    // validação nome

    validarNome();

    // validação email

    validarEmail();

    // validação senha e confirmação de senha

    validarSenha();


    // recaptcha

        if(grecaptcha.getResponse() != ""){
            return false;
        };


    

    // form.submit();
});



