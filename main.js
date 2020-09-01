const toggle = document.getElementById('check');
const price = document.getElementById('price');

toggle.addEventListener('change', function(){
    price.classList.toggle('show-hide');
});