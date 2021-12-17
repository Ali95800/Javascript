"use strict";

let xCondition = 2; //number
let yCondition = 3; //number
let wCondition = "2"; //string
let zCondition = 3; //number

// test si xCondition est plus petit que yCondition
if (xCondition < yCondition) {
  console.log("xCondition est inferieur à yCondition");
}
// test si xCondition (2) est plus grand que yCondition (3)
if (xCondition > yCondition) {
  console.log("xCondition est superieur à yCondition");
} else {
  console.log("xCondition est inferieur à yCondition");
}

//test si xCondition existe
if (zCondition) {
  console.log("ma variable zCondition existe");
}
//quand ma variable ne rempli pas la condition
let aCondition = null;
if (aCondition) {
  console.log("ma variable aCondition existe");
}

//test si xCondition différent de 3
if (xCondition != 3) {
  console.log("xCondition est différent de 3 ");
}

//test d'égalité
if (xCondition == wCondition) {
  console.log("ils sont égaux mais pas en typage une string et un number");
}

//test d'égalité strict
if (yCondition === zCondition) {
  console.log("ils sont strinctement égaux en valeur et en typage");
}

//test si l'une des deux conditions est vraie
if (xCondition == 2 || yCondition == 2) {
  console.log("l'un des deux est vrai");
}

//si les deux sont vrais
if (xCondition === 2 && wCondition == 2) {
  console.log("Les 2 sont vrais");
}

//on peut faire un if sur une seul ligne s'il n'y a qu'une instruction
if (xCondition === 2 && wCondition == 2) console.log("Les 2 sont vrais");

// une autre facon d'ecrire un if ( le ternaire)

//------------------le switch------------------------
let fruit = "pomme";
fruit = "poire";

switch (fruit) {
  case "pomme":
    console.log("c'est une pomme");
    break;
  case "poire":
    console.log("c'est une poire");
    break;

  default:
    console.log("ce n'est ni une pomme, ni une poire");
}
