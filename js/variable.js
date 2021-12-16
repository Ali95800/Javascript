"use strict";

// commentaire 1
/*
 *commentaire 2
 *
 *
 */
//kamelCase on commence en minuscule et chaque nouveau mots ont met une majuscule
//var c'est un espace dans lequel on stock des choses, c'est une boite que l'on nomme!
var unTexte = "voici un texte";
console.log(unTexte);
unTexte = "nouveau texte";
console.log(unTexte);

//C'est une constante on ne peut la changer
const TVA = 20 / 100;
console.log(TVA);
const tva2 = 5.5 / 100;
console.log(tva2);
//TVA = 25 / 100; = Message d'erreur dans la console et stop le code

let unChiffre = 24;
console.log(unChiffre);
unChiffre = 12;
console.log(unChiffre);

let maChaineDeCaracteres = "ho ! le plus beau variant !"; //on peut utiliser des simples ou double " '' "

let echapement = "je suis l'autre chaine de caractere";
//let echapement = 'je suis l\'autre chaine de caractere' : ici on echapppe le caractere.

// ------------------------Concaténation-----------------------

let number1 = 10;
number1 = 15;
let phraseNumber = "le chiffre est : " + number1 + "dégrés";
console.log(phraseNumber);

let phrase3 = ` Le chiffre est : ${number1} `; //ceci est un backtick permet d'éviter la concaténation
