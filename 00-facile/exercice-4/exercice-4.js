// Méthode 4

function exercice4(nombre) {
  var chiffreRomain = "";

  conversions =[
    [9000, "WM|"],
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
]

  function calculChiffreRomain(chiffreArabe, lettreRomaine) {
    while (nombre >= chiffreArabe) {
      chiffreRomain += lettreRomaine;
      nombre -= chiffreArabe;
    }
  }

  conversions.forEach((conversion) => {
    calculChiffreRomain(conversion[0], conversion[1])
  });
  return chiffreRomain;
}
// Ne touchez pas à la ligne suivante
module.exports = exercice4;
