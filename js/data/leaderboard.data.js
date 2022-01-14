/* ********************************************************** */
// Leaderboard Data Object
/* ********************************************************** */

// Leaderboard Winners Data

let winnersData = [
    {
        id: 1,
        name: "Lorem Ipsum",
        githubUser: "username",
        githubLink: "#",
        points: "102",
        imgSrc: "./assets/img/1st.svg",
        imgAlt: "1st",
    },
    {
        id: 2,
        name: "Lorem Ipsum",
        githubUser: "username",
        githubLink: "#",
        points: "96",
        imgSrc: "./assets/img/2nd.svg",
        imgAlt: "2nd",
    },
    {
        id: 3,
        name: "Lorem Ipsum",
        githubUser: "username",
        githubLink: "#",
        points: "89",
        imgSrc: "./assets/img/3rd.svg",
        imgAlt: "3rd",
    },
];

// Leaderboard Ranks Data

let ranksData = [
    {
        id: 1,
        name: "Lorem Ipsum",
        rank: "4",
        user: "username1",
        link: "#",
        points: "52",
    },
    {
        id: 2,
        name: "Lorem Ipsum",
        rank: "5",
        user: "username2",
        link: "#",
        points: "49",
    },
    {
        id: 3,
        name: "Lorem Ipsum",
        rank: "6",
        user: "username3",
        link: "#",
        points: "32",
    },
    {
        id: 4,
        name: "Lorem Ipsum",
        rank: "7",
        user: "username4",
        link: "#",
        points: "20",
    },
    {
        id: 5,
        name: "Lorem Ipsum",
        rank: "8",
        user: "username5",
        link: "#",
        points: "14",
    },
];

/* ********************************************************** */
// Leaderboard Preview Mapping
/* ********************************************************** */

let winnersContent = document.querySelector("div.leaderboard div.winners");
let ranksContent = document.querySelector("div.leaderboard div.rank_table");

// Leaderboard Winners Preview

Object.values(winnersData).map((val) => {
    winnersContent.innerHTML += `
        <div class="position_card">
            <div class="figure">
                <img src="${val.imgSrc}" alt="${val.imgAlt}" />
            </div>
            <div class="content">
                <h2>${val.name}</h2>
                <a href="${val.githubLink}">${val.githubUser}</a>
                <h4>Points: ${val.points}</h4>
            </div>
        </div>
    `;
});

// Leaderboard Ranks Preview

Object.values(ranksData).map((val) => {
    ranksContent.innerHTML += `
        <div class="rank_body">
            <h2>${val.rank}</h2>
            <h2>${val.name}</h2>
            <h2><a href="${val.link}">${val.user}</a></h2>
            <h2>${val.points}</h2>
        </div>
    `;
});
