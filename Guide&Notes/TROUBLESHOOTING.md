# 🔧 Résolution des Problèmes - Portfolio

## ✅ Problème résolu : Erreur Tailwind CSS v4

### Symptôme
```
Error: Cannot apply unknown utility class `bg-primary`
CssSyntaxError: tailwindcss
```

### Cause
Next.js 15 installe par défaut Tailwind CSS v4 (beta) qui utilise une syntaxe différente et incompatible avec notre configuration.

### Solution appliquée
1. ✅ Désinstallation de Tailwind CSS v4
2. ✅ Installation de Tailwind CSS v3.4 (version stable)
3. ✅ Mise à jour de `postcss.config.mjs`
4. ✅ Correction de `globals.css`

### Fichiers modifiés
- `postcss.config.mjs` : Configuration PostCSS standard
- `src/app/globals.css` : Syntaxe Tailwind v3
- `.vscode/settings.json` : Configuration VS Code pour ignorer les warnings

## 🎯 Le site fonctionne maintenant !

**Serveur de développement** : http://localhost:3000

✅ Compilation réussie  
✅ Toutes les pages fonctionnent  
✅ Styles appliqués correctement  
✅ Animations fluides  

## ⚠️ Warnings VS Code (normaux)

Vous pouvez voir des warnings dans `globals.css` :
```
Unknown at rule @tailwind
Unknown at rule @apply
```

**C'est normal !** Ces warnings viennent de l'éditeur VS Code qui ne reconnaît pas automatiquement la syntaxe Tailwind. Le fichier `.vscode/settings.json` a été créé pour les désactiver.

Si les warnings persistent :
1. Rechargez VS Code (Ctrl + Shift + P → "Reload Window")
2. Ou ignorez-les, ils n'affectent pas le fonctionnement

## 🐛 Autres problèmes courants

### 1. Le serveur ne démarre pas

**Symptôme** : `Error: port 3000 already in use`

**Solution** :
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Ou changez le port
npm run dev -- -p 3001
```

### 2. Les styles ne s'appliquent pas

**Solution** :
```bash
# Arrêtez le serveur (Ctrl + C)
# Supprimez le cache
rm -rf .next
# Redémarrez
npm run dev
```

### 3. Module non trouvé

**Symptôme** : `Cannot find module '@/...'`

**Solution** :
```bash
# Réinstallez les dépendances
rm -rf node_modules package-lock.json
npm install
```

### 4. Images ne s'affichent pas

**Vérifications** :
- Les images sont dans `/public/projects/`
- Les chemins dans `src/data/projects.ts` sont corrects
- Format d'image supporté (JPG, PNG, SVG, WebP)

**Exemple correct** :
```typescript
image: '/projects/mon-projet.jpg', // ✅ Commence par /
```

### 5. Erreurs TypeScript

**Solution** :
```bash
# Vérifiez les erreurs
npm run lint

# Type check
npx tsc --noEmit
```

### 6. Build de production échoue

**Solution** :
```bash
# Testez le build localement
npm run build
npm start

# Si erreurs, vérifiez :
# - Toutes les images existent
# - Pas de console.log() dans le code production
# - Types TypeScript corrects
```

## 🚀 Déploiement sur Vercel

Si vous rencontrez des erreurs lors du déploiement :

### Erreur 1 : Build failed

**Vérifications** :
- Poussez tous les fichiers sur Git
- Vérifiez que `node_modules/` est dans `.gitignore`
- Assurez-vous que `package.json` et `package-lock.json` sont présents

### Erreur 2 : Images manquantes

**Solution** :
- Vérifiez que le dossier `/public/` est dans Git
- Les images doivent être < 4.5MB chacune
- Utilisez WebP pour réduire la taille

### Erreur 3 : Variables d'environnement

**Solution** :
1. Allez dans les Settings du projet Vercel
2. Ajoutez vos variables d'environnement
3. Redéployez

## 📝 Checklist avant déploiement

- [ ] `npm run build` fonctionne localement
- [ ] Toutes les images sont présentes
- [ ] Les liens (GitHub, LinkedIn, email) sont à jour
- [ ] Les informations personnelles sont correctes
- [ ] Le formulaire de contact est configuré (si nécessaire)
- [ ] Les meta tags SEO sont personnalisés
- [ ] Testé sur mobile et desktop
- [ ] Pas de `console.log()` dans le code

## 🆘 Support supplémentaire

### Logs utiles

```bash
# Voir les logs détaillés
npm run dev -- --verbose

# Nettoyer complètement
rm -rf .next node_modules
npm install
npm run dev
```

### Vérifier la version de Node.js

```bash
node -v  # Doit être >= 18.0.0
npm -v   # Doit être >= 9.0.0
```

### Réinitialiser le projet

Si vraiment tout est cassé :

```bash
# Sauvegardez vos modifications dans src/data/
# Puis :
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

## 📚 Ressources

- [Documentation Tailwind CSS v3](https://tailwindcss.com/docs)
- [Next.js Troubleshooting](https://nextjs.org/docs/messages)
- [Vercel Deployment Issues](https://vercel.com/docs/concepts/deployments/troubleshoot-a-build)

## ✅ État actuel du projet

**Version Tailwind CSS** : 3.4.x (stable)  
**Version Next.js** : 15.5.5  
**État** : ✅ Fonctionnel  
**URL locale** : http://localhost:3000  

---

**Dernière mise à jour** : 15 octobre 2025  
**Statut** : Tous les problèmes résolus ✅
