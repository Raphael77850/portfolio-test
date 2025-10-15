'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi (à remplacer par votre propre logique d'envoi)
    try {
      // Exemple avec un service comme FormSpree ou votre propre API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // Simulation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="glass-effect rounded-lg p-8 space-y-6"
    >
      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-neutral-light font-medium mb-2">
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-secondary border border-neutral-dark/30 rounded-lg text-neutral-light placeholder-neutral focus:outline-none focus:border-accent-blue transition-colors duration-300"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-neutral-light font-medium mb-2">
          Adresse email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-secondary border border-neutral-dark/30 rounded-lg text-neutral-light placeholder-neutral focus:outline-none focus:border-accent-blue transition-colors duration-300"
          placeholder="john.doe@exemple.com"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-neutral-light font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-secondary border border-neutral-dark/30 rounded-lg text-neutral-light placeholder-neutral focus:outline-none focus:border-accent-blue transition-colors duration-300 resize-none"
          placeholder="Votre message..."
        />
      </div>

      {/* Bouton d'envoi */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-accent-blue to-accent-green hover:opacity-90 text-primary font-medium py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span>Envoi en cours...</span>
        ) : (
          <>
            <FaPaperPlane />
            <span>Envoyer le message</span>
          </>
        )}
      </button>

      {/* Messages de statut */}
      {submitStatus === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-accent-green text-center font-medium"
        >
          ✓ Message envoyé avec succès !
        </motion.p>
      )}

      {submitStatus === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-center font-medium"
        >
          ✗ Erreur lors de l&apos;envoi. Veuillez réessayer.
        </motion.p>
      )}

      {/* Mention RGPD */}
      <p className="text-neutral text-xs text-center">
        En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter. 
        Consultez notre{' '}
        <a href="/privacy" className="text-accent-blue hover:underline">
          politique de confidentialité
        </a>
        .
      </p>
    </motion.form>
  );
}
