const elementos = document.querySelectorAll('.animacao, .animacao1, .animacao2, .animacao4');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    } else {
      entry.target.classList.remove('visivel');
    }
  });
}, { threshold: 0.1 });

elementos.forEach(el => observer.observe(el));
