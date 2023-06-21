window.addEventListener("scroll", function () {
  var scrollElement = document.getElementById("iconNav");
  var scrollPosition = window.scrollY;

  /* Escritorio */
  if (window.innerWidth > 767) {
    if (scrollPosition > 80 && scrollPosition < 380 || scrollPosition > 1050 && scrollPosition < 1770 || scrollPosition > 2600 && scrollPosition < 2800) {
      scrollElement.style.filter = "brightness(0) invert(1)"
    } else {
      scrollElement.style.filter = "brightness(1) invert(0)";
    }
  }


  /* Mobile */
  if (window.innerWidth <= 767) {
    if (scrollPosition > 15 && scrollPosition < 220 || scrollPosition > 1050 && scrollPosition < 2850) {
      scrollElement.style.filter = "brightness(0) invert(1)"
    } else {
      scrollElement.style.filter = "brightness(1) invert(0)";
    }
  }



});