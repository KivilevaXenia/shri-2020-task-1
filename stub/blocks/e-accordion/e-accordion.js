let items = document.getElementsByClassName('e-accordion__short');
for (let i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        items[i].nextElementSibling.classList.toggle('e-accordion__more');
    }
}