const nombre = document.getElementById("nombre").value;
const email = document.getElementById("email").value;
const asunto = document.getElementById("asunto").value;
const telefono = document.getElementById("telefono").value;
const mensaje = document.getElementById("mensaje").value;

console.log(nombre);

function enviarMail() {
   
  
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
  
    if (nombre !== "" && email !== "" && asunto !== "" && telefono !== "" && mensaje !== "") {
      document.getElementById("mensajeMail").innerText = "Tu mail se ha enviado con éxito! Gracias por contactarnos.";
    } else {
      document.getElementById("mensajeMail").innerText = "Por favor complete todos los campos para enviar el mensaje.";
    }
  }
  
