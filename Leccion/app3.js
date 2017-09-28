var income = prompt("¿Cuanto es el ingreso?");
var costs = prompt("¿Cuanto es el costo?");
var taxPercent = prompt("¿Cuanto es el porcentaje(%) de impuestos?");
var grossProfit = income-costs;
var tax = grossProfit*taxPercent/100;
var netIncome = grossProfit-tax;
document.write("Tu ganancia neta es $ " + netIncome);
