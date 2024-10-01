let isTravail = true; // True signifie que c'est le temps de travail, False signifie pause
let isStart = false;
let secondes = 25 *60; // 25 minutes en secondes
let chrono;

let travailTemps = 25 * 60; // 25 minutes pour le travail
let pauseTemps = 5 * 60; // 5 minutes pour la pause
const progressCircle = document.getElementById("progress-circle");
progressCircle.style.background = `conic-gradient(#3498db ${100}%, #f4f4f4 ${100}%)`;

// Élément où afficher le décompte
let para = document.getElementById("affichage");
let symb = document.getElementById("startButton");

para.textContent = Math.trunc(secondes / 60) + " : " + (secondes % 60).toString().padStart(2, '0');

// Éléments de la modal
const settingsModal = document.getElementById('settingsModal');
const closeButton = document.querySelector('.close-button');
const settingsButton = document.getElementById('settingsButton');
const saveSettingsButton = document.getElementById('save-settings');

// Ouvrir la modal
settingsButton.addEventListener('click', () => {
    settingsModal.style.display = 'block';
});

// Fermer la modal
closeButton.addEventListener('click', () => {
    settingsModal.style.display = 'none';
});

// Enregistrer les nouveaux paramètres
saveSettingsButton.addEventListener('click', () => {
    travailTemps = parseInt(document.getElementById('work-duration').value*60);
    pauseTemps = parseInt(document.getElementById('break-duration').value*60);
    
    // Mettre à jour les durées dans le chrono
    if (isTravail) {
        secondes = travailTemps;
    } else {
        secondes = pauseTemps;
    }
    para.innerHTML = Math.trunc(secondes / 60) + " : " + (secondes % 60).toString().padStart(2, '0');
    progressCircle.style.background = `conic-gradient(#3498db ${100}%, #f4f4f4 ${100}%)`;
    isStart = false;
    settingsModal.style.display = 'none';
});


// Fonction pour incrémenter et afficher le temps
function tic() {
    secondes--;
    para.textContent = Math.trunc(secondes / 60) + " : " + (secondes % 60);
    let percent = (secondes / travailTemps) * 100;
     // Mise à jour du cercle de progression
     if(isTravail) {
        percent = (secondes / travailTemps) * 100;
     }
     else {
        percent = (secondes / pauseTemps) * 100;
     }
     progressCircle.style.background = `conic-gradient(#3498db ${percent}%, #f4f4f4 ${percent}%)`;

    // Si le temps est écoulé, changer de mode
    if (secondes === 0) {
        window.clearInterval(chrono); // Stopper le timer

        // Alterner entre travail et pause
        if (isTravail) {
            // Si le temps de travail passe à la pause
            secondes = pauseTemps; // temps de pause
            isTravail = false;
            document.getElementById('travail').style.color = ''; // Remettre à la couleur par défaut
            document.getElementById('pause').style.color = 'blue'; // Changer la couleur pour indiquer la pause
            document.getElementById('travail').style.backgroundColor = '';
            document.getElementById('pause').style.backgroundColor = 'lightgrey';
        } else {
            // Si la pause passe au temps de travail
            secondes = travailTemps; // temps de travail
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
    secondes = travailTemps;
    isTravail = true;
    window.clearInterval(chrono);
    para.innerHTML = Math.trunc(secondes / 60) + " : " + (secondes % 60).toString().padStart(2, '0');
    progressCircle.style.background = `conic-gradient(#3498db ${100}%, #f4f4f4 ${100}%)`;
    chrono = null;
    isStart = false;
    document.getElementById('pause').style.color = ''; // Couleur par défaut
    document.getElementById('pause').style.backgroundColor = '';
    document.getElementById('travail').style.color = ''; // Couleur par défaut
    document.getElementById('travail').style.backgroundColor = '';
    symb.textContent = "▷";
}

//reset();

