
function enviarMail() {

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const asunto = document.getElementById("asunto").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  const alerta = document.getElementById("mensajeAlertaMail");

  if (nombre == "" || email == "" || asunto == "" || telefono == "" || mensaje == "") {


    alerta.classList.remove("alert-success");

    alerta.classList.add("alert-danger");
    alerta.innerText = "Por favor complete todos los campos para enviar el mensaje.";

  } else if( nombre.length < 6 ) {

    alerta.classList.remove("alert-success");

    alerta.classList.add("alert-danger");
    alerta.innerText = "Porfavor ingresa tu nombre completo.";


  } else if( !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/) ) {

    alerta.classList.remove("alert-success");

    alerta.classList.add("alert-danger");
    alerta.innerText = "Porfavor ingresa un correo valido.";


  }  else if(telefono.length < 6) {
    alerta.classList.remove("alert-success");

    alerta.classList.add("alert-danger");
    alerta.innerText = "Porfavor ingresa un telefono válido.";

  } else if( mensaje.length < 25 ) {

    alerta.classList.remove("alert-success");

    alerta.classList.add("alert-danger");
    alerta.innerText = "Porfavor el mensaje debe ser mas largo.";

  }
  
   else {

    alerta.classList.remove("alert-danger");

    alerta.classList.add("alert-success");
    alerta.innerText = "Tu correo se ha enviado con éxito. ¡Gracias por contactarnos!";
  }

}


