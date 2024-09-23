let isTravail = true; // True signifie que c'est le temps de travail, False signifie pause
let isStart = false;
let secondes = 2; // 25 minutes en secondes
let chrono;

// Élément où afficher le décompte
let para = document.getElementById("affichage");
let symb = document.getElementById("startButton");

para.textContent = Math.trunc(secondes / 60) + " : " + (secondes % 60).toString().padStart(2, '0');
// Fonction pour incrémenter et afficher le temps
function tic() {
    secondes--;
    para.innerHTML = Math.trunc(secondes / 60) + " : " + (secondes % 60).toString().padStart(2, '0');
    
    // Si le temps est écoulé, changer de mode
    if (secondes === 0) {
        window.clearInterval(chrono); // Stopper le timer

        // Alterner entre travail et pause
        if (isTravail) {
            // Si le temps de travail passe à la pause
            secondes = 5 * 60; // 5 minutes de pause
            isTravail = false;
            document.getElementById('travail').style.color = ''; // Remettre à la couleur par défaut
            document.getElementById('pause').style.color = 'blue'; // Changer la couleur pour indiquer la pause
            document.getElementById('travail').style.backgroundColor = '';
            document.getElementById('pause').style.backgroundColor = 'lightgrey';
        } else {
            // Si la pause passe au temps de travail
            secondes = 25 * 60; // 25 minutes de travail
            isTravail = true;
            document.getElementById('pause').style.color = ''; // Remettre à la couleur par défaut
            document.getElementById('travail').style.color = 'blue'; // Changer la couleur pour indiquer le travail
            document.getElementById('pause').style.backgroundColor = '';
            document.getElementById('travail').style.backgroundColor = 'lightgrey';
        }
        
        // Relancer le chrono pour la nouvelle phase
        chrono = window.setInterval(tic, 1000);
    }
}

// Démarrer et stopper le timer avec le bouton
startButton.addEventListener('click', () => {
    start();
});

resetButton.addEventListener('click', () => {
    reset();
});

function start() {
    if (isStart) {
        // Si le chrono est déjà lancé, on l'arrête
        window.clearInterval(chrono);
        chrono = null;
        isStart = false;
        document.getElementById('pause').style.color = ''; // Couleur par défaut
        document.getElementById('pause').style.backgroundColor = '';
        document.getElementById('travail').style.color = ''; // Couleur par défaut
        document.getElementById('travail').style.backgroundColor = '';

        symb.textContent = "▷";
    } else {
        // Si le chrono est arrêté, on le démarre
        chrono = window.setInterval(tic, 1000);
        isStart = true;
        symb.textContent = "||";
        if (isTravail) {
            document.getElementById('travail').style.color = 'blue'; // Indiquer le temps de travail
            document.getElementById('travail').style.backgroundColor = 'lightgrey';
        } else {
            document.getElementById('pause').style.color = 'blue'; // Indiquer le temps de pause
            document.getElementById('pause').style.backgroundColor = 'lightgrey';
        }
    }
}

function reset() {
    secondes = 25 * 60;
    window.clearInterval(chrono);
    para.innerHTML = Math.trunc(secondes / 60) + " : " + (secondes % 60).toString().padStart(2, '0');
        chrono = null;
        isStart = false;
        document.getElementById('pause').style.color = ''; // Couleur par défaut
        document.getElementById('pause').style.backgroundColor = '';
        document.getElementById('travail').style.color = ''; // Couleur par défaut
        document.getElementById('travail').style.backgroundColor = '';
        symb.textContent = "▷";
}
