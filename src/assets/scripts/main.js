// Inscription à l'infolettre
let email = document.getElementById("email");
const soumettre = document.getElementById("footer-medias_btn-soumettre");
//Validation qu'il n'y a pas de caractère interdit dans le courriel, mais qu'il y a bien @ et .
const validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Création d'une fonction qui enverra une alerte si le courriel est valide ou non valide
soumettre.addEventListener("click", function () {
    if (email.value.match(validation)) {
        alert("Merci pour votre inscription");
    } else {
        alert("Votre courriel n'est pas valide!");
    }
})