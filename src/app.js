// src/app.js
function citationAleatoire() {
  const citations = [
    "Le succès est la somme de petits efforts répétés jour après jour.",
    "Apprendre sans réfléchir est vain. Réfléchir sans apprendre est dangereux.",
    "La simplicité est la sophistication suprême.",
    "La meilleure façon de prédire l’avenir, c’est de le créer."
  ];
  const index = Math.floor(Math.random() * citations.length);
  return citations[index];
}

// Pour Node.js / Jest
module.exports = citationAleatoire;

// Pour navigateur, on créera app-browser.js
