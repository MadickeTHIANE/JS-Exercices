function exercice5(cote1, cote2, cote3) {
  //* Un triangle est équilatéral lorsque ses 3 côtés sont égaux
  if (cote1 == cote2 && cote2 == cote3) {
    return "équilatéral";
    //* Un triangle est impossible lorsque la somme de deux de ses côtés est strictement inférieure au troisième côté
  } else if (
    cote1 + cote2 < cote3 ||
    cote1 > cote2 + cote3 ||
    cote1 + cote3 < cote2
  ) {
          return "impossible";
          //* Un triangle est isocèle lorsque 2 de ses côtés sont égaux
  } else if (cote1 == cote2 || cote2 == cote3 || cote3 == cote1) {
    return "isocèle";
  } else {
    //* Un triangle est scalène lorsqu'aucun de ses côtés n'est égal à un autre côté
    return "scalène";
  }
}

// Ne touchez pas à la ligne suivante
module.exports = exercice5;
