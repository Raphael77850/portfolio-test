# 📋 Guide de Démarrage Rapide - Portfolio

## ✅ Le projet est maintenant prêt !

Le serveur de développement est accessible sur : **http://localhost:3000**

## 🎯 Prochaines étapes recommandées

### 1. **Personnalisation immédiate** (5-10 minutes)

#### a. Informations personnelles
Éditez `src/app/layout.tsx` :
```typescript
title: "Portfolio | VOTRE NOM",
description: "Votre description personnalisée",
authors: [{ name: "VOTRE NOM" }],
```

#### b. Liens sociaux
Dans `src/app/page.tsx`, recherchez et remplacez :
- `https://github.com/votre-username` → Votre profil GitHub
- `https://linkedin.com/in/votre-profil` → Votre profil LinkedIn
- `votre.email@exemple.com` → Votre email

Dans `src/components/Footer.tsx`, faites les mêmes modifications.

### 2. **Ajout de vos projets** (15-30 minutes)

Éditez `src/data/projects.ts` :

```typescript
{
  id: 'mon-projet',
  title: 'Nom de votre projet',
  description: 'Description courte (1-2 lignes)',
  longDescription: 'Description détaillée (optionnel)',
  stack: ['React', 'Node.js', 'MongoDB'],
  image: '/projects/mon-projet.jpg',
  githubUrl: 'https://github.com/vous/projet',
  demoUrl: 'https://demo.com', // Optionnel
  featured: true,
  order: 1,
}
```

**Important** : Ajoutez vos captures d'écran dans `/public/projects/`
- Format : JPG, PNG ou WebP
- Dimensions recommandées : 1200x800px

### 3. **Mise à jour des compétences** (10 minutes)

Éditez `src/data/skills.ts` pour ajouter/modifier/supprimer des compétences.

Liste des icônes disponibles :
- **Font Awesome** : https://react-icons.github.io/react-icons/icons/fa/
- **Simple Icons** : https://react-icons.github.io/react-icons/icons/si/

Exemple :
```typescript
{
  id: 'react',
  name: 'React',
  category: 'frontend', // frontend, backend, database, tools, other
  icon: 'FaReact', // Nom de l'icône
  level: 85, // 0-100
  order: 1,
}
```

### 4. **Personnalisation des couleurs** (Optionnel)

Si vous souhaitez changer les couleurs, éditez `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    dark: '#0a0a0f',    // Fond principal
    DEFAULT: '#14141f',
    light: '#1e1e2e',
  },
  accent: {
    blue: '#6b9bd1',    // Couleur d'accent 1
    green: '#a8c5a7',   // Couleur d'accent 2
  },
}
```

### 5. **Configuration du formulaire de contact** (15 minutes)

#### Option A : FormSpree (Gratuit et simple)
1. Créez un compte sur https://formspree.io/
2. Créez un nouveau formulaire
3. Copiez votre ID de formulaire
4. Dans `src/components/ContactForm.tsx`, décommentez et modifiez :

```typescript
const response = await fetch('https://formspree.io/f/VOTRE_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

#### Option B : API personnalisée
Suivez les instructions dans le README.md

### 6. **Section "À propos"**

Éditez `src/app/page.tsx`, section "About", pour personnaliser votre présentation.

## 🚀 Déploiement sur Vercel (5 minutes)

1. Poussez votre code sur GitHub
2. Allez sur https://vercel.com/
3. Cliquez sur "Import Project"
4. Sélectionnez votre repo
5. Cliquez sur "Deploy"

C'est tout ! Votre site sera en ligne en quelques secondes.

## 📦 Structure des fichiers

```
src/
├── app/
│   ├── layout.tsx          ← Meta tags SEO
│   ├── page.tsx            ← Page d'accueil complète
│   └── globals.css         ← Styles globaux
├── components/
│   ├── Header.tsx          ← Navigation
│   ├── Footer.tsx          ← Pied de page
│   ├── ProjectCard.tsx     ← Carte de projet
│   ├── SkillCard.tsx       ← Carte de compétence
│   └── ContactForm.tsx     ← Formulaire
└── data/
    ├── projects.ts         ← VOS PROJETS ICI
    └── skills.ts           ← VOS COMPÉTENCES ICI
```

## 🎨 Palette de couleurs

- **Fond principal** : #14141f (noir profond)
- **Fond secondaire** : #1a2332 (bleu marine foncé)
- **Accent bleu** : #6b9bd1 (bleu pastel)
- **Accent vert** : #a8c5a7 (vert sage)
- **Texte** : #c4c9d4 (gris clair)

## ✨ Fonctionnalités incluses

✅ Navigation fluide avec scroll smooth
✅ Animations au scroll (Framer Motion)
✅ Design responsive mobile-first
✅ Effets hover subtils
✅ Formulaire de contact avec validation
✅ SEO optimisé
✅ Accessibilité (WCAG AA)
✅ Dark mode natif
✅ Structure prête pour CMS

## 🐛 Résolution de problèmes

### Le site ne s'affiche pas correctement
- Videz le cache du navigateur (Ctrl + F5)
- Arrêtez le serveur et relancez : `npm run dev`

### Les couleurs ne s'appliquent pas
- Vérifiez que `tailwind.config.ts` est correctement configuré
- Redémarrez le serveur de développement

### Erreurs TypeScript
- Lancez `npm run lint` pour voir les erreurs
- Vérifiez que tous les imports sont corrects

### Les images ne s'affichent pas
- Vérifiez que vos images sont dans `/public/projects/`
- Vérifiez les chemins dans `src/data/projects.ts`

## 📞 Besoin d'aide ?

Consultez le README.md complet pour plus de détails sur :
- Configuration avancée
- Intégration d'un CMS
- Optimisations supplémentaires
- Déploiement sur d'autres plateformes

## 🎉 Félicitations !

Votre portfolio est prêt à être personnalisé et déployé. 

Bon développement ! 🚀
