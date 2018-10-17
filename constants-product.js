// @flow
import * as d3 from 'd3'

export type TrackId = 'MOBILE' | 'WEB_CLIENT' | 'DEVOPS' | 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INSTITUTIONAL_KNOWLEDGE' |
  'CAREER_DEVELOPMENT' | 'RECRUITING' | 'MENTORSHIP' | 'SALES_MARKETING' |
  'CUSTOMER_VALUE' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'MOBILE': Milestone,
  'WEB_CLIENT': Milestone,
  'DEVOPS': Milestone,
  'SERVERS': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INSTITUTIONAL KNOWLEDGE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'RECRUITING': Milestone,
  'MENTORSHIP': Milestone,
  'SALES AND MARKETING': Milestone,
  'CUSTOMER VALUE': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'MOBILE': Track,
  'WEB_CLIENT': Track,
  'DEVOPS': Track,
  'SERVERS': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INSTITUTIONAL_KNOWLEDGE': Track,
  'CAREER_DEVELOPMENT': Track,
  'RECRUITING': Track,
  'MENTORSHIP': Track,
  'SALES_MARKETING': Track,
  'CUSTOMER_VALUE': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
  "MOBILE": {
    "displayName": "Mobile",
    "category": "A",
    "description": "Develops expertise in native mobile platform engineering, such as iOS or Android",
    "milestones": [{
      "summary": "Works effectively within established iOS or Android architectures, following current best practices",
      "signals": [
        "Joins project team as secondary mobile engineer",
        "Build new UI with default platfrom components",
        "Reuses existing custom UI components appropriately",
      ],
      "examples": [
        "Fix the positioning of a button based on feedback from design",
        "Add new features to an existing view in an app",
        "Create a new subclass of UICollectionViewCell to be used in an existing Collection View",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Primary developer on POC type app with minimal custom UI",
        "Builds new UI with minimally custom UI",
        "Migrates code from old patterns to new patterns",
      ],
      "examples": [
        "Parse data from a RESTful API and display the data in app",
        "Customize UI to match client branding",
        "Update a VIPER app to add a new button that passes data through the architecture",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
      "signals": [
        "Primary developer on new product app with custom UI",
        "Works effectively with  Android reactive programming framework",
        "Adds support for new iOS features after a major iOS version upgrade",
      ],
      "examples": [
        "Create a new VIPER app that has several routers",
        "Built an app that stores data in local device database",
        "Informed the team about recent best practice changes and deprecations",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Primary mobile developer on project that introduces new major technologies to Skookum's capabilities",
        "Fixes subtle memory management issues",
        "Establish new architectural feature to use on multiple client apps",
      ],
      "examples": [
        "Architect and build app to introduce indoor wayfinding as a capability to Skookum",
        "Wrote first Kotlin app at Skookum and document best practices for others",
        "Create internal Cocoapods repo to share code between projects",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Primary mobile developer on project that creates new business opportunities from gained expertise.",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
      ],
      "examples": [
        "Architect and build Augmented Reality app before ARKit",
        "Implemented Android recycler views before platform support existed",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  },

  "WEB_CLIENT": {
    "displayName": "Web client",
    "category": "A",
    "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
    "milestones": [{
      "summary": "Works effectively within established web client architectures, following current best practices",
      "signals": [
        "Makes minor modifications to existing screens",
        "Fixes simple design quality issues",
        "Uses CSS appropriately, following style guide",
      ],
      "examples": [
        "Implemented sticky footer on the post page",
        "Hooked up the action to dismiss a post from a stream",
        "Built PaymentHistory screen using ResponseScreen",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Makes sensible abstractions based on template and code patterns",
        "Specs and builds interactive components independently",
        "Prototypes simple new features quickly",
      ],
      "examples": [
        "Built credit card input component",
        "Created shared buttons template",
        "Built modal system",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Performs systemic tasks to significantly minimise bundle size",
        "Acts a caretaker for all of web client code",
      ],
      "examples": [
        "Designed font loading strategy for Skookum",
        "Researched utility of service workers for Skookum",
        "Designed and implemented ResponseScreen",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Implements complex UI transitions that bring delight",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Build a production-ready GraphQL Server",
        "Compare and contrast various front-end state management approaches using popular frameworks",
        "Designed and pioneered proto-based model storage",
      ],
    }, {
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "signals": [
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for web client and ensures projects are in service of it",
      ],
      "examples": [
        "Invented CSS in JS",
        "Defined and drove migration strategy to Lite",
        "Implemented unidirectional data flow to completion",
      ],
    }],
  },

  "DEVOPS": {
    "displayName": "DevOps",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Writes thorough postmortems for service outages",
        "Makes simple configuration changes to services",
        "Automates simple operational tasks",
      ],
      "examples": [
        "Made safe and effective Ansible/Cloudformation/etc changes",
        "Implemented new ETL pipelines based on existing ones. Sets up Jenkins jobs to auto deploy",
        "Resolved out of disk errors independently",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Made minor version upgrades to technologies",
        "Builds machine learning jobs within the ML framework",
        "Triages service issues correctly and independently",
      ],
      "examples": [
        "Upgraded NodeJS from 8.0 to 8.1.1",
        "Creates usable metrics that are publicly displayed",
        "Improved ETL efficiency by improving Dynamo to S3 loading",
        "Setup Jenkins for new native app to automatically deploy new versions",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Designs moderately complex systems and documents them with Architecture Description",
        "Makes major version upgrades to libraries",
      ],
      "examples": [
        "Designed Cloudformation configuration management",
        "Creates entire CI/CD deploy pipeline for project",
        "Designed flexible framework for writing machine learning jobs",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Designs complex projects that encompass multiple systems and technologies",
        "Demonstrates deep knowledge of foundational systems",
        "Introduces new databases and technologies to meet underserved needs",
      ],
      "examples": [
        "Utilizes containers and orchestrators effectively, sharing knowledge with the team",
        "Designed AWS configuration management",
        "Introduced Kafka or other log-based persistence and pioneered streaming events pipeline",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        "Designs transformational projects in service of long-term goals",
        "Defines the strategic vision for foundational work and supporting technologies",
        "Invents industry-leading techniques to solve complex problems",
      ],
      "examples": [
        "Compare and contrast various application architecture approaches and use cases for each",
        "Defined and developed Skookum's continuous delivery strategy",
        "Developed and implemented HA strategy",
      ],
    }],
  },

  "SERVERS": {
    "displayName": "Servers",
    "category": "A",
    "description": "Develops expertise in server side engineering, using technologies such as Go, NodeJS, or Scala",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Adds NodeJS/Ruby/Go/etc endpoints using layers architecture",
        "SSH into remote servers and check status (memory, disk space, top, etc)",
        "Makes minor server changes to support client needs",
      ],
      "examples": [
        "Read and understand the Technology Strategy/Architecture Description template",
        "Create a web server on a cloud provider",
        "Query a NoSQL database, understand the use case for NoSQL",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Generalizes code when appropriate",
        "Determines data needs from product requirements",
      ],
      "examples": [
        "Describe and apply database indexes correctly in multiple dbs",
        "Setup scripts, etc. to build application server from scratch automatically",
        "Make a Dockerfile for a web app/service",
        "Demonstrate solid understanding of RESTful services and associated data patterns (JSON API, etc.)",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Integrates third party services effectively",
        "Writes playbooks for new service maintenance",
      ],
      "examples": [
        "Demonstrate and implement understanding of OAuth2, OpenID Connect, JWT",
        "Implemented payments integration with Stripe",
        "Build Nginx Server",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Build a microservices framework with 2 or more services",
        "Designed custom domains architecture",
        "Deploy an application to the web using container technology",
        "Present new learning around server architecture to Skookum team",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Demonstrate abiliity to select appropriate language for complex projects and justify",
        "Understand needs of microservices deployment and select technologies and process to meet those needs",
        "Demostrate solid understanding of RPC or gRPC based communication between services and pros/cons",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Project management",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": [
        "Estimates small tasks accurately",
        "Delivers tightly-scoped projects efficiently",
        "Actively participates in standups",
      ],
      "examples": [
        "Split a user story into small tasks that can be completed to meet the requirements",
        "Comlpeted sprint work that they committed to finish",
        "Recorded actuals on stories to help calibrate estimates",
      ],
    }, {
      "summary": "Effectively delivers small projects",
      "signals": [
        "Performs research and considers alternative approaches",
        "Does not sacrifice the important for the sake of the urgent",
        "Defines and hits interim milestones",
      ],
      "examples": [
        "Re-estimated the backlog to update team on remaining work",
        "Timeboxed research into alternative approach to make sure important tasks were still completed",
        "Updated team on progress of large story and completed when estimated",
      ],
    }, {
      "summary": "Leads the delivery of small projects",
      "signals": [
        "Delegates tasks to others appropriately",
        "Integrates business needs into project planning",
        "Chooses appropriate project management strategy based on context",
      ],
      "examples": [
        "Ran sprint retro to assess improvement opportunities",
        "Completed launch checklist unprompted for well controlled rollout",
        "Facilitated project kickoff meeting to get buy-in",
      ],
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": [
        "Finds ways to deliver requested scope faster, and prioritizes backlog",
        "Manages dependencies on other projects and teams",
        "Leverages recognition of repeated project patterns",
      ],
      "examples": [
        "Improves project visibility by publishing metrics in a central location.",
        "Identified dependency on client team for work coming up in the next sprint",
        "Analyzed the velocity of the team to identify trends",
      ],
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams, and coordinates effective cross-functional collaboration",
        "Owns a key company metric",
      ],
      "examples": [
        "Created Sprint checklists for new project managers and train them on how to use the checklist",
        "Oversaw multiple project teams and negotiated the resourcing needed to staff all of them",
        "Held project teams accountable to delivering on time",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": [
        "Communicates project status clearly and effectively",
        "Collaborates with others with empathy",
        "Asks for help at the appropriate juncture",
      ],
      "examples": [
        "Updated release notes for app deployment to denote what changed",
        "Updated project status changes in JIRA promptly",
        "Gave thoughtful project updates during standup",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Practises active listening and suspension of attention",
        "Ensures stakeholders are aware of current blockers",
        "Chooses the appropriate tools for accurate and timely communication",
      ],
      "examples": [
        "Received and integrated critical feedback positively",
        "Gave a talk about project learnings at Eng Team Meeting",
        "Spoke to domain experts at Skookum during Engineering phase",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": [
        "Resolves communication difficulties between others",
        "Anticipates and shares schedule deviations in plenty of time",
        "Manages project stakeholder expectations effectively",
      ],
      "examples": [
        "Handled client communication during launch to make sure client had proper expectations",
        "Coordinated communication with 3rd party vendor to align on goals",
        "Notified team of upcoming project obstacle and suggested how to handle it",
      ],
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": [
        "Communicates project risk and tradeoffs skillfully and with nuance",
        "Contextualizes and clarifies ambiguous direction and strategy for others",
        "Negotiates resourcing compromises with other teams",
      ],
      "examples": [
        "Lead training for other Skookum employees on giving presentations",
        "Wrote new hiring process documentation for Engineering Team",
        "Aligned the entire organization around new process",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": [
        "Defines processes for clear communication for the entire team",
        "Shares the right amount of information with the right people, at the right time",
        "Develops and delivers plans to leadership team",
      ],
      "examples": [
        "Organized half year check-in company offsite",
        "Created the communication plan for a large organizational change",
        "Presented to the board about key company metrics and projects",
      ],
    }],
  },

  "CRAFT": {
    "displayName": "Craft",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": [
        "Tests new code thoroughly, both locally, and in production once shipped",
        "Writes tests for every new feature and bug fix",
        "Writes clear comments and documentation",
      ],
      "examples": [
        "Caught a bug on a project before it went live",
        "Submitted a PR with no caretaker comments",
        "Wrote unit tests for new feature",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Refactors existing code to make it more testable",
        "Adds tests for uncovered areas",
        "Deletes unnecessary code and deprecates proactively when safe to do so",
      ],
      "examples": [
        "Requested tests for a PR when acting as reviewer",
        "Reduced the number of linter exceptions on legacy application",
        "Fixed a TODO for someone else in the codebase",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Implements systems that enable better testing",
        "Gives thoughtful code reviews as a domain expert",
        "Adds tooling to improve code quality",
      ],
      "examples": [
        "Setup new plugin on Jenkins to run snapshot UI tests",
        "Wrote project setup script to simplify running unit tests with Jenkins",
        "Organized teams to get more people involved in code reviews",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Builds systems so as to eliminate entire classes of programmer error",
        "Focuses the team on quality with regular reminders",
        "Pragmatically identifies areas where more effort should be put to ensure quality",
      ],
      "examples": [
        "Added code coverage reporting to iOS CI pipeline",
        "Worked with Sales team to improve messaging around the value of quality to clients",
        "Defined and oversaw plan for closing Heartbleed vulnerability on all client projects",
      ],
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": [
        "Defines policies for the engineering org that encourage quality work",
        "Identifies and eliminates single points of failure throughout the organization",
        "Secures time and resources from clients to support great quality",
      ],
      "examples": [
        "Negotiated resources for Fix-It week with client",
        "Instituted and ensured success of a 20% time policy",
        "Created cross project quality reporting tool to expose entire org to engineering quality",
      ],
    }],
  },

  "INSTITUTIONAL_KNOWLEDGE": {
    "displayName": "Institutional Knowledge",
    "category": "B",
    "description": "Seeks to improve Skookum through the by understanding other's knowledge and sharing new knowledge with others",
    "milestones": [{
      "summary": "Understands processes to gain efficiency and learn from others' knowledge",
      "signals": [
        "Checks to see if there are already processes to learn from",
        "Seeks help and critique",
        "Embraces change as a necessity for growth",
      ],
      "examples": [
        "Asked a question about a documented process in Confluence",
        "Asked a question at company lunch",
        "Followed project kick-off checklist",
      ],
    }, {
      "summary": "Informally shares new knowledge with others	",
      "signals": [
        "Makes connections between projects and experience to identify trends",
        "Experiments early and often",
        "Instigates major new features, services, or architectures",
      ],
      "examples": [
        "Presented the results of a project retrospective at a company lunch",
        "Wrote article in Confluence about a new tool to use on projects",
        "Provided feedback on how to improve review process",
      ],
    }, {
      "summary": "Creates processes to formalize knowledge, documenting why the process was created or changed",
      "signals": [
        "Demonstrates concepts proactively with prototypes",
        "Runs experiments on process improvements",
        "Knows how to connect changes to creating value for Skookum",
      ],
      "examples": [
        "Built project allocation tool to make allocation process more consistent and maintainable",
        "Created Reviewum to simplify review process",
        "Organized lunch video series to engage team in learning",
      ],
    }, {
      "summary": "Creates new ways to share knowledge across the organization	",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
        "Follows through with ensuring buy-in on new processes",
        "Identifies holes in institutional knowledge and seeks to remedy",
      ],
      "examples": [
        "Setup and drive the migration to Confluence as the knowledgebase for Skookum",
        "Defined process for experimentation on projects and report findings to the entire company",
        "Created the interviewing rubric and onboarding booklet",
      ],
    }, {
      "summary": "Defines processes that change the way that Skookum does business	",
      "signals": [
        "Drives cross-departmental knowledge sharing",
        "Galvanizes the entire company and garners buy in for a new strategy",
        "Changes complex organizational processes",
      ],
      "examples": [
        "Created a new model to follow instead of agile/scrum that produces better measurable results",
        "Defined a new process to re-organize the company around specialtizations",
        "Drove process to map all department processes on to company values to clarify processes",
      ],
    }],
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Career development",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": [
        "Advocates on behalf and in defense of a group member",
        "Shares opportunities for improvements and recognises achievements",
        "Explains appropriate available industry paths",
      ],
      "examples": [
        "Collected and delivered feedback",
        "Discussed career options and areas of interest informally",
        "Reviewed Growth Framework to help identify areas to focus on",
      ],
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": [
        "Listens with the intent to understand, not the intent to respond",
        "Offers effective career advice to group members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
      "examples": [
        "Set up and attended regular, constructive 1:1s",
        "Provided coaching on how to have difficult conversations",
        "Advocated for team member to get on project that gives them new opportunities",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Sees value in seeing others succeed",
        "Works with team leads to elevate emerging leaders",
      ],
      "examples": [
        "Reviewed individual group member progression every 6 weeks",
        "Suggested appropriate group member for Senior position",
        "Helped team member set actionable quarterly goals",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Develops best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "Completed training on situational leadership",
        "Coached engineer through tough situation with client",
        "Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Identified leadership training opportunities for senior leadership",
        "Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "Provided coaching to group leads",
        "Developed senior team member into a people manager",
        "Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "RECRUITING": {
    "displayName": "Recruiting",
    "category": "C",
    "description": "Strengthens Skookum's team by bringing in excellent staff members	",
    "milestones": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at Skookum",
      "signals": [
        "Reviews existing network for hiring leads regularly",
        "Shadows interviews to gain familiarity with process",
        "Reviews current job postings regularly",
      ],
      "examples": [
        "Completed interview calibration",
        "Set up casual sessions to practice asking questions",
        "Referred appropriate individuals for open positions",
      ],
    }, {
      "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "signals": [
        "Uses interview rubric to provide clear, objective feedback on candidates",
        "Interviews candidates with empathy and treats them all with equal respect",
        "Researches approaches for sourcing candidates and diversifying hiring",
      ],
      "examples": [
        "Added observable evidence for every rating",
        "Started an event for candidates to meet Skookum employees",
        "Tested a new service for quality and diversity of candidates",
      ],
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates	",
      "signals": [
        "Teaches new interviewers how to interview with empathy",
        "Models great interview technique and feedback when shadowed",
        "Reverse shadows trainees and helps calibrate their feedback",
      ],
      "examples": [
        "Wrote new interview question which meets our question quality criteria",
        "Brought candidates into our pipeline proactively, with a high conversion rate",
        "Proposed useful, tangible improvements to the interview process",
      ],
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates	",
      "signals": [
        "Documents subtle cues in interviews that indicate values alignment",
        "Makes hiring decisions, resolving discrepancies between conflicting reports",
        "Identifies great fits for Skookum and leads them through the hiring process",
      ],
      "examples": [
        "Planned engineering meeting on interview process and training",
        "Organized and lead Skookum's presence at a recruitment fair",
        "Maintained relationship with local code schools to build our reputation among graduates",
      ],
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale	",
      "signals": [
        "Sets the tone, policy and goals around building a diverse, high-quality team",
        "Leads efforts to increase diversity among engineering team",
        "Tracks industry activity, identifying opportunities for critical roles",
      ],
      "examples": [
        "Talked with a senior candidate over many months to fill a critical role",
        "Helped quickly fill multiple positions that were open with quality candidates",
        "Set goals, then tracked and reported metrics on team demographics over time",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "C",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themself available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "Acted as an onboarding buddy",
        "Paired with an engineer to help them with an unfamiliar area",
        "Helped a colleague understand their feelings",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer	",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared interesting article with a team member to help with their growth",
        "Offered unprompted feedback to help growth, with empathy",
        "Lead from behind to support someone new to a leadership role",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to Skookum's shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Drives healthy discussion around new ideas",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "Gave a brown bag presentation on a technology",
        "Engaged audience in presentation at company lunch",
        "Ran book club on relevant book",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates brown bag series and lines up speakers",
      ],
      "examples": [
        "Created and lead Skookum's Women in Eng group",
        "Organized an Eng Team Meeting with an outside speaker",
        "Connected junior engineer with senior engineer that was looking for leadership opportunity",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the entire engineering team",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted the professional education budget for engineers",
        "Mentored mentors",
        "Started the eng advisor program and lined up external mentors",
      ],
    }],
  },

  "SALES_MARKETING": {
    "displayName": "Sales and Marketing",
    "category": "D",
    "description": "Helps the sales and marketing teams sell our services in order to increase the number of people that we can help	",
    "milestones": [{
      "summary": "Helps create opportunities for our sales team to start conversations",
      "signals": [
        "Refer clients to our sales team",
        "Create content for the marketing team through existing channels",
        "Assist in marketing development needs",
      ],
      "examples": [
        "Identify an acquaintance that needs one of Skookum's services",
        "Write a new blog post about a relevant technology topic",
        "Fix a bug on Skookum.com",
      ],
    }, {
      "summary": "Consults with the Sales Team to help scope and estimate a client project",
      "signals": [
        "Empathizes with clients to identify their problem",
        "Estimates the size of projects analytically",
        "Identifies other opportunities with a client to work with Skookum",
      ],
      "examples": [
        "Joined sales team on sales calls/meetings",
        "Filled out the estimation template to document sales estimations",
        "Helped the sales team sell a support contract",
      ],
    }, {
      "summary": "Looks for opportunities to create efficiencies in the sales and marketing of Skookum's services",
      "signals": [
        "Creates tools to increase quality of estimates",
        "Helps marketing gather more data about potential clients",
        "Author significant portion of a proposal",
      ],
      "examples": [
        "Improved the estimation template",
        "Ran statistical analysis of old estimates vs actuals",
        "Worked with Marketing to add new analytics framework to website",
      ],
    }, {
      "summary": "Opens new ways for potential clients to interact with Skookum",
      "signals": [
        "Creates new marketing channels",
        "Generates new sales from current clients",
        "Sells the value of Skookum as a partner",
      ],
      "examples": [
        "Started a Skookum podcast and reached a significant audience",
        "Built demo space to showcase Skookum projects",
        "Organized tech conference that attracts technical leaders",
      ],
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Creates new service area for Skookum to sell",
      ],
      "examples": [
        "Built BlockChain prototype and worked with Sales to find a buyer",
      ],
    }],
  },

  "CUSTOMER_VALUE": {
    "displayName": "Customer Value",
    "category": "D",
    "description": "Creates more value for our customers in order to increase retention and provide a world class experience. We focus on value not cost",
    "milestones": [{
      "summary": "Empathizes with customers and the problems that they come to us for help with",
      "signals": [
        "Engages with clients during meetings (and before and after)",
        "Actively listens to client problem desciption and ask thoughtful follow-up questions",
        "Understands the constraints of a project",
      ],
      "examples": [
        "Researched news about a client company before a meeting with them",
        "Intentionally gave the client the better seat at a meeting or meal",
        "Came prepared to client meeting with calrifying questions",
      ],
    }, {
      "summary": "Identifies areas where their project team can provide more value to the customer",
      "signals": [
        "Builds trust with the client through execution",
        "Asks client probing questions",
        "Empathizes with client's problems",
      ],
      "examples": [
        "Solicited feedback from a client to make sure that we are aligned",
        "Researched competitors and presented it to the client for feedback",
        "Shared industry information with project team and how it applies to the work we're doing",
      ],
    }, {
      "summary": "Creates more value for customers on projects	",
      "signals": [
        "Executes on ideas to create more value for the client",
        "Presents Skookum's value effectively",
        "Does not sacrifice contractual work in order to create more value",
      ],
      "examples": [
        "Delivered small tweaks to delight users",
        "Rehearsed client presentation and made changes based on feedback",
        "Created media assets showing the process to demonstrate value to the client",
      ],
    }, {
      "summary": "Leads efforts on project to maximize customer on projects",
      "signals": [
        "Identifies areas for others to create more value for the client",
        "Encourages others to look for ways to create more value for the client",
      ],
      "examples": [
        "Coordinated brainstorming session on creative ways to solve client's problems",
        "Developed lasting relationship with a client that lead to a referral of another client",
        "Provide appropriate feedback on the client's processes",
      ],
    }, {
      "summary": "Effects change that increases cuctomer retention across the entire company",
      "signals": [
        "Create value with every interaction with a client",
        "Challenges clients to think differently about their business",
      ],
      "examples": [
        "Leads clients to change their business processes",
        "Clients refer work to us because of the value you created for them",
      ],
    }],
  },

  "COMMUNITY": {
    "displayName": "Community",
    "category": "D",
    "description": "Builds community internally and/or externally, gives of themself to the team, and champions and extols company values",
    "milestones": [{
      "summary": "Represents Skookum well, and influences individuals positively",
      "signals": [
        "Participates in team activities and offsites",
        "Treats colleagues and clients with respect",
        "Attends Skookum-hosted events and engages with guests",
      ],
      "examples": [
        "Joined and actively participated in a local meetup",
        "Planned an informal group activity for co-workers",
        "Shared a Skookum event post on social media",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Makes space for others to participate",
        "Collaborates with other engineers outside direct responsibilities",
        "Takes meaningful action to introduce people to Skookum",
      ],
      "examples": [
        "Volunteered with local school to talk about jobs in tech",
        "Presented at a local Meetup",
        "Routinely participates in on-boarding training",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of Skookum	",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization",
        "Builds fruitful partnerships with external organizations",
        "Writes blog posts about Skookum that receive moderate traffic",
      ],
      "examples": [
        "Represented Skookum on a panel at a conference of industry experts",
        "Ran a Meetup that introduced qualified candidates to Skookum",
        "Built a durable, long-standing org relationship with non-profit",
      ],
    }, {
      "summary": "Establishes Skookum as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent",
        "Implements concrete programs to signficantly improve team inclusivity",
        "Creates community around Skookum to grow community awareness of us as a company and employer",
      ],
      "examples": [
        "Devoted large amount of time to helping outside direct responsibilities",
        "Published a paper on Skookum technology in a peer-reviewed journal",
        "Active maintainer of Skookum open source project for a prolonged period of time",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": [
        "Influences people with large audiences to talk about Skookum positively",
        "Holds individuals, teams, and leadership accountable to Skookum's values",
        "Sets the tone, policy, and goals around maintaining an inclusive company",
      ],
      "examples": [
        "Organized offsite for the whole company",
        "Published or interviewed in a mainstream newspaper or website outside tech",
        "Challenged and corrected exclusionary behaviour or policies",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}