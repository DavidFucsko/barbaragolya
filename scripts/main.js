'use strict';

(function () {
    let navigationItems = document.querySelectorAll('.navigation__item');
    let closeNavigationButton = document.querySelector('.navigation__checkbox');
    let closeNavigation = () => {
        closeNavigationButton.checked = false;
    };
    navigationItems.forEach(item => {
        item.addEventListener('click', () => {
            closeNavigation();
        });
    });

    AOS.init({
        duration: 1200
    });
})();