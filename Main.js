const util = require("./Converter.js");
const reader = require('readline-sync');
const num = reader.questionInt("Please insert a non-negative number = ");
console.log("Hexa = " + util.convertToHexa(num));
console.log("Binary = " + util.convertToBinary(num));