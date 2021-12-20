"use strict";
//on déclare une fonction avc function
function avanceVersLeNord(params) {
  //Ici on met le code
  console.log("Je pars vers le nord");
  console.log("Je m'arrete dans 10km");
}

//fait appel à la function
avanceVersLeNord();
avanceVersLeNord();
avanceVersLeNord();

//function nom(argument){}
//on peut mettre plusieurs auguments dans nos function
function avanceVersOuest(distanceDeMarche, gourde) {
  console.log("Je pars vers l'ouest ");
  console.log("Je fais " + distanceDeMarche + "km");
  console.log("Je bois a ta mort " + gourde);
}
avanceVersOuest(15, " du jack");
avanceVersOuest(40, " du jack");
let contenu = "du fanta";
avanceVersOuest(15, contenu);
avanceVersOuest(40, contenu);

//function que ce joue toute seule
//function annonyme

(function () {
  console.log("Je me joue tout seul");
})();

//function anonyme fléché
(() => {
  console.log("Je me joue aussi seul");
})();

//Portées des variables
function add2() {
  let g = 4;
  let a = 2;
  return g + 2;
}

//a n'existe pas a l'exterrieur de ma function
// console.log(a);
console.log(add2());
