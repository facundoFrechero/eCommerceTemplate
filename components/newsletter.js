class Newsletter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="newsletter" class="section-p1 section-m1">
            <div class="newstext">
                <h4>Subscribite a nuestro newsletter!</h4>
                <p>Recibí e-mails sobre nuestros últimos productos y <span>ofertas especiales.</span></p>
            </div>
            <div class="form">
                <input type="text" placeholder="Tu dirección e-mail">
                <button class="normal">Subscribirse</button>
            </div>
        </section>
        `;
    }
}

customElements.define('newsletter-component', Newsletter);