const products = [
  { id: 1, name: 'AI Assistant', price: 49 },
  { id: 2, name: 'Smart Finance Bot', price: 29 },
  { id: 3, name: 'AI Resume Builder', price: 19 },
  { id: 4, name: 'AI Image Enhancer', price: 39 },
  { id: 5, name: 'Chatbot Pro', price: 25 },
  { id: 6, name: 'Voice-to-Text Genius', price: 22 },
  { id: 7, name: 'AI Code Reviewer', price: 35 },
  { id: 8, name: 'Text Summarizer', price: 18 },
  { id: 9, name: 'Language Translator AI', price: 30 },
  { id: 10, name: 'AI Marketing Tool', price: 45 }
];

let cart = [];

function showProducts() {
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById('cart-count').innerText = cart.length;
  alert(`${product.name} added to cart!`);
}

function viewCart() {
  let total = 0;
  let items = 'Your Cart:\n';
  cart.forEach(p => {
    items += `- ${p.name} ($${p.price})\n`;
    total += p.price;
  });
  items += `\nTotal: $${total}`;
  alert(items);
}

function showLogin() {
  document.getElementById('login').style.display = 'block';
}

function login() {
  const username = document.getElementById('username').value;
  alert(`Welcome, ${username}!`);
  document.getElementById('login').style.display = 'none';
}

// Initialize
document.addEventListener('DOMContentLoaded', showProducts);
