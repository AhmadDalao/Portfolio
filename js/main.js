// automatic and manuel

var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load", function() {
    showSlides(slideIndex);
    myTimer = setInterval(function() {
        plusSlides(1);
    }, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName("slideshow-inner")[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName(
        "slideshow-container"
    )[0];

    slideshowContainer.addEventListener("mouseenter", pause);
    slideshowContainer.addEventListener("mouseleave", resume);
});

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides((slideIndex -= 1));
    } else {
        showSlides((slideIndex += 1));
    }

    // COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1) {
        myTimer = setInterval(function() {
            plusSlides(n + 2);
        }, 4000);
    } else {
        myTimer = setInterval(function() {
            plusSlides(n + 1);
        }, 4000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        plusSlides(n + 1);
    }, 4000);
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
};

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        plusSlides(slideIndex);
    }, 4000);
};


// smooth scroll
function scrollTo() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if ((link.href && link.href.indexOf('#') != -1) && ((link.pathname == location.pathname) || ('/' + link.pathname == location.pathname)) && (link.search == location.search)) {
            link.onclick = scrollAnchors;
        }
    }
}

// automatic slideshow
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 4000); // Change image every 4 seconds
// }

// fixed slideshow

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//
// }