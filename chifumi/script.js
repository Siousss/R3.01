let choixJoueur = document.getElementById(box);
let result = document.getElementById(resultat);

const choixPossible = ["pierre", "feuille", "ciseaux"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
    
const choixBot = choixPossible[getRandomInt(3)]

let win;
if(choixBot == "pierre" && choixJoueur == "pierre"){
    win = "egalite";
}
if(choixBot == "pierre" && choixJoueur == "feuille"){
    win = "gagne";
}
if(choixBot == "pierre" && choixJoueur == "ciseaux"){
    win = "perdu";
}
if(choixBot == "feuille" && choixJoueur == "feuille"){
    win = "egalite";
}
if(choixBot == "feuille" && choixJoueur == "ciseaux"){
    win = "gagne";
}
if(choixBot == "feuille" && choixJoueur == "pierre"){
    win = "perdu";
}
if(choixBot == "ciseaux" && choixJoueur == "ciseaux"){
    win = "egalite";
}
if(choixBot == "ciseaux" && choixJoueur == "pierre"){
    win = "gagne";
}
if(choixBot == "ciseaux" && choixJoueur == "feuille"){
    win = "perdu";
}

const res ={
    joueur: choixJoueur,
    bot: choixBot,
    resultat: win
};

const {joueur, bot, resultat} = res;

choixJoueur.addEventListener('click', () =>{
    let element = document.createElement('p');
    element.textContent = joueur;
    result.appendChild(element);
    result.style.display = 'block';
})

zfk

