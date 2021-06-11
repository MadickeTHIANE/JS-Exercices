function exercice3(n) {
  function nombreEstPair(nombre) {
    // On verra l'opérateur modulo '%' dans le module intermédiaire !
    return nombre % 2 === 0;
  }
  //* Déclaration d'un compteur
  var i = 0;
  //* Tant que n!=1
  while (n !== 1) {
    //* Si n est pair, divisez-le par 2
    if (nombreEstPair(n)) {
      n /= 2;
    }
    //* Si n est impair, multipliez-le par 3 et ajoutez 1 pour obtenir n * 3 + 1.
    else {
      n = 3 * n + 1;
    }
    //* Incrémentation du compteur
    i++;
  }
  return i;
}
// Ne touchez pas à la ligne suivante
module.exports = exercice3;
