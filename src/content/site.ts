// ---------------------------------------------------------------------------
// Single source of truth for all site content, bilingual (EN / FR).
// Text lives here so components stay purely presentational.
// ---------------------------------------------------------------------------

export type Lang = 'en' | 'fr'

/** A value that exists in both languages. */
export type L<T = string> = Record<Lang, T>

export interface SkillGroup {
  id: string
  label: L
  items: string[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: L
  meta: L // "via ASTEK Technology", etc.
  period: L
  location: string
  tags: string[]
  /** What the product/team actually is — the setup a reader needs first. */
  context: L
  /** What I personally did. */
  bullets: L<string[]>
  /** Concrete outcomes / ownership. */
  impact: L<string[]>
  current?: boolean
}

export interface ProjectItem {
  id: string
  name: string
  tagline: L
  period: L
  team: L
  tags: string[]
  /** The constraint / problem the project exists to solve. */
  problem: L
  /** What I personally built. */
  bullets: L<string[]>
  /** Where it stands today. */
  status: L
  links: { label: string; url: string }[]
}

// ---------------------------------------------------------------------------
// Personal / contact  ——  ⚠️ CONFIRM the placeholders flagged below.
// ---------------------------------------------------------------------------

export const personal = {
  fullName: 'Komlan Lemuel Donto',
  displayName: 'Lemuel Donto',
  email: 'lemueldonto@gmail.com',
  location: 'Toulouse, France',
  linkedin: 'https://www.linkedin.com/in/lemuel-donto/',
  github: 'https://github.com/lemueldonto',
  // Drop your PDFs at public/cv-en.pdf and public/cv-fr.pdf
  cv: { en: '/cv-en.pdf', fr: '/cv-fr.pdf' } as Record<Lang, string>,
  // Your photo (place at public/portrait.jpg). Falls back to a monogram if missing.
  portrait: '/portrait.jpg',
}

// ---------------------------------------------------------------------------
// UI / chrome strings
// ---------------------------------------------------------------------------

export const ui = {
  nav: {
    home: { en: 'Home', fr: 'Accueil' } as L,
    about: { en: 'About', fr: 'À propos' } as L,
    skills: { en: 'Skills', fr: 'Compétences' } as L,
    experience: { en: 'Experience', fr: 'Expérience' } as L,
    projects: { en: 'Projects', fr: 'Projets' } as L,
    contact: { en: 'Contact', fr: 'Contact' } as L,
  },
  cta: {
    viewProjects: { en: 'View projects', fr: 'Voir les projets' } as L,
    getInTouch: { en: 'Get in touch', fr: 'Me contacter' } as L,
    downloadCv: { en: 'Download CV', fr: 'Télécharger le CV' } as L,
    emailMe: { en: 'Email me', fr: 'M’écrire' } as L,
    scroll: { en: 'Scroll to explore', fr: 'Défilez pour explorer' } as L,
  },
  hero: {
    role: {
      en: 'Lead Software Engineer',
      fr: 'Lead Software Engineer',
    } as L,
    subtitle: {
      en: 'Full-Stack · Cloud · Distributed Systems',
      fr: 'Full-Stack · Cloud · Systèmes distribués',
    } as L,
    tagline: {
      en: 'I architect distributed systems — and lead the teams that ship them.',
      fr: 'J’architecture des systèmes distribués — et je pilote les équipes qui les livrent.',
    } as L,
    availability: {
      en: 'Open to projects — worldwide',
      fr: 'Ouvert aux projets — à l’international',
    } as L,
  },
  sections: {
    aboutKicker: { en: 'About', fr: 'À propos' } as L,
    aboutTitle: { en: 'Engineering at the edge of scale', fr: 'L’ingénierie à l’échelle du réel' } as L,
    skillsKicker: { en: 'Capabilities', fr: 'Compétences' } as L,
    skillsTitle: { en: 'The stack I build with', fr: 'La stack avec laquelle je construis' } as L,
    experienceKicker: { en: 'Trajectory', fr: 'Parcours' } as L,
    experienceTitle: { en: 'Where I’ve shipped', fr: 'Là où j’ai livré' } as L,
    projectsKicker: { en: 'Selected work', fr: 'Projets sélectionnés' } as L,
    projectsTitle: { en: 'Things I’m building', fr: 'Ce que je construis' } as L,
    contactKicker: { en: 'Contact', fr: 'Contact' } as L,
    contactTitle: { en: 'Let’s build something', fr: 'Construisons ensemble' } as L,
  },
  about: {
    body: {
      en: [
        'Software Engineer and Dev Lead with 4+ years designing, building, and operating distributed microservices in production.',
        'I take an idea and turn it into a product that runs — from the interface to the infrastructure, built to stay reliable once real users are on it.',
        'Right now I’m building GLS’s connected-locker platform — I design and develop a large part of it. On the side, I launch my own products — nothing drives me more than turning an ambitious idea into something real.',
      ],
      fr: [
        'Ingénieur logiciel et Dev Lead avec 4+ ans d’expérience à concevoir, construire et opérer des microservices distribués en production.',
        'Je prends une idée et j’en fais un produit qui tourne — de l’interface à l’infrastructure, pensé pour rester fiable une fois entre les mains de vrais utilisateurs.',
        'Aujourd’hui, je bâtis la plateforme de consignes connectées de GLS : j’en conçois et développe une grande partie. À côté, je lance mes propres produits — rien ne me motive autant que transformer une idée ambitieuse en réalité.',
      ],
    } as L<string[]>,
  },
  stats: [
    { value: '4+', label: { en: 'Years of experience', fr: 'Ans d’expérience' } as L },
    { value: '5', label: { en: 'Engineers led', fr: 'Ingénieurs encadrés' } as L },
    { value: '2', label: { en: 'Ventures live (MVP)', fr: 'Projets avec un MVP' } as L },
    { value: '2', label: { en: 'Cloud platforms (AWS · Azure)', fr: 'Clouds (AWS · Azure)' } as L },
  ],
  education: {
    kicker: { en: 'Education', fr: 'Formation' } as L,
    degree: {
      en: 'Engineering Degree (MSc level) in Computer Science — Diplôme d’Ingénieur',
      fr: 'Diplôme d’Ingénieur en Informatique (niveau Master)',
    } as L,
    school: {
      en: 'Polytech Nice Sophia · Université Côte d’Azur',
      fr: 'Polytech Nice Sophia · Université Côte d’Azur',
    } as L,
    period: { en: '2019 – 2022 · Sophia Antipolis, France', fr: '2019 – 2022 · Sophia Antipolis, France' } as L,
  },
  languages: {
    kicker: { en: 'Languages', fr: 'Langues' } as L,
    items: [
      { name: { en: 'Ewe', fr: 'Éwé' } as L, level: { en: 'Native', fr: 'Langue maternelle' } as L },
      { name: { en: 'French', fr: 'Français' } as L, level: { en: 'Bilingual', fr: 'Bilingue' } as L },
      { name: { en: 'English', fr: 'Anglais' } as L, level: { en: 'Professional working', fr: 'Professionnel' } as L },
    ],
  },
  contact: {
    lead: {
      en: 'Got a project or an idea you want to bring to life? The fastest way to reach me is email — I read every message.',
      fr: 'Un projet ou une idée à concrétiser ? Le plus rapide pour me joindre, c’est l’email — je lis chaque message.',
    } as L,
    availabilityBadge: {
      en: 'Available for new opportunities',
      fr: 'Disponible pour de nouvelles opportunités',
    } as L,
  },
  footer: {
    builtWith: {
      en: 'Designed & built with React, Three.js & a lot of caffeine.',
      fr: 'Conçu et développé avec React, Three.js et beaucoup de caféine.',
    } as L,
    rights: { en: 'All rights reserved.', fr: 'Tous droits réservés.' } as L,
  },
}

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Qualities (Act II) — what I bring
// ---------------------------------------------------------------------------

export interface Quality {
  id: string
  title: L
  body: L
}

export const qualities: Quality[] = [
  {
    id: 'leadership',
    title: { en: 'Technical leadership', fr: 'Leadership technique' },
    body: {
      en: 'I support a 5-engineer team, own the architecture, and align API contracts across companies.',
      fr: 'J’accompagne une équipe de 5 ingénieurs, porte l’architecture et aligne les contrats d’API entre entreprises.',
    },
  },
  {
    id: 'scale',
    title: { en: 'Distributed systems at scale', fr: 'Systèmes distribués à grande échelle' },
    body: {
      en: 'Real-time, event-driven platforms — Apache Kafka, WebSocket — engineered for production scale.',
      fr: 'Plateformes temps-réel orientées événements — Apache Kafka, WebSocket — pensées pour l’échelle de production.',
    },
  },
  {
    id: 'founder',
    title: { en: 'Founder’s mindset', fr: 'Esprit d’entrepreneur' },
    body: {
      en: 'I don’t just ship features — I architect and launch my own ventures end-to-end.',
      fr: 'Je ne fais pas que livrer des features — j’architecture et je lance mes propres projets de A à Z.',
    },
  },
  {
    id: 'ownership',
    title: { en: 'Reliability & ownership', fr: 'Fiabilité & ownership' },
    body: {
      en: 'Observability, infrastructure-as-code and CI/CD — I own what I run in production.',
      fr: 'Observabilité, infra-as-code et CI/CD — je suis responsable de ce que j’opère en prod.',
    },
  },
  {
    id: 'quality',
    title: { en: 'Quality-driven', fr: 'Exigence qualité' },
    body: {
      en: 'BDD, end-to-end and integration testing across polyglot, multi-service environments.',
      fr: 'BDD, tests end-to-end et d’intégration sur des environnements polyglottes multi-services.',
    },
  },
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: { en: 'Languages', fr: 'Langages' },
    items: ['Go', 'Java', 'JavaScript', 'TypeScript', 'Python', 'C', 'SQL'],
  },
  {
    id: 'backend',
    label: { en: 'Backend & Architecture', fr: 'Backend & Architecture' },
    items: [
      'Microservices',
      'REST APIs',
      'Event-Driven Architecture',
      'Distributed Systems',
      'Spring Boot',
      'Spring Cloud',
      'Spring Security',
      'Node.js',
      'Apache Kafka',
      'WebSocket (STOMP)',
    ],
  },
  {
    id: 'cloud',
    label: { en: 'Cloud', fr: 'Cloud' },
    items: ['AWS', 'EC2', 'S3', 'ACM', 'VPC / VPN', 'Textract', 'Microsoft Azure'],
  },
  {
    id: 'devops',
    label: { en: 'DevOps & IaC', fr: 'DevOps & IaC' },
    items: [
      'Terraform',
      'Infrastructure as Code',
      'Docker',
      'Kubernetes',
      'GitLab CI',
      'GitHub Actions',
      'Bamboo',
      'Bitbucket',
    ],
  },
  {
    id: 'frontend',
    label: { en: 'Frontend', fr: 'Frontend' },
    items: ['Angular', 'React', 'React Native', 'Ionic', 'HTML', 'CSS', 'MJML'],
  },
  {
    id: 'observability',
    label: { en: 'Observability & Testing', fr: 'Observabilité & Tests' },
    items: ['Grafana', 'Monitoring & Alerting', 'Cucumber', 'Gherkin', 'BDD', 'JUnit', 'E2E & Integration'],
  },
  {
    id: 'databases',
    label: { en: 'Databases', fr: 'Bases de données' },
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle'],
  },
]

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export const experience: ExperienceItem[] = [
  {
    id: 'gls',
    company: 'GLS',
    role: { en: 'Lead Software Engineer (Dev Lead)', fr: 'Lead Software Engineer (Dev Lead)' },
    meta: { en: 'General Logistics Systems', fr: 'General Logistics Systems' },
    period: { en: 'Oct 2025 – Present', fr: 'Oct. 2025 – Aujourd’hui' },
    location: 'Toulouse, France',
    tags: ['Go', 'AWS', 'Microservices', 'Real-Time', 'Terraform', 'Grafana'],
    current: true,
    context: {
      en: 'GLS is one of Europe’s largest parcel networks. My team builds the platform that plugs third-party locker providers into its Out-of-Home delivery network — a polyglot, event-driven system running on AWS.',
      fr: 'GLS est l’un des plus grands réseaux de colis d’Europe. Mon équipe construit la plateforme qui branche les fournisseurs de consignes tiers sur son réseau Out-of-Home — un système polyglotte, orienté événements, sur AWS.',
    },
    impact: {
      en: ['5 engineers led', '~350K parcels / day', 'Email-campaign UI redesigned'],
      fr: ['5 ingénieurs encadrés', '~350K colis / jour', 'UI des campagnes d’emails refondue'],
    },
    bullets: {
      en: [
        'Support a 5-engineer team building a real-time microservices platform (Go, AWS) that integrates third-party lockers from multiple providers into GLS’s Out-of-Home (OOH) network.',
        'Co-design the service architecture and AWS infrastructure with GLS’s solution architect and tech lead, and serve as primary engineering contact for external locker providers, aligning API contracts across companies.',
        'Build and maintain end-to-end and integration test suites in Java with Cucumber and Gherkin (BDD), validating behaviour across a polyglot, multi-service environment.',
        'Own platform reliability and infrastructure — Grafana observability for service health and real-time event flows, AWS infrastructure as code with Terraform, and CI/CD build/test/deploy automation.',
        'Owned GLS’s recipient-notification overhaul — migrated 2,000+ lines of legacy HTML email to MJML templating and redesigned the UI of its email campaigns into responsive, maintainable templates.',
      ],
      fr: [
        'J’accompagne une équipe de 5 ingénieurs construisant une plateforme de microservices temps-réel (Go, AWS) qui intègre les consignes de plusieurs fournisseurs tiers au réseau Out-of-Home (OOH) de GLS.',
        'Je co-conçois l’architecture des services et l’infrastructure AWS avec l’architecte solution et le tech lead de GLS, et je suis le contact d’ingénierie principal des fournisseurs de consignes externes, alignant les contrats d’API entre entreprises.',
        'Je construis et maintiens des suites de tests end-to-end et d’intégration en Java avec Cucumber et Gherkin (BDD), validant le comportement dans un environnement polyglotte et multi-services.',
        'Je suis responsable de la fiabilité et de l’infrastructure — observabilité Grafana pour la santé des services et les flux d’événements temps-réel, infrastructure AWS as code avec Terraform, et automatisation CI/CD build/test/deploy.',
        'Responsable de la refonte du système de notifications destinataires de GLS — migration de 2 000+ lignes d’emails HTML legacy vers un templating MJML, et redesign de l’UI des campagnes d’emails, en templates responsives et maintenables.',
      ],
    },
  },
  {
    id: 'airfrance',
    company: 'Air France',
    role: { en: 'Full-Stack Software Engineer', fr: 'Ingénieur Full-Stack' },
    meta: { en: 'via ASTEK Technology', fr: 'via ASTEK Technology' },
    period: { en: 'Oct 2022 – Aug 2025', fr: 'Oct. 2022 – Août 2025' },
    location: 'Toulouse, France',
    tags: ['Java', 'Spring Boot', 'Microservices', 'Azure', 'XML / XFWB'],
    context: {
      en: 'Air France Cargo moves freight that must clear customs in every country it touches. I built and maintained the microservices behind those declarations and their compliance checks.',
      fr: 'Air France Cargo achemine du fret qui doit passer la douane dans chaque pays traversé. J’ai construit et maintenu les microservices derrière ces déclarations et leurs contrôles de conformité.',
    },
    impact: {
      en: ['~3 years on the platform', 'Rule-based alert engine shipped', 'On-prem → Azure migration'],
      fr: ['~3 ans sur la plateforme', 'Moteur d’alertes livré', 'Migration on-prem → Azure'],
    },
    bullets: {
      en: [
        'Built and maintained microservices for international customs freight declarations and compliance verification, handling complex business rules, error management, and XML (XFWB) message flows.',
        'Implemented a rule-based alert engine analysing XML freight documents to flag cases for manual review, established traceability for automatic freight blockages, and helped migrate on-premises apps to Microsoft Azure.',
      ],
      fr: [
        'J’ai construit et maintenu des microservices pour les déclarations douanières de fret international et la vérification de conformité, gérant des règles métier complexes, la gestion d’erreurs et les flux de messages XML (XFWB).',
        'J’ai implémenté un moteur d’alertes à base de règles analysant les documents de fret XML pour signaler les cas à revue manuelle, établi la traçabilité des blocages de fret automatiques, et participé à la migration d’applications on-premises vers Microsoft Azure.',
      ],
    },
  },
]

// ---------------------------------------------------------------------------
// Personal projects
// ---------------------------------------------------------------------------

export const projects: ProjectItem[] = [
  {
    id: 'asiganme',
    name: 'Asiganme',
    tagline: {
      en: 'West-Africa e-commerce marketplace',
      fr: 'Marketplace e-commerce pour l’Afrique de l’Ouest',
    },
    period: { en: 'Mar 2024 – Present', fr: 'Mars 2024 – Aujourd’hui' },
    team: { en: 'Team of 3 engineers', fr: 'Équipe de 3 ingénieurs' },
    tags: [
      'Spring Boot',
      'Flask / Python',
      'React Native',
      'React',
      'Elasticsearch',
      'AWS (SNS · SQS · S3)',
      'Docker',
      'Terraform',
    ],
    problem: {
      en: 'E-commerce in West Africa is held back by two things: payments — most buyers use mobile money, not cards — and product search that doesn’t match how people actually shop.',
      fr: 'L’e-commerce en Afrique de l’Ouest bute sur deux choses : les paiements — la plupart des acheteurs utilisent le mobile money, pas la carte — et une recherche produit qui ne colle pas à la façon dont les gens achètent réellement.',
    },
    status: {
      en: 'In active development · team of 3 · buyer app + seller & staff web apps',
      fr: 'En développement actif · équipe de 3 · app acheteur + web vendeurs & staff',
    },
    links: [],
    bullets: {
      en: [
        'Building a microservices marketplace for West Africa (Spring Boot/Java, Flask/Python) across three clients — a React Native buyer app and React web apps for sellers and staff.',
        'Built the AI layer end to end: natural-language product search and a conversational shopping assistant (Python AI services + Elasticsearch), automated moderation that flags non-compliant listings, and seasonal demand analysis that surfaces the right products and promos ahead of time.',
        'Integrated mobile-money and card payments — Ecobank API for mobile money, PayPal for cards — matching how West-African buyers actually pay.',
        'Own the DevOps and infrastructure: the platform runs fully on AWS (SNS, SQS, S3), containerized with Docker and Docker Compose, and provisioned as infrastructure-as-code with Terraform.',
        'Built the CI/CD pipelines for automated build, test and deploy, backed by an end-to-end test suite in JUnit, Cucumber and Gherkin (BDD).',
      ],
      fr: [
        'Construction d’une marketplace en microservices pour l’Afrique de l’Ouest (Spring Boot/Java, Flask/Python) sur trois clients — une app acheteur React Native et des apps web React pour vendeurs et staff.',
        'Développement de toute la couche IA : recherche produit en langage naturel et assistant d’achat conversationnel (services IA Python + Elasticsearch), modération automatique qui signale les annonces non conformes, et analyse saisonnière de la demande pour mettre en avant les bons articles et promos en amont.',
        'Intégration des paiements mobile-money et carte — API Ecobank pour le mobile money, PayPal pour la carte — au plus près des usages de paiement en Afrique de l’Ouest.',
        'Responsable du DevOps et de l’infrastructure : la plateforme tourne entièrement sur AWS (SNS, SQS, S3), conteneurisée avec Docker et Docker Compose, et provisionnée en infrastructure-as-code avec Terraform.',
        'Mise en place des pipelines CI/CD pour l’automatisation build / test / déploiement, appuyée sur une suite de tests end-to-end en JUnit, Cucumber et Gherkin (BDD).',
      ],
    },
  },
  {
    id: 'fintech',
    name: 'Fintech Lending App',
    tagline: {
      en: 'Short-term lending — installment credit',
      fr: 'Crédit court terme — prêt en plusieurs échéances',
    },
    period: { en: 'Apr 2025 – Present', fr: 'Avr. 2025 – Aujourd’hui' },
    team: { en: 'Team of 3 engineers', fr: 'Équipe de 3 ingénieurs' },
    tags: [
      'Spring Boot',
      'Smile ID (KYC)',
      'Stripe',
      'PayPal',
      'AWS Textract',
      'Docker Compose',
      'Terraform',
    ],
    problem: {
      en: 'Short-term credit is hard to access without a formal credit history — a lender needs another way to judge solvency, and a reliable way to verify who they are lending to.',
      fr: 'Le crédit court terme est difficile d’accès sans historique bancaire formel — il faut un autre moyen d’évaluer la solvabilité, et un moyen fiable de vérifier à qui l’on prête.',
    },
    status: {
      en: 'In active development · team of 3 · loans repaid over 3–4 monthly installments',
      fr: 'En développement actif · équipe de 3 · prêts remboursés sur 3–4 mensualités',
    },
    links: [],
    bullets: {
      en: [
        'Architected the short-term lending app as microservices (Spring Boot) — loans repaid over 3 to 4 monthly installments.',
        'Wrote the credit-scoring algorithm that judges a borrower’s solvency when there is no formal credit history to rely on.',
        'AI identity verification: biometric face and ID-document analysis (Smile ID) for a KYC we can actually trust.',
        'AI income analysis: payslips and proof-of-income documents read and extracted automatically (AWS Textract), then fed into the scoring.',
        'Integrated payments end to end — mobile money through the Ecobank API, cards through Stripe and PayPal — for paying the loan out and collecting each monthly installment.',
        'Own the DevOps and infrastructure on AWS: containerized with Docker Compose, provisioned as infrastructure-as-code with Terraform.',
      ],
      fr: [
        'Architecture de l’app de crédit court terme en microservices (Spring Boot) — des prêts remboursés sur 3 à 4 échéances mensuelles.',
        'J’ai écrit l’algorithme de scoring qui évalue la solvabilité de l’emprunteur, là où il n’existe aucun historique bancaire formel.',
        'Vérification d’identité par IA : analyse biométrique du visage et des pièces d’identité (Smile ID), pour un KYC fiable.',
        'Analyse des revenus par IA : lecture et extraction automatiques des bulletins de salaire et justificatifs (AWS Textract), qui alimentent ensuite le scoring.',
        'Intégration des paiements de bout en bout — mobile money via l’API Ecobank, carte via Stripe et PayPal — pour le versement du prêt et le prélèvement de chaque mensualité.',
        'Responsable du DevOps et de l’infrastructure sur AWS : conteneurisation avec Docker Compose, provisionnement en infrastructure-as-code avec Terraform.',
      ],
    },
  },
]
