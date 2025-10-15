# 📊 Guide des Données - Structure et Exemples

## 🎯 Vue d'ensemble

Ce portfolio utilise des fichiers TypeScript pour gérer les données (projets et compétences), ce qui facilite :
- ✅ La personnalisation rapide
- ✅ Le typage et l'autocomplétion
- ✅ L'intégration future d'un CMS
- ✅ La validation des données

## 📁 Structure des Projets

### Fichier : `src/data/projects.ts`

#### Interface TypeScript

```typescript
export interface Project {
  id: string;              // Identifiant unique
  title: string;           // Nom du projet
  description: string;     // Description courte (affichée sur la carte)
  longDescription?: string; // Description détaillée (optionnel)
  stack: string[];         // Technologies utilisées
  image: string;           // Chemin de l'image (/public/projects/...)
  githubUrl: string;       // Lien vers le repo GitHub
  demoUrl?: string;        // Lien vers la démo (optionnel)
  featured: boolean;       // Afficher en page d'accueil ?
  order: number;           // Ordre d'affichage (1, 2, 3...)
}
```

#### Exemple complet

```typescript
{
  id: 'portfolio-react',
  title: 'Portfolio Interactif',
  description: 'Portfolio personnel avec animations 3D et interactions immersives utilisant React et Three.js.',
  longDescription: 'Ce portfolio met en avant mes compétences en développement front-end avec des animations fluides, un design responsive et une expérience utilisateur soignée. Construit avec React, Three.js pour les effets 3D, et déployé sur Vercel avec intégration continue.',
  stack: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  image: '/projects/portfolio.jpg',
  githubUrl: 'https://github.com/username/portfolio',
  demoUrl: 'https://mon-portfolio.vercel.app',
  featured: true,
  order: 1,
}
```

#### Conseils pour les projets

**Description courte** (2-3 lignes max)
- ✅ Soyez concis et impactant
- ✅ Mentionnez le problème résolu
- ✅ Utilisez des mots-clés pertinents

**Stack technique**
- Listez 3-7 technologies principales
- Ordre : Frontend → Backend → Database → Tools
- Utilisez les noms officiels (React, Next.js, MongoDB)

**Images**
- Dimensions recommandées : 1200x800px
- Format : WebP (optimal) ou JPG
- Poids : < 200KB
- Nom de fichier descriptif (mon-projet.jpg)

## 🛠️ Structure des Compétences

### Fichier : `src/data/skills.ts`

#### Interface TypeScript

```typescript
export interface Skill {
  id: string;              // Identifiant unique
  name: string;            // Nom de la compétence
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  icon: string;            // Nom de l'icône (react-icons)
  level?: number;          // Niveau 0-100 (optionnel)
  order: number;           // Ordre d'affichage
}
```

#### Exemple complet

```typescript
{
  id: 'react',
  name: 'React',
  category: 'frontend',
  icon: 'FaReact',        // Font Awesome
  level: 85,              // 85%
  order: 1,
}
```

#### Catégories disponibles

```typescript
type Category = 
  | 'frontend'    // HTML, CSS, JavaScript, React, Vue...
  | 'backend'     // Node.js, Python, PHP, Ruby...
  | 'database'    // MongoDB, MySQL, PostgreSQL...
  | 'tools'       // Git, Docker, VS Code, Figma...
  | 'other';      // Méthodologies, soft skills...
```

#### Labels des catégories

Ces labels sont affichés sur le site (personnalisables dans `skills.ts`) :

```typescript
export const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Base de données',
  tools: 'Outils',
  other: 'Autres',
};
```

## 🎨 Icônes disponibles

### Font Awesome (préfixe `Fa`)

Exemples courants :

| Technologie | Icône | Code |
|------------|-------|------|
| HTML5 | 🟧 | `FaHtml5` |
| CSS3 | 🔵 | `FaCss3Alt` |
| JavaScript | 🟨 | `FaJs` |
| React | ⚛️ | `FaReact` |
| Node.js | 🟢 | `FaNodeJs` |
| Python | 🐍 | `FaPython` |
| Git | 🌲 | `FaGitAlt` |
| GitHub | 🐙 | `FaGithub` |
| Docker | 🐳 | `FaDocker` |
| Figma | 🎨 | `FaFigma` |

[Voir toutes les icônes Font Awesome](https://react-icons.github.io/react-icons/icons/fa/)

### Simple Icons (préfixe `Si`)

Exemples courants :

| Technologie | Icône | Code |
|------------|-------|------|
| TypeScript | 🔷 | `SiTypescript` |
| Next.js | ▲ | `SiNextdotjs` |
| Tailwind CSS | 🌊 | `SiTailwindcss` |
| MongoDB | 🍃 | `SiMongodb` |
| PostgreSQL | 🐘 | `SiPostgresql` |
| MySQL | 🐬 | `SiMysql` |
| Express | 🚂 | `SiExpress` |
| VS Code | 💻 | `SiVisualstudiocode` |
| Vercel | △ | `SiVercel` |

[Voir toutes les icônes Simple Icons](https://react-icons.github.io/react-icons/icons/si/)

## 📝 Exemples de cas d'usage

### Projet Full-Stack

```typescript
{
  id: 'e-commerce-fullstack',
  title: 'Plateforme E-commerce',
  description: 'Application e-commerce complète avec paiement Stripe, gestion des stocks et dashboard admin.',
  stack: [
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'Stripe',
    'Tailwind CSS'
  ],
  image: '/projects/ecommerce.jpg',
  githubUrl: 'https://github.com/vous/ecommerce',
  demoUrl: 'https://demo-ecommerce.vercel.app',
  featured: true,
  order: 1,
}
```

### Projet Frontend

```typescript
{
  id: 'landing-page',
  title: 'Landing Page Interactive',
  description: 'Page d\'atterrissage avec animations scroll et design responsive pour startup SaaS.',
  stack: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
  image: '/projects/landing.jpg',
  githubUrl: 'https://github.com/vous/landing-page',
  demoUrl: 'https://landing-demo.vercel.app',
  featured: false,
  order: 4,
}
```

### Projet API/Backend

```typescript
{
  id: 'rest-api',
  title: 'API REST Authentification',
  description: 'API sécurisée avec JWT, refresh tokens, rate limiting et documentation Swagger.',
  stack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
  image: '/projects/api.jpg',
  githubUrl: 'https://github.com/vous/auth-api',
  featured: false,
  order: 5,
}
```

## 🔧 Fonctions utilitaires

Le fichier `projects.ts` expose plusieurs fonctions :

```typescript
// Récupérer tous les projets triés
const projects = getProjects();

// Récupérer uniquement les projets en avant (featured)
const featuredProjects = getFeaturedProjects();

// Récupérer un projet par son ID
const project = getProjectById('mon-projet');
```

Le fichier `skills.ts` expose aussi des fonctions :

```typescript
// Tous les compétences triées
const skills = getSkills();

// Compétences par catégorie
const frontendSkills = getSkillsByCategory('frontend');

// Toutes les compétences groupées par catégorie
const grouped = getSkillsGroupedByCategory();
// Retourne: { frontend: [...], backend: [...], ... }
```

## 🎯 Conseils de personnalisation

### Pour les débutants (1-2 projets)

Mettez en avant **la qualité plutôt que la quantité** :
- 1-2 projets très soignés
- Descriptions détaillées
- Code propre et commenté
- README complet sur GitHub

### Pour les développeurs intermédiaires (3-5 projets)

Montrez la **diversité de vos compétences** :
- 1 projet full-stack
- 1 projet frontend avancé
- 1 projet backend/API
- 1-2 projets créatifs/originaux

### Pour les développeurs confirmés (5+ projets)

Démontrez votre **expertise et votre impact** :
- Projets avec métriques (users, performances)
- Contributions open-source
- Projets personnels innovants
- Side-projects rentables

## 🚀 Préparation pour un CMS

Les structures actuelles sont compatibles avec les CMS headless populaires.

### Migration vers Strapi

```typescript
// Avant (fichier local)
export const projects: Project[] = [...];

// Après (API Strapi)
export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch('https://your-strapi.com/api/projects?populate=*');
  const data = await response.json();
  return data.data.map(item => ({
    id: item.id.toString(),
    title: item.attributes.title,
    // ...
  }));
};
```

### Migration vers Contentful

```typescript
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getProjects = async (): Promise<Project[]> => {
  const entries = await client.getEntries({ content_type: 'project' });
  return entries.items.map(item => ({
    id: item.sys.id,
    title: item.fields.title as string,
    // ...
  }));
};
```

## 💡 Astuces finales

1. **Cohérence** : Gardez un style uniforme (descriptions, stack, images)
2. **Actualisation** : Mettez à jour régulièrement vos projets et compétences
3. **Véracité** : Ne listez que les compétences que vous maîtrisez vraiment
4. **Preuves** : Tous les projets doivent avoir un repo GitHub + démo si possible
5. **Keywords** : Utilisez des mots-clés pertinents pour le SEO

---

**Besoin d'aide ?** Consultez les exemples dans les fichiers `src/data/` ou le README principal.
