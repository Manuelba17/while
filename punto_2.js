/* 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, 
pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
 */


const num1 = parseInt(prompt("Ingrese un numero entre el 1 y 50")),
      num2 = parseInt(prompt("Ingrese otro numero entre el 1 y 50"));
let i = 0;
let arr = []

while (i <= 50) {
    
  arr.push(i) 
  if(i == num1) {
    arr[i] = `¡Lotería!`

  }else if(i == num2) {
    arr[i] = `¡Lotería!`
  }
    i++;    
}

console.log(arr.slice(1));
