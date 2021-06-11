/* Méthode 1 */

function exercice4(nombre) {
        //* création de la variable de sortie (chiffreRomain)
        var chiffreRomain = "";
      
        //* tant que le nombre est supérieur ou égal à 1000
        while (nombre >= 1000) {
          //* si le nombre est entre 9000 et 9999
          if (nombre >= 9000 && nombre <= 9999) {
            //* on concatene XM| à chiffreRomain
            chiffreRomain += "XM|";
            //* on soustrait 9000 au nombre
            nombre -= 9000;
          }
          if (nombre >= 1000) {
            //* on soustrait 1000 au nombre
            nombre -= 1000;
            //* on concatène la lettre M à chiffreRomain
            chiffreRomain += "M";
          }
        }
      
        //* tant que le nombre est supérieur ou égal à 500
        while (nombre >= 500) {
          //* si le nombre est entre 900 et 999
          if (nombre >= 900 && nombre <= 999) {
            //* on concatene CM à chiffreRomain
            chiffreRomain += "CM";
            //* on soustrait 900 au nombre
            nombre -= 900;
          }
          if (nombre >= 500) {
            //* on lui soustrait 500
            nombre -= 500;
            //* on concatène la lettre D à chiffreRomain
            chiffreRomain += "D";
          }
        }
      
        //* tant que le nombre est supérieur ou égal à 100
        while (nombre >= 100) {
          //* si le nombre est entre 400 et 499
          if (nombre >= 400 && nombre <= 499) {
            //* on concatène la lettre CD à chiffreRomain
            chiffreRomain += "CD";
            //* on lui soustrait 400
            nombre -= 400;
          }
          if (nombre >= 100) {
            //* on lui soustrait 100
            nombre -= 100;
            //* on concatène la lettre C à chiffreRomain
            chiffreRomain += "C";
          }
        }
      
        //* tant que le nombre est supérieur ou égal à 50
        while (nombre >= 50) {
          //* si le nombre est entre 90 et 99
          if (nombre >= 90 && nombre <= 99) {
            //* on concatène la lettre XC à chiffreRomain
            chiffreRomain += "XC";
            //* on lui soustrait 90
            nombre -= 90;
          }
          if (nombre >= 50) {
            //* on lui soustrait 50
            nombre -= 50;
            //* on concatène la lettre L à chiffreRomain
            chiffreRomain += "L";
          }
        }
      
        //* tant que le nombre est supérieur ou égal à 10
        while (nombre >= 10) {
          //* si le nombre est entre 40 et 49
          if (nombre >= 40 && nombre <= 49) {
            //* on concatène la lettre XL à chiffreRomain
            chiffreRomain += "XL";
            //* on lui soustrait 40
            nombre -= 40;
          }
          if (nombre >= 10) {
            //* on lui soustrait 10
            nombre -= 10;
            //* on concatène la lettre X à chiffreRomain
            chiffreRomain += "X";
          }
        }
      
        //* tant que le nombre est supérieur ou égal à 5
        while (nombre >= 5) {
          //* si le nombre est 9 il s'écrit IX
          if (nombre == 9) {
            //* on concatène la lettre IX à chiffreRomain
            chiffreRomain += "IX";
            //* on lui soustrait 9
            nombre -= 9;
          }
          if (nombre >= 5) {
            //* on lui soustrait 5
            nombre -= 5;
            //* on concatène la lettre X à chiffreRomain
            chiffreRomain += "V";
          }
        }
      
        //* tant que le nombre est supérieur ou égal à 1
        while (nombre >= 1) {
          //* si le nombre est 4, il s'écrit IV
          if (nombre == 4) {
            //* on concatène la lettre IV à chiffreRomain
            chiffreRomain += "IV";
            //* on lui soustrait 4
            nombre -= 4;
          }
          if (nombre >= 1) {
            //* on lui soustrait 1
            nombre -= 1;
            //* on concatène la lettre I à chiffreRomain
            chiffreRomain += "I";
          }
        }
      
        //* si le nombre est égal à 0
        if (nombre == 0) {
          //* on retourne chiffreRomain
          return chiffreRomain;
        }
      }
// Ne touchez pas à la ligne suivante
module.exports = exercice4;
