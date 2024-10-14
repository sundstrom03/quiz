let currentQuestion = 1;
let selectedAnswer;
let correctAnswer;
let playerPoints = 0;
let userName;
let feedback;

function startQuiz() {
    userName = document.getElementById("name-input").value;
    if (userName === "") {
        alert("Vänligen ange ditt namn innan du startar spelet.");
        return;
    }
    document.getElementById("game-start").style.display = "none";
    document.getElementById("game-in-progress").style.display = "flex";

    populateQuestionFields();
}

function populateQuestionFields() {
    document.getElementById("player-name").innerHTML = `${userName} `;
    document.getElementById("current-question").innerHTML = ` ${currentQuestion}/10`;
    document.getElementById("question-field").innerHTML = questions[currentQuestion -1 ].question;
    document.getElementById("answer-1-field").innerHTML = questions[currentQuestion -1 ].alternatives[0];
    document.getElementById("answer-2-field").innerHTML = questions[currentQuestion -1 ].alternatives[1];
    document.getElementById("answer-3-field").innerHTML = questions[currentQuestion -1 ].alternatives[2];

    correctAnswer = questions[currentQuestion - 1].correctAlternative;
}

function changeQuestion(){
        let answer1 = document.getElementById("answer1");
        let answer2 = document.getElementById("answer2");
        let answer3 = document.getElementById("answer3");
    
        if (answer1.checked) {
            selectedAnswer = parseInt(answer1.value);
        } else if (answer2.checked) {
            selectedAnswer = parseInt(answer2.value);
        } else if (answer3.checked) {
            selectedAnswer = parseInt(answer3.value);
        } else {
            alert("Välj ett svar innan du fortsätter!");
            return;
        }

    validateUserAnswer();
      
      if (currentQuestion === 10) {
        endQuiz();
    } else {
        currentQuestion++;
        populateQuestionFields();
        if (currentQuestion === 10) {
            let answerBtn = document.getElementById("user-answer-btn");
            answerBtn.innerHTML = "Avsluta spelet";
        }
    }

    document.getElementById("answer1").checked = false;
    document.getElementById("answer2").checked = false;
    document.getElementById("answer3").checked = false;
}

function validateUserAnswer(){
    if(selectedAnswer === correctAnswer){
        playerPoints += 1;
        document.getElementById("player-points").innerHTML = " " + playerPoints;
    } 
}

function endQuiz(){
    document.getElementById("game-in-progress").style.display = "none";
    document.getElementById("game-feedback").style.display = "block";
    document.getElementById("congrats").innerHTML = `Grattis ${userName} du har slufört frågesporten!`;
    document.getElementById("total-player-points").innerHTML = playerPoints + "/10"
    validateUserScore()
    document.getElementById("feedback").innerHTML = feedback;

    if (playerPoints === 10) {
        startConfetti();
    }
}

function startConfetti() {
    confetti({
        particleCount: 2000,
        spread: 1000,
        origin: { y: 0.4 }
    });
}


function restartGame(){
    location.reload();
}

function getSmarter(){
    window.open("https://www.wikipedia.org/", "_blank");
}


function validateUserScore(){
    if (playerPoints >= 0 && playerPoints <= 3) {
        feedback = "Helt okej...om du bor under en sten!"
    } else if (playerPoints >= 4 && playerPoints <= 6) {
        feedback = "Det var ju ganska bra poäng... om du går i förskolan!"
    } else if (playerPoints >= 7 && playerPoints <= 9) {
        feedback = "Du är ganska allmänbildad!"
    } else {
        feedback = "Megabra! Du fick alla rätt!!!"
    } 
}

const questions = [
    {
        question: "Vilket land har flest invånare i världen?",
        alternatives: ["Kina", "Ryssland", "Indien"],
        correctAlternative: 3
    },
    {
        question: "Vad heter den minsta planeten i vårt solsystem?",
        alternatives: ["Uranus", "Merkurius", "Pluto"],
        correctAlternative: 2
    },
    {
        question: "Vilken artist sjöng 'My Heart Will Go On' från filmen Titanic?",
        alternatives: ["Mariah Carey", "Celine Dion", "Tracy Chapman"],
        correctAlternative: 2
    },
    {
        question: "Vilket land är världens minsta till ytan?",
        alternatives: ["Vatikanstaten", "Monaco", "Malta"],
        correctAlternative: 1
    },
    {
        question: "Vad heter den amerikanska delstaten som kallas 'The Sunshine State'?",
        alternatives: ["Kalifornien", "New York", "Florida"],
        correctAlternative: 3
    },
    {
        question: "Vad heter den högsta bergstoppen i Afrika?",
        alternatives: ["K2", "Mount Everest", "Kilimanjaro"],
        correctAlternative: 3
    },
    {
        question: "Vad heter huvudstaden i Australien?",
        alternatives: ["Canberra", "Sydney", "Melbourne"],
        correctAlternative: 1
    },
    {
        question: "Vad heter den mongoliske härskare som på 1200-talet upprättade mongolväldet?",
        alternatives: ["Xi Jinping", "Kim Jong-un", "Djingis Khan"],
        correctAlternative: 3
    },
    {
        question: "Vilken artist sköts till döds den 8 december 1980 i New York av den förvirrade beundraren Mark Chapman?",
        alternatives: ["John Lennon", "Elvis Presley", "Jimi Hendrix"],
        correctAlternative: 1
    },
    {
        question: "I vilken stjärnbild ingår Polstjärnan?",
        alternatives: ["Karlavagnen", "Lilla björn", "Vattumannen"],
        correctAlternative: 2
    }
]