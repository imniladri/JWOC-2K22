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
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit velit, aliquid.",

        completeClass: "bx bx-check",
        daysLeft: Math.floor(
            (new Date("25 December, 2021").getTime() - intDate) / intValue
        ),
    },
    {
        id: 2,
        date: "25 December, 2021",
        name: "Mentor & Mentee Registration",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit velit, aliquid.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("25 December, 2021").getTime() - intDate) / intValue
        ),
    },
    {
        id: 3,
        date: "15 January, 2022",
        name: "Mentor Registration Ends",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit velit, aliquid.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("15 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 4,
        date: "18 January, 2022",
        name: "Mentor & Mentee Registration",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit velit, aliquid.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("18 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 5,
        date: "18 January, 2022",
        name: "Community Bonding Starts",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit velit, aliquid.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("18 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 6,
        date: "20 January, 2022",
        name: "Community Bonding Ends",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit velit, aliquid.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("20 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 7,
        date: "21 January, 2022",
        name: "Coding Period Starts",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit velit, aliquid.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("21 January, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 8,
        date: "9 February, 2022",
        name: "Phase I Completion",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit velit, aliquid.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("9 February, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 9,
        date: "19 February, 2022",
        name: "Phase II Ends - JWoC Ends",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit velit, aliquid.",

        completeClass: "",
        daysLeft: Math.floor(
            (new Date("19 February, 2022").getTime() - intDate) / intValue
        ),
    },
    {
        id: 10,
        date: "24 February, 2022",
        name: "Result Announcement",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit velit, aliquid.",

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
