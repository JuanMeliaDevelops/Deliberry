window.addEventListener("scroll", function () {
  const scrollElement = document.getElementById("iconNav");
  const scrollPosition = window.scrollY;
  const currentSection = window.location.href;

  const footer = document.getElementById("footer")?.getBoundingClientRect();
  
  const banner1 = document.getElementById("banner1")?.getBoundingClientRect();
  const fullScreenProductos = document.getElementById("fullScreenProductos")?.getBoundingClientRect();
  const banner2 = document.getElementById("banner2")?.getBoundingClientRect();

  const bannerContacto = document.getElementById("bannerContacto")?.getBoundingClientRect();

  if (
    (banner1 && banner1.top <= 80 && banner1.bottom >= 80) ||
    (fullScreenProductos && fullScreenProductos.top <= 0 && fullScreenProductos.bottom >= 80) ||
    (banner2 && banner2.top <= 70 && banner2.bottom >= 70) ||
    (footer && footer.top <= 120) ||
    (bannerContacto && bannerContacto.top <= 80 && bannerContacto.bottom >= 85)
  ) {
    scrollElement.style.filter = "brightness(0) invert(1)";
  } 
  
  else {
    scrollElement.style.filter = "brightness(1) invert(0)";
  }
});
