document.addEventListener('click', function(event) {
    if (event.target.closest('.e-accordion__short')) {
        event.target.closest('.e-accordion__short').nextElementSibling.classList.toggle('e-accordion__more');
    }
});
