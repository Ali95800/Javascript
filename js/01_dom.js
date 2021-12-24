/**

 * header avc 1 h1 centré

 *

 * main avc 2 sections

 * 1 titre pr chaque section

 * dns chaque section 3 paragraph

 * au moin 1 img dns la section

 *

 * footer : mention legale et confidentialité 2 liens <a> centré

 * changer d'img en JS

 */
let selectBody = document.getElementsByTagName("body");
console.log(selectBody);
selectBody[0].style.background = "red";

let selectParagraphe = document.getElementsByClassName("paragraphe");
console.log(selectParagraphe);
selectParagraphe[0].style.color = "white";

let selectImg = document.querySelectorAll("img");
console.log(selectImg);

// for (let i = 0; i < selectImg.length; i++) {
//   selectImg[2].src = "img/renji.jpg";
// }
