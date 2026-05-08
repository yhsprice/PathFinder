const careerPools = {
  helper: ["Nursing", "Social Work", "Teaching", "Career Coaching", "Occupational Therapy", "Speech Therapy", "Physical Therapy Assistant", "Mental Health Counseling", "Dental Hygiene", "Emergency Medical Technician"],

  tech: ["Data Analyst", "IT Support", "Software Developer", "Cybersecurity", "UX Designer", "AI Prompt Specialist", "Cloud Support", "Business Analyst", "Game Developer", "Automation Specialist"],

  handsOn: ["Electrician", "Welder", "HVAC Technician", "Construction Management", "Diesel Mechanic", "Heavy Equipment Operator", "Plumber", "Industrial Maintenance", "Commercial Driver", "Survey Technician"],

  creative: ["Graphic Designer", "Marketing Specialist", "Content Creator", "Photographer", "Video Editor", "Interior Designer", "Brand Strategist", "Event Planner", "Animator", "Copywriter"],

  leadership: ["Project Coordinator", "Operations Manager", "Entrepreneur", "Human Resources", "Sales Manager", "Logistics Coordinator", "Business Consultant", "Recruiter", "Store Manager", "Training Specialist"],

  explorer: ["Park Ranger", "Flight Dispatcher", "Crime Scene Technician", "Travel Advisor", "Wildlife Rehabilitator", "Forensic Accountant", "Museum Curator", "Urban Planner", "Drone Operator", "Environmental Technician"]
};

const personalityScores = {
  helper: 0,
  tech: 0,
  handsOn: 0,
  creative: 0,
  leadership: 0,
  explorer: 0,

  freedom: 0,
  structure: 0,
  social: 0,
  independent: 0,
  stressSafe: 0,
  challenge: 0,
  indoor: 0,
  outdoor: 0,
  fastPath: 0,
  education: 0,
  stability: 0,
  risk: 0
};

// ===============================
// PATHFINDER TRAIT ENGINE
// ===============================

const userTraits = {
  structure: 0,
  creativity: 0,
  social: 0,
  independence: 0,
  physical: 0,
  analytical: 0,
  leadership: 0,
  stressTolerance: 0,
  educationTolerance: 0,
  riskTolerance: 0
};

function resetTraits() {
  for (let trait in userTraits) {
    userTraits[trait] = 0;
  }
}

function applyTraits(traits) {
  for (let trait in traits) {
    if (userTraits.hasOwnProperty(trait)) {
      userTraits[trait] += traits[trait];
    }
  }

  console.log("Current Trait Scores:", userTraits);
}

const careerDetails = {
  "Nursing": {
    summary: "Fast-paced, meaningful, emotionally intense work helping people during some of their hardest moments.",
    truth: "Nobody tells you how much emotional weight nurses carry. You may deal with death, angry families, long shifts, body fluids, and burnout. But the stability and impact can be huge.",
    training: "LPN, associate RN, bachelor's RN, or advanced nursing paths.",
    difficulty: "High",
    jobMarket: "Strong",
    stress: "High",
    skills: ["Empathy", "Medical knowledge", "Documentation", "Calm under pressure", "Team communication"],
    nextStep: "Watch a day-in-the-life nursing video and compare LPN, RN, and BSN routes.",
    roadmap: ["Research LPN/RN/BSN options", "Complete prerequisites", "Apply to nursing program", "Pass clinicals", "Take NCLEX", "Choose a specialty"]
  },
  "Social Work": {
    summary: "Support people, families, and communities through difficult situations and life challenges.",
    truth: "This work can be deeply meaningful, but it can also be emotionally draining. Pay may start lower than expected compared with the emotional responsibility.",
    training: "Usually bachelor's or master's degree depending on the role.",
    difficulty: "Medium to High",
    jobMarket: "Moderate to Strong",
    stress: "High",
    skills: ["Listening", "Boundaries", "Case notes", "Resource knowledge", "Patience"],
    nextStep: "Research one local nonprofit or agency and read what services they provide.",
    roadmap: ["Explore human services roles", "Volunteer or shadow", "Earn related degree", "Build case-note skills", "Complete field experience", "Consider licensure"]
  },
  "Teaching": {
    summary: "Help students learn, grow, and build confidence through structured instruction and support.",
    truth: "Teaching is not just teaching. It includes behavior management, paperwork, parent communication, testing pressure, and emotional labor. Summer break is not magic fairy dust.",
    training: "Education degree, licensure, or alternative certification depending on state and setting.",
    difficulty: "Medium to High",
    jobMarket: "Varies by subject and location",
    stress: "High",
    skills: ["Communication", "Planning", "Patience", "Classroom management", "Adaptability"],
    nextStep: "Ask a teacher what their hardest and best parts of the job are.",
    roadmap: ["Explore age groups/subjects", "Observe classrooms", "Choose education route", "Complete student teaching", "Earn license", "Build classroom systems"]
  },
  "Career Coaching": {
    summary: "Guide people through career decisions, goal-setting, skills, and next steps.",
    truth: "You need patience because people often want answers but resist action. The win is helping someone see possibility they could not see before.",
    training: "Coaching experience, workforce knowledge, counseling-related training, or career development certifications.",
    difficulty: "Medium",
    jobMarket: "Growing but relationship-based",
    stress: "Medium",
    skills: ["Questioning", "Encouragement", "Research", "Writing", "Resource matching"],
    nextStep: "Practice helping someone compare two career options using pros, cons, and next steps.",
    roadmap: ["Learn career resources", "Practice coaching questions", "Build labor market knowledge", "Create sample plans", "Gain advising experience", "Specialize by audience"]
  },
  "Data Analyst": {
    summary: "Find patterns in information and turn messy data into useful decisions.",
    truth: "Data work is not just charts. You clean ugly data, chase missing details, explain numbers to people who may not want to hear them, and triple-check everything because one bad formula can start a small office fire.",
    training: "Excel, SQL, dashboards, statistics basics, and portfolio projects.",
    difficulty: "Medium",
    jobMarket: "Strong but competitive for beginners",
    stress: "Medium",
    skills: ["Excel", "SQL", "Critical thinking", "Data cleaning", "Storytelling"],
    nextStep: "Build one simple Excel dashboard from a small practice dataset.",
    roadmap: ["Master Excel basics", "Learn data cleaning", "Build dashboards", "Learn SQL basics", "Create portfolio projects", "Apply for analyst roles"]
  },
  "IT Support": {
    summary: "Help people and organizations fix technology problems and keep systems working.",
    truth: "You will solve problems, but you will also explain the same thing many times. Patience matters as much as technical knowledge.",
    training: "CompTIA A+, Google IT Support Certificate, help desk practice, troubleshooting experience.",
    difficulty: "Medium",
    jobMarket: "Strong entry route into tech",
    stress: "Medium",
    skills: ["Troubleshooting", "Customer service", "Networking basics", "Documentation", "Patience"],
    nextStep: "Look up CompTIA A+ beginner topics and learn what hardware, software, and networking basics mean.",
    roadmap: ["Learn computer basics", "Study troubleshooting", "Practice with devices", "Earn beginner certificate", "Apply for help desk", "Move into specialty"]
  },
  "Software Developer": {
    summary: "Build websites, apps, tools, automations, and digital systems.",
    truth: "It sounds glamorous until your code breaks because of one missing bracket. The field is powerful but competitive, and you must keep learning constantly.",
    training: "Self-study, bootcamp, associate degree, bachelor's degree, or project portfolio.",
    difficulty: "High",
    jobMarket: "Strong but very competitive for entry-level",
    stress: "Medium to High",
    skills: ["Coding", "Debugging", "Problem-solving", "GitHub", "Persistence"],
    nextStep: "Build one tiny website and put it on GitHub Pages. Conveniently, you are already doing this.",
    roadmap: ["Learn HTML/CSS", "Add JavaScript", "Build small projects", "Use GitHub", "Create portfolio", "Apply or freelance"]
  },
  "Cybersecurity": {
    summary: "Protect systems, data, and people from digital threats.",
    truth: "Cybersecurity is not usually an instant beginner job. Many people start in IT support or networking first. It requires discipline, curiosity, and constant learning.",
    training: "IT basics, networking, Security+, labs, certifications, and hands-on practice.",
    difficulty: "High",
    jobMarket: "Strong but not easy-entry",
    stress: "Medium to High",
    skills: ["Networking", "Security basics", "Risk thinking", "Documentation", "Attention to detail"],
    nextStep: "Learn basic networking first: IP addresses, routers, firewalls, and phishing.",
    roadmap: ["Learn IT basics", "Study networking", "Practice security labs", "Earn Security+", "Get IT experience", "Move into cyber role"]
  },
  "Electrician": {
    summary: "Install, repair, and maintain electrical systems in homes, buildings, and industrial settings.",
    truth: "Great income potential, but it is physical, detail-heavy, and safety-critical. Mistakes can be dangerous. This is not casual YouTube-and-hope work.",
    training: "Apprenticeship, trade school, licensing, and supervised hours.",
    difficulty: "Medium to High",
    jobMarket: "Strong",
    stress: "Medium",
    skills: ["Math basics", "Safety", "Tools", "Blueprint reading", "Problem-solving"],
    nextStep: "Research electrician apprenticeship programs near you.",
    roadmap: ["Learn trade basics", "Apply for apprenticeship", "Complete supervised hours", "Study electrical code", "Earn license", "Specialize or start business"]
  },
  "Welder": {
    summary: "Join metal parts using specialized tools across construction, manufacturing, repair, and industrial work.",
    truth: "Welding can pay well, especially with advanced certifications, but it can be hot, physical, repetitive, and hard on the body.",
    training: "Trade school, certifications, apprenticeships, and hands-on practice.",
    difficulty: "Medium",
    jobMarket: "Strong in many regions",
    stress: "Medium",
    skills: ["Hand-eye coordination", "Safety", "Blueprint reading", "Precision", "Stamina"],
    nextStep: "Watch beginner welding process videos: MIG, TIG, and stick welding.",
    roadmap: ["Learn welding types", "Take safety training", "Practice basic welds", "Earn certifications", "Build experience", "Specialize in higher-pay work"]
  },
  "HVAC Technician": {
    summary: "Install and repair heating, ventilation, and air conditioning systems.",
    truth: "Demand is strong because nobody wants to be hot, cold, or sweaty in public. But the work can include crawlspaces, attics, emergency calls, and physical labor.",
    training: "Technical school, EPA certification, apprenticeship, and field experience.",
    difficulty: "Medium",
    jobMarket: "Strong",
    stress: "Medium",
    skills: ["Mechanical thinking", "Customer service", "Troubleshooting", "Electrical basics", "Safety"],
    nextStep: "Look up HVAC programs and EPA certification requirements.",
    roadmap: ["Learn HVAC basics", "Enroll in training", "Earn EPA certification", "Apprentice or entry role", "Build field experience", "Specialize or manage"]
  },
  "Graphic Designer": {
    summary: "Create visuals for brands, marketing, websites, social media, print, and products.",
    truth: "Creativity matters, but so does feedback. Clients may ask for ugly changes with full confidence. A strong portfolio matters more than just saying you are creative.",
    training: "Portfolio, design tools, typography, layout, branding, and possibly a degree or certificate.",
    difficulty: "Medium",
    jobMarket: "Competitive",
    stress: "Medium",
    skills: ["Canva or Adobe", "Layout", "Typography", "Branding", "Feedback handling"],
    nextStep: "Create three sample flyers for imaginary businesses.",
    roadmap: ["Learn design basics", "Practice layouts", "Create samples", "Build portfolio", "Get feedback", "Apply or freelance"]
  },
  "Marketing Specialist": {
    summary: "Help businesses attract attention, communicate value, and increase sales or engagement.",
    truth: "Marketing is creative and analytical. Pretty posts are not enough. You need to understand audience, strategy, results, and what actually makes people act.",
    training: "Writing, social media, analytics, branding, campaigns, and portfolio work.",
    difficulty: "Medium",
    jobMarket: "Competitive but broad",
    stress: "Medium",
    skills: ["Writing", "Analytics", "Design sense", "Audience research", "Strategy"],
    nextStep: "Pick a small business and write three better social media post ideas for it.",
    roadmap: ["Study audiences", "Practice writing", "Learn analytics", "Build campaign samples", "Create portfolio", "Apply for roles"]
  },
  "Content Creator": {
    summary: "Create videos, posts, writing, graphics, or media to inform, entertain, teach, or influence.",
    truth: "It looks fun, but growth is unpredictable. You need consistency, thick skin, privacy boundaries, and a plan beyond hoping the internet fairy shows up.",
    training: "Content strategy, editing, writing, design, storytelling, and platform knowledge.",
    difficulty: "Medium to High",
    jobMarket: "Self-driven and unstable at first",
    stress: "Medium",
    skills: ["Storytelling", "Editing", "Consistency", "Audience understanding", "Branding"],
    nextStep: "Create one private sample post or video script about a topic you know well.",
    roadmap: ["Choose a niche", "Practice scripts", "Learn editing", "Post consistently", "Track engagement", "Build income paths"]
  },
  "Project Coordinator": {
    summary: "Keep projects, people, deadlines, and details organized so work actually gets done.",
    truth: "You become the human glue. That sounds nice until everyone forgets something and expects you to magically know it. Organization and calm communication are everything.",
    training: "Project management basics, spreadsheets, communication, scheduling tools, and documentation.",
    difficulty: "Medium",
    jobMarket: "Strong across industries",
    stress: "Medium",
    skills: ["Planning", "Excel", "Communication", "Follow-up", "Documentation"],
    nextStep: "Plan a fake project with tasks, owners, deadlines, and risks.",
    roadmap: ["Learn project basics", "Practice task planning", "Use spreadsheets/tools", "Document risks", "Coordinate small projects", "Earn PM certificate"]
  },
  "Operations Manager": {
    summary: "Improve systems, people, processes, schedules, and daily business performance.",
    truth: "Operations is where problems go when no one knows who owns them. It can be powerful, stressful, and very valuable if you like fixing chaos.",
    training: "Business experience, process improvement, leadership, budgeting, and analytics.",
    difficulty: "Medium to High",
    jobMarket: "Strong with experience",
    stress: "High",
    skills: ["Leadership", "Problem-solving", "Process mapping", "Budgeting", "Decision-making"],
    nextStep: "Pick one messy process in real life and write how you would improve it.",
    roadmap: ["Learn business basics", "Map processes", "Improve small systems", "Lead teams", "Track results", "Move into management"]
  },
  "Entrepreneur": {
    summary: "Build or run a business by solving a problem, selling value, and managing risk.",
    truth: "Freedom is real, but so are bills, uncertainty, slow starts, rejection, and doing 14 jobs before lunch. It is not for the faint of spreadsheet.",
    training: "Business planning, sales, marketing, accounting, customer research, and persistence.",
    difficulty: "High",
    jobMarket: "You create the market",
    stress: "High",
    skills: ["Sales", "Budgeting", "Marketing", "Problem-solving", "Resilience"],
    nextStep: "Write one problem, one customer, one solution, and one way you would test it cheaply.",
    roadmap: ["Find a real problem", "Define the customer", "Test a simple offer", "Learn sales", "Track money", "Grow carefully"]
  },

  "Occupational Therapy": {
    summary: "Help people regain independence and daily living skills after injuries, illness, or disabilities.",
    truth: "The work can be emotional and documentation-heavy, but many therapists love seeing real improvement in people's lives.",
    training: "Usually master's degree plus clinical training.",
    difficulty: "High",
    jobMarket: "Strong",
    stress: "Medium",
    skills: ["Empathy", "Observation", "Patience", "Communication", "Documentation"],
    nextStep: "Research pediatric, school-based, and hospital OT settings.",
    roadmap: ["Study health sciences", "Volunteer in care settings", "Apply to OT program", "Complete clinicals", "Pass licensing", "Choose specialty"]
  },

  "UX Designer": {
    summary: "Design digital experiences that make apps and websites easier and more enjoyable to use.",
    truth: "It mixes creativity, psychology, research, and problem-solving. You will revise ideas constantly based on feedback and user behavior.",
    training: "Portfolio, design tools, research methods, and interface design.",
    difficulty: "Medium",
    jobMarket: "Competitive but growing",
    stress: "Medium",
    skills: ["Wireframing", "User research", "Visual design", "Communication", "Testing"],
    nextStep: "Redesign a frustrating app screen and explain your changes.",
    roadmap: ["Learn design basics", "Study UX principles", "Practice redesigns", "Build portfolio", "Get feedback", "Apply for UX roles"]
  },

  "AI Prompt Specialist": {
    summary: "Use AI tools strategically to generate content, workflows, research, and automation.",
    truth: "This field changes constantly. The people who succeed learn fast, experiment often, and combine AI with real business understanding.",
    training: "AI tools, writing, logic, workflow building, and experimentation.",
    difficulty: "Medium",
    jobMarket: "Emerging",
    stress: "Medium",
    skills: ["Prompt writing", "Research", "Workflow thinking", "Creativity", "Adaptability"],
    nextStep: "Try using AI to solve one real-world problem or simplify a task.",
    roadmap: ["Learn AI basics", "Practice prompting", "Build useful workflows", "Create examples", "Study business use cases", "Specialize"]
  },

  "Heavy Equipment Operator": {
    summary: "Operate large machinery used in construction, roadwork, excavation, and industrial projects.",
    truth: "The equipment is powerful and the responsibility is serious. Weather, long hours, and safety awareness are major parts of the job.",
    training: "Trade programs, certifications, and supervised equipment experience.",
    difficulty: "Medium",
    jobMarket: "Strong",
    stress: "Medium",
    skills: ["Coordination", "Safety", "Mechanical awareness", "Focus", "Patience"],
    nextStep: "Research union apprenticeships or local heavy equipment training.",
    roadmap: ["Learn safety basics", "Train on equipment", "Gain certifications", "Practice operation", "Work on crews", "Specialize"]
  },

  "Photographer": {
    summary: "Capture visual stories, events, products, people, or moments through photography.",
    truth: "Talent helps, but consistency, editing, networking, and business skills matter just as much.",
    training: "Camera skills, editing software, composition, and portfolio building.",
    difficulty: "Medium",
    jobMarket: "Competitive and freelance-heavy",
    stress: "Medium",
    skills: ["Composition", "Editing", "Storytelling", "Branding", "Client communication"],
    nextStep: "Take 20 photos around your town using one theme.",
    roadmap: ["Learn camera basics", "Practice editing", "Build portfolio", "Share work", "Take paid shoots", "Grow niche"]
  },

  "Logistics Coordinator": {
    summary: "Manage movement of products, schedules, deliveries, inventory, and operations.",
    truth: "When things go wrong, everyone notices immediately. Strong organization and calm problem-solving are critical.",
    training: "Operations knowledge, spreadsheets, scheduling, and communication.",
    difficulty: "Medium",
    jobMarket: "Strong",
    stress: "Medium to High",
    skills: ["Organization", "Communication", "Tracking", "Excel", "Problem-solving"],
    nextStep: "Track how products move from store to customer in one company.",
    roadmap: ["Learn operations basics", "Practice scheduling", "Track workflows", "Learn inventory systems", "Coordinate deliveries", "Advance into operations"]
  },

  "Drone Operator": {
    summary: "Use drones for photography, inspections, mapping, agriculture, public safety, or industrial work.",
    truth: "It sounds futuristic because it is, but regulations, licensing, weather, and technical precision matter a lot.",
    training: "FAA certification, drone operation practice, mapping or imaging skills.",
    difficulty: "Medium",
    jobMarket: "Growing",
    stress: "Low to Medium",
    skills: ["Focus", "Technology", "Safety", "Photography", "Spatial awareness"],
    nextStep: "Research FAA Part 107 certification and drone career uses.",
    roadmap: ["Learn drone laws", "Practice flying", "Earn certification", "Build sample footage", "Choose specialty", "Work professionally"]
  }
};

const quizQuestions = [
  {
    question: "What kind of future sounds best right now?",
    options: [
      { text: "Freedom", traits: { independence: 2, structure: -1 } },
      { text: "Stability", traits: { structure: 2, riskTolerance: -1 } },
      { text: "High income", traits: { leadership: 1, stressTolerance: 1 } },
      { text: "Helping people", traits: { social: 2 } },
      { text: "Creativity", traits: { creativity: 2 } },
      { text: "Adventure", traits: { independence: 1, riskTolerance: 2 } },
      { text: "Leadership", traits: { leadership: 2 } },
      { text: "Low stress", traits: { stressTolerance: -1, structure: 1 } }
    ]
  },

  {
    question: "What kind of work would you rather do?",
    options: [
      { text: "Solve problems", traits: { analytical: 2, independence: 1 } },
      { text: "Build things", traits: { physical: 2, analytical: 1 } },
      { text: "Help people", traits: { social: 2, stressTolerance: 1 } },
      { text: "Create something", traits: { creativity: 2, independence: 1 } },
      { text: "Organize details", traits: { structure: 2, analytical: 1 } },
      { text: "Lead a team", traits: { leadership: 2, social: 1 } },
      { text: "Work with technology", traits: { analytical: 2, educationTolerance: 1 } },
      { text: "Work outdoors", traits: { physical: 2, independence: 1 } }
    ]
  },

  {
    question: "What drains you the fastest?",
    options: [
      { text: "Too much talking", traits: { social: -2, independence: 1 } },
      { text: "Sitting all day", traits: { physical: 2 } },
      { text: "Repetitive work", traits: { creativity: 2, independence: 1 } },
      { text: "High pressure", traits: { stressTolerance: -2, structure: 1 } },
      { text: "Physical labor", traits: { physical: -2, analytical: 1 } },
      { text: "Strict routines", traits: { independence: 2, structure: -2 } },
      { text: "Unclear directions", traits: { structure: 2 } },
      { text: "Being micromanaged", traits: { independence: 2 } }
    ]
  },

  {
    question: "What matters most in a career path?",
    options: [
      { text: "Good pay", traits: { stressTolerance: 1, leadership: 1 } },
      { text: "Job security", traits: { structure: 2, riskTolerance: -1 } },
      { text: "Flexible schedule", traits: { independence: 2 } },
      { text: "Helping others", traits: { social: 2 } },
      { text: "Room to grow", traits: { leadership: 1, educationTolerance: 1 } },
      { text: "Low debt", traits: { educationTolerance: -1, structure: 1 } },
      { text: "Fast training", traits: { educationTolerance: -2, physical: 1 } },
      { text: "Meaningful work", traits: { social: 1, creativity: 1 } }
    ]
  },

  {
    question: "How serious are you about figuring this out today?",
    options: [
      { text: "Just curious", traits: { independence: 1 } },
      { text: "A little serious", traits: { structure: 1 } },
      { text: "Pretty serious", traits: { structure: 1, analytical: 1 } },
      { text: "I need direction now", traits: { structure: 2, stressTolerance: -1 } }
    ]
  }
];

let currentQuestion = 0;
let answers = [];

function startQuiz() {
  document.getElementById("exploreSection").classList.add("hidden");
  document.getElementById("quizArea").classList.remove("hidden");

  const exploreSection =
  document.getElementById("exploreSection");

if (exploreSection) {
  exploreSection.classList.add("hidden");
}

  currentQuestion = 0;
  answers = [];

  resetTraits();

  showQuestion();
}

function lostMode() {
  document.getElementById("exploreSection").classList.add("hidden");
  document.getElementById("quizArea").classList.remove("hidden");

  currentQuestion = 0;
  answers = ["Overwhelmed"];

  resetTraits();

  showQuestion();
}

function startWithVibe(vibe) {
  document.getElementById("exploreSection").classList.add("hidden");
  document.getElementById("quizArea").classList.remove("hidden");

  currentQuestion = 1;
  answers = [vibe];

  resetTraits();

  showQuestion();
}

function showQuestion() {

  const questionBox =
    document.getElementById("questionBox");

  const progressText =
    document.getElementById("progressText");

  const q =
    quizQuestions[currentQuestion];

  progressText.textContent =
    `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

  questionBox.innerHTML = `
    <h3>${q.question}</h3>

    <div class="quiz-options">

      ${q.options.map((option, index) => {

        const optionText =
          typeof option === "string"
            ? option
            : option.text;

        return `
          <button
            type="button"
            class="answer-btn"
            data-index="${index}"
          >
            ${optionText}
          </button>
        `;

      }).join("")}

    </div>
  `;

  document.querySelectorAll(".answer-btn")
    .forEach(button => {

      button.addEventListener("click", function () {

        const selectedOption =
          q.options[this.dataset.index];

        selectAnswer(selectedOption);

      });

    });

}

function selectAnswer(answer) {

  if (typeof answer === "string") {

    answers.push(answer);

  } else {

    answers.push(answer.text);
    
    applyTraits(answer.traits);

  }

  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {

    showQuestion();

  } else {

    showResults();

  }
}

const careerMatches = [
  // TECH / DATA
  { career: "Data Analyst", traits: { analytical: 3, structure: 2, independence: 1 } },
  { career: "Business Analyst", traits: { analytical: 3, social: 1, structure: 2 } },
  { career: "Cybersecurity", traits: { analytical: 3, structure: 2, stressTolerance: 1 } },
  { career: "IT Support", traits: { analytical: 2, social: 2, structure: 1 } },
  { career: "Software Developer", traits: { analytical: 3, creativity: 2, independence: 2 } },
  { career: "UX Designer", traits: { creativity: 3, analytical: 2, social: 1 } },
  { career: "AI Prompt Specialist", traits: { creativity: 2, analytical: 2, independence: 2 } },
  { career: "Automation Specialist", traits: { analytical: 3, creativity: 1, structure: 2 } },
  { career: "GIS Technician", traits: { analytical: 3, structure: 2, independence: 1 } },
  { career: "Drone Operator", traits: { independence: 2, analytical: 2, physical: 1 } },

  // HEALTHCARE
  { career: "Nursing", traits: { social: 3, stressTolerance: 3, structure: 2 } },
  { career: "Dental Hygiene", traits: { social: 2, structure: 2, physical: 1 } },
  { career: "Occupational Therapy", traits: { social: 3, creativity: 1, structure: 2 } },
  { career: "Physical Therapy Assistant", traits: { social: 2, physical: 2, structure: 1 } },
  { career: "Speech Therapy", traits: { social: 3, analytical: 2, structure: 2 } },
  { career: "Mental Health Counseling", traits: { social: 3, stressTolerance: 2, educationTolerance: 2 } },
  { career: "Medical Coding", traits: { structure: 3, analytical: 2, independence: 1 } },
  { career: "Sonographer", traits: { analytical: 2, social: 2, structure: 2 } },
  { career: "Radiologic Technologist", traits: { analytical: 2, structure: 2, social: 1 } },
  { career: "EMT", traits: { stressTolerance: 3, physical: 2, social: 2 } },

  // TRADES / HANDS-ON
  { career: "Electrician", traits: { physical: 3, analytical: 2, structure: 1 } },
  { career: "Welder", traits: { physical: 3, structure: 2, independence: 1 } },
  { career: "HVAC Technician", traits: { physical: 2, analytical: 2, structure: 2 } },
  { career: "Plumber", traits: { physical: 3, analytical: 2, independence: 1 } },
  { career: "Diesel Mechanic", traits: { physical: 3, analytical: 2, independence: 1 } },
  { career: "Industrial Maintenance", traits: { physical: 2, analytical: 3, structure: 2 } },
  { career: "Construction Management", traits: { leadership: 3, structure: 2, stressTolerance: 2 } },
  { career: "Heavy Equipment Operator", traits: { physical: 3, independence: 1, stressTolerance: 1 } },
  { career: "Survey Technician", traits: { analytical: 2, physical: 2, structure: 2 } },
  { career: "Carpenter", traits: { physical: 3, creativity: 1, analytical: 1 } },

  // BUSINESS / LEADERSHIP / ENTREPRENEURSHIP
  { career: "Entrepreneur", traits: { independence: 3, riskTolerance: 3, leadership: 2 } },
  { career: "Small Business Owner", traits: { independence: 3, leadership: 3, riskTolerance: 2 } },
  { career: "Business Consultant", traits: { analytical: 3, leadership: 2, social: 2 } },
  { career: "Project Coordinator", traits: { structure: 3, leadership: 2, social: 1 } },
  { career: "Operations Manager", traits: { leadership: 3, analytical: 2, stressTolerance: 2 } },
  { career: "Human Resources", traits: { social: 3, structure: 2, leadership: 1 } },
  { career: "Recruiter", traits: { social: 3, leadership: 1, structure: 1 } },
  { career: "Sales Manager", traits: { social: 3, leadership: 2, stressTolerance: 2 } },
  { career: "Marketing Specialist", traits: { creativity: 2, analytical: 2, social: 1 } },
  { career: "Event Planner", traits: { creativity: 2, structure: 3, stressTolerance: 2 } },

  // CREATIVE
  { career: "Graphic Designer", traits: { creativity: 3, independence: 1, analytical: 1 } },
  { career: "Photographer", traits: { creativity: 3, independence: 2, social: 1 } },
  { career: "Video Editor", traits: { creativity: 3, independence: 2, analytical: 1 } },
  { career: "Content Creator", traits: { creativity: 3, independence: 3, riskTolerance: 2 } },
  { career: "Copywriter", traits: { creativity: 3, analytical: 1, independence: 2 } },
  { career: "Interior Designer", traits: { creativity: 3, social: 2, structure: 1 } },
  { career: "Animator", traits: { creativity: 3, analytical: 1, independence: 2 } },
  { career: "Brand Strategist", traits: { creativity: 2, analytical: 2, social: 2 } },

  // EDUCATION / HELPING
  { career: "Teaching", traits: { social: 3, structure: 2, stressTolerance: 2 } },
  { career: "Career Coaching", traits: { social: 3, creativity: 1, leadership: 1 } },
  { career: "Training Specialist", traits: { social: 3, leadership: 2, structure: 2 } },
  { career: "School Counselor", traits: { social: 3, stressTolerance: 2, educationTolerance: 2 } },
  { career: "Academic Advisor", traits: { social: 3, structure: 2, analytical: 1 } },
  { career: "Instructional Designer", traits: { creativity: 2, structure: 2, analytical: 2 } },

  // PUBLIC SAFETY / LAW / INVESTIGATION
  { career: "Crime Scene Technician", traits: { analytical: 3, structure: 3, stressTolerance: 2 } },
  { career: "Forensic Accountant", traits: { analytical: 3, structure: 3, independence: 1 } },
  { career: "Emergency Dispatcher", traits: { stressTolerance: 3, structure: 2, social: 2 } },
  { career: "Firefighter", traits: { physical: 3, stressTolerance: 3, social: 2 } },
  { career: "Paralegal", traits: { analytical: 2, structure: 3, social: 1 } },
  { career: "Court Reporter", traits: { structure: 3, independence: 2, analytical: 1 } },

  // ANIMALS / NATURE / HORSES
  { career: "Equine Therapist", traits: { social: 3, physical: 2, creativity: 1 } },
  { career: "Horse Trainer", traits: { physical: 3, independence: 2, stressTolerance: 1 } },
  { career: "Farrier", traits: { physical: 3, independence: 2, analytical: 1 } },
  { career: "Stable Manager", traits: { leadership: 2, physical: 3, structure: 2 } },
  { career: "Veterinary Technician", traits: { social: 2, physical: 2, stressTolerance: 2 } },
  { career: "Wildlife Rehabilitator", traits: { social: 2, physical: 2, independence: 2 } },
  { career: "Park Ranger", traits: { physical: 2, social: 2, independence: 1 } },
  { career: "Environmental Technician", traits: { analytical: 2, physical: 2, structure: 1 } },
  { career: "Agricultural Business Owner", traits: { independence: 3, physical: 2, leadership: 2 } },
  { career: "Animal Shelter Manager", traits: { social: 3, leadership: 2, stressTolerance: 2 } },

  // TRANSPORTATION / LOGISTICS
  { career: "Commercial Driver", traits: { independence: 2, structure: 2, stressTolerance: 1 } },
  { career: "Flight Dispatcher", traits: { stressTolerance: 3, structure: 3, analytical: 2 } },
  { career: "Logistics Coordinator", traits: { structure: 3, analytical: 2, stressTolerance: 1 } },
  { career: "Supply Chain Analyst", traits: { analytical: 3, structure: 2, independence: 1 } },
  { career: "Warehouse Operations Supervisor", traits: { leadership: 2, physical: 2, structure: 2 } },

  // HIDDEN / LESSER-KNOWN
  { career: "Prosthetics Technician", traits: { physical: 2, analytical: 2, creativity: 1 } },
  { career: "Industrial Hygienist", traits: { analytical: 3, structure: 2, social: 1 } },
  { career: "Search Analyst", traits: { analytical: 3, independence: 2, structure: 1 } },
  { career: "Museum Curator", traits: { creativity: 2, structure: 2, educationTolerance: 2 } },
  { career: "Urban Planner", traits: { analytical: 2, creativity: 2, social: 2 } }
  ];

  function explainCareerMatch(career) {
  const details = careerDetails[career];

  if (!details || !details.skills) {
    return "This career matched your answers based on your strongest traits.";
  }

  return `This may fit because it connects with skills like ${details.skills.slice(0, 3).join(", ")}.`;
}

function getMatchStrength(score) {
  if (score >= 18) {
    return "🔥 Strong Match";
  }

  if (score >= 10) {
    return "✅ Good Match";
  }

  return "🧭 Possible Match";
}

function getBestFitLine(career) {
  const lines = {
    "Data Analyst": "You like patterns, details, and solving problems with information.",
    "UX Designer": "You like creativity, problem-solving, and improving how people use things.",
    "Electrician": "You like hands-on work, problem-solving, and practical skills.",
    "Career Coaching": "You like helping people figure things out and move forward.",
    "Project Coordinator": "You like organizing people, plans, deadlines, and details.",
    "Entrepreneur": "You like freedom, risk, leadership, and building your own path.",
    "Graphic Designer": "You like visual creativity, ideas, and making things look better.",
    "Heavy Equipment Operator": "You like physical work, focus, machinery, and outdoor environments.",
    "Marketing Specialist": "You like creativity, strategy, communication, and understanding people.",
    "Drone Operator": "You like technology, independence, visuals, and hands-on exploration."
  };

  return lines[career] || "This career connects with several of your answer patterns.";
}

function getMismatchWarning(career) {
  const warnings = {
    "Data Analyst": "You hate details, spreadsheets, patterns, or checking work carefully.",
    "UX Designer": "You dislike feedback, revisions, or figuring out what users need.",
    "Electrician": "You do not want physical work, safety rules, tools, or jobsite conditions.",
    "Career Coaching": "You get drained by listening, encouraging others, or helping people make decisions.",
    "Project Coordinator": "You dislike schedules, follow-up, deadlines, and keeping people organized.",
    "Entrepreneur": "You need guaranteed stability, predictable income, and low risk right away.",
    "Graphic Designer": "You dislike revisions, client opinions, or creating under deadlines.",
    "Heavy Equipment Operator": "You do not want outdoor conditions, safety pressure, or machinery responsibility.",
    "Marketing Specialist": "You dislike writing, testing ideas, analyzing results, or audience strategy.",
    "Drone Operator": "You dislike regulations, technical details, weather limits, or precision work."
  };

  return warnings[career] || "You dislike the daily tasks, training path, or work environment connected to this career.";
}

function exploreCareer(career) {
  const detailArea = document.getElementById("careerDetailArea");

  if (!detailArea) {
    alert("careerDetailArea is missing from the results section.");
    return;
  }

  detailArea.innerHTML = showCareerDetails(career);
  detailArea.scrollIntoView({
  behavior: "smooth",
  block: "nearest"
});
  
}

function showCareerDetails(career) {

  const info = getCareerInfo(career);

  return `
    <div class="career-detail-box">

      <button
        type="button"
        class="close-detail-btn"
        onclick="closeCareerDetails()"
      >
        ×
      </button>

      <h4>${career}</h4>

      <p>${info.summary}</p>

      <p><strong>Training:</strong> ${info.training}</p>

      <p><strong>Job Market:</strong> ${info.jobMarket}</p>

      <p><strong>Stress Level:</strong> ${info.stress}</p>

      <p><strong>Skills to build:</strong></p>

      <ul>
        ${info.skills.map(skill => `
          <li>${skill}</li>
        `).join("")}
      </ul>

      <p><strong>First small step:</strong> ${info.nextStep}</p>

      <p><strong>Real talk:</strong> ${info.truth}</p>

    </div>
  `;
}

function closeCareerDetails() {
  const detailArea = document.getElementById("careerDetailArea");

  if (detailArea) {
    detailArea.innerHTML = "";
  }
}

let savedCareers = [];

function saveCareer(career) {
  if (!savedCareers.includes(career)) {
    savedCareers.push(career);
  }

  localStorage.setItem("savedCareers", JSON.stringify(savedCareers));
  updateSavedCareers();
}

function updateSavedCareers() {

  const savedArea =
    document.getElementById("savedCareersArea");

  if (!savedArea) return;

  if (savedCareers.length === 0) {

    savedArea.innerHTML = `
      <p>No saved careers yet.</p>
    `;

    return;
  }

  savedArea.innerHTML = `
    <h3>Saved Careers</h3>
    <button
  type="button"
  class="clear-saved-btn"
  onclick="clearSavedCareers()"
>
  Clear Saved Careers
</button>

    <div class="saved-career-list">
      ${savedCareers.map(career => `
        <div class="saved-career-item">
         <span onclick="exploreCareer('${career}')">
  ${career}
</span>

          <button
            type="button"
            onclick="removeSavedCareer('${career}')"
          >
            ×
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

function removeSavedCareer(career) {
  savedCareers = savedCareers.filter(item => item !== career);

  localStorage.setItem("savedCareers", JSON.stringify(savedCareers));
  updateSavedCareers();
}

function loadSavedCareers() {
  const saved = localStorage.getItem("savedCareers");

  if (saved) {
    savedCareers = JSON.parse(saved);
  }
}

function getCareerInfo(career) {
  return careerDetails[career] || {
    summary: "This career matched your answers, but full details are still being built.",
    truth: "Research the daily work, training path, pay range, and stress level before deciding.",
    training: "Training varies by role.",
    difficulty: "Varies",
    jobMarket: "Varies by location",
    stress: "Varies",
    skills: ["Research", "Communication", "Problem-solving"],
    nextStep: "Look up this career and write down what sounds interesting and what sounds difficult.",
    roadmap: ["Research the career", "Watch a day-in-the-life video", "Find training requirements", "Talk to someone in the field", "Choose one small next step"]
  };
}

function getPersonalitySummary(topTraits) {

  if (topTraits.includes("analytical")) {
    return "You tend to think deeply, solve problems, and look for patterns or systems.";
  }

  if (topTraits.includes("creativity")) {
    return "You seem drawn toward ideas, expression, innovation, and building things differently.";
  }

  if (topTraits.includes("social")) {
    return "You appear people-oriented and may enjoy helping, guiding, teaching, or supporting others.";
  }

  if (topTraits.includes("physical")) {
    return "You may prefer hands-on work, movement, practical tasks, and real-world environments.";
  }

  if (topTraits.includes("leadership")) {
    return "You seem naturally drawn toward responsibility, influence, organization, or decision-making.";
  }

  return "Your interests are still developing, which is completely normal.";
}

let compareCareers = [];

function addToCompare(career) {

  if (compareCareers.includes(career)) {
    showCompareMessage(`${career} is already selected.`);
    return;
  }

  if (compareCareers.length >= 2) {
    compareCareers.shift();
  }

  compareCareers.push(career);
  updateCompareArea();
}

function removeFromCompare(career) {
  compareCareers = compareCareers.filter(item => item !== career);
  updateCompareArea();
}

function clearCompareCareers() {
  compareCareers = [];
  updateCompareArea();
}

function showCompareMessage(message) {
  const compareArea = document.getElementById("compareArea");

  if (!compareArea) return;

  const messageBox = document.createElement("div");
  messageBox.className = "compare-message";
  messageBox.textContent = message;

  compareArea.prepend(messageBox);

  setTimeout(() => {
    messageBox.remove();
  }, 3000);
}

function updateCompareArea() {

  const compareArea =
    document.getElementById("compareArea");

  if (!compareArea) return;

  if (compareCareers.length === 0) {

    compareArea.innerHTML = `
      <p>No careers selected for comparison.</p>
    `;

    return;
  }

  compareArea.innerHTML = `
    <h3>Career Comparison</h3>

    <button
      type="button"
      class="clear-compare-btn"
      onclick="clearCompareCareers()"
    >
      Clear Comparison
    </button>

    <div class="compare-grid">
      ${compareCareers.map(career => {

        const info = getCareerInfo(career);

        return `
          <div class="compare-card">

            <h4>${career}</h4>

            <button
              type="button"
              class="remove-compare-btn"
              onclick="removeFromCompare('${career}')"
            >
              Remove
            </button>

            <p><strong>Training:</strong> ${info.training}</p>

            <p><strong>Difficulty:</strong> ${info.difficulty}</p>

            <p><strong>Job Market:</strong> ${info.jobMarket}</p>

            <p><strong>Stress:</strong> ${info.stress}</p>

            <p><strong>First Step:</strong> ${info.nextStep}</p>

          </div>
        `;
      }).join("")}
    </div>
  `;
}

function clearSavedCareers() {
  savedCareers = [];
  localStorage.removeItem("savedCareers");
  updateSavedCareers();
}

function showResults() {

  const questionBox =
    document.getElementById("questionBox");

  const progressText =
    document.getElementById("progressText");

  const sortedTraits = Object.entries(userTraits)
    .sort((a, b) => b[1] - a[1]);

  const topTraits = sortedTraits
    .filter(trait => trait[1] > 0)
    .slice(0, 3)
    .map(trait => trait[0]);

  const matchedCareers = careerMatches
  .map(item => {
    let score = 0;

    for (let trait in item.traits) {
      score += (userTraits[trait] || 0) * item.traits[trait];
    }

    return {
      career: item.career,
      score: score
    };
  })
  .sort((a, b) => b.score - a.score)
  .slice(0, 10);

  progressText.textContent =
    "Your PathFinder Results";

  const bottomCtaSection =
  document.getElementById("bottomCtaSection");

if (bottomCtaSection) {
  bottomCtaSection.classList.add("hidden");
}

  const exploreSection =
  document.getElementById("exploreSection");

if (exploreSection) {
  exploreSection.classList.add("hidden");
}

  questionBox.innerHTML = `
    <div class="result-card">

      <h3>Your possible career matches</h3>

      <p>
        You picked:
        ${answers.join(", ")}
      </p>

      <p>
        Your strongest traits:
        ${topTraits.length ? topTraits.join(", ") : "Still developing"}
      </p>

      <p class="personality-summary">
        ${getPersonalitySummary(topTraits)}
      </p>

      <h4>Your top career matches:</h4>
      <p class="career-count-note">
  PathFinder compared your answers against ${careerMatches.length} career paths and pulled your strongest starting matches.
</p>

      <p class="results-note">
        These are not final answers. They are starting points. Save anything that feels interesting, even if you are not sure yet.
      </p>

      <div class="career-grid">
       ${matchedCareers.map(match => {
          const info = getCareerInfo(match.career);

  return `
          <div class="career-card">
          
          <h5>
  ${match.career}
</h5>

<p class="match-strength">
  ${getMatchStrength(match.score)}
</p>

<div class="career-tags">
  <span>${info.difficulty}</span>
  <span>${info.stress}</span>
  <span>${info.jobMarket}</span>
</div>

<p>
  ${info.summary}
</p>
            
           <p><strong>Try this next:</strong> ${info.nextStep}</p>

            <p><strong>Real talk:</strong> ${info.truth}</p>

          <p><strong>Training:</strong> ${info.training}</p>

          <p><strong>Difficulty:</strong> ${info.difficulty}</p>

          <p><strong>Job Market:</strong> ${info.jobMarket}</p>

          <p><strong>Stress Level:</strong> ${info.stress}</p>

           <button 
  type="button" 
  class="explore-career-btn"
  onclick="exploreCareer('${match.career}')"
>
  Explore this career
</button>

<button
  type="button"
  class="save-career-btn"
  onclick="saveCareer('${match.career}')"
>
  ⭐ Save Career
</button>

<button
  type="button"
  class="compare-career-btn"
  onclick="addToCompare('${match.career}')"
>
  ⚖️ Compare
</button>

            <p><strong>Best fit if:</strong> ${getBestFitLine(match.career)}</p>

            <p><strong>May not fit if:</strong> ${getMismatchWarning(match.career)}</p>

<ol>
  ${info.roadmap.map(step => `
    <li>${step}</li>
  `).join("")}
</ol>

</div>
         
        `;
}).join("")}
    </div>

    <div class="hidden-careers-box">
  <h3>Hidden careers worth exploring</h3>
  <p>
    These may not be your top matches, but they are interesting paths many people never hear about.
  </p>

 <div class="hidden-career-list">

  <span onclick="exploreCareer('GIS Technician')">
    GIS Technician
  </span>

  <span onclick="exploreCareer('Sonographer')">
    Sonographer
  </span>

  <span onclick="exploreCareer('Farrier')">
    Farrier
  </span>

  <span onclick="exploreCareer('Industrial Hygienist')">
    Industrial Hygienist
  </span>

  <span onclick="exploreCareer('Court Reporter')">
    Court Reporter
  </span>

</div>
</div>

<button type="button" class="start-over-btn" onclick="startQuiz()">
  🗺️ Start a New Path
</button>

<button type="button" class="print-results-btn" onclick="window.print()">
  🖨️ Print or Save Results
</button>

    <div id="compareArea"></div>

    <div id="savedCareersArea"></div>

    <div id="careerDetailArea"></div>
    
    </div>
  `;

  loadSavedCareers();
  updateSavedCareers();
  updateCompareArea();

  questionBox.scrollIntoView({
  behavior: "smooth",
  block: "start"
});

  console.log("FINAL TRAITS:", userTraits);
  console.log("CAREER MATCHES:", matchedCareers);
}

function formatCluster(cluster) {

  const names = {
    helper: "Healthcare & Wellness",
    tech: "Technology & Innovation",
    handsOn: "Skilled Trades & Construction",
    creative: "Creative & Media",
    leadership: "Business & Leadership",
    explorer: "Animals & Nature"
  };

  return names[cluster] || cluster;
}

window.startQuiz = startQuiz;
window.lostMode = lostMode;
window.startWithVibe = startWithVibe;
window.selectAnswer = selectAnswer;
window.exploreCareer = exploreCareer;
window.closeCareerDetails = closeCareerDetails;
window.saveCareer = saveCareer;
window.removeSavedCareer = removeSavedCareer;
window.addToCompare = addToCompare;
window.removeFromCompare = removeFromCompare;
window.clearCompareCareers = clearCompareCareers;
window.clearSavedCareers = clearSavedCareers;
