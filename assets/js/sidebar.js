(function ($) {
    "use strict";

    const navSlide = () => {
        const burger = document.querySelector(".mobile-menu-btn");
        const nav = document.querySelector(".main-nav-js");
        const navLinks = document.querySelectorAll(".main-nav-js .menu-list .menu-item");
        const menuClose = document.querySelector(".menu-close-btn");
        burger.addEventListener("click", () => {
            nav.classList.add("show-menu");
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } 
                else {
                    link.style.animation = `navLinkFade 0.4s ease forwards ${index / 10 + 0.5
                        }s `;
                }
            });
        });
        menuClose.addEventListener("click", () => {
            nav.classList.remove("show-menu");
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinkFade 0.4s ease forwards ${index / 10 + 0.5
                        }s `;
                }
            });
        });
    };
    navSlide();

    $(".main-nav-js .bi").on('click', function (event) {
        var $fl = $(this);
        $(this).parent().siblings().find('.sub-menu').slideUp();
        $(this).parent().siblings().find('.bi').addClass('fa-light fa-plus');
        if ($fl.hasClass('fa-light fa-plus')) {
            $fl.removeClass('fa-light fa-plus').addClass('fa-light fa-minus');
        } else {
            $fl.removeClass('fa-light fa-minus').addClass('fa-light fa-plus');
        }
        $fl.next(".sub-menu").slideToggle();
    });


})(jQuery);