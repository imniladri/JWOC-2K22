// Loaded ******************************************************

$(window).on("load", () => {
    let FirstTime_Loaded = sessionStorage.getItem("FirstTime_Loaded");
    sessionStorage.setItem("FirstTime_Loaded", "enabled");

    if (FirstTime_Loaded === "enabled") {
        $("#preloader").css({
            opacity: 0,
            visibility: "hidden",
        });
    } else {
        $("#preloader").css({
            opacity: 0,
            visibility: "hidden",
            transitionDelay: "4s",
        });
    }
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

function countTimer() {
    const getDate = $("div.timer").attr("data-date");
    const finalDate = new Date(getDate).getTime();
    const intDate = new Date().getTime();

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor((finalDate - intDate) / days);
    let h = Math.floor(((finalDate - intDate) % days) / hours);
    let m = Math.floor(((finalDate - intDate) % hours) / minutes);
    let s = Math.floor(((finalDate - intDate) % minutes) / seconds);

    d = d < 10 ? `0${d}` : d;
    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    $("#day").text(d);
    $("#hour").text(h);
    $("#minute").text(m);
    $("#second").text(s);
}

setInterval(function () {
    countTimer();
}, 1000);

// Search Function of USERNAME *********************************************

$("form.searchUser input#search").on("input", function () {
    let value = $(this).val().toLowerCase();
    $("div.rank_table tbody tr").filter(function () {
        $(this).toggle(
            $(this).find("td a").text().toLowerCase().indexOf(value) > -1
        );
    });
});

// Activate Discord Modal *********************************************

$("form[name='mentee-registration'] button#discordModal").click(function () {
    $("div#form_modal").toggleClass("active");
});

// Discord Modal CLose *********************************************

$("div#form_modal i#modal_close").click(function () {
    $("div#form_modal").removeClass("active");
});
