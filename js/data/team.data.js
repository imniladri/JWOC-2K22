/* ********************************************************** */
// Team Members Data Object
/* ********************************************************** */

let teamDetails = [
    {
        id: 1,
        name: "Utpalendu Barman",
        avatar: "/assets/img/team/utpalendu_barman.jpg",
        desc: "Member Role",

        githubLink: "https://github.com/utpalendubarman",
        linkedinLink: "https://www.linkedin.com/in/utpalendubarman/",
        twitterLink: "https://twitter.com/badhanbarman",
    },
    {
        id: 2,
        name: "Niloy Sikdar",
        avatar: "/assets/img/team/niloy_sikdar.jpg",
        desc: "Member Role",

        githubLink: "https://github.com/niloysikdar",
        linkedinLink: "https://www.linkedin.com/in/niloysikdar/",
        twitterLink: "https://twitter.com/niloysikdar_",
    },
    {
        id: 3,
        name: "Anubhab Sarkar",
        avatar: "/assets/img/team/anubhab_sarkar.jpg",
        desc: "Member Role",

        githubLink: "https://github.com/anubhab1710",
        linkedinLink: "https://www.linkedin.com/in/anubhabsarkar/",
        twitterLink: "https://twitter.com/xperiencewhiz",
    },
    {
        id: 4,
        name: "Niladri Mondal",
        avatar: "/assets/img/team/niladri_mondal.jpg",
        desc: "Member Role",

        githubLink: "https://github.com/imniladri",
        linkedinLink: "https://www.linkedin.com/in/imniladrimondal/",
        twitterLink: "https://twitter.com/imniladrimondal",
    },
    {
        id: 5,
        name: "Shreya Paul",
        avatar: "/assets/img/team/shreya_paul.jpg",
        desc: "Member Role",

        githubLink: "https://github.com/paulshreya",
        linkedinLink: "https://www.linkedin.com/in/shreya-paul-05a0a61aa/",
        twitterLink: "https://twitter.com/__paul_shreya__",
    },
    {
        id: 6,
        name: "Aman Prakash Jha",
        avatar: "https://gdscjgec.github.io/assets/img/team/avatar_b.png",
        desc: "Member Role",

        githubLink: "#",
        linkedinLink: "#",
        twitterLink: "#",
    },
    {
        id: 7,
        name: "Sagnik Roy",
        avatar: "/assets/img/team/sagnik_roy.jpg",
        desc: "Member Role",

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
            <p><span>${val.desc}</span></p>
            <div class="social">
                <a href="${val.githubLink}" target="_blank"><i class="bx bxl-github"></i></a>
                <a href="${val.linkedinLink}" target="_blank"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.twitterLink}" target="_blank"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});
