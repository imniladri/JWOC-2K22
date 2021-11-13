/* ********************************************************** */
// Team Members Data Object
/* ********************************************************** */

let teamDetails = [
    {
        id: 1,
        name: "Utpalendu Barman",
        avatar: "/assets/img/team/utpalendu_barman.jpg",
        desc: "Portfolio",

        githubLink: "https://github.com/utpalendubarman",
        linkedinLink: "https://www.linkedin.com/in/utpalendubarman/",
        twitterLink: "https://twitter.com/badhanbarman",
    },
    {
        id: 2,
        name: "Niloy Sikdar",
        avatar: "/assets/img/team/niloy_sikdar.jpg",
        desc: "Portfolio",

        githubLink: "https://github.com/niloysikdar",
        linkedinLink: "https://www.linkedin.com/in/niloysikdar/",
        twitterLink: "https://twitter.com/niloysikdar_",
    },
    {
        id: 3,
        name: "Anubhab Sarkar",
        avatar: "/assets/img/team/anubhab_sarkar.jpg",
        desc: "Portfolio",

        githubLink: "https://github.com/anubhab1710",
        linkedinLink: "https://www.linkedin.com/in/anubhabsarkar/",
        twitterLink: "https://twitter.com/xperiencewhiz",
    },
    {
        id: 4,
        name: "Niladri Mondal",
        avatar: "/assets/img/team/niladri_mondal.jpg",
        desc: "Portfolio",

        githubLink: "https://github.com/imniladri",
        linkedinLink: "https://www.linkedin.com/in/imniladrimondal/",
        twitterLink: "https://twitter.com/imniladrimondal",
    },
    {
        id: 5,
        name: "Shreya Paul",
        avatar: "/assets/img/team/shreya_paul.jpg",
        desc: "Portfolio",

        githubLink: "https://github.com/paulshreya",
        linkedinLink: "https://www.linkedin.com/in/shreya-paul-05a0a61aa/",
        twitterLink: "https://twitter.com/__paul_shreya__",
    },
    {
        id: 6,
        name: "Aman Prakash Jha",
        avatar: "/assets/img/team/aman_prakash_jha.jpg",
        desc: "Portfolio",

        githubLink: "https://github.com/amanjha8100",
        linkedinLink: "https://www.linkedin.com/in/aman-prakash-jha/",
        twitterLink: "https://twitter.com/aman_ItIs",
    },
    {
        id: 7,
        name: "Sagnik Roy",
        avatar: "/assets/img/team/sagnik_roy.jpg",
        desc: "Portfolio",

        githubLink: "https://github.com/sagnik1511",
        linkedinLink: "https://www.linkedin.com/in/sagnik1511/",
        twitterLink: "https://twitter.com/Agnik1511S",
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
            <a href="#" class="btn"><span>${val.desc}</span></a>
            <div class="social">
                <a href="${val.githubLink}" target="_blank"><i class="bx bxl-github"></i></a>
                <a href="${val.linkedinLink}" target="_blank"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.twitterLink}" target="_blank"><i class="bx bxl-instagram"></i></a>
            </div>
        </div>
    `;
});
