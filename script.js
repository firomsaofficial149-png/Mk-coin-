const navbar = document.querySelector('.navbar');
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => navbar.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => navbar.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
