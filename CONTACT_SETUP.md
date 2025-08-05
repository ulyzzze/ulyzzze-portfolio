# Configuration de l'envoi d'emails pour le formulaire de contact

## Méthode recommandée : EmailJS

EmailJS est la solution la plus simple pour envoyer des emails depuis un site statique sans backend.

### Étapes de configuration :

1. **Inscription sur EmailJS**
   - Rendez-vous sur [https://emailjs.com/](https://emailjs.com/)
   - Créez un compte gratuit

2. **Configuration du service email**
   - Allez dans "Email Services"
   - Ajoutez votre service (Gmail, Outlook, etc.)
   - Suivez les instructions de connexion

3. **Création du template d'email**
   - Allez dans "Email Templates"
   - Créez un nouveau template avec ce contenu :

   **Sujet :**
   ```
   [Portfolio] {{subject}}
   ```

   **Corps du message :**
   ```
   Bonjour Ulysse,

   Vous avez reçu un nouveau message depuis votre portfolio :

   📝 Détails du contact :
   - Nom : {{from_name}}
   - Email : {{from_email}}
   - Sujet : {{subject}}

   💬 Message :
   {{message}}

   ---
   📅 Envoyé le {{sent_date}}
   🌐 Depuis votre portfolio
   ```

4. **Configuration dans le code**
   - Ouvrez `src/sections/Contact.jsx`
   - Remplacez les lignes 76-78 par vos vraies clés :
   ```javascript
   const serviceId = 'service_xxxxxxx'; // Votre Service ID
   const templateId = 'template_xxxxxxx'; // Votre Template ID  
   const publicKey = 'xxxxxxxxxxxxxxx'; // Votre Public Key
   ```

5. **Activation de l'envoi**
   - Décommentez la ligne 88 dans `Contact.jsx` :
   ```javascript
   await emailjs.send(serviceId, templateId, templateParams, publicKey);
   ```
   - Commentez la ligne de simulation (ligne 91)

### Variables disponibles dans le template :
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur  
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message
- `{{to_email}}` - Votre email (ulysse.couchoud@epitech.eu)
- `{{sent_date}}` - Date d'envoi formatée

## Alternative : Backend avec API

Si vous préférez une solution backend, vous pouvez utiliser l'API fournie dans `/api/contact.js` avec :
- SendGrid
- Nodemailer
- Resend
- Ou tout autre service SMTP

### Pour Vercel :
1. Déplacez `/api/contact.js` vers `/api/contact.js` (déjà fait)
2. Ajoutez vos variables d'environnement dans Vercel
3. Modifiez `Contact.jsx` pour utiliser `fetch('/api/contact')`

### Pour Netlify :
1. Créez le dossier `/netlify/functions/`
2. Déplacez le fichier vers `/netlify/functions/contact.js`
3. Modifiez l'URL dans `fetch('/.netlify/functions/contact')`

## Test de la configuration

Une fois configuré, testez le formulaire :
1. Remplissez tous les champs
2. Cliquez sur "Envoyer"
3. Vérifiez votre boîte email
4. Consultez la console pour les logs de debug

## Dépannage

- **Erreur CORS** : Vérifiez que votre domaine est autorisé dans EmailJS
- **Template non trouvé** : Vérifiez l'ID du template
- **Service non trouvé** : Vérifiez l'ID du service
- **Clé publique invalide** : Vérifiez la clé dans les paramètres EmailJS

Pour plus d'aide, consultez la [documentation EmailJS](https://www.emailjs.com/docs/).
