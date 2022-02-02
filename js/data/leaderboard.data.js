/* ********************************************************** */
// Leaderboard Data Object
/* ********************************************************** */

// Leaderboard Winners Data

let winnersData = [
    {
        id: 1,
        rank: "1",
        points: "102",
        name: "Hello Peter!",
        college: "Marvel Cinematic Universe",
        githubUser: "username",
        githubLink: "https://github.com/",
        githubImg: "https://picsum.photos/200",
    },
    {
        id: 2,
        rank: "2",
        points: "96",
        name: "Hello Peter!",
        college: "Marvel Cinematic Universe",
        githubUser: "username",
        githubLink: "https://github.com/",
        githubImg: "https://picsum.photos/200",
    },
    {
        id: 3,
        rank: "3",
        points: "85",
        name: "Hello Peter!",
        college: "Marvel Cinematic Universe",
        githubUser: "username",
        githubLink: "https://github.com/",
        githubImg: "https://picsum.photos/200",
    },
];

// Leaderboard Ranks Data

let ranksData = [
    {
        id: 1,
        rank: "4",
        points: "52",
        name: "Lorem Ipsum",
        githubUser: "username1",
        githubLink: "https://github.com/",
        githubImg: "https://picsum.photos/200",
    },
    {
        id: 2,
        rank: "5",
        points: "49",
        name: "Lorem Ipsum",
        githubUser: "username2",
        githubLink: "https://github.com/",
        githubImg: "https://picsum.photos/200",
    },
    {
        id: 3,
        rank: "6",
        points: "32",
        name: "Lorem Ipsum",
        githubUser: "username3",
        githubLink: "https://github.com/",
        githubImg: "https://picsum.photos/200",
    },
    {
        id: 4,
        rank: "7",
        points: "20",
        name: "Lorem Ipsum",
        githubUser: "username4",
        githubLink: "https://github.com/",
        githubImg: "https://picsum.photos/200",
    },
    {
        id: 5,
        rank: "8",
        points: "14",
        name: "Lorem Ipsum",
        githubUser: "username5",
        githubLink: "https://github.com/",
        githubImg: "https://picsum.photos/200",
    },
];

/* ********************************************************** */
// Leaderboard Preview Mapping
/* ********************************************************** */

let winnersContent = document.querySelector("div.leaderboard div.winners");
let ranksContent = document.querySelector(
    "div.leaderboard div.rank_table table tbody"
);

// Leaderboard Winners Preview

Object.values(winnersData).map((val) => {
    winnersContent.innerHTML += `
        <div class="position_card">
            <div class="stats">
                <h2>${val.points}</h2>
                <p>Points</p>
                <span>Rank: ${val.rank}</span>
            </div>
            <div class="desc">
                <img src="${val.githubImg}" alt="Github Avatar" />
                <h1>${val.name}</h1>
                <a href="${val.githubLink}" class="btn">@${val.githubUser}</a>
                <p>${val.college}</p>
            </div>
        </div>
    `;
});

// Leaderboard Ranks Preview

Object.values(ranksData).map((val) => {
    ranksContent.innerHTML += `
        <tr>
            <td>${val.rank}</td>
            <td><img src="${val.githubImg}" /> ${val.name}</td>
            <td><a href="${val.githubLink}">${val.githubUser}</a></td>
            <td>${val.points}</td>
        </tr>
    `;
});

// Confetti Particles *******************************************************

var duration = 5 * 1000;
var animationEnd = Date.now() + duration;

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

(function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(500, 1000 * (timeLeft / duration));

    confetti({
        particleCount: 1,
        startVelocity: 20,
        ticks: ticks,
        origin: {
            x: Math.random(),
            y: 0,
        },
        colors: ["#ff1700", "#ff67e7", "#5800ff"],
        shapes: ["circle"],
        gravity: randomInRange(2, 0),
        scalar: randomInRange(0.9, 0.9),
    });

    if (timeLeft > 0) {
        requestAnimationFrame(frame);
    }
})();
