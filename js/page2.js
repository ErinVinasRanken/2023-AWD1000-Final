"use strict"

$ (document).ready( () =>
{
    $(".accordion-button").click( evt =>
        {
            const button = evt.currentTarget;
        

    $(button).toggleClass("minus");

    const accordionCollapse = $(button).parent().next(".accordion-collapse");
    accordionCollapse.toggleClass("show");
    
    evt.preventDefault();
});

    $("#faqs").find("a:first").focus();
});

document.addEventListener('DOMContentLoaded', function () 
{
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', function () 
    {
        navLinks.classList.toggle('active');
    });
});
