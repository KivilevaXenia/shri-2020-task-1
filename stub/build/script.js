var switcher = document.getElementsByClassName('onoffswitch')[0];
switcher.onclick = function () {
    switcher.classList.toggle('onoffswitch_checked');
    var elems = document.getElementsByClassName('theme');
    for (elem of elems) {
        if (elem.classList.contains('theme_color_project-default') || elem.classList.contains('theme_color_project-inverse')) {
            elem.classList.toggle('theme_color_project-default');
            elem.classList.toggle('theme_color_project-inverse');
        }
    }
}
let items = document.getElementsByClassName('e-accordion__short');
for (let i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        items[i].nextElementSibling.classList.toggle('e-accordion__more');
    }
}