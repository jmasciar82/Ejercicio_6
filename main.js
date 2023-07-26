//😺 😸 😹 🐈 🐾 🦁
console.log('/* ---------------------------------*/ ')
console.log('/*            Ejercicio a           */ ')
console.log('/* ---------------------------------*/ ')
var cantidadDeGatos  = 10 
var x = 0
while (x <= 10) {
    x++    
    console.log(`Gato #${x}: 😺`);
    if(x == cantidadDeGatos ) break
    x++    
    console.log(`Gato #${x}: 😸`);
    if(x == cantidadDeGatos ) break
    x++
    console.log(`Gato #${x}: 😹`);
    if(x == cantidadDeGatos ) break

}
console.log('/* ---------------------------------*/ ')
console.log('/*            Ejercicio b           */ ')
console.log('/* ---------------------------------*/ ')

var cantidadDeGatos = 19;
var cantidadDePasos = 7;
var emoji = ""

for(x = 1; x <= cantidadDeGatos; x++) {
    
    for(i = 1; i <= cantidadDePasos; i++) {
        emoji += "🐾"        
    }
    console.log(`Gato #${x}: 🐈` + emoji)
    emoji = ''    
}

console.log('/* ---------------------------------*/ ')
console.log('/*            Ejercicio c           */ ')
console.log('/* ---------------------------------*/ ')

var cantidadDeGatos = 5;
var cantidadDePasos = 7;
var emoji = ""

for(x = 1; x <= cantidadDeGatos; x++) {
    
    for(i = 1; i <= cantidadDePasos; i++) {
        emoji += "🐾"        
    }
    console.log(`Gato #${x}: 🐈 ${x % 2 == 0? "🦁": ""}`+ emoji)
    emoji = ''    
}