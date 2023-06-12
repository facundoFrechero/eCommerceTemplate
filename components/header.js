class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <section id="header">
          <a href="#"><img src="../../img/logo.jpg" class="logo" alt=""></a>

          <div>
            <ul id="navbar">
                <li><a class="nav__link active" href="../../index.html">Inicio</a></li>
                <li><a class="nav__link" href="../html/shop.html">Tienda</a></li>
                <li><a class="nav__link" href="../html/about.html">Sobre Nosotros</a></li>
                <li><a class="nav__link" href="../html/contact.html">Contactanos</a></li>
                <li><a class="nav__link cart-bag" href="../html/cart.html"><i class="fa-solid fa-bag-shopping"></i></a></li>
                <a id="close"><i class="fa-solid fa-times"></i></a>
            </ul>
          </div>

          <div id="mobile">
            <a class="link" href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a>
            <i id="bar" class="fa-solid fa-bars"></i>
          </div>
    </section>
    <script src="../../js/index.js"></script>
      `;
  }
}

customElements.define("header-component", Header);
