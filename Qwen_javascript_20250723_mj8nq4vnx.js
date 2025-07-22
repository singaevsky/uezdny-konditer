let cart = [];

function updateCartCount() {
  const count = document.getElementById('cart-count');
  if (count) count.textContent = cart.length;
}

function addToCart(productId) {
  cart.push(productId);
  updateCartCount();
  alert('Товар добавлен в корзину!');
}

function openCreateCakeModal() {
  document.getElementById('create-cake-modal').style.display = 'flex';
}

function closeCreateCakeModal() {
  document.getElementById('create-cake-modal').style.display = 'none';
}

// Инициализация
updateCartCount();

// Закрытие модального окна при клике вне
window.onclick = function(e) {
  const modal = document.getElementById('create-cake-modal');
  if (e.target == modal) closeCreateCakeModal();
}