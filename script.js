
    const careerPools = {
      helper: ["Nursing", "Social Work", "Teaching", "Career Coaching", "Occupational Therapy", "Speech Therapy", "Physical Therapy Assistant", "Mental Health Counseling", "Dental Hygiene", "Emergency Medical Technician"],
      tech: ["Data Analyst", "IT Support", "Software Developer", "Cybersecurity", "UX Designer", "AI Prompt Specialist", "Cloud Support", "Business Analyst", "Game Developer", "Automation Specialist"],
      handsOn: ["Electrician", "Welder", "HVAC Technician", "Construction Management", "Diesel Mechanic", "Heavy Equipment Operator", "Plumber", "Industrial Maintenance", "Commercial Driver", "Survey Technician"],
      creative: ["Graphic Designer", "Marketing Specialist", "Content Creator", "Photographer", "Video Editor", "Interior Designer", "Brand Strategist", "Event Planner", "Animator", "Copywriter"],
      leadership: ["Project Coordinator", "Operations Manager", "Entrepreneur", "Human Resources", "Sales Manager", "Logistics Coordinator", "Business Consultant", "Recruiter", "Store Manager", "Training Specialist"],
      explorer: ["Park Ranger", "Flight Dispatcher", "Crime Scene Technician", "Travel Advisor", "Wildlife Rehabilitator", "Forensic Accountant", "Museum Curator", "Urban Planner", "Drone Operator", "Environmental Technician"]
    };

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
        options: ["Freedom", "Stability", "High income", "Helping people", "Creativity", "Adventure", "Leadership", "Low stress"]
      },
      {
        question: "What kind of work would you rather do?",
        options: ["Solve problems", "Build things", "Help people", "Create something", "Organize details", "Lead a team", "Work with technology", "Work outdoors"]
      },
      {
        question: "What drains you the fastest?",
        options: ["Too much talking", "Sitting all day", "Repetitive work", "High pressure", "Physical labor", "Strict routines", "Unclear directions", "Being micromanaged"]
      },
      {
        question: "What matters most in a career path?",
        options: ["Good pay", "Job security", "Flexible schedule", "Helping others", "Room to grow", "Low debt", "Fast training", "Meaningful work"]
      },
      {
        question: "How serious are you about figuring this out today?",
        options: ["Just curious", "A little serious", "Pretty serious", "I need direction now"]
      }
    ];

    let currentQuestion = 0;
    let answers = [];

    function startQuiz() {
      document.getElementById("exploreSection").classList.add("hidden");
      document.getElementById("quizArea").classList.remove("hidden");
      document.getElementById("quizArea").scrollIntoView({ behavior: "smooth" });
      currentQuestion = 0;
      answers = [];
      showQuestion();
    }

    function lostMode() {
      document.getElementById("exploreSection").classList.add("hidden");
      document.getElementById("quizArea").classList.remove("hidden");
      document.getElementById("quizArea").scrollIntoView({ behavior: "smooth" });
      currentQuestion = 0;
      answers = ["I have no idea what I want"];
      showQuestion();
    }

    function startWithVibe(vibe) {
      document.getElementById("exploreSection").classList.add("hidden");
      document.getElementById("quizArea").classList.remove("hidden");
      document.getElementById("quizArea").scrollIntoView({ behavior: "smooth" });
      currentQuestion = 1;
      answers = [vibe];
      showQuestion();
    }

    function showQuestion() {
      const questionBox = document.getElementById("questionBox");
      const progressText = document.getElementById("progressText");
      const q = quizQuestions[currentQuestion];

      progressText.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

      questionBox.innerHTML = `
        <h3>${q.question}</h3>
        <div class="quiz-options">
          ${q.options.map(option => `<button onclick="selectAnswer('${option.replace(/'/g, "\'")}')">${option}</button>`).join("")}
        </div>
      `;
    }

    function selectAnswer(answer) {
      answers.push(answer);
      currentQuestion++;

      if (currentQuestion < quizQuestions.length) {
        showQuestion();
      } else {
        showResults();
      }
    }

    function showResults() {
      const questionBox = document.getElementById("questionBox");
      const progressText = document.getElementById("progressText");
      progressText.textContent = "Your first PathFinder snapshot";

      const answerText = answers.join(" ").toLowerCase();

      let pathway = "Explorer Path";
      let description = "You may not know exactly what you want yet, but you are ready to explore options without pressure. That is a perfectly valid starting point.";
      let careers = careerPools.explorer;
      let skills = ["Self-awareness", "Communication", "Basic technology", "Decision-making"];
      let vibeNote = "You are still exploring, so the goal is not to pick forever. The goal is to get curious enough to take one useful next step.";

      if (answerText.includes("stability") || answerText.includes("job security")) {
        vibeNote = "Stability matters to you. Focus on paths with steady demand, clear training routes, benefits, and lower risk of job-market chaos.";
      }

      if (answerText.includes("high income") || answerText.includes("good pay")) {
        vibeNote = "Income matters to you. That is not shallow — it is practical. Compare pay with training cost, debt, stress, and how long it takes to move up.";
      }

      if (answerText.includes("freedom") || answerText.includes("flexible")) {
        vibeNote = "Freedom matters to you. Look for paths with remote work, flexible schedules, self-employment potential, or control over your day.";
      }

      if (answerText.includes("low stress")) {
        vibeNote = "Low stress matters to you. Be careful: some careers look calm from the outside but are chaos wearing khakis. Check daily pressure, deadlines, people demands, and schedule.";
      }

      if (answerText.includes("adventure")) {
        vibeNote = "Adventure matters to you. You may want variety, movement, travel, field work, or changing environments instead of the same desk every day.";
      }

      if (answerText.includes("help") || answerText.includes("meaningful")) {
        pathway = "Helper / Impact Path";
        description = "You seem drawn to work that matters to people. You may want to explore healthcare, education, counseling, nonprofit work, public service, or community-focused roles.";
        careers = careerPools.helper;
        skills = ["Empathy", "Communication", "Patience", "Documentation", "Problem-solving"];
      } else if (answerText.includes("technology") || answerText.includes("solve")) {
        pathway = "Problem Solver / Tech Path";
        description = "You may enjoy solving problems, using tools, finding patterns, or improving systems. Tech, data, engineering, analytics, or skilled troubleshooting could fit.";
        careers = careerPools.tech;
        skills = ["Excel", "Coding basics", "Critical thinking", "Troubleshooting", "Data literacy"];
      } else if (answerText.includes("build") || answerText.includes("outdoors") || answerText.includes("physical")) {
        pathway = "Builder / Hands-On Path";
        description = "You may prefer visible results, movement, and practical work. Skilled trades, construction, manufacturing, logistics, or technical training may be worth exploring.";
        careers = careerPools.handsOn;
        skills = ["Tool safety", "Measurement", "Mechanical thinking", "Reliability", "Physical stamina"];
      } else if (answerText.includes("create") || answerText.includes("creativity")) {
        pathway = "Creative / Design Path";
        description = "You may be energized by ideas, visuals, storytelling, or making something original. Creative careers can be powerful, but they often require a strong portfolio.";
        careers = careerPools.creative;
        skills = ["Canva/design", "Writing", "Portfolio building", "Branding", "Creative problem-solving"];
      } else if (answerText.includes("leadership") || answerText.includes("lead")) {
        pathway = "Leader / Organizer Path";
        description = "You may like influencing decisions, organizing people, or improving how things run. Business, management, operations, entrepreneurship, or project coordination may fit.";
        careers = careerPools.leadership;
        skills = ["Leadership", "Planning", "Communication", "Budgeting", "Conflict resolution"];
      }

      questionBox.innerHTML = `
        <div class="result-card">
          <h3>${pathway}</h3>
          <p>${description}</p>

          <h4>Your future vibe:</h4>
          <p>${vibeNote}</p>

          <h4>Career areas to explore:</h4>
          <p>Click a career to see the real-world details.</p>
          <div class="career-grid">
            ${careers.map(career => `
              <div class="career-card" onclick="showCareerDeepDive('${career.replace(/'/g, "\'")}')">
                <h5>${career}</h5>
                <p>${careerDetails[career] ? careerDetails[career].summary : "Explore this option, compare the reality, and see what skills are needed."}</p>
              </div>
            `).join("")}
          </div>

          <div id="deepDiveArea"></div>

          <h4>Skills to start building:</h4>
          <div class="tag-row">${skills.map(skill => `<span>${skill}</span>`).join("")}</div>

          <h4>Reality check:</h4>
          <p>Do not choose a path just because it sounds impressive. Look at the training time, debt, stress, job availability, schedule, and whether the daily work actually fits you.</p>

          <h4>Your next small step:</h4>
          <p>Pick one career from this list and spend 10 minutes learning what a normal day in that job really looks like. Tiny step. Big difference.</p>

          <button class="btn primary" onclick="restartFullQuiz()">Retake Quiz</button>
        </div>
      `;
    }
    function restartFullQuiz() {
      document.getElementById("exploreSection").classList.remove("hidden");
      document.getElementById("quizArea").classList.add("hidden");
      document.getElementById("exploreSection").scrollIntoView({ behavior: "smooth" });
      currentQuestion = 0;
      answers = [];
    }

    function showCluster(cluster) {
      const preview = document.getElementById("clusterPreview");

      const clusterInfo = {
        "Healthcare & Wellness": ["Nursing", "Occupational Therapy", "Mental Health Counseling", "Dental Hygiene", "Speech Therapy", "Physical Therapy Assistant"],
        "Technology & Innovation": ["Software Developer", "Cybersecurity", "Data Analyst", "AI Prompt Specialist", "UX Designer", "Cloud Support"],
        "Skilled Trades & Construction": ["Electrician", "HVAC Technician", "Welder", "Heavy Equipment Operator", "Industrial Maintenance", "Survey Technician"],
        "Creative & Media": ["Graphic Designer", "Content Creator", "Photographer", "Marketing Specialist", "Animator", "Copywriter"],
        "Business & Leadership": ["Entrepreneur", "Operations Manager", "Project Coordinator", "Recruiter", "Sales Manager", "Business Consultant"],
        "Animals & Nature": ["Equine Therapy", "Wildlife Rehabilitator", "Park Ranger", "Environmental Technician", "Animal Rescue Coordinator", "Agricultural Specialist"]
      };

      const careers = clusterInfo[cluster] || [];

      preview.innerHTML = `
        <div class="cluster-preview-box">
          <h3>${cluster}</h3>
          <p>These are example pathways within this cluster. Later, PathFinder can connect these to schools, certifications, salaries, lifestyle matches, personality fit, and real-world experiences.</p>

          <div class="tag-row">
            ${careers.map(career => `<span>${career}</span>`).join("")}
          </div>
        </div>
      `;

      preview.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    function getCareerPositives(career) {
      const positives = {
        "Nursing": "Many nurses feel deeply fulfilled because they directly help people during important moments. There is strong job stability, multiple specialties, and room to grow.",
        "Social Work": "You can genuinely change lives and help people through difficult situations. Many social workers say the work gives them purpose and perspective.",
        "Teaching": "Great teachers often become life-changing influences. Watching students grow and succeed can be incredibly rewarding.",
        "Career Coaching": "Helping someone finally feel hopeful or confident again can be powerful. Every person and pathway is different, which keeps the work interesting.",
        "Data Analyst": "You get to solve problems, find patterns others miss, and help organizations make smarter decisions. It can also offer strong flexibility and remote opportunities.",
        "IT Support": "People are genuinely relieved when you solve problems for them. It is also one of the best entry points into higher-paying tech careers.",
        "Software Developer": "You can build real things from ideas, automate work, create apps, and potentially work remotely with strong income growth.",
        "Cybersecurity": "You help protect people and systems from real threats. The field stays interesting because technology constantly changes.",
        "Electrician": "Excellent long-term income potential, strong independence, and a skill that is always needed. Many electricians eventually run their own business.",
        "Welder": "There are opportunities to specialize, travel, and earn strong pay in advanced industries. Many welders enjoy seeing physical results from their work.",
        "HVAC Technician": "High demand and practical work that solves immediate problems. Skilled HVAC technicians can build stable careers quickly.",
        "Graphic Designer": "You get to create things people actually see and use. Creative work can be flexible and highly satisfying when your ideas come to life.",
        "Marketing Specialist": "You combine creativity and strategy to influence real-world decisions. No two projects are exactly the same.",
        "Content Creator": "You can build your own audience, brand, and opportunities while creating content around topics you enjoy.",
        "Project Coordinator": "You become the person who keeps things moving and organized. Strong coordinators are valuable in almost every industry.",
        "Operations Manager": "You improve systems, solve chaos, and make organizations work better. It can be highly respected and impactful work.",
        "Entrepreneur": "You get freedom to build something meaningful, solve problems your own way, and potentially create major opportunities for yourself and others."
      };

      return positives[career] || "Every career has tradeoffs. The goal is finding work where the positives outweigh the negatives for YOU.";
    }

    function showCareerDeepDive(career) {
      const area = document.getElementById("deepDiveArea");
      const data = careerDetails[career];

      if (!data) {
        area.innerHTML = `
          <div class="deep-dive">
            <h3>${career}</h3>
            <p>This career needs more research added. For now, start by learning what a normal day looks like, what training is required, and how hard it is to get hired.</p>
          </div>
        `;
        area.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      area.innerHTML = `
        <div class="deep-dive">
          <h3>${career}</h3>
          <p>${data.summary}</p>

          <div class="truth-box"><strong>Nobody tells you:</strong><br>${data.truth}</div>

          <div class="truth-box" style="background:#ecfeff;border-color:#a5f3fc;color:#164e63;">
            <strong>What people DO love about it:</strong><br>
            ${getCareerPositives(career)}
          </div>

          <div class="mini-grid">
            <div class="mini-stat"><strong>Training Path</strong><span>${data.training}</span></div>
            <div class="mini-stat"><strong>Difficulty</strong><span>${data.difficulty}</span></div>
            <div class="mini-stat"><strong>Job Market</strong><span>${data.jobMarket}</span></div>
            <div class="mini-stat"><strong>Stress Level</strong><span>${data.stress}</span></div>
            <div class="mini-stat"><strong>Worth It?</strong><span>Depends on fit, effort, and expectations.</span></div>
            <div class="mini-stat"><strong>Best First Move</strong><span>Learn before you commit money.</span></div>
          </div>

          <h4>How to get there:</h4>
          <div class="roadmap">
            ${(data.roadmap || []).map(step => `<div class="road-step">${step}</div>`).join("")}
          </div>

          <h4>Skills to build:</h4>
          <div class="tag-row">${data.skills.map(skill => `<span>${skill}</span>`).join("")}</div>

          <h4>Try this next:</h4>
          <p>${data.nextStep}</p>
        </div>
      `;

      area.scrollIntoView({ behavior: "smooth", block: "center" });
    }
