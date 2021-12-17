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
function avanceVersOuest(distanceDeMarche) {
  console.log("Je pars vers l'ouest");
  console.log("Je fais " + distanceDeMarche + "km");
}
avanceVersOuest(15);
avanceVersOuest(40);
