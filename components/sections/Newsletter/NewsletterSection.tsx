'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="section-container bg-koel-aqua">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-koel-teal font-display">
              Únete a la revolución sostenible
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Recibe tips de cuidado personal, ofertas exclusivas y sé el primero en conocer nuevos productos.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="w-full px-6 py-4 rounded-full bg-white/95 backdrop-blur-sm text-koel-neutral-900 placeholder:text-koel-neutral-400 focus:outline-none focus:ring-2 focus:ring-koel-teal transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  disabled={isLoading}
                  className="whitespace-nowrap bg-koel-teal text-white hover:bg-koel-teal-dark"
                >
                  {isLoading ? 'Suscribiendo...' : 'Suscribirme'}
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-white/20 backdrop-blur-sm max-w-xl mx-auto"
              >
                <CheckCircle2 className="w-6 h-6 text-white" />
                <span className="text-white font-medium">
                  ¡Gracias por suscribirte! Revisa tu email.
                </span>
              </motion.div>
            )}

            {/* Privacy Notice */}
            <p className="text-sm text-white/60 mt-4">
              Respetamos tu privacidad. Sin spam, puedes darte de baja cuando quieras.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
