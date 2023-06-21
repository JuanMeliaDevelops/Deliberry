
function enviarMail() {

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const asunto = document.getElementById("asunto").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  const alerta = document.getElementById("mensajeAlertaMail");

  if (nombre !== "" && email !== "" && asunto !== "" && telefono !== "" && mensaje !== "") {

    alerta.classList.remove("alert-danger");

    alerta.classList.add("alert-success");
    alerta.innerText = "Tu mail se ha enviado con éxito! Gracias por contactarnos.";

  } else {
    alerta.classList.remove("alert-success");

    alerta.classList.add("alert-danger");
    alerta.innerText = "Por favor complete todos los campos para enviar el mensaje.";
  }
}

