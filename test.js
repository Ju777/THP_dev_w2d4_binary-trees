const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

function enter() {
    return prompt("[ENTER]");
}

function initialize() {

    let size = prompt("Quelle taille du tableau pour initaliser votre arbre binaire ? > ");
    while(parseInt(size) != size || parseInt(size) <= 0) {
        size = prompt("Erreur : veuillez entrez un entier positif > ");
    }
    
    console.log(`\nGénération de données aléatoires ...`);
    enter();
    // let arrayForTree = Array.from({length: size}, () => Math.floor(Math.random() * 100));
    let arrayForTree = [1,2,3,4,5,6,7,8,9,10, 11];
    let tmpSet = new Set(arrayForTree);
    arrayForTree = Array.from(tmpSet);

    //Log de vérif
    
    console.log(`\nAprès éliminations des doublons votre tableau d'initialisation contient ${arrayForTree.length} noeuds :`);
    enter();
    console.log(`\n${arrayForTree}`);
    enter();

    return arrayForTree;
}

let array = initialize()
console.log(array);

let middle = array.length/2;
let arrayLeft = array.slice(0,middle);
console.log(arrayLeft);
let arrayRight = array.slice(middle, array.length);
console.log(arrayRight);
// let s = new Set(["1","2","3"]);
console.log(new Set(["1","2","3"]));
