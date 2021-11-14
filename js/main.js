// Loaded ******************************************************

$(window).on("load", () => {
    $("#preloader").css({
        opacity: 0,
        visibility: "hidden",
        transitionDelay: "4s",
    });
});

// Scrolled *******************************************************

$(window).scroll(() => {
    $("header").toggleClass("scrolled", window.scrollY > 1000);
});

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

// Count Down Function *********************************************

setInterval(function () {
    const finalDate = new Date("18 January, 2022").getTime();
    const intDate = new Date().getTime();

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor((finalDate - intDate) / days);
    let h = Math.floor(((finalDate - intDate) % days) / hours);
    let m = Math.floor(((finalDate - intDate) % hours) / minutes);

    $("#day").text(d);
    $("#hour").text(h);
    $("#minute").text(m);
}, 1000);
