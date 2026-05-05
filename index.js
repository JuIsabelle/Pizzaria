const pizzaSelect = document.getElementById('pizza-select');
const quantityInput = document.getElementById('quantity');
const customerNameInput = document.getElementById('customer-name');
const customerAddressInput = document.getElementById('customer-address');
const orderButton = document.getElementById('order-button');
const orderMessage = document.getElementById('order-message');

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function updateOrderSummary() {
  const selectedOption = pizzaSelect.options[pizzaSelect.selectedIndex];
  const pizzaName = selectedOption.value;
  const pizzaPrice = Number(selectedOption.dataset.price || 0);
  const quantity = Number(quantityInput.value) || 1;
  const total = pizzaPrice * quantity;

  orderMessage.textContent = `Você escolheu ${quantity}x ${pizzaName} por ${formatCurrency(total)}.`;
}

function createOrder() {
  const pizzaName = pizzaSelect.value;
  const pizzaPrice = Number(pizzaSelect.selectedOptions[0].dataset.price || 0);
  const quantity = Number(quantityInput.value) || 1;
  const customerName = customerNameInput.value.trim();
  const customerAddress = customerAddressInput.value.trim();

  if (!customerName || !customerAddress) {
    orderMessage.textContent = 'Por favor, informe seu nome e endereço para finalizar o pedido.';
    return;
  }

  const total = pizzaPrice * quantity;
  orderMessage.innerHTML = `Pedido: <strong>${quantity}x ${pizzaName}</strong><br>Valor total: <strong>${formatCurrency(total)}</strong><br>Nome: <strong>${customerName}</strong><br>Endereço: <strong>${customerAddress}</strong><br><br>Obrigado! Seu pedido foi registrado.`;
}

pizzaSelect.addEventListener('change', updateOrderSummary);
quantityInput.addEventListener('input', updateOrderSummary);
orderButton.addEventListener('click', createOrder);

updateOrderSummary();
