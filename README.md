# 🎨 Portfolio Minimaliste - Développeur Web Junior

Un portfolio moderne, sobre et élégant conçu pour mettre en valeur vos projets et compétences de développeur web. Ce template utilise Next.js, Tailwind CSS et Framer Motion pour offrir une expérience utilisateur fluide et performante.

> ✅ **Note** : Ce projet utilise Tailwind CSS v3.4 (stable) pour une compatibilité maximale.

## ✨ Caractéristiques

### Design & UX
- 🎨 **Design minimaliste** avec palette de couleurs sombres et accents pastel
- ✨ **Animations fluides** avec Framer Motion (fade-in, slide, hover effects)
- 📱 **100% Responsive** - Mobile-first design
- ♿ **Accessible** - Navigation clavier, ARIA labels, contraste vérifié
- 🎯 **SEO optimisé** - Meta tags, structure sémantique

### Sections
- **Hero** : Présentation avec animations et liens sociaux
- **Projets** : Cartes de projets avec images, technologies et liens
- **Compétences** : Grille de compétences organisée par catégories
- **À propos** : Parcours et motivations
- **Contact** : Formulaire de contact avec validation RGPD

### Technologies
- ⚛️ **Next.js 15** - Framework React avec App Router
- 🎨 **Tailwind CSS** - Styling utilitaire et responsive
- 🎬 **Framer Motion** - Animations performantes
- 📦 **TypeScript** - Type-safety
- 🎯 **React Icons** - Bibliothèque d'icônes

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Installation

1. **Cloner ou télécharger le projet**
```bash
git clone <votre-repo>
cd portfolio-test
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📝 Personnalisation

### 1. Informations personnelles

#### Layout (`src/app/layout.tsx`)
Modifiez les métadonnées SEO :
```typescript
export const metadata: Metadata = {
  title: "Portfolio | Votre Nom",
  description: "Votre description personnalisée",
  authors: [{ name: "Votre Nom" }],
  // ...
};
```

#### Page d'accueil (`src/app/page.tsx`)
Modifiez :
- Le titre et la description dans la Hero section
- Les liens vers vos réseaux sociaux (GitHub, LinkedIn, Email)
- Le texte de la section "À propos"

### 2. Projets

Éditez `src/data/projects.ts` :

```typescript
export const projects: Project[] = [
  {
    id: 'projet-1',
    title: 'Nom du projet',
    description: 'Description courte',
    stack: ['React', 'Node.js', ...],
    image: '/projects/mon-projet.jpg',
    githubUrl: 'https://github.com/...',
    demoUrl: 'https://...',
    featured: true,
    order: 1,
  },
  // ...
];
```

**Ajout d'images** :
- Placez vos captures d'écran dans `/public/projects/`
- Format recommandé : WebP (pour les performances)
- Dimensions recommandées : 1200x800px

### 3. Compétences

Éditez `src/data/skills.ts` :

```typescript
export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: 'FaReact', // Nom de l'icône depuis react-icons
    level: 85,
    order: 1,
  },
  // ...
];
```

**Icônes disponibles** :
- [Font Awesome](https://react-icons.github.io/react-icons/icons/fa/)
- [Simple Icons](https://react-icons.github.io/react-icons/icons/si/)

### 4. Couleurs et thème

Éditez `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    dark: '#0a0a0f',    // Fond principal sombre
    DEFAULT: '#14141f', // Fond par défaut
    light: '#1e1e2e',   // Fond clair
  },
  accent: {
    blue: '#6b9bd1',    // Accent bleu
    green: '#a8c5a7',   // Accent vert
    // ...
  },
}
```

### 5. Formulaire de contact

Par défaut, le formulaire est simulé. Pour l'activer :

#### Option A : FormSpree (gratuit, simple)
1. Créez un compte sur [FormSpree](https://formspree.io/)
2. Obtenez votre endpoint
3. Dans `src/components/ContactForm.tsx`, remplacez :

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

#### Option B : API Route Next.js
Créez `src/app/api/contact/route.ts` :

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Logique d'envoi d'email (Nodemailer, SendGrid, etc.)
  return NextResponse.json({ success: true });
}
```

### 6. Header & Footer

#### Header (`src/components/Header.tsx`)
- Modifiez les liens de navigation
- Changez le logo/texte

#### Footer (`src/components/Footer.tsx`)
- Mettez à jour les liens sociaux
- Ajoutez les mentions légales

## 🌐 Déploiement

### Vercel (Recommandé)

1. **Créer un compte** sur [Vercel](https://vercel.com/)
2. **Connecter votre repo GitHub**
3. **Importer le projet**
4. **Déployer** - C'est automatique !

### Netlify

1. **Créer un compte** sur [Netlify](https://netlify.com/)
2. **Build command** : `npm run build`
3. **Publish directory** : `.next`
4. **Déployer**

### Variables d'environnement
Si vous utilisez une API ou des services externes :

```env
# .env.local
NEXT_PUBLIC_FORMSPREE_ID=your_id
NEXT_PUBLIC_GA_ID=your_ga_id
```

## 📦 Structure du projet

```
portfolio-test/
├── public/
│   ├── projects/          # Images des projets
│   ├── robots.txt         # SEO
│   └── sitemap.txt        # Sitemap
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Layout principal
│   │   ├── page.tsx       # Page d'accueil
│   │   └── globals.css    # Styles globaux
│   ├── components/
│   │   ├── Header.tsx     # En-tête
│   │   ├── Footer.tsx     # Pied de page
│   │   ├── ProjectCard.tsx # Carte projet
│   │   ├── SkillCard.tsx   # Carte compétence
│   │   └── ContactForm.tsx # Formulaire
│   └── data/
│       ├── projects.ts    # Données projets
│       └── skills.ts      # Données compétences
├── tailwind.config.ts     # Configuration Tailwind
├── next.config.ts         # Configuration Next.js
└── package.json
```

## 🎯 Optimisations

### Performance
- ✅ Images optimisées avec `next/image`
- ✅ Code splitting automatique avec Next.js
- ✅ Lazy loading des animations
- ✅ CSS minifié en production

### SEO
- ✅ Meta tags configurés
- ✅ Structure sémantique HTML
- ✅ Textes alt sur les images
- ✅ URLs sémantiques
- ✅ Robots.txt et sitemap

### Accessibilité
- ✅ Navigation au clavier
- ✅ ARIA labels
- ✅ Contraste vérifié (WCAG AA)
- ✅ Focus visible

## 🔧 Commandes utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Linter (Biome)
npm run lint

# Format du code
npm run format
```

## 🐛 Résolution de problèmes

Consultez le fichier [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) pour les problèmes courants et leurs solutions.

**Problème résolu** : Erreur Tailwind CSS v4 → Migration vers v3.4 stable ✅

## 📱 Intégration CMS (Future)

Ce projet est préparé pour intégrer un CMS headless :

### Strapi
```typescript
// src/data/projects.ts
export const getProjects = async (): Promise<Project[]> => {
  const res = await fetch('https://your-strapi.com/api/projects');
  return res.json();
};
```

### Contentful
```typescript
import { createClient } from 'contentful';

const client = createClient({
  space: 'your_space_id',
  accessToken: 'your_access_token',
});
```

## 📖 Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## 🐛 Troubleshooting

### Les animations ne fonctionnent pas
- Vérifiez que `'use client'` est présent en haut des composants utilisant Framer Motion
- Effacez le cache : `rm -rf .next && npm run dev`

### Les couleurs ne s'appliquent pas
- Vérifiez `tailwind.config.ts`
- Assurez-vous que les classes sont dans le `content` array

### Erreurs TypeScript
- Vérifiez que tous les types sont importés
- Lancez `npm run lint` pour voir les erreurs

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 💬 Support

Pour toute question ou problème :
1. Consultez la documentation ci-dessus
2. Vérifiez les issues GitHub
3. Contactez-moi à [votre.email@exemple.com]

---

**Fait avec ❤️ par un développeur passionné**
