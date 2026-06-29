export const profile = {
  name: 'Suraj Sambath Kumar',
  role: 'Senior Android Engineer',
  location: 'Kuala Lumpur, Malaysia',
  url: 'https://suraj2600.github.io/surajsambath/',
  email: 'surajsambathkumar@gmail.com',
  phone: '+60 1125319833',
  github: 'https://github.com/SURAJ2600',
  linkedin: 'https://linkedin.com/in/surajsambath',
  summary:
    'Senior Android Engineer with 10+ years specializing in platform architecture, media systems, and performance engineering. I own critical app subsystems — video/audio pipelines, CI/CD, startup performance — for apps used by millions, and increasingly ship cross-platform with Next.js, Node.js, and AI-assisted workflows using Claude Code and Cursor.',
}

export const skills = [
  { group: 'Languages', items: ['Kotlin', 'Java', 'JavaScript', 'TypeScript', 'XML'] },
  {
    group: 'Android',
    items: [
      'Jetpack Compose',
      'ExoPlayer / Media3',
      'Coroutines',
      'Room',
      'DataStore',
      'Multi-module',
      'Baseline Profiles',
    ],
  },
  {
    group: 'Architecture',
    items: ['Clean Architecture', 'MVVM', 'SOLID', 'KMM', 'Design Patterns'],
  },
  {
    group: 'Web & Cross-platform',
    items: ['Next.js', 'React', 'Node.js', 'React Native', 'Kotlin Multiplatform', 'Tailwind'],
  },
  {
    group: 'AI-assisted Dev',
    items: ['Claude / Claude Code', 'Cursor', 'Agent SDK', 'MCP servers', 'Prompt engineering'],
  },
  {
    group: 'CI/CD & Tooling',
    items: ['Bitrise', 'GitHub Actions', 'Gradle', 'Ktlint', 'Danger'],
  },
  {
    group: 'Testing',
    items: ['JUnit5', 'Mockk', 'Espresso', 'Appium', 'WebDriverIO'],
  },
  {
    group: 'Networking & DI',
    items: ['Retrofit', 'Apollo GraphQL', 'Dagger-Hilt', 'Koin'],
  },
  {
    group: 'Platforms',
    items: ['Firebase', 'RevenueCat', 'Amplitude', 'SauceLab'],
  },
]

export type Experience = {
  company: string
  url?: string
  roles: { title: string; period: string }[]
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'Mindvalley',
    url: 'https://www.mindvalley.com',
    roles: [
      { title: 'Senior Android Engineer', period: '2023 — Present' },
      { title: 'Android Engineer', period: '2020 — 2023' },
    ],
    highlights: [
      'Own core Android platform components — media playback, performance infrastructure, build optimization — across multiple high-traffic apps.',
      'Re-architected video/audio playback with ExoPlayer + Media3: reusable media libraries, downloads, advanced playback controls. Significant stability gains on low-end devices.',
      'Lifted crash-free sessions from 97% → 99.6% by stabilizing high-risk modules, raising unit test coverage, and hardening error handling.',
      'Cut app cold-start by 30% using Baseline Profiles and startup optimization.',
      'Integrated Jetpack Compose into production features through reusable composables.',
      'Tuned CI/CD on Bitrise + GitHub Actions, reducing build times 15% via caching and automated quality gates.',
      'Built a Kotlin Multiplatform PoC for shared user-account logic across Android and iOS.',
      'Introduced AI-assisted engineering workflows with Claude, standardizing Android best practices across the team.',
    ],
  },
  {
    company: 'Rapid Value Solutions (Aspire Systems)',
    url: 'https://www.aspiresys.com',
    roles: [{ title: 'Software Developer', period: '2019 — 2020' }],
    highlights: [
      'Improved performance and feature stability on the Falabella e-commerce app (5M+ downloads).',
      'Re-engineered login and registration on MVVM — 15% perf improvement, fewer ANRs.',
      'Migrated DI from Dagger to Koin, lifting developer productivity by ~50%.',
    ],
  },
  {
    company: 'Entri',
    url: 'https://entri.app',
    roles: [{ title: 'Product Engineer (Android)', period: '2019' }],
    highlights: [
      'Shipped Android features for exam-prep and community learning (5M+ downloads).',
      'Built scalable features on MVVM with a modular design.',
      'Improved stability via unit testing and tight product/design collaboration.',
    ],
  },
  {
    company: '2Base Technologies',
    url: 'https://www.2basetechnologies.com',
    roles: [{ title: 'Software Developer', period: '2017 — 2019' }],
    highlights: [
      'Developed and maintained Android apps across agile teams.',
      'Focused on scalable, maintainable code practices.',
    ],
  },
]

export type Project = {
  name: string
  tagline: string
  downloads?: string
  url?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'Mindvalley',
    tagline:
      'Personal-growth platform — owned media playback, performance infrastructure, build optimization.',
    downloads: '1M+',
    url: 'https://play.google.com/store/apps/details?id=com.mindvalley.mva',
    tags: ['ExoPlayer/Media3', 'Compose', 'KMM', 'Baseline Profiles'],
  },
  {
    name: 'Falabella',
    tagline:
      'Latin-America e-commerce app — re-engineered login/registration and migrated DI to Koin.',
    downloads: '5M+',
    url: 'https://play.google.com/store/apps/details?id=com.falabella.falabellaApp',
    tags: ['MVVM', 'Koin', 'Performance'],
  },
  {
    name: 'Entri',
    tagline: 'Exam-preparation and community learning platform with modular Android features.',
    downloads: '5M+',
    url: 'https://play.google.com/store/apps/details?id=in.entri.app',
    tags: ['MVVM', 'Modular', 'Testing'],
  },
]

export const education = [
  {
    school: 'University of Calicut — College of Applied Science, IHRD',
    degree: 'BSc Computer Science (Minor: Mathematics, Electronics)',
    period: '2013 — 2016',
    notes: 'College Chairman (2015–2016) • Placement Director',
  },
]

export const certifications = [
  { name: 'Certified Professional Android Developer', issuer: 'MindOrks', year: '2020' },
  { name: 'Android Developer Nanodegree Scholar', issuer: 'Google / Udacity', year: '2017' },
]
