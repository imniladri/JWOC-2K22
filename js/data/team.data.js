/* ********************************************************** */
// Team Members Data Object
/* ********************************************************** */

let teamDetails = [
    {
        id: 1,
        name: "Utpalendu Barman",
        avatar: "/assets/img/team/utpalendu_barman.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/utpalendubarman",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/utpalendubarman/",

        socialIcon3: "bx bxl-twitter",
        socialLink3: "https://twitter.com/badhanbarman",
    },
    {
        id: 2,
        name: "Niloy Sikdar",
        avatar: "/assets/img/team/niloy_sikdar.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/niloysikdar",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/niloysikdar/",

        socialIcon3: "bx bxl-twitter",
        socialLink3: "https://twitter.com/niloysikdar_",
    },
    {
        id: 3,
        name: "Anubhab Sarkar",
        avatar: "/assets/img/team/anubhab_sarkar.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/anubhab1710",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/anubhabsarkar/",

        socialIcon3: "bx bxl-twitter",
        socialLink3: "https://twitter.com/xperiencewhiz",
    },
    {
        id: 4,
        name: "Niladri Mondal",
        avatar: "/assets/img/team/niladri_mondal.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/imniladri",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/imniladrimondal/",

        socialIcon3: "bx bxl-twitter",
        socialLink3: "https://twitter.com/imniladrimondal",
    },
    {
        id: 5,
        name: "Shreya Paul",
        avatar: "/assets/img/team/shreya_paul.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/paulshreya",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/shreya-paul-05a0a61aa/",

        socialIcon3: "bx bxl-twitter",
        socialLink3: "https://twitter.com/__paul_shreya__",
    },
    {
        id: 6,
        name: "Aman Prakash Jha",
        avatar: "/assets/img/team/aman_prakash_jha.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/amanjha8100",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/aman-prakash-jha/",

        socialIcon3: "bx bxl-twitter",
        socialLink3: "https://twitter.com/aman_ItIs",
    },
    {
        id: 7,
        name: "Sagnik Roy",
        avatar: "/assets/img/team/sagnik_roy.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/sagnik1511",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/sagnik1511/",

        socialIcon3: "bx bxl-twitter",
        socialLink3: "https://twitter.com/Agnik1511S",
    },
];

/* ********************************************************** */
// Team Members Preview Mapping
/* ********************************************************** */

let teamDiv = document.querySelector(".members");

Object.values(teamDetails).map((val) => {
    teamDiv.innerHTML += `
        <!-- Member ${val.id} -->
        <div class="member_card">
            <img src="${val.avatar}" alt="Profile Img" />
            <h2>${val.name}</h2>
            <p><span>${val.desc}</span></p>
            <div class="social">
                <a href="${val.socialLink1}" target="_blank"><i class="${val.socialIcon1}"></i></a>
                <a href="${val.socialLink2}" target="_blank"><i class="${val.socialIcon2}"></i></a>
                <a href="${val.socialLink3}" target="_blank"><i class="${val.socialIcon3}"></i></a>
            </div>
        </div>
    `;
});
