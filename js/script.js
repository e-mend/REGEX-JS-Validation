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


// Outros jeitos de se testar
// let results = str.match(regex);
// let results = regex.test(str);
// let results = regex.exec(str);

form.addEventListener("submit", (event) => {
    event.preventDefault();


    // validação nome
    

    if(nameInput.value === ""){
        alert("Campo de nome está vazio!");
        nameStyle.borderColor = "red";
    }else{
        nameStyle.borderColor = "green";
        return;
    };

    // validação email

    let emailRegex = /^(?!\.)([a-z0-9\.\-\_]{2,20})@([a-z0-9]{1,61})\.([a-z0-9\-\_]{2,61})([a-z0-9\-\.\_]{1,61})?/gi;
    let resultsEmail = emailRegex.test(emailInput.value);

    if(emailInput.value === ""){
        alert("O campo de e-mail está vazio!");
    }else if(resultsEmail === false){
        alert("O e-mail é invalido!");
    }else{
        alert("O e-mail é valido!");
        return;
    };

    // validação senha e confirmação de senha

    let passwordRegex = /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+)(?=.*[@$!%*?&]+)[A-Za-z\d@$!%*?&]{8,16}$/g;
    let resultsPassword = passwordRegex.test(passwordInput.value);

    if(passwordInput.value === ""){
        alert("O campo de senha está vazio!");
    }else if(resultsPassword === false){
        alert("A senha é invalida!");
    }else{
        alert("Senha segue padrão correto!");
        return;
    };
    
    
    

    // if(passwordInput.value === ""){

    // }else if(passwordInput.value !== confirmInput.value){
    //     alert("As senhas NÃO conferem!");
    // }else{
    //     alert("As senhas conferem!");
    //     return;
    // };

    // form.submit();
});

