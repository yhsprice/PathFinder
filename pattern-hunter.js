const patternQuestions = [
  {
    question: "What comes next?",
    pattern: "🔺 🔷 🔺 🔷 ?",
    options: ["🔺", "🔷", "⭐", "⬛"],
    answer: "🔺"
  },
  {
    question: "What comes next?",
    pattern: "2 → 4 → 8 → 16 → ?",
    options: ["18", "24", "32", "64"],
    answer: "32"
  },
  {
    question: "Find the pattern.",
    pattern: "A B C | B C D | C D E | ?",
    options: ["D E F", "A C E", "C E G", "F E D"],
    answer: "D E F"
  },
  {
    question: "What comes next?",
    pattern: "⬛ ⬛ 🔵 | ⬛ 🔵 🔵 | 🔵 🔵 ?",
    options: ["⬛", "🔵", "⭐", "🔺"],
    answer: "🔵"
  },
  {
    question: "What number comes next?",
    pattern: "5 → 10 → 20 → 40 → ?",
    options: ["45", "60", "80", "100"],
    answer: "80"
  }
];

let currentPatternQuestion = 0;
let patternScore = 0;
let patternStartTime = Date.now();
let patternTimes = [];

function showPatternQuestion() {
  const question = patternQuestions[currentPatternQuestion];

  document.getElementById("patternFeedback").innerHTML = "";

  document.getElementById("patternQuestion").innerHTML = `
    <div class="pattern-progress">
      Question ${currentPatternQuestion + 1} of ${patternQuestions.length}
    </div>

    <h2>${question.question}</h2>

    <div class="pattern-display">
      ${question.pattern}
    </div>
  `;

  document.getElementById("patternOptions").innerHTML = question.options.map(option => `
    <button type="button" onclick="choosePatternAnswer('${option}')">
      ${option}
    </button>
  `).join("");

  patternStartTime = Date.now();
}

function choosePatternAnswer(selectedAnswer) {
  const question = patternQuestions[currentPatternQuestion];

  const timeTaken = Math.round((Date.now() - patternStartTime) / 1000);
  patternTimes.push(timeTaken);

  if (selectedAnswer === question.answer) {
    patternScore++;

    document.getElementById("patternFeedback").innerHTML = `
      <div class="pattern-feedback correct">
        ✅ Correct — nice pattern spotting.
      </div>
    `;
  } else {
    document.getElementById("patternFeedback").innerHTML = `
      <div class="pattern-feedback incorrect">
        Not quite. The answer was <strong>${question.answer}</strong>.
      </div>
    `;
  }

  setTimeout(() => {
    currentPatternQuestion++;

    if (currentPatternQuestion < patternQuestions.length) {
      showPatternQuestion();
    } else {
      showPatternResults();
    }
  }, 900);
}

function showPatternResults() {
  const averageTime =
    patternTimes.reduce((total, time) => total + time, 0) / patternTimes.length;

  let level = "Developing Pattern Hunter";
let traitSignal = "Pattern recognition is still developing.";
let careerSignal = "This may still connect with careers that use practice-based problem solving.";
let message = "You may need more practice with pattern recognition, but this can improve quickly with repetition.";

if (patternScore >= 4) {
  level = "Strong Pattern Hunter";
  traitSignal = "Strong signal: analytical thinking, logic, sequencing, and systems awareness.";
  careerSignal = "This can support careers in data, technology, engineering, cybersecurity, logistics, skilled trades, and research.";
  message = "You showed strong pattern recognition and logical sequencing.";
} else if (patternScore >= 3) {
  level = "Steady Pattern Hunter";
  traitSignal = "Moderate signal: you noticed several patterns and may do well with structured problem solving.";
  careerSignal = "This can support careers in troubleshooting, operations, technology, skilled trades, and quality control.";
  message = "You noticed several patterns and may do well with systems, troubleshooting, or analytical tasks.";
}
showPatternQuestion();
