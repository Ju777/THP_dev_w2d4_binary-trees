const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.nodes = [];
    }

    // I used this help : https://www.tutorialspoint.com/implementing-a-binary-search-tree-in-javascript#
    insert(data) {
    var newNode = new Node(data);

        if(this.root === null) {
            this.root = newNode;
            this.nodes.push(this.root);
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if(node.data > newNode.data) {
            if(node.left === null) {
                node.left = newNode;
                this.nodes.push(node.left);
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null) {
                node.right = newNode;
                this.nodes.push(node.right);
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    toString(node) {
        
        // console.log("CP A");
        console.log("LEVEL " + this.setTreeLevel(this.nodes));
        // process.stdout.write(` `.repeat(this.level) + `${node.data}\n`);

         // BIG BACK UP top
        //  if(node.left === null){
        //     // console.log("CP B");
        //     process.stdout.write(`-L-`);
        // } else {
        //     // console.log("CP C");
        //     // process.stdout.write(`   LEFT ${toString(node.left)}`);
        //     this.toString(node.left);
        // }

        // if(node.right === null){
        //     // console.log("CP D");
        //     process.stdout.write(`-R-\n`);
        // } else {
        //     // console.log("CP E");
        //     // process.stdout.write(`   RIGHT ${toString(node.right)}\n`);
        //     this.toString(node.right);
        // }
        // this.level--;
        // BIG BACK UP top
       
    }   

    setTreeLevel(nodesArray) {
        return nodesArray.length;
    }
}

function mergeSort(array) { // Using recursion
      
    // Base case : si le tableau array contient 1 élélent ou moins, on le retourne.
    if (array.length < 2) {
        return array;
    }
    
    else {

        // Le départ est de séparer le tableau en 2 moitiés
        let left = array.slice(0, array.length/2);
        let right = array.slice(array.length/2, array.length);

        mergeSort(left);
        mergeSort(right);

        return merging(left, right, array);
    }     
}

function merging(left, right, array) {
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            
            array[k] = left[i];
            i++;
            k++;
        } else {
            array[k] = right[j];
            j++;
            k++;
        }
    }

    while(i < left.length) {
        array[k] = left[i];
        i++;
        k++;
    }

    while(j < right.length) {
        array[k] = right[j];
        j++;
        k++;
    }

    return array;
}

function enter() {
    return prompt("[ENTER]");
}

function initialize() {

    let size = prompt("Quelle taille du tableau pour initaliser votre arbre binaire ? > ");
    while(parseInt(size) != size || parseInt(size) <= 0) {
        size = prompt("Erreur : veuillez entrez un entier positif > ");
    }
    
    console.log(`\nGénération de ${size} valeurs aléatoires ...`);
    // enter();
    let arrayForTree = Array.from({length: size}, () => Math.floor(Math.random() * 100));
    console.log(arrayForTree);

    console.log("\nÉlimination des doublons éventuels ...")
    // enter();
    let tmpSet = new Set(arrayForTree);
    arrayForTree = Array.from(tmpSet);
    console.log(`Votre tableau d'initialisation contient ${arrayForTree.length} valeurs :`);
    console.log(arrayForTree);
    // enter();

    return arrayForTree;
}

function perform(){
    let bst = new BinarySearchTree();
    let array = initialize();
    // console.log("Array après initialize");
    // let array = [62,29,34,19,22,30,13,3,21,78,57,2,28,99,54,9,70,81];
    // let array = [1,2,3,4,5,6,7,8,9,10];
    // console.log("\nTableau de départ :")
    // console.log(array);
    // // enter();
    

    // Création du noeud root
    console.log("\nRecherche de la valeur médiane qui servira à créer le noeud root de l'arbre ...");
    // enter();
    array = mergeSort(array);
    let middle = parseInt(array.length/2);
    let rootValue = array[middle];
    console.log("La valeur root est : " + rootValue);
    // // enter();

    console.log(`\nEnvoie de ${rootValue} à la méthode #insert ...`);
    // enter();
    bst.insert(rootValue);

    console.log("\nAffichage de l'arbre MAJ :");
    // enter();
    console.log(bst);
    // enter();

    console.log("\nExtraction de la valeur racine du tableau d'initialisation...");
    // enter();
    console.log(array);
    array.splice(middle, 1);
    console.log(array);
    // enter();

    console.log("Insertions de chaque valeurs dans l'arbre ...");
    for(let i = 0 ; i < array.length ; i++) {
        bst.insert(array[i]);
    }

    console.log("\nAffichage de l'arbre MAJ :");
    // enter();
    console.log(bst);
    // enter();

    console.log("\nAffichage du tableau de noeuds :");
    // enter();
    console.log(bst.nodes);
    // enter();

    console.clear();
    console.log("\nAffichage du design de l'arbre :");
    // enter();
    bst.toString(bst.root);
    // enter();




}

perform();