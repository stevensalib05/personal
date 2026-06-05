import './App.css'
import { Navbar } from './components/navbar/Navbar'
import gradPhoto from './assets/1000004320.JPEG'

const experience = [
  {
    title: 'Web Development Intern',
    org: 'Pocketride Inc',
    period: 'March 2026 — Current',
    summary:
      'Accelerated website migration from WordPress to Next.js 15 (App Router) with TypeScript, enabling SSG/ISR rendering for city SEO pages & reducing estimated page load time by40% through static generation. ' +
      'Architected a scalable front-end component library using Tailwind CSS and shadcn/ui, that reduced new landing page build time by an estimated 60% across 4 HubSpot pipeline integrations. ',
    stack: ['Next.JS', 'Tailwind CSS', 'TypeScript', 'Supabase'],
  },
  {
    title: 'Full-Stack Developer',
    org: 'Kognitive Sales Solutions Freelancer',
    period: 'September 2025 - April 2026',
    summary:
      'Developed a real-time full-stack auction platform using Angular, Node.js/Express, MySQL, and Socket.IO, supporting 60+ concurrent users with live bidding, notifications, and admin auction summaries. ' +
      'Engineered transaction-safe bidding APIs & WebSocket-based live updates to maintain synchronized auction state, support reliable bid processing & ensure users received accurate real-time changes throughout each auction. ' +
      'Built a real-time reporting dashboard to visualize bid activity, participant engagement, and final sale outcomes across 50 items in addition to an end-of-auction raffle, improving auction transparency and user decision-making.',
    stack: ['Angular', 'Express', 'TypeScript', 'HTML5/CSS'],
  },
]

const projects = [
  {
    name: 'Deep-Sea Exploration Web App',
    description:
      'Built a full-stack web app using React & Node.js/Express to visualize ocean terrain data in a 7h hackathon. ' + 
      'Processed CSV datasets into structured formats and REST APIs to serve terrain & map data efficiently. ' + 
      'Designed interactive map visualizations enabling users to toggle data layers & explore seabeds dynamically. ' +
      'Achieved 1st place out of 20 teams at the Western Engineering Programming Competition for delivering a polished, fully functional prototype.',
    stack: ['Node.JS', 'Discord.JS', 'Cheerio', 'FS'],
    href: 'https://github.com/stevensalib05/wec-stuff-main',
  },
  {
    name: 'Discord Bot Implementing many APIs',
    description:
      'Developed a multi-purpose Discord bot using Node.js and Discord.js that serves 100+ users daily, integrating external APIs to deliver real-time commands, automated responses, and player statistics. ' +
      'Implemented data pipelines using Cheerio (web scraping), file system & game APIs to process user statistics. ' + 
      'Applied Kanban methodology: ideas logged into a backlog to be developed later. ' + 
      'Automated player stat lookups, reducing query times from 30s to under 1s, greatly improving responsiveness.' + 
      'This was the project that led to me wanting to pursue Software Development as a full time career. It may not be a lot, but I hold it close.',
    stack: ['TypeScript', 'Local Storage', 'UI Design'],
    href: 'https://github.com/stevensalib05/Disc-Bot',
  },
  {
    name: 'Western Seat Sonar',
    description:
      'Built a browser-based seat detection system using WebRTC and JavaScript, leveraging camera input to detect seat occupancy in real time within the browser across different seating scenarios. ' + 
      'Implemented pixel-level collision detection to classify seat usage, updating system state all analyzed frames.' + 
      'Tested performance across 100+ recorded scenarios, tuning collision thresholds to reduce false positives. ' + 
      'Collaborated in a team of 3 to deliver a working prototype, earning 2nd place out of 20 teams in a student-hosted hackathon.' + 
      'This project is all over the place in the sense where it was a Stupid Hackathon, so the entire point was to make something stupid. Not only did we do something with a useless purpose, but we also tried to make the code look as horrible as possible by putting it all in one file!',
    stack: ['JavaScript', 'HTML5/CSS', 'WebRTC'],
    href: 'https://github.com/stevensalib05/consent-driven-development',
  },
  {
    name: "Wallet Watcher",
    description: 
      'Built a Full Stack web application with my tech stack being React as my frontend and Spring Boot as my backend, implementing O2Auth as a login mechanism.' +
      "Utilized PostgreSQL as the primary database while utilizing RESTful APIs to store sensitive data such as user's expenses, income, financial goals, etc." +
      'This project served one singular purpose of trying out a new framework that I never used prior, that being SpringBoot. This was meant to push me out of my comfort zone and try out somethign new!',
    stack: ['TypeScript', 'HTML5/CSS', 'React', 'Spring Boot', 'PostgreSQL'],
    href: 'https://github.com/stevensalib05/WalletWatcher',
  }
]

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <section
        className="hero-section"
        id="home"
        style={{ backgroundImage: `url(${gradPhoto})` }}
      >
        <div className="hero-inner">
          <h1>Steven Salib</h1>
          <p className="hero-role">Aspiring Software Engineer · Interested in Full-Stack Development</p>
          <p className="hero-copy">
            Started to code to gather stats all in one place, stayed in it because of the passion.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              See projects
            </a>
            <a className="secondary-action" href="mailto:stevensalib2005@gmail.com">
              Contact me
            </a>
          </div>
        </div>
      </section>

      <main id="content" className="page">

        <section className="section-block" id="about">
          <div className="section-heading">
            <span className="section-kicker">About Me</span>
            <h2>In it for the long run!</h2>
          </div>
          <div className="section-copy">
            <p>
              I initially started coding as a friend got me into it. I used Codecademy to get into JS
              so that I could create a Discord Bot that was used to web-scrape, and use video game APIs
              to gather all information I needed with a simple command. This way I could avoid tedious searching!
            </p>
            <p>
              What I didn't expect was that I enjoyed it so much that I wanted to create a career out of it.
              So here I am a few years later attending Western University for Software Engineering, working on some
              personal projects, participating in some competitions/hackathons, mainly knowledgeable on full-stack development!
            </p>
          </div>
        </section>

        <section className="section-block" id="experience">
          <div className="section-heading">
            <span className="section-kicker">Experience</span>
            <h2>Experience In Industry So Far.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.title} className="timeline-item">
                <div className="timeline-meta">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-org">{item.org}</p>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-summary">{item.summary}</p>
                <ul className="chip-list" aria-label={`${item.title} stack`}>
                  {item.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="projects">
          <div className="section-heading">
            <span className="section-kicker">Projects</span>
            <h2>My Trial & Error Experiments Come To Life:</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a key={project.name} className="project-card" href={project.href}>
                <p className="project-label">Featured Project</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="chip-list chip-list-inline">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>

        <section className="section-block contact-block" id="contact">
          <div className="section-heading">
            <span className="section-kicker">Contact</span>
            <h2>Reach out if you want to build something together.</h2>
          </div>
          <div className="contact-links">
            <a className="contact-link" href="mailto:stevensalib2005@gmail.com">
              Email: stevensalib2005@gmail.com
            </a>
            <a className="contact-link">
              Phone #: (226)-246-9117
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
