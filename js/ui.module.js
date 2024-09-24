export class Display {
  registerPage() {
    const layout = `
      <div class="vh-100 d-flex justify-content-center align-items-center">
        <div class="container py-5">
          <div class="card shadow-lg bg-info p-3">
            <div class="row">
              <div class="col-12 col-md-7 d-flex flex-column justify-content-center bg-light py-5 rounded-2 shadow-lg">
                <div class="mb-3">
                  <div class="d-flex align-items-center justify-content-center mb-5">
                    <i class="fa-brands fa-opencart fa-2x me-3 mb-3 text-info"></i>
                    <h1 class="fw-bold mb-3">Shopping Cart</h1>
                  </div>
                  <p class="text-info fw-normal my-3">Create new account</p>
                </div>
                <div class="mb-5">
                  <form id="RegisterForm">
                    <div class="form-floating mb-3">
                      <input type="email" id="registerEmail" class="form-control border-0 border-bottom border-info focus-ring focus-ring-info" placeholder="name@example.com" required>
                      <div class="invalid-feedback mt-2"></div>
                      <label class="form-label" for="registerEmail">Email address</label>
                    </div>
                    <div class="form-floating mb-5">
                      <input type="password" id="registerPassword" class="form-control border-0 border-bottom border-info focus-ring focus-ring-info" placeholder="Password" required>
                      <div class="invalid-feedback mt-2"></div>
                      <label class="form-label" for="registerPassword">Password</label>
                    </div>
                    <div class="mb-3">
                      <button id="registerBtn" class="btn btn-dark btn-lg w-100" type="button">Register</button>
                    </div>
                  </form>
                </div>
                <div class="mb-3">
                  <p class="my-2">Do you have an account?<button class="btn text-info" id="loginHere">Login here</button></p>
                </div>
              </div>
              <div class="col-md-5 d-none d-md-flex justify-content-center align-items-center">
                <img src="./images/cartLogo.png" class="img-fluid" alt="logo image">
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.getElementById("main").innerHTML = layout;
  }

  loginPage() {
    const layout = `
      <div class="vh-100 d-flex justify-content-center align-items-center">
        <div class="container py-5">
          <div class="card shadow-lg bg-info p-3">
            <div class="row">
              <div class="col-md-5 d-none d-md-flex justify-content-center align-items-center">
                <img src="./images/cartLogo.png" class="img-fluid" alt="logo image">
              </div>
              <div class="col-12 col-md-7 d-flex flex-column justify-content-center bg-light py-5 rounded-2 shadow-lg">
                <div class="mb-3">
                  <div class="d-flex align-items-center justify-content-center mb-5">
                    <i class="fa-brands fa-opencart fa-2x me-3 mb-3 text-info"></i>
                    <h1 class="fw-bold mb-3">Shopping Cart</h1>
                  </div>
                  <p class="text-info fw-normal my-3">Sign into your account</p>
                </div>
                <div class="mb-5">
                  <form id="loginForm">
                    <div class="form-floating mb-3">
                      <input type="email" id="loginInput" class="form-control border-0 border-bottom border-info focus-ring focus-ring-info" placeholder="name@example.com" required>
                      <div class="invalid-feedback mt-2"></div>
                      <label class="form-label" for="loginInput">Email address</label>
                    </div>
                    <div class="form-floating mb-5">
                      <input type="password" id="loginPassword" class="form-control border-0 border-bottom border-info focus-ring focus-ring-info" placeholder="Password" required>
                      <div class="invalid-feedback mt-2"></div>
                      <label class="form-label" for="loginPassword">Password</label>
                    </div>
                    <div class="mb-3">
                      <button id="loginBtn" class="btn btn-dark btn-lg w-100" type="button">Login</button>
                    </div>
                  </form>
                </div>
                <div class="mb-3">
                  <p class="my-2">Don't have an account?<button class="btn text-info" id="registerHere">Register here</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    document.getElementById("main").innerHTML = layout;
  }

  navbar(cartCount, userName) {
    const layout = `
        <div class="container">
          <a class="navbar-brand" href="#" id="home">
            <i class="fa-brands fa-opencart fa-xl me-3 text-info"></i>
            <span class="h6 fw-bold text-light">Shopping Cart</span>
          </a>
          <button class="navbar-toggler border-info focus-ring focus-ring-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars text-light"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 py-5 py-md-0">
              <li class="nav-item">
                <a class="nav-link" href="#" aria-label="View Cart" id="cart">
                  <i class="fa-brands fa-opencart text-info"></i>
                  <i id="cartCount" class="count text-light">${cartCount}</i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" aria-label="User Profile">
                  <i class="fa-solid fa-user text-info"></i>
                  <span class="user-name text-light text-capitalize ms-1">${userName}</span>
                </a>
              </li>
              <li class="nav-item ms-0 ms-md-4 mt-4 mt-md-0 d-flex align-items-center">
                <button class="btn btn-outline-info btn-sm" id="logoutBtn" aria-label="logout Button">Logout</button>
              </li>
            </ul>
          </div>
        </div>
    `;
    const navSection = document.getElementById("navbar");
    navSection.classList = "navbar navbar-expand-md bg-dark py-3";
    navSection.innerHTML = layout;
  }

  product(title, image, description, price, id) {
    const item = `
        <div class="col">
          <div class="card h-100 shadow-lg">
            <img src="${image}" class="card-img-top" alt="${title} image">
            <div class="card-body d-flex flex-column justify-content-between">
              <div class="card-content mb-4">
                <h6 class="card-title fw-bold">${title}</h6>
                <p class="card-text text-black-50">${description}</p>
              </div>
              <div class="card-footer border-info">
              <p>
                <span>Price:</span>
                <span class="text-info">${price}</span>
                <span>EGP</span>
              </p>
              <button id="${id}" class="addToCart btn btn-dark w-100">
                <span class="text-info me-2">Add to cart</span>
                <i class="fa-solid fa-cart-arrow-down text-light"></i>
              </button>
              </div>
            </div>
          </div>
        </div>`;
    return item;
  }

  products(products) {
    const layout = `
      <div class="container my-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 row-gap-3">
          ${products
            .map((pro) =>
              this.product(
                pro.name,
                pro.image,
                pro.description,
                pro.price,
                pro.id
              )
            )
            .join(" ")}
        </div>
      </div>
    `;
    document.getElementById("main").innerHTML = layout;
  }

  emptyCart() {
    const layout = `
      <div class="container my-5">
        <div class="d-flex flex-column align-items-center justify-content-center bg-info rounded-2 py-5">
          <h2 class="cart-empty fw-bold mb-5">Your cart is empty</h2>
          <img src="./images/cartLogo.png" alt="cart image" class="img-fluid">
        </div>
      </div>
    `;
    document.getElementById("main").innerHTML = layout;
  }

  cart(cartItems, totalPrice){
    const layout = `
      <div class="container my-5 bg-info p-5">
        <h2 class="cart-items text-center fw-bold">Your cart items</h2>
        <p>Total: <span class="text-danger">${totalPrice}</span> EGP</p>
        <div class="row row-cols-1 row-cols-xl-2 row-gap-3">
          ${cartItems.map(pro => this.itemCard(pro.name, pro.image, pro.price, pro.id, pro.quantity)).join(' ')}
        </div>
      </div>
    `;
    document.getElementById("main").innerHTML = layout;
  }

  itemCard = (title, image, price, id, quantity) => {
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
  }
}
