// Loaded ******************************************************

$(window).on("load", () => {
    $("#preloader").css({
        opacity: 0,
        visibility: "hidden",
        transitionDelay: "4s",
    });
});

// Scrolled *******************************************************

let scrollPos = 0;
window.addEventListener("scroll", () => {
    let scrollPosNow = window.pageYOffset || document.pageYOffset;

    if (scrollPosNow > scrollPos) {
        $("header").addClass("active");
    } else {
        $("header").removeClass("active");
    }
    scrollPos = scrollPosNow;
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
