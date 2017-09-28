var name =prompt("¿Cual es tu nombre y apellido?");
var firstInitial = name.slice(0,1);
var position = name.indexOf(" ")+1;
var secondInitial= name.slice(position,position+1);
document.write("Tus iniciales son " + firstInitial.toUpperCase()  + secondInitial.toUpperCase());
