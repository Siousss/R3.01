/*let temperature = document.getElementById('ex1');
let temp = 15;
temperature.textContent = temp * 9/5 +32;

let aire = document.getElementById('ex2');
let largeur = 5;
let longueur = 9;
aire.textContent = largeur*longueur;

let chaine = document.getElementById('ex3');
let nom = "bard";
let prenom = "lenny";
chaine.textContent = nom + " " +prenom;

let taxe = document.getElementById('ex4');
let ht = 10;
let tva = ht*0.2;
let ttc = ht+tva;
taxe.textContent = ttc;

let imc = document.getElementById('ex6');
let poids = 100;
let taille = 2.01;
imc.textContent = poids/(taille*taille);

let txt = document.getElementById('ex7');
let liv_gratuit = 50;
let montant_total = 44.1
if(montant_total>liv_gratuit){
    txt.textContent = "Livraison gratuite !";
}
else{
    txt.textContent = "Frais de livraison : 5 euros"
}

let txt2 = document.getElementById('ex8');
let nb_binaire = "10101110";
let decimal = parseInt(nb_binaire,2);
txt2.textContent = decimal + " binaire : " +nb_binaire;*/

const john = {
    nom: "Doe",
    prenom:"John",
    age:"25",
    ville:"Rouen",
};

const jane = {
    nom: "Doe",
    prenom:"Jane",
    age:"30",
    ville:"Paris",
};

const jim = {
    nom: "Doe",
    prenom:"Jim",
    age:"35",
    ville:"Caen",
};

const {nom, prenom,age,ville} = jim;

    /*console.log(nom);

    console.log(prenom);

    console.log(age);

    console.log(ville);*/

    

const tab = [john,jane,jim];

tab[0].prenom = "Jean"


const marc = {
    nom: "Doe",
    prenom:"Marc",
    age:"32",
    ville:"Marseille",
};

tab.push(marc);



const tab2 = [];
let compteur = 0;
for(let i = 10; i < 101; i+=10){
    tab2[compteur] = i;
    compteur++;
}
tab2.reverse();


const numbers = [ 2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ];
numbers.sort();
numbers.push(11);
numbers.unshift(0);
numbers.pop()

console.table(numbers);