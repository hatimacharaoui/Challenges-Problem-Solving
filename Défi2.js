const prompt = require('prompt-sync')();

let nombre = prompt("Entrez un nombre entier positif : ");

switch (true) {
    case (nombre % 5 == 0 && nombre % 3 == 0):
        console.log("TechLead");
        break;
    case (nombre % 3 == 0):
        console.log("Tech");
        break;
    case (nombre % 5 == 0):
        console.log("Lead");
        break;
        
    default:
        console.log(nombre);
}