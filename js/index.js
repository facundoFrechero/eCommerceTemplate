const bar = document.getElementById('bar');
const navLinkEls = document.querySelectorAll('nav__link');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        this.classList.add('active') 
    })
}

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', function() {
        document.querySelector('.active')?.classList.remove('active');
        this.classList.add('active');
        console.log('ouch');    
    }, { passive: !ns.includes("noPreventDefault") })
});

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


