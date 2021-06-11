function exercice6() {
  let affichage = "";

  for (chiffre = 1; chiffre <= 200; chiffre++) {
    if (chiffre == 1) {
      affichage += chiffre;
    } else if (chiffre % 3 == 0) {
      affichage += " - Fizz";
    } else if (chiffre % 5 == 0) {
      affichage += " - Buzz";
    } else if (chiffre % 15 == 0) {
      affichage += " - FizzBuzz";
    } else {
      affichage += ` - ${chiffre}`;
    }
  }
  return affichage;
}

// Ne touchez pas à la ligne suivante
module.exports = exercice6;
