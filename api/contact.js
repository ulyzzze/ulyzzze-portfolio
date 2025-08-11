// API route pour gérer l'envoi d'emails de contact

export default async function handler(req, res) {
  // Autoriser seulement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    const { name, email, subject, message, to } = req.body;

    // Validation des données
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        message: 'Tous les champs sont requis' 
      });
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Format d\'email invalide' 
      });
    }

    const emailData = {
      to: to || 'ulysse.couchoud@epitech.eu',
      from: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Nouveau message depuis votre portfolio</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <hr style="margin: 30px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            Ce message a été envoyé depuis votre portfolio le ${new Date().toLocaleString('fr-FR')}
          </p>
        </div>
      `
    };

    console.log('Email à envoyer:', emailData);

    // Réponse de succès
    res.status(200).json({ 
      message: 'Message envoyé avec succès',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ 
      message: 'Erreur interne du serveur',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}