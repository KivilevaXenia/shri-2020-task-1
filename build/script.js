document.addEventListener('click', function(event) {
    if (event.target.classList.contains('onoffswitch')) {
        event.target.classList.toggle('onoffswitch_checked');
        var elems = document.getElementsByClassName('theme');
        for (elem of elems) {
            if (elem.classList.contains('theme_color_project-default') || elem.classList.contains('theme_color_project-inverse')) {
                elem.classList.toggle('theme_color_project-default');
                elem.classList.toggle('theme_color_project-inverse');
            }
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.closest('.e-accordion__short')) {
        event.target.closest('.e-accordion__short').nextElementSibling.classList.toggle('e-accordion__more');
    }
});
