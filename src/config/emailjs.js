// Configuration EmailJS pour l'envoi d'emails côté client
// Plus simple à intégrer, pas besoin de serveur backend

// 1. Inscrivez-vous sur https://emailjs.com/
// 2. Créez un service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email
// 4. Obtenez vos clés API

export const emailJSConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Remplacez par votre Service ID
  templateId: 'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Remplacez par votre Public Key
};

// Template d'email recommandé pour EmailJS :
/*
Sujet: Nouveau message depuis le portfolio - {{subject}}

Contenu:
Bonjour Ulysse,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé le {{sent_date}} depuis votre portfolio
*/

// Exemple d'utilisation dans le composant Contact :
/*
import emailjs from '@emailjs/browser';
import { emailJSConfig } from '../config/emailjs';

const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      emailJSConfig.serviceId,
      emailJSConfig.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ulysse.couchoud@epitech.eu',
        sent_date: new Date().toLocaleString('fr-FR'),
      },
      emailJSConfig.publicKey
    );
    
    return result;
  } catch (error) {
    throw error;
  }
};
*/
