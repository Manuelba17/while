/* 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. 
Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
 */

const numbers = []
let nu =1;

while (nu > 0) {

const num = parseInt(prompt("Digite un numero"));
      numbers.push(num);
      nu = num
    
}

numbers.pop();
alert(numbers)