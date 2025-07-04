const ssup = document.getElementById('signup');
const ssin = document.getElementById('signin');

ssup.addEventListener('click', () => {
    window.open('./signup', '_self');
});

ssin.addEventListener('click', () => {
    window.open('./login', '_self');
});