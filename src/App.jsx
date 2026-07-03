import { bootcampProjects, workProjects } from './data/projects.js'
import BootcampProjectCard from './components/BootcampProjectCard.jsx'
import SectionTitle from './components/SectionTitle.jsx'
import WorkProjectCard from './components/WorkProjectCard.jsx'
import jaImage from '../images/ja.png'
import gitIcon from '../images/git.png'
import linkedIcon from '../images/linked.png'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <header className="site-hero">
        <h1 className="glass-name" aria-label="Jennifer Adams">
          <span>Jennifer</span>
          <span>Adams</span>
        </h1>
      </header>

      <main>
        <nav className="site-nav flex h-16 w-full items-center justify-evenly border-2 border-[#666] bg-[#c6812f]">
          <a
            href="https://github.com/jenniferaadams"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer px-8 py-2 text-3xl font-light !text-white no-underline transition-colors duration-200 ease-in-out hover:scale-105 hover:rounded active:translate-x-[2px] active:translate-y-[2px]"
          >
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/jenniferannadams/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer px-8 py-2 text-3xl font-light !text-white no-underline transition-colors duration-200 ease-in-out hover:scale-105 hover:rounded active:translate-x-[2px] active:translate-y-[2px]"
          >
            LINKEDIN
          </a>
        </nav>

        <div className="intro-card flex flex-col items-center justify-center border-2 border-[#666] bg-white !py-12 shadow-xl lg:flex-row">
          <div className="flex items-center justify-center !px-10 lg:w-1/3 lg:!px-0">
            <img className="w-80" src={jaImage} alt="Jennifer Adams logo" />
          </div>
          <div className="!px-10 lg:w-1/3 lg:!px-0">
            <p className="!py-3">Hi, I'm Jennifer.</p>
            <p className="!py-3">
              I'm a software developer with a background in art, design, and
              teaching. I build responsive, accessible, SEO-focused web
              experiences with a strong emphasis on thoughtful interfaces,
              reusable component systems, and content workflows that are easy
              for teams to maintain.
            </p>
            <p className="!py-3">
              My work often sits at the intersection of engineering, design,
              content, and marketing. I design layouts and user flows in Figma,
              build them in Vue and Nuxt, and use tools like Sanity, analytics,
              and technical SEO to create web experiences that are polished,
              practical, and aligned with real business goals.
            </p>
            <p className="!py-3">
              When I'm not coding, you'll find me hanging out with my family,
              puttering in the garden, or slowly converting my lawn into a
              native plant haven.
            </p>
          </div>
        </div>

        <div id="centerSections">
          <section className="mx-auto max-w-6xl !px-4 !py-6 xl:max-w-7xl">
            <SectionTitle>Skills</SectionTitle>
            <div className="flex flex-col items-center justify-center rounded-md border-2 border-[#666] bg-white !px-8 !py-12">
              <div className="flex flex-col !gap-8 !px-12 !py-6">
                <p>
                  I'm a software developer at MoreSteam, where I build and
                  maintain responsive, accessible, SEO-focused web experiences
                  across marketing sites, product interfaces, client portals,
                  course pages, and reporting tools. My work spans Vue, Nuxt,
                  TypeScript, Tailwind CSS, Sanity, ColdFusion, C#, and SQL,
                  with a focus on creating reusable component systems,
                  CMS-powered content workflows, and polished user experiences
                  that support both business goals and user needs.
                </p>
                <p>
                  A significant part of my work sits at the intersection of
                  engineering, design, content, and marketing. I design product
                  and eLearning components, page layouts, and user flows in
                  Figma, then build and refine them in code. I also support
                  technical SEO, analytics implementation, structured data, Core
                  Web Vitals, accessibility, and performance optimization,
                  helping teams create web experiences that are not only
                  functional, but findable, maintainable, and easy to improve
                  over time.
                </p>
                <p>
                  I entered the tech field through We Can Code IT, a full-time
                  software development bootcamp where I studied Java,
                  JavaScript, RESTful APIs, Spring, HTML/CSS, and Thymeleaf.
                  Since then, I've expanded into modern front-end frameworks,
                  CMS integrations, back-end services, analytics platforms, and
                  AI-assisted development workflows, using tools such as Sanity,
                  Matomo, GA4, Google Tag Manager, and AI coding assistants to
                  build more efficient and scalable solutions.
                </p>
                <p>
                  My career began in photography, design, and education. I
                  earned a BFA from the Columbus College of Art & Design, taught
                  Digital Photography and Photoshop at Columbus State for 13
                  years, and ran my own photography business for 11 years. That
                  background gave me a strong foundation in visual storytelling,
                  layout, hierarchy, usability, and clear communication. Those
                  strengths continue to shape how I approach front-end
                  development, UX, and digital product design today.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl !px-4 !py-6 xl:max-w-7xl">
            <SectionTitle>Work Projects</SectionTitle>
            <div className="mt-6 flex flex-col gap-8">
              {workProjects.map((project) => (
                <WorkProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl !px-4 !py-6 xl:max-w-7xl">
            <SectionTitle>Bootcamp Projects</SectionTitle>
            <div className="mt-6 grid gap-10 sm:grid-cols-2">
              {bootcampProjects.map((project) => (
                <BootcampProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="footDiv">
          <a
            href="https://github.com/jenniferaadams"
            target="_blank"
            rel="noreferrer"
          >
            <img className="gitImg" src={gitIcon} alt="GitHub" />
          </a>
          <p className="copy">&copy; Jennifer Adams {currentYear}</p>
          <a
            href="https://www.linkedin.com/in/jenniferannadams/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="linkImg" src={linkedIcon} alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
