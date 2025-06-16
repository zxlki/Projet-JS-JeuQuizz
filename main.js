const prompt = require("prompt-sync")()

const questions = [
    {
        question: "En combien de rounds se joue une partie de Valorant ?",
        options: ["1) 11", "2) 12", "3) 13"],
        correct: "3"
    },
    {
        question: "Lequel de ces agents est un dueliste ?",
        options: ["1) Clove", "2) Vyse", "3) Reyna"],
        correct: "3"
    },
    {
        question: "Laquelle de ces maps Valorant est située au Maroc ?",
        options: ["1) Bind", "2) Abyss", "3) Split"],
        correct: "1"
    },
    {
        question: "Laquelle de ces armes est une arme de poing ?",
        options: ["1) Outlaw", "2) Sheriff", "3) Phantom"],
        correct: "2"
    },
    {
        question: "Quelle équipe a gagné les champions 2024 ?",
        options: ["1) EDG", "2) T1", "3) FNATIC"],
        correct: "1"
    }
];

let score = 0

for (let i = 0; i < questions.length; i++) {
    const q = questions[i]

    console.log("\n" + q.question)

    for (let j = 0; j < q.options.length; j++) {
        console.log(q.options[j])
    }

    const userAnswer = prompt("Votre réponse (numéro) : ")

    if (userAnswer === q.correct) {
        console.log("Correct !")
        score++
    } else {
        console.log("Incorrect !")
    }
}


if (score < 2) {
    console.log("T'es éclaté, resaisis-toi ! : " + score + "/" + questions.length)

} else if (score >= 2 && score < 4) {
    console.log("Bof, tu peux mieux faire... : " + score + "/" + questions.length)

} else {
    console.log("Enfin quelqu'un de calé ! : " + score + "/" + questions.length)
}





