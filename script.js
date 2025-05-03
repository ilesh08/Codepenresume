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

// Example placeholder for future cart logic
function addToCart(product) {
  console.log(`Added ${product} to cart`);
}
// script.js
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} added to cart!`);
  });
});
