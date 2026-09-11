export const personalInfo = {
  name: "Pavit Agrawal",
  title: "Software Engineer • Data & Analytics • Applied AI",
  headline: "Building reliable software, data products, and AI-enabled systems.",
  location: "Delhi NCR, India",
  email: "pavitagrawal@gmail.com",
  github: "https://github.com/pavitagrawal",
  linkedin: "https://www.linkedin.com/in/pavit-agrawal-736572283",
  portfolio: "https://pavit-portfolio.vercel.app/",
  resumePdf: "/documents/Pavit_Agrawal_CV.pdf",
  education: {
    institution: "Manipal Institute of Technology, Manipal, Karnataka",
    degree: "Bachelor of Technology — Computer and Communication Engineering",
    period: "Jul 2023 – May 2027",
  },
  stats: [
    { label: "AI/ML Projects", value: "8+" },
    { label: "Industry Internships", value: "2" },
    { label: "Hackathon Wins & Finals", value: "3" },
    { label: "Classification & DTM Accuracy", value: "95%+" },
  ]
};

export const featuredProjects = [
  {
    id: "adap-t",
    title: "A-DAP-T: AI-Agent Safety Scanner",
    subtitle: "Real-time AI Security & Risk Assessment Framework",
    category: "AI & Agents",
    badges: ["Python", "FastAPI", "LLM Security", "Prompt Guard"],
    period: "2025",
    github: "https://github.com/pavitagrawal/adapt-safety-scanner",
    oneLiner: "Deployment-safety scanner detecting prompt-injection risk, exposed secrets, and unsafe tool permissions in AI-agent projects.",
    problem: "AI Agents with tool-execution privileges pose severe security risks including prompt injection, data exfiltration, and unauthorized API calls.",
    solution: "Built a comprehensive multi-layered security analyzer using evidence-based retrieval, structured risk scoring, and prompt safety evaluation.",
    architecture: [
      { step: "AGENT INSPECTION", desc: "Static analysis of system prompts, tool schemas, and environment variable bindings." },
      { step: "PROMPT INJECTION ENGINE", desc: "Adversarial payload testing & jailbreak vulnerability scanning." },
      { step: "RISK EVALUATION", desc: "Structured validation matrix producing fine-grained vulnerability scores." },
      { step: "REMEDIATION ADVISOR", desc: "Automated generation of sandboxing policies & mitigation rules." }
    ],
    challenges: [
      { challenge: "Preventing False Positives in Complex Prompts", solution: "Implemented context-aware semantic parsing using embedding similarity thresholds." },
      { challenge: "Latency during live scan", solution: "Async API pipeline architecture with parallel prompt evaluation workers in FastAPI." }
    ],
    impact: "Provides instant zero-trust validation before deploying autonomous LLM agents to production environments."
  },
  {
    id: "mnemos",
    title: "Mnemos: Industrial AI Knowledge Intelligence Platform",
    subtitle: "ET AI Hackathon 2.0 Entry • Hybrid GraphRAG & MCP Architecture",
    category: "AI & Agents",
    badges: ["FastAPI", "LangGraph", "Hybrid GraphRAG", "MCP", "Python"],
    period: "2025",
    live: "https://mnemos-demo.vercel.app",
    github: "https://github.com/pavitagrawal/mnemos-platform",
    oneLiner: "Agentic AI backend for industrial asset intelligence using multi-agent orchestration, Hybrid GraphRAG, and MCP-based tool integration.",
    problem: "Industrial documentation is fragmented across structured DBs, unstructured PDFs, and sensor logs, delaying root-cause analysis during asset failures.",
    solution: "Designed a multi-agent orchestration system combining vector search with graph knowledge traversal (GraphRAG) and Model Context Protocol (MCP) tools.",
    architecture: [
      { step: "INGEST & INDEX", desc: "Multi-modal extraction into hybrid vector (Qdrant) and graph (Neo4j) databases." },
      { step: "AGENTIC WORKFLOW", desc: "LangGraph state machine delegating queries to specialized investigation agents." },
      { step: "MCP TOOL BRIDGE", desc: "Standardized tool interfaces accessing real-time sensor metrics and manuals." },
      { step: "HUMAN-IN-THE-LOOP", desc: "Approval check for high-consequence asset maintenance actions." }
    ],
    challenges: [
      { challenge: "Graph & Vector Retrieval Alignment", solution: "Developed a dual-stage re-ranking algorithm combining cosine similarity with multi-hop graph distance." }
    ],
    impact: "Delivered evidence-grounded Root Cause Analysis (RCA) with human approval workflows for critical equipment."
  },
  {
    id: "civitas",
    title: "Civitas: Multimodal Incident Intelligence Platform",
    subtitle: "Next-Gen Municipal Governance & Incident Response",
    category: "Full Stack",
    badges: ["FastAPI", "Next.js", "LangGraph", "PostgreSQL/PostGIS", "Docker"],
    period: "2026",
    github: "https://github.com/Dhruvg334/Civitas/tree/ml-layer",
    live: "https://civitas-web.vercel.app/",
    oneLiner: "Transforms raw citizen reports (images, video, text, GPS) into verified, prioritized municipal work orders using AI & spatial intelligence.",
    problem: "Municipal emergency and maintenance teams receive thousands of unstructured, duplicate citizen complaints without priority ranking.",
    solution: "Engineered a spatial-AI pipeline that ingests multimodal inputs, dedupes using geo-proximity + visual vector match, and routes work orders automatically.",
    architecture: [
      { step: "MULTIMODAL INGESTION", desc: "Process citizen photos, text voice notes, and PostGIS geo-coordinates." },
      { step: "AI SEVERITY SCORING", desc: "CLIP visual embeddings & LLM sentiment/damage intensity classification." },
      { step: "SPATIAL DEDUPLICATION", desc: "PostGIS spatial index clustering identical reported events." },
      { step: "WORK ORDER DISPATCH", desc: "LangGraph routing engine creating structured municipal work tickets." }
    ],
    challenges: [
      { challenge: "High-volume spatial query performance", solution: "Optimized PostGIS spatial index trees & materialized geospatial views in PostgreSQL." }
    ],
    impact: "Reduces duplicate municipal issue reports by 70% and automates priority dispatching."
  },
  {
    id: "hydro-dtm",
    title: "Hydro-DTM System: High-Precision Terrain Classifier",
    subtitle: "National Geo AI Hackathon • IIT Bombay Techfest Finalist",
    category: "Computer Vision",
    badges: ["Python", "GIS / LiDAR", "Scikit-Learn", "Machine Learning"],
    period: "2025",
    github: "https://github.com/pavitagrawal/hydro-dtm-system",
    oneLiner: "End-to-end Python pipeline fusing ML with GIS/LiDAR data to generate digital terrain models with 95%+ classification accuracy.",
    problem: "Raw point-cloud LiDAR data contains noise, vegetation artifacts, and terrain distortions hindering precise hydrological modeling.",
    solution: "Constructed an automated ML pipeline extracting geometric LiDAR features and applying supervised gradient boosting for terrain point filtering.",
    architecture: [
      { step: "LiDAR PREPROCESSING", desc: "Filtering spatial noise, outlier points, and sensor elevation anomalies." },
      { step: "FEATURE EXTRACTION", desc: "Eigenvalue-based geometric features (linearity, planarity, omnivariance)." },
      { step: "ML CLASSIFIER", desc: "Ensemble classifier predicting ground vs non-ground point labels." },
      { step: "DTM GENERATION", desc: "Kriging interpolation creating continuous high-resolution Digital Terrain Maps." }
    ],
    challenges: [
      { challenge: "Processing gigabyte-scale point cloud datasets", solution: "Chunked spatial indexing with parallel multiprocessing in Python." }
    ],
    impact: "Achieved 95%+ point classification accuracy and 90% predictive accuracy in national competition."
  }
];

export const allProjects = [
  ...featuredProjects,
  {
    id: "credit-data-eda",
    title: "Credit Data EDA & Financial Analytics Pipeline",
    category: "Data Analytics",
    badges: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    period: "2025",
    github: "https://github.com/pavitagrawal/credit-data-eda",
    oneLiner: "Exploratory analysis of credit and financial datasets, with trend analysis, anomaly detection, and stakeholder-ready dashboards."
  },
  {
    id: "heart-failure-prediction",
    title: "Heart Failure Mortality Prediction",
    category: "Machine Learning",
    badges: ["Python", "Scikit-learn", "Statistical Modeling", "ROC-AUC"],
    period: "2025",
    github: "https://github.com/pavitagrawal/heart-failure-prediction",
    oneLiner: "Machine-learning models for clinical mortality-risk prediction using feature selection, cross-validation, and interpretable performance analysis."
  },
  {
    id: "hate-speech-detection",
    title: "Hate Speech Detection NLP System",
    category: "Data Science & NLP",
    badges: ["Python", "NLP", "TF-IDF", "Scikit-learn"],
    period: "2025",
    github: "https://github.com/pavitagrawal/hate-speech-detection",
    oneLiner: "Text-classification system for toxic-content detection using NLP preprocessing, feature engineering, ensemble models, and evaluation metrics."
  },
  {
    id: "daedalus",
    title: "Daedalus: AI Career Navigator",
    category: "AI & Agents",
    badges: ["FastAPI", "Pydantic", "SQLAlchemy", "Python"],
    period: "2025",
    github: "https://github.com/pavitagrawal/daedalus-career-navigator",
    oneLiner: "Deterministic career-fit scoring, skill-gap analysis, and recommendation engine APIs for automated career guidance.",
    problem: "Job seekers lack actionable quantitative insight on exact skill gaps required for target roles.",
    solution: "Designed structured scoring algorithms comparing candidate vectors against target role competency matrices.",
    challenges: [{ challenge: "Low-latency REST scoring", solution: "Utilized FastAPI pydantic validation and cached database queries." }],
    impact: "Powers real-time resume-to-role matching for hundreds of early-career developers."
  },
  {
    id: "bharat-finance",
    title: "Bharat Finance Platform",
    category: "Full Stack",
    badges: ["Next.js 15", "React 19", "AWS", "TailwindCSS"],
    period: "2025",
    live: "https://bharat-finance-platform.vercel.app",
    github: "https://github.com/pavitagrawal/bharat-finance-platform",
    oneLiner: "AWS ImpactX Hackathon (IIT Bombay Techfest) entry featuring multilingual financial dashboards and real-time data visualizers.",
    problem: "Financial applications in India often lack accessible multi-lingual interfaces and real-time visualization for tier 2/3 users.",
    solution: "Built a high-performance Next.js 15 app with dynamic localization and lightweight SVG/Canvas financial analytics.",
    impact: "Recognized at AWS ImpactX Hackathon for high performance and inclusive UX."
  },
  {
    id: "speech-persona",
    title: "AI Speech Persona Builder",
    category: "Research",
    badges: ["FastAPI", "Next.js", "Gemini API", "Audio Analysis"],
    period: "2025",
    github: "https://github.com/pavitagrawal/ai-speech-coach",
    oneLiner: "Speech coaching platform analyzing vocal delivery, pace, and vocabulary to provide personalized feedback.",
    problem: "Speakers struggle to get objective, quantifiable feedback on speech delivery and clarity.",
    solution: "Developed an audio-to-text pipeline evaluating sentiment, clarity metrics, and vocal delivery traits.",
    impact: "Helps users track public speaking progress over time with actionable AI coaching."
  }
];

export const experiences = [
  {
    role: "Control Assurance Intern",
    company: "Deloitte — Audit & Assurance",
    location: "Gurugram, India",
    period: "May 2026 – Jul 2026",
    color: "emerald",
    offerLetterPdf: "/documents/Delloite OfferLetter.pdf",
    highlights: [
      "Assessed Digital Personal Data Protection (DPDP) Act compliance for enterprise client KOBELCO.",
      "Verified cybersecurity password, access control, and IT configuration controls across enterprise infrastructure.",
      "Formulated remediation strategies to mitigate compliance and data privacy exposure."
    ],
    tech: ["DPDP Act", "Cybersecurity Controls", "Risk Assessment", "Audit & Assurance"]
  },
  {
    role: "Data Analyst Intern",
    company: "TransOrg Analytics",
    location: "Gurugram, India",
    period: "May 2025 – Jul 2025",
    color: "blue",
    certificatePdf: "/documents/Internship Certificate_Pavit Agrawal-signed (1) (1).pdf",
    offerLetterPdf: "/documents/Offer-Letter-675011754142060.pdf",
    highlights: [
      "Assisted in integrating ML-driven fraud detection into production systems, contributing to a deep-learning fraud engine.",
      "Analyzed product-level sales factors and margin impact for retail discount optimization initiatives.",
      "Completed in-house training covering SQL, Python, Tableau, Power BI, and core statistics."
    ],
    tech: ["Python", "SQL", "Deep Learning", "Power BI", "Tableau", "Fraud Detection"]
  }
];

export const skillsCategorized = [
  {
    category: "AI & Agentic Systems",
    color: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    skills: [
      { name: "LangGraph", projects: ["Mnemos", "Civitas"] },
      { name: "Agentic AI", projects: ["Mnemos", "A-DAP-T"] },
      { name: "Hybrid GraphRAG", projects: ["Mnemos"] },
      { name: "Gemini API", projects: ["Speech Persona"] },
      { name: "LLM Security & Guardrails", projects: ["A-DAP-T"] },
      { name: "CLIP Embeddings", projects: ["Civitas"] },
      { name: "MCP (Model Context Protocol)", projects: ["Mnemos"] },
      { name: "Prompt Engineering", projects: ["A-DAP-T"] }
    ]
  },
  {
    category: "Machine Learning & Data Science",
    color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    skills: [
      { name: "PyTorch & Deep Learning", projects: ["TransOrg Analytics"] },
      { name: "Scikit-Learn", projects: ["Hydro-DTM"] },
      { name: "Computer Vision & GIS", projects: ["Hydro-DTM", "Civitas"] },
      { name: "Statistical Modeling & EDA", projects: ["TransOrg Analytics"] },
      { name: "Pandas & NumPy", projects: ["TransOrg Analytics", "Hydro-DTM"] },
      { name: "Fraud Detection Models", projects: ["TransOrg Analytics"] }
    ]
  },
  {
    category: "Software & Web Engineering",
    color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    skills: [
      { name: "Python", projects: ["All Projects"] },
      { name: "FastAPI", projects: ["Civitas", "Mnemos", "A-DAP-T", "Daedalus"] },
      { name: "Next.js 15 & React 19", projects: ["Civitas", "Bharat Finance", "Speech Persona"] },
      { name: "TypeScript / JavaScript", projects: ["Civitas", "Bharat Finance"] },
      { name: "C++", projects: ["DSA & CS Fundamentals"] },
      { name: "Java", projects: ["CS Fundamentals"] }
    ]
  },
  {
    category: "Databases, Cloud & DevOps",
    color: "border-violet-500/30 text-violet-400 bg-violet-500/10",
    skills: [
      { name: "PostgreSQL & PostGIS", projects: ["Civitas"] },
      { name: "Supabase & pgvector", projects: ["Mnemos"] },
      { name: "MySQL & SQLite", projects: ["Daedalus"] },
      { name: "AWS Services", projects: ["Bharat Finance"] },
      { name: "Docker & Containerization", projects: ["Civitas"] },
      { name: "Vercel & Render", projects: ["All Web Deployments"] }
    ]
  },
  {
    category: "Analytics, Risk & Governance",
    color: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    skills: [
      { name: "Power BI & Tableau", projects: ["TransOrg Analytics"] },
      { name: "DPDP Act Compliance", projects: ["Deloitte"] },
      { name: "Cybersecurity Audit", projects: ["Deloitte"] },
      { name: "Policy Risk Assessment", projects: ["Deloitte"] }
    ]
  }
];

export const certificates = [
  {
    title: "Google AI Certification",
    issuer: "Google / Coursera",
    id: "5QN2YVUFVUD6",
    pdfUrl: "/documents/Coursera 5QN2YVUFVUD6_Google_AI.pdf",
    type: "AI & ML",
    date: "2024"
  },
  {
    title: "Deloitte Control Assurance & IT Audit",
    issuer: "Deloitte India",
    pdfUrl: "/documents/Delloite OfferLetter.pdf",
    type: "Enterprise Audit & Compliance",
    date: "2026"
  },
  {
    title: "Data Analyst & ML Fraud Systems",
    issuer: "TransOrg Analytics",
    pdfUrl: "/documents/Internship Certificate_Pavit Agrawal-signed (1) (1).pdf",
    type: "Data Science & ML",
    date: "2025"
  },
  {
    title: "NXT Wave AI Workshop Masterclass",
    issuer: "NXT Wave",
    pdfUrl: "/documents/NXT_Wave_AI_Workshop_Certificate.png",
    type: "Generative AI",
    date: "2024"
  },
  {
    title: "TransOrg Official Project Completion",
    issuer: "TransOrg Analytics",
    pdfUrl: "/documents/PAVIT_Jul_2025_project_completion_67501.pdf",
    type: "ML & Analytics",
    date: "2025"
  }
];

export const achievements = [
  { title: "National Geo AI Hackathon Finalist", detail: "Hydro-DTM System, IIT Bombay Techfest", year: "2025" },
  { title: "AWS ImpactX Hackathon", detail: "Bharat Finance Platform, IIT Bombay Techfest", year: "2025" },
  { title: "HackverseX Winner", detail: "Winner credential in supplied certificate records", year: "2026" },
  { title: "Hackefest Credential", detail: "Participation certificate in supplied records", year: "2026" },
  { title: "Google AI Certification", detail: "Google / Coursera, credential ID 5QN2YVUFVUD6", year: "2024" },
  { title: "YouthCodeXAI Certificate", detail: "AI learning and participation credential", year: "2026" },
  { title: "DAP Credential", detail: "Pavit Agrawal professional learning record", year: "2026" },
  { title: "DLX Credential", detail: "Pavit Agrawal professional learning record", year: "2026" },
  { title: "NXT Wave AI Workshop", detail: "Generative AI workshop masterclass", year: "2024" },
  { title: "Letter of Recommendation", detail: "Supporting recommendation record", year: "2026" },
  { title: "TransOrg Completion Records", detail: "Internship, participation, and project-completion records", year: "2025" },
  { title: "Deloitte Assurance Record", detail: "Control assurance and IT audit documentation", year: "2026" }
];
