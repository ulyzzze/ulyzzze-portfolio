import React, { useState, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../SceneInit';
import emailjs from '@emailjs/browser';
import { SparklesText } from '../components/magicui/magic-text';

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
    <section id="contact" className="min-h-screen text-white py-20 px-4 content-overlay relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de section */}
        <div className='text-center mb-16'>
          <div className="inline-block relative">
            <h1 className='lg:text-6xl md:text-5xl text-3xl font-bold bg-gradient-to-r from-blue-300 via-blue-200 to-purple-300 bg-clip-text text-transparent mb-4'>
              Contactez-moi
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className='text-gray-300 text-lg mt-6 max-w-2xl mx-auto'>
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter.
            Je serais ravi de discuter avec vous !
          </p>
        </div>

        {/* Contenu principal */}
        <div className="space-y-12">
          {/* Formulaire de contact avec scène 3D intégrée */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-800">
            <SparklesText className={"text-2xl md:text-3xl font-semibold mb-8 text-purple-300 text-center"}>Envoyez-moi un message</SparklesText>
            
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                      placeholder="Décrivez votre projet ou posez votre question..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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

          {/* Informations de contact */}
          <div className="bg-gray-900/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Autres moyens de me contacter
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4 text-gray-300 p-4 bg-gray-800/30 rounded-lg">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-400 break-all">ulysse.couchoud@epitech.eu</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300 p-4 bg-gray-800/30 rounded-lg">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Localisation</p>
                  <p className="text-sm text-gray-400">Lyon, France</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300 p-4 bg-gray-800/30 rounded-lg sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/ulysse-couchoud/" target='_blank' rel="noopener noreferrer" className="text-sm text-gray-400 cursor-pointer">
                        Ulysse Couchoud
                    </a>
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