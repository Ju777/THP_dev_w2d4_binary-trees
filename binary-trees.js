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
        // this.nodes = [];
    }

    insert(data) {
    var newNode = new Node(data);

        if(this.root === null) {
            this.root = newNode;
            // this.nodes.push(this.root);
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if(node.data < newNode.data) {
            if(node.left === null) {
                node.left = newNode;
                // this.nodes.push(node.left);
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null) {
                node.right = newNode;
                // this.nodes.push(node.right);
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    toString() {
        // AFTER NODE PROCESSING
    }   

    mergeSort(array) { // Using recursion
      
        // Base case : si le tableau array contient 1 élélent ou moins, on le retourne.
        if (array.length < 2) {
            return array;
        }
        
        else {
    
            // Le départ est de séparer le tableau en 2 moitiés
            let left = array.slice(0, array.length/2);
            let right = array.slice(array.length/2, array.length);
    
            this.mergeSort(left);
            this.mergeSort(right);
    
            return this.merging(left, right, array);
        }     
    }
    
    merging(left, right, array) {
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
}

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
    let arrayForTree = Array.from({length: size}, () => Math.floor(Math.random() * 100));
    let tmpSet = new Set(arrayForTree);
    arrayForTree = Array.from(tmpSet);

    //Log de vérif
    
    console.log(`\nAprès éliminations des doublons votre tableau d'initialisation contient ${arrayForTree.length} noeuds :`);
    enter();
    console.log(`\n${arrayForTree}`);
    enter();

    return arrayForTree;
}

function perform(){
   let bst = new BinarySearchTree();
   let array = initialize();

   for(let i = 0 ; i < array.length ; i++){
    bst.insert(array[i]);
   }
   console.log(bst);
}

perform();