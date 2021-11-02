/* ********************************************************** */
// Team Members Data Object
/* ********************************************************** */

let teamDetails = [
    {
        id: 1,
        name: "Utpalendu Barman",
        avatar: "https://gdscjgec.github.io/assets/img/team/avatar_b.png",
        desc: "Member Tag Line",

        githubLink: "#",
        linkedinLink: "#",
        instagramLink: "#",
    },
    {
        id: 2,
        name: "Niloy Sikdar",
        avatar: "https://gdscjgec.github.io/assets/img/team/avatar_b.png",
        desc: "Member Tag Line",

        githubLink: "#",
        linkedinLink: "#",
        instagramLink: "#",
    },
    {
        id: 3,
        name: "Anubhab Sarkar",
        avatar: "https://gdscjgec.github.io/assets/img/team/avatar_b.png",
        desc: "Member Tag Line",

        githubLink: "#",
        linkedinLink: "#",
        instagramLink: "#",
    },
    {
        id: 4,
        name: "Niladri Mondal",
        avatar: "https://gdscjgec.github.io/assets/img/team/avatar_b.png",
        desc: "Member Tag Line",

        githubLink: "#",
        linkedinLink: "#",
        instagramLink: "#",
    },
    {
        id: 5,
        name: "Shreya Paul",
        avatar: "https://gdscjgec.github.io/assets/img/team/avatar_g.png",
        desc: "Member Tag Line",

        githubLink: "#",
        linkedinLink: "#",
        instagramLink: "#",
    },
    {
        id: 6,
        name: "Aman Prakash Jha",
        avatar: "https://gdscjgec.github.io/assets/img/team/avatar_b.png",
        desc: "Member Tag Line",

        githubLink: "#",
        linkedinLink: "#",
        instagramLink: "#",
    },
    {
        id: 7,
        name: "Sagnik Roy",
        avatar: "https://gdscjgec.github.io/assets/img/team/avatar_b.png",
        desc: "Member Tag Line",

        githubLink: "#",
        linkedinLink: "#",
        instagramLink: "#",
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
                <a href="${val.githubLink}"><i class="bx bxl-github"></i></a>
                <a href="${val.linkedinLink}"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.instagramLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});
