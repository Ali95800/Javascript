/**
 * 1- demande au user d'ecrire une couleur primaire dans un prompt (bleu , rouge , jaune)
 * 2- Tester la couleur entrée en chaine de caractère
 * 3- afficher dans la page "Bravo la couleur .... est une couleur primaire"
 * 4- la couleur choisie n'est pas une couleur primaire
 */

let couleur = prompt("saisissez une couleur primaire");
console.log(couleur); //"jaune"
// let primaire = bleu, rouge, jaune ;

if (couleur === "jaune" || couleur === "rouge" || couleur === "bleu") {
  document.write("ceci est une couleur primaire");
} else {
  document.write("ceci n'est pas une couleur primaire");
}
