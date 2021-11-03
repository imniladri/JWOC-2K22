/* ********************************************************** */
// FAQs Data Object
/* ********************************************************** */

let faqQuesAns = [
    {
        id: 1,
        faqQues: "I am not a student of JGEC, Can I participate?",
        faqAns: "Yes, you can definitely participate.",
        faqIcon: "bx bx-buildings",
    },
    {
        id: 2,
        faqQues: "I am a beginner can I participate?",
        faqAns: "There is no such restriction but with some amount of development knowledge in any domain will be good to go.",
        faqIcon: "bx bxs-graduation",
    },
    {
        id: 3,
        faqQues: "Can I participate as a team?",
        faqAns: "No, this is an individual event.",
        faqIcon: "bx bxs-group",
    },
    {
        id: 4,
        faqQues: "I don't know open source can I participate?",
        faqAns: "Then you must participate, because the aim of our event is to get more people into open source development.",
        faqIcon: "bx bxs-package",
    },
    {
        id: 5,
        faqQues: "Can I participate both as mentee and mentor?",
        faqAns: "No we don't encourage that.",
        faqIcon: "bx bx-hourglass",
    },
    {
        id: 6,
        faqQues: "What perks will I get?",
        faqAns: "Let's keep that a secret, but we promise you that you won't be dissapointed.",
        faqIcon: "bx bxs-star",
    },
    {
        id: 7,
        faqQues: "My question is not listed in here!",
        faqAns: "Contact Us, We will be happy to help you.",
        faqIcon: "bx bxs-chat",
    },
    {
        id: 8,
        faqQues: "Can 3rd year students also participate?",
        faqAns: "You can participate as a mentee if you are a beginner to open source and development. If you have sound knowledge about these, then we highly encourage you to participate as a mentor or project admin.",
        faqIcon: "bx bxs-quote-right",
    },
];

/* ********************************************************** */
// FAQs Preview Mapping
/* ********************************************************** */

let faqDiv = document.querySelector(".faqs");

Object.values(faqQuesAns).map((val) => {
    faqDiv.innerHTML += `
        <!-- FAQ ${val.id} -->
        <div class="faq_card">
            <i class="${val.faqIcon}"></i>
            <span>
                <h4>${val.faqQues}</h4>
                <p>${val.faqAns}</p>
            </span>
        </div>
    `;
});
