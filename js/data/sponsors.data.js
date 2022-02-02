/* ********************************************************** */
// Sponsors Data Object
/* ********************************************************** */

// Diamond Tier

let diamondTierData = [
    {
        id: 1,
        name: "TopCoder",
        link: "https://www.topcoder.com/",
        img: "./assets/img/sponsors/topcoder.png",
        width: "w20",
    },
];

// Gold Tier

let goldTierData = [
    {
        id: 1,
        name: "Prep Bytes",
        link: "https://www.prepbytes.com/",
        img: "./assets/img/sponsors/prepbytes.svg",
        width: "w20",
    },
    {
        id: 2,
        name: "Sashido",
        link: "https://www.sashido.io/",
        img: "./assets/img/sponsors/sashido.png",
        width: "w20",
    },
    {
        id: 3,
        name: "JetBrains",
        link: "https://www.jetbrains.com/",
        img: "./assets/img/sponsors/jetbrains.svg",
        width: "w15",
    },
    {
        id: 4,
        name: "Reboot Marketing",
        link: "https://rebootmarketing.in/",
        img: "./assets/img/sponsors/rebootmarketing.png",
        width: "w30",
    },
];

// Silver Tier

let silverTierData = [
    {
        id: 1,
        name: "Axure",
        link: "https://www.axure.com/",
        img: "./assets/img/sponsors/axure.svg",
        width: "w15",
    },
    {
        id: 2,
        name: "Hack Club",
        link: "https://hackclub.com/",
        img: "./assets/img/sponsors/hackclub.svg",
        width: "w20",
    },
    {
        id: 3,
        name: "XYZ",
        link: "https://gen.xyz/",
        img: "./assets/img/sponsors/xyz.svg",
        width: "w15",
    },
];

// Community Partner

let communityPartnerData = [
    {
        id: 1,
        name: "Google Developer Student Clubs, JGEC",
        link: "https://gdsc.community.dev/jalpaiguri-government-engineering-college-jalpaiguri/",
        img: "./assets/img/sponsors/gdsc-jgec.png",
        width: "w25",
    },
    {
        id: 2,
        name: "GeeksforGeeks JGEC Chapter",
        link: "https://www.geeksforgeeks.org/",
        img: "./assets/img/sponsors/geeksforgeeks.png",
        width: "w25",
    },
    {
        id: 3,
        name: "Microsoft Learn Student Ambassador",
        link: "https://studentambassadors.microsoft.com/",
        img: "./assets/img/sponsors/microsoft-student.png",
        width: "w15",
    },
    {
        id: 4,
        name: "Commudle",
        link: "https://www.commudle.com/",
        img: "./assets/img/sponsors/commudle.png",
        width: "w20",
    },
];

// Media Partner

let mediaPartnerData = [
    {
        id: 1,
        name: "Give My Certificate",
        link: "https://givemycertificate.com/",
        img: "./assets/img/sponsors/givemycertificate.png",
        width: "w35",
    },
];

// Learning Partner

let learningPartnerData = [
    {
        id: 1,
        name: "Gitopia",
        link: "https://gitopia.com/",
        img: "./assets/img/sponsors/gitopia.svg",
        width: "w20",
    },
];

/* ********************************************************** */
// Sponsors Preview Mapping
/* ********************************************************** */

let diamondTierContent = document.querySelector("div.diamond div.sponsors");
let goldTierContent = document.querySelector("div.gold div.sponsors");
let silverTierContent = document.querySelector("div.silver div.sponsors");
let communityPartnerContent = document.querySelector("div.community div.sponsors");
let mediaPartnerContent = document.querySelector("div.media div.sponsors");
let learningPartnerContent = document.querySelector("div.learning div.sponsors");

// Diamond Tier Preview

Object.values(diamondTierData).map((val) => {
    diamondTierContent.innerHTML += `
        <a href="${val.link}" target="_blank">
        <img src="${val.img}" alt="${val.name}" class="${val.width}" />
        </a>
    `;
});

// Gold Tier Preview

Object.values(goldTierData).map((val) => {
    goldTierContent.innerHTML += `
        <a href="${val.link}" target="_blank">
        <img src="${val.img}" alt="${val.name}" class="${val.width}" />
        </a>
    `;
});

// Silver Tier Preview

Object.values(silverTierData).map((val) => {
    silverTierContent.innerHTML += `
        <a href="${val.link}" target="_blank">
        <img src="${val.img}" alt="${val.name}" class="${val.width}" />
        </a>
    `;
});

// Community Partner Preview

Object.values(communityPartnerData).map((val) => {
    communityPartnerContent.innerHTML += `
        <a href="${val.link}" target="_blank">
        <img src="${val.img}" alt="${val.name}" class="${val.width}" />
        </a>
    `;
});

// Media Partner Preview

Object.values(mediaPartnerData).map((val) => {
    mediaPartnerContent.innerHTML += `
        <a href="${val.link}" target="_blank">
            <img src="${val.img}" alt="${val.name}" class="${val.width}" />
        </a>
    `;
});

// Learning Partner Preview

Object.values(learningPartnerData).map((val) => {
    learningPartnerContent.innerHTML += `
        <a href="${val.link}" target="_blank">
            <img src="${val.img}" alt="${val.name}" class="${val.width}" />
        </a>
    `;
});
