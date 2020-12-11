import initMap from './maps.js';
import sendEmail from './sendEmail.js';

let startup = (function () {
    return {
        initialize: () => {
            const navigationItems = document.querySelectorAll('.navigation__item');
            const closeNavigationButton = document.querySelector('.navigation__checkbox');
            const navigation = document.querySelector('.navigation--desktop');
            const backToTopButton = document.querySelector('.back-to-top');
            const newMessage = document.querySelector('.connect__form--completed button[type="button"]');
            const sendMessage = document.querySelector("form[name='contact-form'] button[type='submit']");
            const emailInput = document.querySelector("form[name='contact-form'] input[name='contactEmailAddress']");
            const contatcForm = document.querySelector('.connect__form');
            const completedContactForm = document.querySelector('.connect__form--completed');

            let closeNavigation = () => {
                closeNavigationButton.checked = false;
            };
            let isInViewport = (elem) => {
                var bounding = elem.getBoundingClientRect();
                return (
                    bounding.top >= 0 &&
                    bounding.left >= 0 &&
                    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                    && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            };

            let hideBackToTop = () => {
                if (isInViewport(navigation) && !!backToTopButton) {
                    backToTopButton.style.display = "none";
                } else {
                    backToTopButton.style.display = "block";
                }
            }

            hideBackToTop();

            window.addEventListener('scroll', () => {
                hideBackToTop();
            }, { passive: true });

            navigationItems.forEach(item => {
                item.addEventListener('click', () => {
                    closeNavigation();
                });
            });

            newMessage.addEventListener('click', () => {
                completedContactForm.classList.remove('fade-in');
                contatcForm.classList.remove('fade-out');
                contatcForm.classList.add('fade-in');
                contatcForm.style.display = 'block';
                setTimeout(() => {
                    completedContactForm.style.display = 'none';
                }, 1000);
            });

            emailInput.addEventListener('input', () => {
                sendMessage.disabled = emailIsValid(emailInput.value) ? false : true;
            });

            AOS.init({
                duration: 1200
            });

            const contactForm = document.querySelector('#contact-form');
            contactForm.addEventListener('submit', sendEmail)

            window.initMap = initMap;
        }
    }
})();

let emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default startup;