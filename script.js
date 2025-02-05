// Smooth scroll effect for the navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
// Get the button
const backToTopBtn = document.getElementById('backToTopBtn');

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
};

// When the button is clicked, scroll to the top
backToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
