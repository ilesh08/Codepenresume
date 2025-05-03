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
