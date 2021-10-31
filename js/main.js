// Loaded ******************************************************

$(window).on("load", () => {
    $("#preloader").css({
        opacity: 0,
        visibility: "hidden",
        transitionDelay: "5.5s",
    });
    $(".loader").css({
        opacity: 0,
        visibility: "hidden",
        transitionDelay: "5s",
    });

    setTimeout(() => {
        $("body").addClass("loaded");
    }, 6000);
});

// Scrolled *******************************************************

$(window).scroll(() => {
    $("header").toggleClass("active", window.scrollY > 1000);
});

// Rellax JS Int ***************************************************

// var rellax = new Rellax(".rellax");
var rellax = new Rellax(".rellax", {
    center: true,
});

// Navbar Toggle ***************************************************

$("div.menu_btn, a.nav_links").click(() => {
    $("div.menu_btn").toggleClass("active");
});

// #Id Url, Page Scroll *********************************************

$('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
        {
            scrollTop: $($(this).attr("href")).offset().top,
        },
        500
        // "easeInOutExpo"
    );
});
