import React, { useState, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../SceneInit';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    // Initialisation de la scène 3D pour le bureau
    const canvas = document.getElementById('officeCanvas');
    if (!canvas) {
      console.error('Canvas non trouvé');
      return;
    }

    const scene = new SceneInit('officeCanvas');
    scene.initialize();
    scene.animate();

    let loadedModel;
    const gltfLoader = new GLTFLoader();

    gltfLoader.load('/models/setup/scene.gltf', (gltfScene) => {
      console.log('Office model loaded:', gltfScene);
      loadedModel = gltfScene;
      loadedModel.scene.scale.set(2.5, 2.5, 2.5);
      loadedModel.scene.position.set(0, -1, 0);
      loadedModel.scene.rotation.y = -1.5;
      scene.scene.add(gltfScene.scene);
    }, undefined, (error) => {
      console.error('Error loading office model:', error);
    });

    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.y += 0.0001;
      }
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup function
    return () => {
      if (scene && scene.renderer) {
        scene.renderer.dispose();
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuration EmailJS (remplacez par vos vraies clés)
      const serviceId = 'service_m1cqahj'; // Remplacez par votre Service ID
      const templateId = 'template_5kungax'; // Remplacez par votre Template ID
      const publicKey = 'MaG6pRd8-JjJyjnAU'; // Remplacez par votre Public Key

      // Paramètres pour le template EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ulysse.couchoud@epitech.eu',
        sent_date: new Date().toLocaleString('fr-FR'),
      };

      // Envoi via EmailJS (commenté pour éviter les erreurs sans configuration)
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Simulation d'envoi réussi pour la démo
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Log pour debug (retirez en production)
      console.log('Données du formulaire à envoyer:', templateParams);

      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      console.error('Erreur envoi formulaire:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen text-white py-24 px-4 relative z-10">
      {/* Background – thème IA */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-32 right-20 w-72 h-72 bg-white/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contactez-moi
          </h2>
          <div className="w-24 h-0.5 bg-white/40 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un projet, une question ? Je serai ravi d'échanger avec vous.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="space-y-12">
          <div className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white text-center">Envoyez-moi un message</h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Formulaire */}
              <div className="order-2 lg:order-1">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300 text-white placeholder-slate-500"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300 text-white placeholder-slate-500"
                        placeholder="votre.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300 text-white placeholder-slate-500"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300 text-white placeholder-slate-500 resize-none"
                      placeholder="Décrivez votre projet ou posez votre question..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      'Envoyer le message'
                    )}
                  </button>

                  {/* Messages de statut */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
                      Message envoyé avec succès ! Je vous répondrai bientôt.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
                      Erreur lors de l'envoi. Veuillez réessayer.
                    </div>
                  )}
                </form>
              </div>

              {/* Scène 3D du bureau */}
              <div className="order-1 lg:order-2">
                <div className="h-full min-h-[300px] lg:min-h-[500px]">
                  <div className="relative h-full">
                    <canvas
                      id="officeCanvas"
                      className="w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-gray-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-white">
              Autres moyens de me contacter
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4 text-slate-300 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-sm text-slate-400 break-all">ulysse.couchoud@epitech.eu</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-300 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/ulysse-couchoud/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-slate-300 transition-colors">
                    Ulysse Couchoud
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-300 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Localisation</p>
                  <p className="text-sm text-slate-400">Lyon, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact