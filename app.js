const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');

ham.addEventListener('click', () => {
	ham.classList.toggle('active');
	nav.classList.toggle('show');
});
