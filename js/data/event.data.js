/* ********************************************************** */
// Events Timeline Data Object
/* ********************************************************** */

const intDate = new Date().getTime();
const intValue = 1000 * 60 * 60 * 24;

let eventsTimeline = [
    {
        id: 1,
        date: "16 January, 2022",
        name: "JWoC Program Announced",
        desc: "This is where we set the ball rolling!",

        // completeClass: "bx bx-check",
        // completeStyle: "display:none",
        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("16 January, 2022 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 2,
        date: "16 January, 2022",
        name: "Mentor & Mentee Registration",
        desc: "Registration begins for Mentors and Mentees!",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("16 January, 2022 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 3,
        date: "25 January, 2022",
        name: "Projects Announcement Begins",
        desc: "The wait is over! We are going to reveal the selected projects.",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("25 January, 2022 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 4,
        date: "28 & 30 January, 2022",
        name: "Mentor & Mentee Registration Ends",
        desc: "Here comes to an end for mentor & mentee registration for JWoC 2K22.",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("28 January, 2022 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 5,
        date: "28 January, 2022",
        name: "Community Bonding Starts",
        desc: "Interact with your mentors and get to know about the projects",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("28 January, 2022 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 6,
        date: "31 January, 2022",
        name: "Community Bonding Ends",
        desc: "From now on we will work together!",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("31 January, 2022 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 7,
        date: "1 February, 2022",
        name: "Coding Period Starts",
        desc: "Finally the moment is here, You can start working on your desired projects. Code Hard!",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("1 February, 2022 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 8,
        date: "1 March, 2022",
        name: "Phase II Begins, End of Phase I",
        desc: "The first phase of the event ends here & second phase starts!",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("1 March, 2022 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 9,
        date: "9 March, 2022",
        name: "Phase II Ends - JWoC Ends",
        desc: "The final stage concludes here!",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("9 March, 2022 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 10,
        date: "14 March, 2022",
        name: "Official Result Announcement",
        desc: "Standup for the Champions!",

        completeClass: "",
        completeStyle: "",
        daysLeft: Math.floor(
            (new Date("14 March, 2022 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
];

/* ********************************************************** */
// Events Preview Mapping
/* ********************************************************** */

let eventsDiv = document.querySelector(".events");

Object.values(eventsTimeline).map((val) => {
    eventsDiv.innerHTML += `
        <!-- Event ${val.id} -->
        <div class="event_card">
            <i class="${val.completeClass}"></i>
            <span style="${val.completeStyle}">
                ${val.daysLeft} Days
            </span>
            <h2>${val.date}</h2>
            <h4>${val.name}</h4>
            <p>${val.desc}</p>
        </div>
    `;
});
