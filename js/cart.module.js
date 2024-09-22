import { cartItems, saveCartItems } from "./products.module.js";
import { showNotification } from "./notification.module.js";
import { updateCartCount } from "./products.module.js";

export const viewCart = () => {
  if (!cartItems || cartItems.length == 0) {
    emptyCart();
  } else {
    cart();
  }
};

const emptyCart = () => {
  const content = `
    <div class="container my-5">
      <div class="d-flex flex-column align-items-center justify-content-center bg-info rounded-2 py-5">
        <h2 class="cart-empty fw-bold mb-5">Your cart is empty</h2>
        <img src="./images/cartLogo.png" alt="cart image" class="img-fluid">
      </div>
    </div>
  `;
  document.getElementsByTagName('main')[0].innerHTML = content;
};

const cart = () => {
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const content = `
    <div class="container my-5 bg-info p-5">
      <h2 class="cart-items text-center fw-bold">Your cart items</h2>
      <p>Total: <span class="text-danger">${totalPrice}</span> EGP</p>
      <div class="row row-cols-1 row-cols-xl-2 row-gap-3">
        ${cartItems.map(pro => itemCard(pro.name, pro.image, pro.price, pro.id, pro.quantity)).join(' ')}
      </div>
    </div>
  `;
  document.getElementsByTagName('main')[0].innerHTML = content;
  // Add event listeners to remove buttons after the cart has been rendered
  attachRemoveItemEvent();
};

const itemCard = (title, image, price, id, quantity) => {
  const content = `
    <div class="col">
      <div class="card h-100 flex-md-row align-items-md-center p-3 gap-3">
        <div class="card-image">
          <img src="${image}" class="img-fluid rounded-3" alt="${title} image">
        </div>
        <div class="card-body">
          <div class="card-content mb-3">
            <h6 class="card-title">${title}</h6>
            <p>Price: <span class="text-info">${price}</span> EGP</p>
            <p>Quantity: <span class="text-info">${quantity}</span></p>
          </div>
          <button id="${id}" class="removeItem btn btn-dark">
            <span class="text-info me-2">Remove item</span>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  return content;
};

// Function to attach event listeners after rendering the cart
const attachRemoveItemEvent = () => {
  const removeItemBtn = document.querySelectorAll('.removeItem');

  // Loop through each button and add an event listener
  removeItemBtn.forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = e.currentTarget.getAttribute('id');
      const itemIndex = cartItems.findIndex(item => item.id == productId);
      cartItems.splice(itemIndex, 1)
      saveCartItems();
      showNotification('Product removed successfully', 'danger');
      updateCartCount();
      viewCart();
    });
  });
};

