/* ********************************************************** */
// Projects Data Object
/* ********************************************************** */

let projectsDetails = [
    {
        id: 1,
        projectName: "Project Name",
        projectDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe!",
        projectLink: "#",
        projectTech: `<span>Django</span> <span>PHP</span> <span>Angular JS</span>`,

        mentorName: "Hello Peter!",
        mentorEmail: "hello.world@xyz.com",
        mentorGithub: "https://github.com/",
        mentorLinkedin: "https://linkedin.com/",
    },
    {
        id: 2,
        projectName: "Project Name",
        projectDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe!",
        projectLink: "#",
        projectTech: `<span>C#</span> <span>C++</span> <span>C</span>`,

        mentorName: "Hello Peter!",
        mentorEmail: "hello.world@xyz.com",
        mentorGithub: "https://github.com/",
        mentorLinkedin: "https://linkedin.com/",
    },
    {
        id: 3,
        projectName: "Project Name",
        projectDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe!",
        projectLink: "#",
        projectTech: `<span>Node JS</span> <span>React JS</span> <span>Python</span>`,

        mentorName: "Hello Peter!",
        mentorEmail: "hello.world@xyz.com",
        mentorGithub: "https://github.com/",
        mentorLinkedin: "https://linkedin.com/",
    },
    {
        id: 4,
        projectName: "Project Name",
        projectDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe!",
        projectLink: "#",
        projectTech: `<span>Docker</span> <span>AI</span> <span>ML</span>`,

        mentorName: "Hello Peter!",
        mentorEmail: "hello.world@xyz.com",
        mentorGithub: "https://github.com/",
        mentorLinkedin: "https://linkedin.com/",
    },
    {
        id: 5,
        projectName: "Project Name",
        projectDesc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eos quibusdam consequatur cumque saepe!",
        projectLink: "#",
        projectTech: `<span>HTML</span> <span>Javascript</span> <span>CSS</span>`,

        mentorName: "Hello Peter!",
        mentorEmail: "hello.world@xyz.com",
        mentorGithub: "https://github.com/",
        mentorLinkedin: "https://linkedin.com/",
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
            <div class="project_desc">
                <h2>${val.projectName}</h2>
                <h6>Tech Stack</h6>
                <div class="tags">${val.projectTech}</div>
                <p class="clampText">${val.projectDesc}</p>
                <span>Read More</span>
                <a href="${val.projectLink}" class="btn" target="_blank">See Now</a>
            </div>

            <div id="toggleBtn">
                <i class="bx bxs-chevron-up"></i>
            </div>

            <div class="mentor_desc">
                <h6 class="bx bx-user"></h6>
                <h4>Project Mentor</h4>
                <h2>${val.mentorName}</h2>
                <a href="mailto:${val.mentorEmail}" class="btn">Mail Mentor</a>
                <div class="social">
                    <a href="${val.mentorGithub}" class="btn" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                    <a href="${val.mentorLinkedin}" class="btn" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
});

// Project Card Toggle Btn Active *********************************************

$("div.project_card div#toggleBtn").each(function () {
    $(this).click(function () {
        $(this).toggleClass("active");
    });
});

$("div.project_card div.project_desc").each(function () {
    $(this)
        .find("span")
        .click(function () {
            $(this).prev().toggleClass("clampText");
            $(this).prev().hasClass("clampText")
                ? $(this).text("Read More")
                : $(this).text("Read Less");
        });
});
