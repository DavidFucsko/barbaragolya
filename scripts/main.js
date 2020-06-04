'use strict';

(function () {
    let navigationItems = document.querySelectorAll('.navigation__item');
    let closeNavigationButton = document.querySelector('.navigation__checkbox');
    let navigation = document.querySelector('.navigation--desktop');
    let backToTopButton = document.querySelector('.back-to-top');

    let closeNavigation = () => {
        closeNavigationButton.checked = false;
    };
    let isInViewport = (elem) => {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    let hideBackToTop = () => {
        if (isInViewport(navigation)) {
            backToTopButton.style.display = "none";
        } else {
            backToTopButton.style.display = "block";
        }
    }

    hideBackToTop();

    window.addEventListener('scroll', () => {
        hideBackToTop();
    });

    navigationItems.forEach(item => {
        item.addEventListener('click', () => {
            closeNavigation();
        });
    });

    AOS.init({
        duration: 1200
    });
})();