(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('position-fixed bg-dark shadow-sm');
        } else {
            $('.navbar').removeClass('position-fixed bg-dark shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);

// test
<!-- OPTIONAL JS FOR ACTIVE BUTTON -->
    const qualityButtons = document.querySelectorAll('.quality-btn');

    qualityButtons.forEach(button => {
        button.addEventListener('click', () => {

            qualityButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            // OPTIONAL:
            // You can dynamically switch stream URLs here
            // based on selected quality

            console.log("Selected:", button.dataset.quality);
        });
    });

    // Media Footer

    // SET NEXT SERVICE DATE/TIME
    // Year, Month(0-11), Day, Hour, Minute, Second
    const nextService = new Date(2026, 4, 31, 9, 0, 0).getTime();

    const countdown = setInterval(() => {

        const now = new Date().getTime();

        const distance = nextService - now;

        // TIME CALCULATIONS
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

        // DISPLAY RESULT
        document.getElementById("hours").innerHTML =
            String(hours).padStart(2, '0');

        document.getElementById("minutes").innerHTML =
            String(minutes).padStart(2, '0');

        document.getElementById("seconds").innerHTML =
            String(seconds).padStart(2, '0');

        // IF COUNTDOWN FINISHED
        if (distance < 0) {

            clearInterval(countdown);

            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }

    }, 1000);
