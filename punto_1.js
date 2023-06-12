/* 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. */

const num = parseInt(prompt("Ingrese un numero"));
let i = 1
const mult = []

while (num >= i) {   
    if(i%5 ==0){
        mult.push(i)
        i++;
    }
    i++;   
}

alert(`Multiplos de 5 desde el 1 hasta ${num} \n ${mult}`)
