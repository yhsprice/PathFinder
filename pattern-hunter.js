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
let patternCorrectStreak = 0;
let patternMissedCount = 0;

function showPatternQuestion() {
  const question = patternQuestions[currentPatternQuestion];

  document.getElementById("patternFeedback").innerHTML = "";

  document.getElementById("patternQuestion").innerHTML = 
    `${getAdaptivePerformanceMessage()}
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
    patternCorrectStreak++;

    document.getElementById("patternFeedback").innerHTML = `
      <div class="pattern-feedback correct">
        ✅ Correct — nice pattern spotting.
      </div>
    `;
  } else {
    patternCorrectStreak = 0;
    patternMissedCount++;

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

function getAdaptivePerformanceMessage() {
  if (patternCorrectStreak >= 2) {
    return `
      <div class="pattern-adaptive-note strong">
        🔥 You’re on a streak. Pathfinder may increase difficulty in future versions.
      </div>
    `;
  }

  if (patternMissedCount >= 2) {
    return `
      <div class="pattern-adaptive-note support">
        🌱 Pattern Hunter noticed this may need more practice. That is useful information, not failure.
      </div>
    `;
  }

  return "";
}

function showPatternResults() {
  const averageTime =
    patternTimes.reduce((total, time) => total + time, 0) / patternTimes.length;

  let level = "Developing Pattern Hunter";
  let traitSignal = "Pattern recognition is still developing.";
  let careerSignal = "This may still connect with careers that use practice-based problem solving.";
  let message = "You may need more practice with pattern recognition, but this can improve quickly with repetition.";
  let speedSignal = "Your pace shows how you approached the patterns.";
  let workStyleSignal = "This lab looks at both accuracy and how quickly you process patterns.";

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
  if (averageTime <= 4 && patternScore >= 3) {
  speedSignal = "You answered quickly and accurately. That can suggest fast pattern processing.";
  workStyleSignal = "This may connect with careers that require quick decisions, troubleshooting, technology, logistics, or emergency response.";
} else if (averageTime > 4 && patternScore >= 3) {
  speedSignal = "You took more time but answered accurately. That can suggest careful thinking.";
  workStyleSignal = "This may connect with careers that require precision, quality control, data review, research, accounting, or engineering.";
} else if (averageTime <= 4 && patternScore < 3) {
  speedSignal = "You answered quickly, but accuracy was lower. That may mean you process fast but may need to slow down and check details.";
  workStyleSignal = "This can improve with practice. Careers with high safety, money, or detail responsibility may require slowing down before deciding.";
} else {
  speedSignal = "You took your time and still missed several. That does not mean you cannot improve; it means this type of pattern task may need more practice.";
  workStyleSignal = "This may point toward careers where hands-on learning, examples, coaching, or repetition help more than abstract pattern work.";
}
  document.getElementById("patternArea").classList.add("hidden");

  document.getElementById("patternResults").classList.remove("hidden");

  document.getElementById("patternResults").innerHTML = `
  ${getAdaptivePerformanceMessage()}

  <div class="pattern-results-header">
    <h2>${level}</h2>

    <p>
      Pattern Hunter looked at your accuracy, pace, and problem-solving signals.
    </p>
  </div>
  
   <div class="pattern-top-bar">
   
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
    <p><strong>Speed signal:</strong> ${speedSignal}</p>

    <p><strong>Work-style signal:</strong> ${workStyleSignal}</p>

   <div class="pattern-career-box">
  <h3>Careers this skill can support</h3>

  <p>
    Pattern recognition can connect with data analysis, technology,
    engineering, troubleshooting, skilled trades, cybersecurity,
    logistics, and research.
  </p>

  <div class="pattern-career-buttons">
    <a href="index.html">Data Analyst</a>
    <a href="index.html">Cybersecurity</a>
    <a href="index.html">Electrician</a>
    <a href="index.html">Logistics Coordinator</a>
  </div>
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
  patternCorrectStreak = 0;
  patternMissedCount = 0;

  document.getElementById("patternArea").classList.remove("hidden");
  document.getElementById("patternResults").classList.add("hidden");

  showPatternQuestion();
}

showPatternQuestion();
