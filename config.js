// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Nathan Füllemann',
  domain: 'fullann.ch', // add without https:// , used in meta tags and share urls
  image: '/images/home-profile.png',
  logo: '/images/logo/logo.png',
  email: 'nathan@fullann.ch',
  googleAnalyticsV4: {
    enabled: true,
    id: 'G-X0R2SXXD72'
  },
  plausibleAnalytics: {
    enabled: false,
    domain: 'fullann.ch',
    trackLocalhost: true,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'Fullann',
    linkedin: 'nathan-füllemann-641b32232',
    codepen: 'Fullann',
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://www.buymeacoffee.com/Fullann'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/NathanFüllemann-CV_2023.pdf' // add files in static folder
  },
  uses: {
    enabled: false,
    meta: [
      {title: 'OS', value: 'Windows 11'},
      {title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      {title: 'Mouse', value: 'Logitech Silent Pebble'},
      {title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'},
      {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7 • AMD Radeon Pro 5300M 4 GB + Intel UHD Graphics 630 1536 MB'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'Solmani SA', src: '/images/entreprise/solmani/solmani.svg', url: 'https://solmani.ch' },
    ]
  },
  recommendations: {
    enabled: true,
    meta: [
      { name: 'Angelica Rosso', designation: 'Directrice Recherche et Developpement', image: '/images/entreprise/solmani/solmani_logo.png', linkedin: 'https://www.linkedin.com/in/angelicarosso/', content: 'Organisé, concencieux, ponctuel et professionnel, Monsieur Füllemann, nous a fait une bonne impression. Il s\u0027est aquitté des tâches confiées à notre entière satisfaction.' },
      
    ]
  },
  loadingIndicator: {
    name: 'rotating-plane'
  },
  laguageSwitcher: {
    enabled: true,
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'Home',
        blog: 'Blog',
        projects: 'Projects',
        uses: 'uses',
        resume: 'CV',
        buyMeACoffee: 'buy me ☕',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'I am a',
        description: 'I am a young frontend developer. I\u0027m a student at ETML and in my free time I code for personal projects',
        words: ['developer', 'designer', 'programmer'],
        work: 'Worked at'
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments or mail@karngyan.com'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'Projects',
        subtext: 'This page lists some of my personal and professional projects. Each project has a description, click on the title to read it'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'What they said about me'
      },
      error:{
        text:'Uh oh! Looks like you got lost.Go back to the homepage if you dare!',
        button:'I dare!'
      }
    },
    fr_FR: {
      download: 'Télécharger',
      nav: {
        home: 'Acceuil',
        blog: 'Blog',
        projects: 'Projets',
        uses: 'Setup',
        resume: 'CV',
        buyMeACoffee: 'Buy me ☕',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'je fais des expéreince',
        haveALook: 'Jetez y un coup d œil',
        friendlyNeighborhood: 'Je suis un',
        description: 'Je suis un jeune developper frontend. Je suis étudiant à l\u0027ETML et dans mon temps libre, je code des projets personnels.',
        words: ['développeur', 'designer', 'programmeur'],
        work: "A travaillé chez"
      },
      githubCalendar: {
        header: 'Contributions',
        subtext: 'Calendrier Github'
      },
      blog: {
        header: 'Blog',
        subtext: 'Je fais des essais en informatique et je vous les racontes.'
      },
      recentBlog: {
        header: 'Dernières publications',
        subtext: 'Mes nouvelles expériences'
      },
      uses: {
        header: 'Setup',
        subtext: 'un résumé rapide de ce que j\u0027utilise quotidiennement pour coder'
      },
      projects: {
        header: 'Projets',
        subtext: 'Cette page énumère certains de mes projets personnels et professionnels. chaque projet a une description, cliquez sur le titre pour le lire'
      },
      recommendations: {
        header: 'Recommandations',
        subtext: 'Ce qu on a dit de moi'
      },
      error:{
        text:'Oh oh ! On dirait que tu t\u0027es perdu.Retournez à la page d\u0027accueil si vous l\u0027osez !',
        button:'J\u0027ose!'
      }
    }
  }
}
