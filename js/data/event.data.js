/* ********************************************************** */
// Events Timeline Data Object
/* ********************************************************** */

const intDate = new Date().getTime();
const intValue = 1000 * 60 * 60 * 24;

let eventsTimeline = [
    {
        id: 1,
        date: "25 December, 2021",
        name: "JWoC Program Announced",
        desc: "Here we go announced our JWoC program as a big start!",

        // completeClass: "bx bx-check",
        completeClass: "",
        daysLeft: Math.floor(
            (new Date("25 December, 2021").getTime() - intDate) / intValue
        ),
    },
    {
        id: 2,
        date: "25 December, 2021",
        name: "Mentor & Mentee Registration",
        desc: "All the mentors & mentees can start your registration from now on.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("25 December, 2021").getTime() - intDate) / intValue
        ),
    },
    {
        id: 3,
        date: "15 January, 2022",
        name: "Mentor Registration Ends",
        desc: "Hope all the mentors have registered themselves & submitted their projects.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("15 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 4,
        date: "18 January, 2022",
        name: "Projects Announced",
        desc: "Wait is over, We are going to reveal all the projects for this event.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("18 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 5,
        date: "18 January, 2022",
        name: "Community Bonding Starts",
        desc: "Lets work together as good community for the next few weeks.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("18 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 6,
        date: "20 January, 2022",
        name: "Community Bonding Ends",
        desc: "From now on we will work together!",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("20 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 7,
        date: "21 January, 2022",
        name: "Coding Period Starts",
        desc: "Finally the moment is here, You can start working on your desired projects. Code Hard!",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("21 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 8,
        date: "9 February, 2022",
        name: "Phase I Completion",
        desc: "Just our Phase I of the event is over!",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("9 February, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 9,
        date: "19 February, 2022",
        name: "Phase II Ends - JWoC Ends",
        desc: "And at our last stage, JWoC comes to an end, its time to wait till next year.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("19 February, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 10,
        date: "24 February, 2022",
        name: "Result Announcement",
        desc: "All participants get ready to know who is big winner of JWoC 2k21.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("24 February, 2022").getTime() - intDate) / intValue
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
            <span>${val.daysLeft} Days</span>
            <h2>${val.date}</h2>
            <h4>${val.name}</h4>
            <p>${val.desc}</p>
        </div>
    `;
});
