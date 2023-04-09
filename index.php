<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>js validation</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/style.css">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">

        <script src="https://www.google.com/recaptcha/api.js" async defer></script>

        <script src="js/script.js" async defer></script>
    </head>
    <body>
        
        <h1>FORMULÁRIO</h1>
        <form id="form">
            
            <label for="nome">NOME:</label>
            <input type="text" name="name" id="name" placeholder="DIGITE SEU NOME">
            <span id="name-error"></span>

            <label for="email">E-MAIL:</label>
            <input type="text" name="email" id="email" placeholder="DIGITE SEU E-MAIL">
            <span id="email-error"></span>
            
            <label for="password">SENHA:</label>
            <input type="password" name="password" id="password" placeholder="DIGITE SUA SENHA">
            <span id="password-error"></span>

            <label for="confirme">CONFIRME SUA SENHA:</label>
            <input type="password" name="confirm" id="confirm" placeholder="CONFIRME SUA SENHA">
            <span id="confirm-error"></span>

            <label for="select"></label>
            <select name="" id="select">
                <option value="" selected disabled>VOCÊ TEM EXPERIÊNCIA EM JS?</option>
                <option value="sim">SIM</option>
                <option value="nao">NÃO</option>
            </select>

            <label for="apresentacao">DIGITE SUA MENSAGEM: (máximo 100 caracteres)</label>
            <textarea name="presentation" id="presentation" cols="30" rows="10"></textarea>

            <div class="g-recaptcha" data-sitekey="6Lfv8GElAAAAAAV4P5L8ImXj0whSf0z7GXbXfTaK"></div>
            <span id="cptcha-error"></span>

            <button type="submit">ENVIAR</button>

        </form>
        
    </body>

    
</html>