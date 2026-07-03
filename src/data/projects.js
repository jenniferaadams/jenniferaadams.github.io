import adagioImage from '../../images/adagio.png'
import crabImage from '../../images/crab.png'
import farmClickerImage from '../../images/farm clicker.png'
import seedImage from '../../images/seed.png'
import truckImage from '../../images/truck.png'

export const workProjects = [
  {
    title: 'Dynamic Landing Page System',
    bullets: {
      Challenge:
        'Marketing needed a faster way to publish targeted, SEO-focused landing pages for campaigns, long-tail keywords, gated downloads, and audience-specific offers without creating one-off development requests for every page.',
      Actions:
        'Built a Vue/Nuxt + Sanity landing-page system with a dynamic [...slug].vue route and reusable CMS-driven components, including hero sections, FAQs, comparison tables, CTAs, testimonials, forms, and gated download options. Integrated forms with internal support workflows and Salesforce.',
      Impact:
        'Enabled marketing to launch targeted pages quickly within a consistent design system, reducing developer dependency while supporting SEO, A/B testing, campaign launches, and lead capture.',
    },
  },
  {
    title: 'Marketing Site Overhauls',
    bullets: {
      Challenge:
        'Key marketing and product pages were outdated, difficult to update, and not consistently optimized for SEO, accessibility, performance, or brand storytelling.',
      Actions:
        'Redesigned layouts, rebuilt page structures in Vue/Nuxt, standardized Sanity content workflows, improved metadata and structured data, and refined page content for clarity, conversion, and search visibility.',
      Impact:
        'Delivered faster, more maintainable pages with stronger branding, improved update workflows, and better support for SEO and marketing goals across multiple product areas.',
    },
  },
  {
    title: 'Product and eLearning UI Components',
    bullets: {
      Challenge:
        'New product and eLearning experiences needed reusable interface patterns that were easier to maintain, more visually consistent, and more intuitive for learners and internal teams.',
      Actions:
        'Designed components, page layouts, and user flows in Figma, then built reusable Vue/Nuxt components with Tailwind CSS. Refined interactions through UX review, user testing, and close collaboration with product and content stakeholders.',
      Impact:
        'Improved usability, consistency, and development efficiency while creating reusable patterns that could scale across product interfaces, dashboards, and eLearning experiences.',
    },
  },
  {
    title: 'Custom Client Portals',
    bullets: {
      Challenge:
        'Legacy ColdFusion portals and an outdated cart required custom code for each new client portal, making launches slow, repetitive, and difficult to maintain.',
      Actions:
        'Rebuilt the portal experience with Vue/Nuxt, modern cart and authentication flows, database integrations, and Sanity-powered configuration for branding, pricing, and product selection.',
      Impact:
        'Created scalable portals used by enterprise clients and reduced portal creation time from days to minutes.',
    },
  },
  {
    title: 'Reports Home - Project Tracking Software',
    bullets: {
      Challenge:
        'Users struggled to find and manage reports in a legacy Reports Home experience that was outdated, difficult to navigate, and missing core functionality such as search, filtering, sorting, and pinning.',
      Actions:
        'Built a new Vue/Nuxt front end integrated with ColdFusion and SQL. Added search, filtering, sorting, pinning, pagination, permission handling, and a more intuitive information architecture.',
      Impact:
        'Delivered a modern reporting hub that made reports easier to locate, organize, and manage while improving the overall user experience.',
    },
  },
  {
    title: 'AI-Assisted Response Component',
    bullets: {
      Challenge:
        'An eLearning workflow needed a clearer way to connect users with AI-generated output while keeping the experience reviewable, understandable, and practical.',
      Actions:
        'Built an AI-assisted response component that connected an eLearning tool with AI-generated output. Focused on front-end interaction design, review/editing flow, and making the generated response useful within the user’s existing workflow.',
      Impact:
        'Created a more practical AI-supported experience by helping users review, refine, and apply generated output rather than treating AI as a black-box result.',
    },
  },
  {
    title: 'Analytics Migration to Matomo',
    bullets: {
      Challenge:
        'The organization needed a privacy-conscious analytics setup that supported cookie consent requirements without losing visibility into marketing performance and user behavior.',
      Actions:
        'Integrated Matomo across sites, configured cookie preferences, migrated dashboards, validated event tracking, and maintained reporting continuity alongside GA4 and Google Tag Manager workflows.',
      Impact:
        'Maintained reliable analytics coverage during the transition while improving privacy compliance and supporting SEO, conversion, and behavior analysis.',
    },
  },
  {
    title: 'SEO Research and Implementation',
    bullets: {
      Challenge:
        'Core course and product pages needed stronger search visibility, clearer content structure, and more consistent technical SEO foundations.',
      Actions:
        'Ran keyword research, rewrote metadata, added structured data, improved internal linking, optimized layouts, refreshed outdated content, and helped build pillar content around strategic topics.',
      Impact:
        'Strengthened organic search foundations for key product and course pages while improving content quality, discoverability, and site structure.',
    },
  },
  {
    title: 'ISSISSIPPI Microsite',
    url: 'https://ississippi.org/',
    bullets: {
      Challenge:
        'A legacy April Fools microsite was broken, outdated, difficult to update, and built in an older ColdFusion implementation.',
      Actions:
        'Rebuilt the microsite end to end in a modern front-end stack, recreating interactive gadgets, playful content, and branded UI patterns with a rapid turnaround.',
      Impact:
        'Delivered a refreshed interactive experience that preserved the humor of the original site while improving maintainability, usability, and brand personality.',
    },
  },
]

export const bootcampProjects = [
  {
    title: 'SEED & FEED',
    img: seedImage,
    desc: 'A responsive single-page application that helps users decide what crops to plant and when, based on their location. Users can explore recipes for each crop and set calendar reminders for planting. Built using external APIs and RESTful principles to enhance functionality.',
    link: 'https://seed-and-feed-frontend.herokuapp.com/',
  },
  {
    title: 'ADAGIO MUSIC',
    img: adagioImage,
    desc: 'A music browsing app where users can view albums, songs, and music videos. Includes full CRUD functionality for albums and songs. Built using Java, Spring Boot, JavaScript, HTML, and CSS, with a responsive layout and RESTful architecture.',
  },
  {
    title: 'FARM CLICKER',
    img: farmClickerImage,
    desc: 'A playful web-based clicker game inspired by Cookie Clicker. Users click to harvest vegetables and earn upgrades. Built with vanilla JavaScript, HTML, and CSS to create a dynamic and engaging user experience.',
    link: 'https://jenniferaadams.github.io/donut-maker-jenniferaadams/',
  },
  {
    title: 'BEEP, BEEP...YUM!',
    img: truckImage,
    desc: 'A review and discovery platform for food trucks in Columbus, Ohio. Users can browse trucks, write reviews, and add hashtags. Built as an MVC application using Java, Spring Boot, and Thymeleaf.',
    link: 'http://food-truck-review-site-project.herokuapp.com/',
  },
  {
    title: 'VIRTUAL CRAB SHELTER',
    img: crabImage,
    desc: 'A Java console-based simulation where users care for organic and robotic crabs in a virtual pet shelter. Demonstrates object-oriented programming through inheritance, abstract classes, and interfaces.',
    link: 'https://github.com/jenniferaadams/virtual-pet-jenniferadamsphoto',
  },
]
