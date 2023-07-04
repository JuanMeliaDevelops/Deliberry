//      Evento solo numeros

function validaNumeros(event) {
  const keyCode = event.keyCode || event.which; // Obtener el código de la tecla

  if (keyCode >= 48 && keyCode <= 57) {
    return true; 
  }

  return false; 
}
