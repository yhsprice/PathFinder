
function shuffleArray(array) {

  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];

  }

  return copy;
}

const basePatternQuestions = [
  {
    id: "sequence_easy_1",
    type: "sequence",
    skill: "logical_progression",
    question: "What comes next?",
    difficulty: "Easy",
    pattern: "2 → 4 → 6 → 8 → ?",
    options: ["9", "10", "12", "16"],
    answer: "10",
     },
  {
    id: "sequence_easy_2",
    type: "sequence",
    skill: "logical_progression",
    question: "What comes next?",
    difficulty: "Easy",
    pattern: "A → C → E → G → ?",
    options: ["H", "I", "J", "K"],
    answer: "I",
      },
  {
    id: "visual_easy_1",
    type: "visual",
    skill: "visual_pattern",
    question: "What comes next?",
    difficulty: "Easy",
    pattern: "🔺 🔷 🔺 🔷 ?",
    options: ["🔺", "🔷", "⭐", "⬛"],
    answer: "🔺",
     },
  {
    id: "number_medium_1",
    type: "number",
    skill: "doubling",
    question: "What number comes next?",
    difficulty: "Medium",
    pattern: "3 → 6 → 12 → 24 → ?",
    options: ["30", "36", "48", "72"],
    answer: "48",
      },
  {
    id: "letter_medium_1",
    type: "letter",
    skill: "sequence_shift",
    question: "Find the pattern.",
    difficulty: "Medium",
    pattern: "A B C | B C D | C D E | ?",
    options: ["D E F", "A C E", "C E G", "F E D"],
    answer: "D E F",
     },
  {
    id: "visual_medium_1",
    type: "visual",
    skill: "visual_change",
    question: "What comes next?",
    difficulty: "Medium",
    pattern: "⬛ ⬛ 🔵 | ⬛ 🔵 🔵 | 🔵 🔵 ?",
    options: ["⬛", "🔵", "⭐", "🔺"],
    answer: "🔵",
      },
  {
    id: "sequence_medium_2",
    type: "sequence",
    skill: "increasing_difference",
    question: "What number comes next?",
    difficulty: "Medium",
    pattern: "1 → 2 → 4 → 7 → 11 → ?",
    options: ["14", "15", "16", "18"],
    answer: "16",
      },
  {
    id: "rule_medium_1",
    type: "rule",
    skill: "hidden_rule",
    question: "What comes next?",
    difficulty: "Medium",
    pattern: "2 → 5 → 11 → 23 → ?",
    options: ["35", "43", "47", "50"],
    answer: "47",
      },
  {
    id: "visual_hard_1",
    type: "visual",
    skill: "rotation_pattern",
    question: "Which arrow comes next?",
    difficulty: "Hard",
    pattern: "⬆️ → ➡️ → ⬇️ → ⬅️ → ?",
    options: ["⬆️", "➡️", "⬇️", "⬅️"],
    answer: "⬆️",
      },
  {
    id: "number_hard_1",
    type: "number",
    skill: "multi_step_logic",
    question: "What number comes next?",
    difficulty: "Hard",
    pattern: "4 → 9 → 19 → 39 → ?",
    options: ["59", "69", "79", "89"],
    answer: "79",
     }
];

let patternQuestions = shuffleArray(basePatternQuestions);

let currentPatternQuestion = 0;
let patternScore = 0;
let patternStartTime = Date.now();
let patternTimes = [];
let patternCorrectStreak = 0;
let patternMissedCount = 0;
let patternAttemptCount = 1;
const maxPatternAttempts = 2;
const patternSkillScores = {
  logical_progression: { correct: 0, total: 0 },
  visual_pattern: { correct: 0, total: 0 },
  doubling: { correct: 0, total: 0 },
  sequence_shift: { correct: 0, total: 0 },
  visual_change: { correct: 0, total: 0 },
  increasing_difference: { correct: 0, total: 0 },
  hidden_rule: { correct: 0, total: 0 },
  rotation_pattern: { correct: 0, total: 0 },
  multi_step_logic: { correct: 0, total: 0 }
};


function showPatternQuestion() {
  const question = patternQuestions[currentPatternQuestion];
  patternSkillScores[question.skill].total++;

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

 const shuffledOptions =
  shuffleArray(question.options);

document.getElementById("patternOptions").innerHTML =
  shuffledOptions.map(option => `
    <button
      type="button"
      onclick="choosePatternAnswer('${option}')">
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
    patternSkillScores[question.skill].correct++;
    
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

function savePatternHunterResult() {
  const savedResult = {
    lab: "Pattern Hunter",
    score: patternScore,
    total: patternQuestions.length,
    date: new Date().toLocaleDateString(),
    times: patternTimes
  };

  localStorage.setItem("patternHunterResult", JSON.stringify(savedResult));

  document.getElementById("patternSaveMessage").innerHTML = `
    ✅ Pattern Hunter result saved on this device.
  `;
}

function generateSkillBreakdown() {

  return Object.entries(patternSkillScores)
    .map(([skill, data]) => {

      const percent =
        data.total === 0
          ? 0
          : Math.round((data.correct / data.total) * 100);

      return `
        <div class="skill-breakdown-card">

          <div class="skill-breakdown-top">
            <span class="skill-name">
              ${formatSkillName(skill)}
            </span>

            <span class="skill-percent">
              ${percent}%
            </span>
          </div>

          <div class="skill-meter">
            <div
              class="skill-meter-fill"
              style="width:${percent}%">
            </div>
          </div>

        </div>
      `;

    }).join("");
}

function formatSkillName(skill) {

  return skill
    .replaceAll("_", " ")
    .replace(/\b\w/g, c => c.toUpperCase());

}

function showPatternResults() {
  const averageTime =
    patternTimes.reduce((total, time) => total + time, 0) / patternTimes.length;

  let level = "Developing Pattern Hunter";
  let performancePercent =
  Math.round((patternScore / patternQuestions.length) * 100);

let rank = "Emerging";
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
  if (performancePercent >= 90) {
  rank = "Advanced Pattern Recognition";
} else if (performancePercent >= 70) {
  rank = "Strong Pattern Recognition";
} else if (performancePercent >= 50) {
  rank = "Developing Pattern Recognition";
} else {
  rank = "Emerging Pattern Recognition";
}
    workStyleSignal = "This may point toward careers where hands-on learning, examples, coaching, or repetition help more than abstract pattern work.";
}
  document.getElementById("patternArea").classList.add("hidden");

  document.getElementById("patternResults").classList.remove("hidden");

  document.getElementById("patternResults").innerHTML = `
  ${getAdaptivePerformanceMessage()}

  <div class="pattern-results-header">
    <h2>${level}</h2>

<div class="pattern-rank">
  ${rank}
</div>

<div class="pattern-meter">
  <div
    class="pattern-meter-fill"
    style="width:${performancePercent}%">
  </div>
</div>

<div class="pattern-percent">
  ${performancePercent}% Match Strength
</div>

    <p>
      Pattern Hunter looked at your accuracy, pace, and problem-solving signals.
    </p>
  </div>
  
   <div class="pattern-results-grid">
  <div class="pattern-stat-card">
    <strong>Score</strong>
    <span>${patternScore} out of ${patternQuestions.length}</span>
  </div>

  <div class="pattern-stat-card">
    <strong>Average Time</strong>
    <span>${averageTime.toFixed(1)} seconds</span>
  </div>
</div>

<div class="pattern-insight-box">
  <h3>What this means</h3>
  <p>${message}</p>
</div>

<div class="pattern-signal-list">
  <div>
    <strong>Trait signal:</strong>
    <p>${traitSignal}</p>
  </div>

  <div>
    <strong>Career signal:</strong>
    <p>${careerSignal}</p>
  </div>

  <div>
    <strong>Speed signal:</strong>
    <p>${speedSignal}</p>
  </div>

  <div>
    <strong>Work-style signal:</strong>
    <p>${workStyleSignal}</p>
  </div>
</div>

<div class="pattern-skill-section">

  <h3>Skill Breakdown</h3>

  ${generateSkillBreakdown()}

</div>

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

<button type="button" onclick="savePatternHunterResult()">
  💾 Save My Pattern Hunter Result
</button>

<button type="button" onclick="restartPatternHunter()">
  Try Again Once
</button>

<a class="back-home-link" href="index.html">
      Back to Pathfinder
    </a>
  `;
}

function restartPatternHunter() {
  if (patternAttemptCount >= maxPatternAttempts) {
    const saveMessage = document.getElementById("patternSaveMessage");

    if (saveMessage) {
      saveMessage.innerHTML = `
        You have reached the max attempts for Pattern Hunter.
        To keep results accurate, move to the next aptitude lab.
      `;
    }

    return;
  }

  patternAttemptCount++;

  currentPatternQuestion = 0;
  patternScore = 0;
  patternTimes = [];
  patternCorrectStreak = 0;
  patternMissedCount = 0;

  resetPatternSkillScores();

  document.getElementById("patternArea").classList.remove("hidden");
  document.getElementById("patternResults").classList.add("hidden");

 patternQuestions =
  shuffleArray(basePatternQuestions);
  
  showPatternQuestion();
}

showPatternQuestion();

window.savePatternHunterResult = savePatternHunterResult;
window.restartPatternHunter = restartPatternHunter;
