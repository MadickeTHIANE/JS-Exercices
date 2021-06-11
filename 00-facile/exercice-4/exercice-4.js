// Méthode 3

function exercice4(nombre) {
        var chiffreRomain = "";
      
        function calculChiffreRomain(chiffreArabe, lettreRomaine) {
          while (nombre >= chiffreArabe) {
            chiffreRomain += lettreRomaine;
            nombre -= chiffreArabe;
          }
        }
        calculChiffreRomain(9000, "WM|");
        calculChiffreRomain(1000, "M");
        calculChiffreRomain(900, "CM");
        calculChiffreRomain(500, "D");
        calculChiffreRomain(400, "CD");
        calculChiffreRomain(100, "C");
        calculChiffreRomain(90, "XC");
        calculChiffreRomain(50, "L");
        calculChiffreRomain(40, "XL");
        calculChiffreRomain(10, "X");
        calculChiffreRomain(9, "IX");
        calculChiffreRomain(5, "V");
        calculChiffreRomain(4, "IV");
        calculChiffreRomain(1, "I");
      
        return chiffreRomain;
      }      
// Ne touchez pas à la ligne suivante
module.exports = exercice4;
