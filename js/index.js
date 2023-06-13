const bar = document.querySelector('#bar');
const navBar = document.getElementById('navbar')
const close = document.getElementById('close');
const activePage = window.location.pathname;

bar.addEventListener('click', () => {
    bar.classList.toggle("active");
    navBar.classList.toggle("active");
});

if (close) {
    close.addEventListener('click', () => {
        navBar.classList.remove('active')
    })
}

const navLinks = document.querySelectorAll('ul a').forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
})


