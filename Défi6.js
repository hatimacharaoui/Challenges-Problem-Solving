const prompt = require("prompt-sync")();

function CompterVoyelles() {
  let voyelles = ["a", "e", "i", "o", "u"];
  let Compteur = 0;

  for (let i = 0; i < chaine.length; i++) {
    if (voyelles.includes(chaine[i])) {
      Compteur++;
    }
  }
  return Compteur;
}
let chaine = prompt("Entrer une chaîne :")
console.log(CompterVoyelles(chaine));
