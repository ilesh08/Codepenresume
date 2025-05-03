// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add click interaction to product cards
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    const productName = card.querySelector('h3').innerText;
    alert(`You clicked on: ${productName}\n(This is a demo, cart functionality coming soon!)`);
  });
});

