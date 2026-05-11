const patternQuestions = [
  {
    question: "What comes next?",
    difficulty: "Easy",
    pattern: "🔺 🔷 🔺 🔷 ?",
    options: ["🔺", "🔷", "⭐", "⬛"],
    answer: "🔺"
  },
  {
    question: "What comes next?",
    difficulty: "Easy",
    pattern: "2 → 4 → 8 → 16 → ?",
    options: ["18", "24", "32", "64"],
    answer: "32"
  },
  {
    question: "Find the pattern.",
    difficulty: "Medium",
    pattern: "A B C | B C D | C D E | ?",
    options: ["D E F", "A C E", "C E G", "F E D"],
    answer: "D E F"
  },
  {
    question: "What comes next?",
    difficulty: "Medium",
    pattern: "⬛ ⬛ 🔵 | ⬛ 🔵 🔵 | 🔵 🔵 ?",
    options: ["⬛", "🔵", "⭐", "🔺"],
    answer: "🔵"
  },
  {
    question: "What number comes next?",
    difficulty: "Medium",
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
   <div class="pattern-top-bar">

  <div class="pattern-progress">
    Question ${currentPatternQuestion + 1} of ${patternQuestions.length}
  </div>

  <div class="pattern-score-live">
    Score: ${patternScore}
  </div>

</div>

    <div class="difficulty-badge ${question.difficulty.toLowerCase()}">
  ${question.difficulty}
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
  document.getElementById("patternArea").classList.add("hidden");

  document.getElementById("patternResults").classList.remove("hidden");

  document.getElementById("patternResults").innerHTML = `
    <h2>${level}</h2>

    <p>
      You answered <strong>${patternScore}</strong> out of
      <strong>${patternQuestions.length}</strong> correctly.
    </p>

    <p>
      Average answer time: <strong>${averageTime.toFixed(1)} seconds</strong>
    </p>

    <p>${message}</p>

    <p><strong>Trait signal:</strong> ${traitSignal}</p>

    <p><strong>Career signal:</strong> ${careerSignal}</p>

    <div class="pattern-career-box">
      <h3>Careers this skill can support</h3>
      <p>
        Pattern recognition can connect with data analysis, technology,
        engineering, troubleshooting, skilled trades, cybersecurity,
        logistics, and research.
      </p>
    </div>

    <button type="button" onclick="restartPatternHunter()">
      Try Again
    </button>

    <a class="back-home-link" href="index.html">
      Back to Pathfinder
    </a>
  `;
}
function restartPatternHunter() {
  currentPatternQuestion = 0;
  patternScore = 0;
  patternTimes = [];

  document.getElementById("patternArea").classList.remove("hidden");
  document.getElementById("patternResults").classList.add("hidden");

  showPatternQuestion();
}

showPatternQuestion();
