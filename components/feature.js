class Feature extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section id="feature" class="section-p1">
        <div class="fe-box">
            <img src="../../img/features/f1.png" alt="">
            <h6>Envío Gratis</h6>
        </div>
        <div class="fe-box">
            <img src="../../img/features/f2.png" alt="">
            <h6>Compra Online</h6>
        </div>
        <div class="fe-box">
            <img src="../../img/features/f3.png" alt="">
            <h6>Ahorrá Dinero</h6>
        </div>
        <div class="fe-box">
            <img src="../../img/features/f4.png" alt="">
            <h6>Promociones</h6>
        </div>
        <div class="fe-box">
            <img src="../../img/features/f5.png" alt="">
            <h6>Buena Atención</h6>
        </div>
        <div class="fe-box">
            <img src="../../img/features/f6.png" alt="">
            <h6>Soporte 24/7</h6>
        </div>
    </section>
        `
    }
}

customElements.define("feature-component", Feature);