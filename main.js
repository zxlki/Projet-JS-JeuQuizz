const prompt = require("prompt-sync")()

const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["1) Lyon", "2) Marseille", "3) Paris"],
        correct: "3"
    },
    {
        question: "Quel est le symbole chimique de l'eau ?",
        options: ["1) O2", "2) CO2", "3) H2O"],
        correct: "3"
    },
    {
        question: "Qui a écrit 'Les Misérables' ?",
        options: ["1) Victor Hugo", "2) Molière", "3) Voltaire"],
        correct: "1"
    },
    {
        question: "Quel est le plus vaste océan du monde ?",
        options: ["1) Océan Atlantique", "2) Océan Pacifique", "3) Océan Indien"],
        correct: "2"
    },
    {
        question: "Qui a peint la Joconde ?",
        options: ["1) Léonard de Vinci", "2) Vincent Van Gogh", "3) Pablo Picasso"],
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
        console.log("✅ Correct !")
        score++
    } else {
        console.log("❌ Incorrect !")
    }
}


if (score < 2) {
    console.log("T'es éclaté, resaisis-toi ! : " + score + "/" + questions.length)

} else if (score >= 2 && score < 4) {
    console.log("Bof, tu peux mieux faire... : " + score + "/" + questions.length)

} else {
    console.log("Enfin quelqu'un d'intelligent ! : " + score + "/" + questions.length)
}





