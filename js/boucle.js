"use strict";

//----------------------- boucle while------------------
//je crée un compteur
let count = 5;
//le début
let i = 0;

while (i < 6) {
  document.write("Le compte de la boucle est de " + i + "/5<br>");
  i++;
}

i = 0;

while (i <= count) {
  document.write("Le compte de la boucle est de " + i + "/5<br>");
  i++;
}

//do while = elle fait au moins une fois un tour de boucle
let j = 0;

do {
  j = j + 1;
  document.write("Le compte de la boucle est de " + j + "/5<br>");
} while (j <= 0);

//-----------------------------------------------------------
let tabPersonages = ["mage", "voleur", "rodeur", "guerrier"];
//nous donne la taille du tableau
let tailleTabPerso = tabPersonages.length;
console.log(tabPersonages[0]);
console.log(tabPersonages[1]);
console.log(tabPersonages[2]);
console.log(tabPersonages[3]);

for (let k = 0; k < tailleTabPerso; k++) {
  document.write("<br>le " + tabPersonages[k] + " attaque");
  if (k === 3) {
    document.write("<br> attaque multiple");
  }
}

//--------------------------- For in----------------
//n'erest utilisé que pour des objects

let obj = { a: 1, b: 2, c: 3 };

for (let propriete in obj) {
  document.write(` <br> le key :${propriete} -> valeur: ${obj[propriete]}`);
}
