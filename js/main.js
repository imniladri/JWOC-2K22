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

$('a[href^="#"]').click(function (e) {
    e.preventDefault();
    $("html, body").animate(
        {
            scrollTop: $($(this).attr("href")).offset().top,
        },
        500
        // "easeInOutExpo"
    );
});

// Accordion Slide Toggle *********************************************

$("div.faq_card").click(function () {
    $(this).toggleClass("active");
    $(this).find("span p").slideToggle(200);
});

// Go Back Function *********************************************

$(".goBack").click(function () {
    window.history.back();
});
