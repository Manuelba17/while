/* 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. 
Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas. */

const result = []
let word = "l"

while (word.length > 0) {

    const words = prompt("Escriba una letra o palabra")
    result.push(words)
    word = words
    
}
result.pop();
console.log(result.join(" ")); 
