/* ********************************************************** */
// Projects Data Object
/* ********************************************************** */

let projectsDetails = [
    {
        id: 1,
        name: "Project Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe!",
        link: "#",
        adminName: "User Name",
        adminLink: "#",
        techTags: `<span>Docker</span> <span>Javascript</span> <span>Python</span>`,
    },
    {
        id: 2,
        name: "Project Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe!",
        link: "#",
        adminName: "User Name",
        adminLink: "#",
        techTags: `<span>Docker</span> <span>Javascript</span> <span>Python</span>`,
    },
    {
        id: 3,
        name: "Project Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe!",
        link: "#",
        adminName: "User Name",
        adminLink: "#",
        techTags: `<span>Docker</span> <span>Javascript</span> <span>Python</span>`,
    },
    {
        id: 4,
        name: "Project Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe!",
        link: "#",
        adminName: "User Name",
        adminLink: "#",
        techTags: `<span>Docker</span> <span>Javascript</span> <span>Python</span>`,
    },
    {
        id: 5,
        name: "Project Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe!",
        link: "#",
        adminName: "User Name",
        adminLink: "#",
        techTags: `<span>Docker</span> <span>Javascript</span> <span>Python</span>`,
    },
];

/* ********************************************************** */
// Projects Preview Mapping
/* ********************************************************** */

let projectsContent = document.querySelector(".projects_content");

Object.values(projectsDetails).map((val) => {
    projectsContent.innerHTML += `
        <!-- Project ${val.id} -->
        <div class="project_card">
            <h2>${val.name}</h2>
            <h6>Tech Stack</h6>
            <div class="tags">${val.techTags}</div>
            <p>${val.desc}</p>
            <a href="${val.link}" class="btn">See Now</a>
            <h4>
                <a href="${val.adminLink}">${val.adminName}</a>
                <span>(Admin)</span>
            </h4>
        </div>
    `;
});
