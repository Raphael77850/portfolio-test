/**
 * Fichier de données pour les projets du portfolio
 * Facilite l'intégration future d'un CMS headless
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    id: 'projet-1',
    title: 'Application E-commerce',
    description: 'Une plateforme e-commerce moderne avec panier, paiement en ligne et gestion des commandes.',
    longDescription: 'Application e-commerce complète développée avec React et Node.js. Intègre Stripe pour les paiements, un système d\'authentification sécurisé et une interface administrative pour gérer les produits et commandes.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    image: '/projects/ecommerce.svg',
    githubUrl: 'https://github.com/votre-username/projet-ecommerce',
    demoUrl: 'https://demo-ecommerce.vercel.app',
    featured: true,
    order: 1,
  },
  {
    id: 'projet-2',
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif avec visualisations de données en temps réel.',
    longDescription: 'Dashboard analytics avec graphiques interactifs, filtres avancés et export de données. Utilise Chart.js pour les visualisations et une API REST pour les données en temps réel.',
    stack: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL'],
    image: '/projects/dashboard.svg',
    githubUrl: 'https://github.com/votre-username/dashboard-analytics',
    demoUrl: 'https://demo-dashboard.vercel.app',
    featured: true,
    order: 2,
  },
  {
    id: 'projet-3',
    title: 'Réseau Social',
    description: 'Application de réseau social avec profils, publications et système de messagerie.',
    longDescription: 'Réseau social complet avec système de posts, likes, commentaires, messagerie en temps réel via WebSocket, et upload d\'images. Interface responsive et moderne.',
    stack: ['React', 'Express', 'Socket.io', 'MySQL', 'AWS S3'],
    image: '/projects/social.svg',
    githubUrl: 'https://github.com/votre-username/reseau-social',
    demoUrl: 'https://demo-social.vercel.app',
    featured: true,
    order: 3,
  },
];

/**
 * Fonction utilitaire pour récupérer les projets
 * Prépare l'intégration future d'un CMS
 */
export const getProjects = (): Project[] => {
  return projects.sort((a, b) => a.order - b.order);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured).sort((a, b) => a.order - b.order);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
