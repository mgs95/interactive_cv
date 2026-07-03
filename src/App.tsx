import { ABOUT, EDUCATION, EXPERIENCE, LANGUAGES, PROFILE, SECTIONS, SKILLS } from "./data";
import { useReveal, useScrollSpy, useSpotlight, useTheme } from "./hooks";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MoonIcon,
  PrinterIcon,
  SunIcon,
} from "./icons";

const SECTION_IDS = SECTIONS.map((s) => s.id);

export default function App() {
  useSpotlight();
  useReveal();

  return (
    <div className="layout">
      <PrintHeader />
      <Sidebar />
      <main className="content">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

/** Only visible on paper: classic CV header with plain-text contact details. */
function PrintHeader() {
  return (
    <header className="print-header">
      <h1>{PROFILE.name}</h1>
      <p>
        {PROFILE.role} at {PROFILE.company} · {PROFILE.location}
      </p>
      <p>
        {PROFILE.email} · {PROFILE.links.linkedin} · {PROFILE.links.github}
      </p>
    </header>
  );
}

function Sidebar() {
  const active = useScrollSpy(SECTION_IDS);
  const { theme, toggle } = useTheme();

  return (
    <aside className="sidebar">
      <div>
        <img className="avatar" src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} />
        <h1 className="name">{PROFILE.name}</h1>
        <p className="role">
          {PROFILE.role} at{" "}
          <a href={PROFILE.companyUrl} target="_blank" rel="noreferrer">
            {PROFILE.company}
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </p>
        <p className="tagline">{PROFILE.tagline}</p>

        <nav className="nav" aria-label="Sections">
          <ul>
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? "is-active" : undefined}>
                  <span className="nav-line" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="sidebar-footer">
        <ul className="social" aria-label="Contact links">
          <li>
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in new tab)"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (opens in new tab)"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </li>
        </ul>
        <div className="actions">
          <button type="button" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button type="button" onClick={() => window.print()} aria-label="Print or save as PDF">
            <PrinterIcon />
          </button>
        </div>
      </div>
    </aside>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section" data-reveal>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      {ABOUT.map((paragraph) => (
        <p key={paragraph.slice(0, 24)} className="about-paragraph">
          {paragraph}
        </p>
      ))}
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="cards">
        {EXPERIENCE.map((job) => (
          <li key={job.company} className="card" data-reveal>
            <span className="card-dates">
              {job.start} — {job.end}
            </span>
            <div className="card-body">
              <h3>
                <a href={job.url} target="_blank" rel="noreferrer">
                  {job.role} ·{" "}
                  <span className="no-wrap">
                    {job.company}
                    <ArrowUpRightIcon />
                  </span>
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </h3>
              {job.summary.map((line) => (
                <p key={line.slice(0, 24)}>{line}</p>
              ))}
              <ul className="chips" aria-label="Technologies">
                {job.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="cards">
        {EDUCATION.map((entry) => (
          <li key={entry.school} className="card" data-reveal>
            <span className="card-dates">
              {entry.start} — {entry.end}
            </span>
            <div className="card-body">
              <h3>
                <a href={entry.url} target="_blank" rel="noreferrer">
                  {entry.degree} ·{" "}
                  <span className="no-wrap">
                    {entry.school}
                    <ArrowUpRightIcon />
                  </span>
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </h3>
              <p>{entry.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills & Languages">
      <div className="skill-groups">
        {SKILLS.map((group) => (
          <div key={group.title} className="skill-group" data-reveal>
            <h3>{group.title}</h3>
            <ul className="chips chips-lg">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ul className="languages" aria-label="Spoken languages">
        {LANGUAGES.map((language) => (
          <li key={language.name} data-reveal>
            <span className="language-name">{language.name}</span>
            <span
              className="language-dots"
              role="img"
              aria-label={`${language.name} proficiency: ${language.score} out of 5`}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <i key={i} className={i < language.score ? "is-filled" : undefined} />
              ))}
            </span>
            <span className="language-level">{language.level}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed and built by {PROFILE.name}. Powered by React + Vite —{" "}
        <a href={PROFILE.source} target="_blank" rel="noreferrer">
          source on GitHub
          <span className="sr-only"> (opens in new tab)</span>
        </a>
        .
      </p>
    </footer>
  );
}
