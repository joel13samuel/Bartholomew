# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Step 1 - Identify the Goals

### Why am I making this project?

We’re building this project to create a more realistic mock interview experience—one that doesn’t rely on having a friend available to help. Incorporating AI agents, especially voice-based ones, is key to making the experience feel authentic and immersive.

### Who is this project for?

- College students and job-seeking adults aiming to break into the tech or quantitative finance industries *(with potential to expand to other industries in the future)*

### What is going to make it valuable?

- Existing platforms like Leetcode and QuantGuide focus solely on question banks, not on building communication or interpersonal skills. But when we talk to students, they often say the hardest part of interviewing is clearly and confidently explaining their thought process—something that can hurt their chances even when they know the technical material.
- Most AI-based interview prep tools are just basic ChatGPT wrappers in chatbot form. These feel tedious and unnatural. People want to *speak* their answers—not type them—and practicing with a voice agent helps simulate the real interview environment more effectively.

## Step 2 - User Stories

- User signs up using their gmail credentials. They choose tech or quant. They set a personal goal for themselves (practice for how many days consecutively, how many problems a day)
- User will choose the question they want to work on
- User will be greeted by AI Agent, and will listen to the question said by the AI Agent
- Step 1: Repeating the Question: User will repeat the question back to the AI Agent in their own words, and the agent will confirm it or deny it - This could result in the user having to restate the question again if they Agent thinks they didnt fully understand it
- Step 2: Ask Clarifying Questions - Agent will ask user if they have any questions - user will ask some questions to the agent if they have any - otherwise Agent will move on
- Step 3: Use Examples - Agent will have user give them some test cases and then the agent will confirm if they are true or not
- Step 4: Brainstorm Solution ideas - User will start to come up with some ideas of how they want to implement their code, agent will give very little help maybe a slight nudge to put them on the right direction
- Step 5: Implement Your Solution - user will start coding once they think they are ready, they will walk the agent through what they are doing (We want to ensure that the user communicates as much as they can during the interview - since this is good practice)
- Step 6: Debug - Agent will make user use the test cases they wrote previously and run through the code that way
- Step 7: Summary and Feedback - user will be able to see a paragraph of feedback from the Agent of how well they did with communicating, problem solving, etc.

## Step 2.5 - User Problems

- As a college student preparing for tech interviews, I want to **simulate an interview with a voice agent**, so that I can practice communicating my answers out loud like I would in a real interview.
- As a user without a mock interview partner, I want to **receive feedback on how I communicate**, so that I can improve my interpersonal skills and avoid common red flags.
- As someone trying to break into the competitive tech industry, I want to **practice with as many questions as possible**. I want to **choose the difficulty of the questions I get**, so I can start with easy ones and slowly transition to harder problems.
- As a user who wants to work at a specific company, I want to **practice with common questions from this company**.
- As a user who wants to be consistent with my preparation, I want to **set a daily goal (number of questions per day and number of consecutive days), so that I can track my progress and build a habit through goal streaks**.
- As a user who is reading the quantitative finance interview prep books, I **want to be able to get hints while I am solving a problem so that I can work through it on my own rather than read a solution**.

### **Agent Model** *(you can abstract this into services instead of DB models)*

Not every agent needs to be a DB record — these can be modules or subcomponents.

### Agent Responsibilities:

- `TalkingAgent`: Speaks prompts, confirms paraphrasing, listens to responses.
- `ClarifierAgent`: Prompts user for edge cases, guides with questions.
- `TestCaseAgent`: Validates test cases from user.
- `FeedbackAgent`: Summarizes performance into a paragraph.
- `CompilerAgent`: Executes code in mini IDE and runs tests.

Eventually, you may want to add logging to the agents (e.g., how often hints are requested), which can be handled through usage logs or `Session` objects.

## Step 4 - Basic MVP Roadmap (Prioritized & Modular)

### Phase 1 - Core Experience (No Voice)

- **User Signup/Login** (Clerk.dev)
- **Question Bank** (seed a small question set in MongoDB or Firebase)
- **Mini IDE** (use [Monaco Editor](https://github.com/microsoft/monaco-editor), same as VS Code)
- **Basic Code Submission + Test Case Runner**
- **Agent Text Flow** (mimic voice agent with chat-style messages for now)

### Phase 2 - Voice & Agent Simulation

- **Voice Integration**:
    - Use Web Speech API or [OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text) for speech-to-text
    - Use [OpenAI TTS](https://platform.openai.com/docs/guides/text-to-speech) for reading prompts out loud
- **Agent Steps as Chat Modules**:
    - Step 1: Confirm question understanding (user paraphrases)
    - Step 2: Ask clarifying questions
    - Step 3: Ask for test cases, validate them
    - Step 4: Listen as user brainstorms
    - Step 5: User codes in IDE and explains steps
    - Step 6: Debugging with earlier test cases
    - Step 7: FeedbackAgent gives written and voice feedback

### Phase 3 - Tracking + Goals

- **Streak Tracking**
- **Progress Dashboard** with:
    - Completed questions
    - Streaks
    - Feedback summaries
- Daily reminder to practice (email or in-app notification)

## Step 6- Project’s Future

This is a project with the potential to scale to thousands and thousands of users, hopefully as large as leetcode itself which has hundrends of thousands of users.

## Step 7 - Define Architecture

This will be a web app. It needs both a backend and a frontend. We will connect a database to it that will store all the user information and problem information. We also will need to build user authentication. 

## Step 8 - Choose Tech Stack

Frontend: React

Backend: Node.js + Express

Database: PostgreSQL

Authentication: Clerk

Deploy: Vercel

## Step 9 - Execute the Development Process

    
Start by building a **project skeleton**, define your **data models**, build **API endpoints**, then develop the **frontend UI**. Always test and iterate. Deploy early—even if incomplete—to catch issues fast. Add advanced features like automation and testing only if needed.
    

## Phase 1: Build Your MVP Locally

### 1. **Frontend Skeleton**

- Use **React** (or **Next.js** if you want SSR)
- Set up:
    - Pages: Home, Sign Up, Sign In, Dashboard
    - Routing (`react-router` or Next.js routing)
    - UI framework (Tailwind CSS or Material UI)
    - Design in **Figma** if needed

> Goal: Click around the site, even if backend doesn’t work yet
> 

---

### 2. **Backend Setup**

- Use **Node.js + Express** or **Next.js API routes**
- Create routes for:
    - `POST /signup`
    - `POST /login`
    - `GET /user/profile`
- Add **JWT authentication**
- Create controller functions + request validation

> Goal: API routes working locally using tools like Postman or curl
> 

---

### 3. **Set Up the Database**

- Choose **PostgreSQL** (or MySQL / MongoDB)
- Define tables:
    - `users (id, name, email, password_hash, created_at)`
    - More tables based on your app (e.g. posts, messages)
- Connect backend to DB using:
    - **Prisma** (ORM) or **Knex** (SQL query builder)
    - Or raw SQL via `pg` or `mysql2` library
- Set up environment variables securely (`.env`)

> Goal: Backend can create & fetch users from the database
> 

---

### 4. **User Auth Functionality**

- Frontend:
    - Sign up form → call `POST /signup`
    - Sign in form → call `POST /login` → receive token
    - Store token in localStorage or cookie
    - Use token to access protected routes (e.g. profile page)
- Backend:
    - Hash passwords with bcrypt
    - Use JWT for login sessions

> Goal: You can create an account, log in, and stay logged in
> 

---

## Phase 2: Deployment + Infrastructure

### 5. **Deploy MVP**

- Frontend → Vercel or Netlify
- Backend → Render, Railway, or Fly.io (or use Vercel API routes)
- Database → Supabase (managed PostgreSQL), PlanetScale, or RDS

> Goal: Your website works live, others can sign up and log in
> 

---

### 6. **Logging, Error Handling, and Monitoring**

- Backend: Add error handling middleware
- Frontend: Use Toasts for user feedback
- Add logging tools (e.g., Sentry, console logs)

---

## Phase 3: Scaling & Features

### 7. **Add Core Features**

- Build actual app functionality (e.g., posting, uploading, scheduling)
- Add file storage with AWS S3 / Cloudinary
- Add search, filtering, and dynamic content

### 8. **Add Caching & Optimization**

- Cache user sessions or common queries with **Redis**
- Use **pagination** and **rate limiting** on APIs
- Load testing with k6 / Postman collections

---

## Phase 4: Polish and Launch

### 9. **Add Finishing Touches**

- SEO, mobile responsiveness
- Loading states, empty state UX
- Form validations
- Accessibility (a11y)

### 10. **Soft Launch**

- Open to a small group
- Collect feedback, fix bugs
- Plan for broader launch
