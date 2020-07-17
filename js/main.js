let myNav = document.getElementById('navbar'),
    icon = document.querySelector('.my-container'),
    myColor = document.querySelectorAll('.color-change'),
    list,
    filter_list;

/* this is  the custom attribute name  which value is to be changed */
const changeMe = "--main-color";
/* setting the color from the localStorage  by retrieving */

document.documentElement.style.setProperty(changeMe, localStorage.getItem("colorStored"));


/*  getting value of  */
list = document.querySelectorAll('[data-color]');
// console.log(list.length);

for (let i = 0; i < list.length; ++i) {
    list[i].addEventListener("click", function(e) {
        // store attribute value in localStorage
        localStorage.setItem("colorStored", e.target.getAttribute('data-color'));
        // console.log("attribute value " + e.target.getAttribute('data-color'));

        // change color based on the attribute value.
        document.documentElement.style.setProperty(changeMe, e.target.getAttribute('data-color'));
        // console.log("My local storage value " + localStorage.getItem("colorStored"));

    }, false);
}


// gallery filter 
$(function() {
    $(".filter").click(function() {
        $(this).addClass('custom__active').siblings().removeClass('custom__active');
        $($(this).data('filter')).fadeIn(500);
        $('.card-holder').find('article').not($(this).data('filter')).fadeOut(1000);
        console.log($(this).data('filter'));

    });
});

/* side icon */
document.getElementById('color-toggler').addEventListener('click', function() {
    document.getElementById('color-container').classList.toggle('show');
});


/* if the screen height is below 550 and you click on the bar icon the navbar will get background if it was transparent */
myNav.addEventListener('click', function() {
    if (document.body.scrollTop < 550 && document.documentElement.scrollTop < 550) {
        if (myNav.className === "nav-transparent" || myNav.className === "nav-colored");
        myNav.classList.add('nav-colored');
    }
});

/* if the screen height is below 550 and you hover over the bar icon the navbar will get background if it was transparent */
myNav.addEventListener('mousemove', function() {
    if (document.body.scrollTop < 550 && document.documentElement.scrollTop < 550) {
        myNav.classList.remove('nav-transparent');
        myNav.classList.add('nav-colored');
    }
});

/* if the screen height is below 550 and you hover out,  the navbar will get back to transparent */
myNav.addEventListener('mouseout', function() {
    if (document.body.scrollTop < 550 && document.documentElement.scrollTop < 550) {
        myNav.classList.remove('nav-colored');
        myNav.classList.add('nav-transparent');

    }
});


/* if scrolling add the background color to the navbar */
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

// slow scroll 

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// adding class to the label so it moves up from the input field

$(".custom__input").focus(function() {
    $(this).next(".custom__label").addClass('custom__transition');
});

/* this line suppose to remove the previous class custom transition so the layout returns to the way it was */

$(".custom__submit").click(function() {
    $(this).prev(".custom__label").removeClass('custom__transition');
});

// loading screen

$(window).on("load", function() {
    $(".loading__title , .spinner-container").fadeOut(99999);
    $(".loading-screen").fadeOut(400, function() {
        $("body").css("overflow", "auto");
        $(this).remove();
    });
});