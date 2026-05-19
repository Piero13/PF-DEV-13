import coinsCollection from "../assets/images/coins-collection.webp";
import lesMinotsDeBonniot from "../assets/images/les_minots_de_bonniot.webp";
import portfolio from "../assets/images/portfolio.webp";
import weddingApp from "../assets/images/wedding_app.webp";

export const projects = [
  {
    id: "wedding-app",
    icon: "icon",
    title: "Plateforme digitale de mariage",
    category: "Application web",
    description:
      "Application web élégante permettant aux invités de consulter les informations de l’événement, accéder aux photos et profiter d’une expérience fluide sur tous les appareils.",
    longDescription:
      "Cette plateforme de mariage a été pensée pour offrir une expérience simple, moderne et immersive aux invités. Elle centralise toutes les informations importantes de l’événement : programme, lieux, galerie photo, informations pratiques et accès rapide depuis n’importe quel appareil. Le projet met l’accent sur l’ergonomie, les performances et le responsive design afin de garantir une navigation fluide sur mobile comme sur desktop.",
    image: weddingApp,
    tags: ["React", "Bootstrap", "Responsive Design"],
    stacks: ["React", "Vite", "Supabase"],
    year: 2026,
    link: "https://mariage-pierre-alexa.netlify.app/",
    featured: true,
  },

  {
    id: "asso-app",
    icon: "icon",
    title: "Site vitrine pour association",
    category: "Site vitrine",
    description:
      "Création d’un site moderne et accessible mettant en valeur les activités, événements et informations essentielles d’une association locale avec une navigation claire et intuitive.",
    longDescription:
      "Développement d’un site vitrine moderne destiné à renforcer la visibilité d’une association locale. Le site présente les activités, les événements et les informations clés de manière claire et structurée. Une attention particulière a été portée à l’accessibilité, au référencement naturel et à l’expérience utilisateur afin de proposer une plateforme simple à consulter et adaptée à tous les profils d’utilisateurs.",
    image: lesMinotsDeBonniot,
    tags: ["React", "SEO", "UX/UI"],
    stacks: ["React", "Vite", "Supabase"],
    year: 2026,
    link: "https://les-minots-de-bonniot.netlify.app/",
    featured: true,
  },

  {
    id: "collection-app",
    icon: "icon",
    title: "Application de gestion de collection",
    category: "Application web",
    description:
      "Développement d’une application web dédiée aux collectionneurs pour organiser, consulter et gérer facilement une collection de pièces grâce à une interface rapide et optimisée.",
    longDescription:
      "Application web conçue pour simplifier la gestion d’une collection numismatique. Les utilisateurs peuvent ajouter, modifier et consulter leurs pièces à travers une interface intuitive et performante. Le projet a été développé avec une architecture moderne permettant une navigation rapide, une gestion optimisée des données et une expérience utilisateur fluide sur tous les supports.",
    image: coinsCollection,
    tags: ["React", "Vite", "Performance"],
    stacks: ["React", "Vite", "Supabase"],
    year: 2025,
    link: "https://ma-collection-de-pieces.netlify.app/",
    featured: true,
  },

  {
    id: "portfolio-app",
    icon: "icon",
    title: "Portfolio professionnel moderne",
    category: "Portfolio",
    description:
      "Conception d’une landing page dynamique avec animations fluides, design soigné et sections optimisées pour valoriser une activité entrepreneuriale et générer des contacts.",
    longDescription:
      "Création d’un portfolio moderne mettant en avant des projets web à travers une interface élégante et interactive. Le site combine animations fluides, design responsive et structure optimisée afin de renforcer l’impact visuel et améliorer l’engagement des visiteurs. L’objectif principal était de proposer une vitrine professionnelle capable de valoriser efficacement les compétences et réalisations du développeur.",
    image: portfolio,
    tags: ["React", "Animations", "UI/UX"],
    stacks: ["React", "Vite", "Supabase"],
    year: 2026,
    link: "#",
    featured: true,
  },
];