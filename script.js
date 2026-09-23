document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Galatoomi! Ergaan kee nu gaheera.');
    form.reset();
  });
});
