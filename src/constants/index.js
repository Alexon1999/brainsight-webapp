import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Accueil",
  },
  {
    id: "features",
    title: "Fonctionnalités",
  },
  {
    id: "team",
    title: "Equipe",
  },
  {
    id: "demo",
    title: "Demo",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Analyse",
    content:
      "Puissantes algorithmes pour détecter et diagnostiquer une variété de conditions affectant le cerveau.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% User-friendly Application",
    content:
      "Interface conviviale permet une intégration facile dans n'importe quel établissement médical.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Free API",
    content:
      "Permet aux développeurs d'intégrer facilement nos fonctionnalités dans leurs propres applications.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Le [membre de l'équipe 2] est un professionnel accompli de [secteur/domaine concerné], qui a fait ses preuves dans [ce que le membre de l'équipe 2 a réussi]. En tant que [poste du membre de l'équipe 2], [le membre de l'équipe 2] est responsable de [ce dont le membre de l'équipe 2 est responsable].",
    name: "Yuliya",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-2",
    content:
      "Le [membre de l'équipe 3] est une personne créative qui résout les problèmes et qui est passionnée par [ce qui passionne le membre de l'équipe 3]. [Il/elle apporte une nouvelle perspective à [son] rôle en tant que [poste du membre de l'équipe 3], et est toujours à la recherche de nouvelles façons d'améliorer [ce sur quoi le membre de l'équipe 3 travaille].",
    name: "Feriel",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-3",
    content:
      "Le [Membre de l'équipe 5] est un professionnel [adjectif] et [adjectif] ayant une solide expérience dans [l'industrie/le domaine concerné]. Avec [nombre] années d'expérience dans [l'industrie/le domaine concerné], [il/elle] a une compréhension approfondie de [compétences ou tâches pertinentes] et connaît bien [compétences ou tâches pertinentes].",
    name: "Alexon",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-4",
    content:
      "Avec [nombre] années d'expérience dans [secteur/domaine concerné], [le membre de l'équipe 1] apporte à l'équipe une grande richesse de connaissances et d'expertise. Dans le cadre de [son] rôle de [poste du membre de l'équipe 1], [il/elle] travaille sur [ce sur quoi travaille le membre de l'équipe 1].",
    name: "Laurent Vuelin",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-5",
    content:
      "[Le membre de l'équipe 4] apporte à l'équipe un mélange unique de [compétence ou trait pertinent] et de [compétence ou trait pertinent]. Avec [nombre] années d'expérience dans [l'industrie/le domaine concerné], [il/elle] a affiné [ses] compétences en [compétence ou tâche pertinente] et est devenu(e) un expert [respecté(e)/reconnu(e)] dans [l'industrie/le domaine concerné].",
    name: "Haikel",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Précision",
    value: "82%",
  },
  {
    id: "stats-2",
    title: "Diagnostic du cerveau",
    value: "2",
  },
  // {
  //   id: "stats-1",
  //   title: "User Active",
  //   value: "3800+",
  // },
  // {
  //   id: "stats-2",
  //   title: "Trusted by Company",
  //   value: "230+",
  // },
  // {
  //   id: "stats-3",
  //   title: "Transaction",
  //   value: "$230M+",
  // },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
