document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! Your message has been received.');
    form.reset();
  });
});
