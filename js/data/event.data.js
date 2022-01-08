/* ********************************************************** */
// Events Timeline Data Object
/* ********************************************************** */

const intDate = new Date().getTime();
const intValue = 1000 * 60 * 60 * 24;

let eventsTimeline = [
    {
        id: 1,
        date: "15 January, 2022",
        name: "JWoC Program Announced",
        desc: "Here we go announced our JWoC program as a big start!",

        // completeClass: "bx bx-check",
        // completeStyle: "display:none",
        completeClass: "",
        completeStyle: "",
        daysLeft: Math.floor(
            (new Date("15 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 2,
        date: "16 January, 2022",
        name: "Mentor & Mentee Registration",
        desc: "All the mentors & mentees can start your registration from now on.",

        completeClass: "",
        completeStyle: "",
        daysLeft: Math.floor(
            (new Date("16 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 3,
        date: "24 January, 2022",
        name: "Mentor Registration Ends",
        desc: "Hope all the mentors have registered themselves & submitted their projects.",

        completeClass: "",
        completeStyle: "",
        daysLeft: Math.floor(
            (new Date("24 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 4,
        date: "28 January, 2022",
        name: "Projects Announced",
        desc: "Wait is over, We are going to reveal all the projects for this event.",

        completeClass: "",
        completeStyle: "",
        daysLeft: Math.floor(
            (new Date("28 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 5,
        date: "28 January, 2022",
        name: "Community Bonding Starts",
        desc: "Lets work together as good community for the next few weeks.",

        completeClass: "",
        completeStyle: "",
        daysLeft: Math.floor(
            (new Date("28 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 6,
        date: "30 January, 2022",
        name: "Community Bonding Ends",
        desc: "From now on we will work together!",

        completeClass: "",
        completeStyle: "",
        daysLeft: Math.floor(
            (new Date("30 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 7,
        date: "31 January, 2022",
        name: "Coding Period Starts",
        desc: "Finally the moment is here, You can start working on your desired projects. Code Hard!",

        completeClass: "",
        completeStyle: "",
        daysLeft: Math.floor(
            (new Date("31 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 8,
        date: "20 February, 2022",
        name: "Phase I Completion",
        desc: "Just our Phase I of the event is over!",

        completeClass: "",
        completeStyle: "",
        daysLeft: Math.floor(
            (new Date("20 February, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 9,
        date: "2 March, 2022",
        name: "Phase II Ends - JWoC Ends",
        desc: "And at our last stage, JWoC comes to an end, its time to wait till next year.",

        completeClass: "",
        completeStyle: "",
        daysLeft: Math.floor(
            (new Date("2 March, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 10,
        date: "8 March, 2022",
        name: "Result Announcement",
        desc: "All participants get ready to know who is big winner of this year JWoC.",

        completeClass: "",
        completeStyle: "",
        daysLeft: Math.floor(
            (new Date("8 March, 2022").getTime() - intDate) / intValue
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
