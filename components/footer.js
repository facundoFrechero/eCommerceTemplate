class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <div class="col">
                <h4>Contact</h4>
                <p><strong>Dirección:</strong> Luro 1534, Mar del Plata, Buenos Aires</p>
                <p><strong>Número de Teléfono:</strong> +54 223 123-4567
                <p><strong>Horarios:</strong> 10:00 - 18:00, Lun - Vie</p>
                <div class="follow">
                    <h4>Seguinos en nuestras redes</h4>
                    <div class="icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-pinterest-p"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4>Acerca De</h4>
                <a href="#">Sobre Nosotros</a>
                <a href="#">Información de Entrega</a>
                <a href="#">Políticas de Privacidad</a>
                <a href="#">Términos y Condiciones</a>
                <a href="#">Contactanos</a>
            </div>
            <div class="col">
                <h4>Mi Cuenta Elepé</h4>
                <a href="#">Iniciar Sesión</a>
                <a href="#">Ver Carrito de Compras</a>
                <a href="#">Mi Lista de Deseos</a>
                <a href="#">Seguir mi Envío</a>
                <a href="#">Ayuda</a>
            </div>
            <div class="col install">
                <h4>Instalar App</h4>
                <p>Desde la App Store o Google Play</p>
                <div class="row logos">
                    <img src="../../img/pay/app.jpg" alt="">
                    <img src="../../img/pay/play.jpg" alt="">
                </div>
                <p>Métodos Seguros de Pago</p>
                <img src="../../img/pay/pay.png" alt="">
            </div>
            <div class="logo">
                <img class="logo" src="../../img/logo.jpg" alt="">
            </div>
            <div class="copyright">
                <p> © 2022, Facundo Frechero - JavaScript eCommerce Template</p>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);