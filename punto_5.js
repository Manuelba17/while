/* 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). 
El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. 
En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información. */

const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]

let dia = null



while ( dias.filter(e => e === dia).join("") === dia || dia === null) {

   const usuario = prompt("Ingrese un día de la semana")
   const buscar = dias.filter(e => e === usuario).join("")
    
   if(usuario === buscar){
    alert(`Sigue trabajando el día es ${usuario}`)
  } else if(usuario.toLocaleLowerCase() === "domingo"){
    alert(`Ve a descansar el día es ${usuario}`)
  }
  dia = usuario;
    
}

