const email = ["utente1@mail.com", "utente2@mail.com", "utente3@mail.com", "utente4@mail.com", "utente5@mail.com", "utente6@mail.com"];

let verifica = document.getElementById("verifica")
let boxEmail = document.getElementById("boxEmail");
let a = 0

verifica.addEventListener("click", function(){

    let emailUtente = document.getElementById("InputEmail").value;

    console.log(emailUtente)

   

    for (let c = 0; c < email.length; c++) {

        if (emailUtente == email[c]) {
            document.getElementById("verificaEmail").innerText = "Email corretta";
            a = 1
        }

    }
    if (a == 0) {
        document.getElementById("verificaEmail").innerText = "Email non presente";
    }
} );