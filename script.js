document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
  
    // Crear un Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Si el elemento está visible, activar la animación
          entry.target.classList.add("visible");
          entry.target.classList.remove("hidden");
        } else {
          // Si el elemento no está visible, revertir la animación
          entry.target.classList.add("hidden");
          entry.target.classList.remove("visible");
        }
      });
    }, {
      threshold: 0.1, // Activar/desactivar cuando el 10% del elemento esté visible
    });
  
    // Observar cada producto
    products.forEach((product) => {
      observer.observe(product);
    });
  });