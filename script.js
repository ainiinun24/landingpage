// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
     nav.classList.toggle('slide');
});

function handleGetFormData() {
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value;
    let zipCode = document.getElementById('zip-code').value;
    let status = document.getElementById('status').value;
}

