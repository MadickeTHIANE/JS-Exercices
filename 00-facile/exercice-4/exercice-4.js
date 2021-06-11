// Méthode 2
function exercice4(nombre) {
        var chiffreRomain = "";
      
        while (nombre >= 9000) {
          chiffreRomain += "XM|";
          nombre -= 9000;
        }
        while (nombre >= 1000) {
          nombre -= 1000;
          chiffreRomain += "M";
        }
      
        while (nombre >= 900) {
          chiffreRomain += "CM";
          nombre -= 900;
        }
        while (nombre >= 500) {
          nombre -= 500;
          chiffreRomain += "D";
        }
      
        while (nombre >= 400) {
          chiffreRomain += "CD";
          nombre -= 400;
        }
        while (nombre >= 100) {
          nombre -= 100;
          chiffreRomain += "C";
        }
      
        while (nombre >= 90) {
          chiffreRomain += "XC";
          nombre -= 90;
        }
        while (nombre >= 50) {
          nombre -= 50;
          chiffreRomain += "L";
        }
      
        while (nombre >= 40) {
          chiffreRomain += "XL";
          nombre -= 40;
        }
        while (nombre >= 10) {
          nombre -= 10;
          chiffreRomain += "X";
        }
      
        while (nombre >= 9) {
          chiffreRomain += "IX";
          nombre -= 9;
        }
        while (nombre >= 5) {
          nombre -= 5;
          chiffreRomain += "V";
        }
      
        while (nombre >= 4) {
          chiffreRomain += "IV";
          nombre -= 4;
        }
        while (nombre >= 1) {
          nombre -= 1;
          chiffreRomain += "I";
        }
      
        return chiffreRomain;
      }
      
// Ne touchez pas à la ligne suivante
module.exports = exercice4;
