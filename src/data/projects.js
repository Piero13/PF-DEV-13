import coinsCollection from "../assets/images/coins-collection.webp";
import lesMinotsDeBonniot from "../assets/images/les_minots_de_bonniot.webp";
import portfolio from "../assets/images/portfolio.webp";
import weddingApp from "../assets/images/wedding_app.webp";

export const projects = [
  {
    id: "wedding-app",
    icon: "icon",
    title: "Plateforme digitale de mariage",
    description: "Application web élégante permettant aux invités de consulter les informations de l’événement, accéder aux photos et profiter d’une expérience fluide sur tous les appareils.",
    image: weddingApp,
    tags: ["React", "Bootstrap", "Responsive Design"],
    link: "https://mariage-pierre-alexa.netlify.app/",
  },

  {
    id: "asso-app",
    icon: "icon",
    title: "Site vitrine pour association",
    description: "Création d’un site moderne et accessible mettant en valeur les activités, événements et informations essentielles d’une association locale avec une navigation claire et intuitive.",
    image: lesMinotsDeBonniot,
    tags: ["React", "SEO", "UX/UI"],
    link: "https://les-minots-de-bonniot.netlify.app/",
  },

  {
    id: "collection-app",
    icon: "icon",
    title: "Application de gestion de collection",
    description: "Développement d’une application web dédiée aux collectionneurs pour organiser, consulter et gérer facilement une collection de pièces grâce à une interface rapide et optimisée.",
    image: coinsCollection,
    tags: ["React", "Vite", "Performance"],
    link: "https://ma-collection-de-pieces.netlify.app/",
  },

  {
    id: "portfolio-app",
    icon: "icon",
    title: "Portfolio professionnel moderne",
    description: "Conception d’une landing page dynamique avec animations fluides, design soigné et sections optimisées pour valoriser une activité entrepreneuriale et générer des contacts.",
    image: portfolio,
    tags: ["React", "Animations", "UI/UX"],
    link: "#",
  },
];