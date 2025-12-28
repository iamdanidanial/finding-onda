import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import SectionTitle from '../SectionTitle';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 812-3456-7890',
      href: 'tel:+6281234567890'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat now',
      href: 'https://wa.me/6281234567890'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@gmail.com',
      href: 'mailto:info@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bali, Indonesia',
      href: '#'
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 relative bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80')`
      }}
    >
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6">
        <SectionTitle
          title="Get in Touch"
          subtitle="Reach out anytime — we're here 24/7 to help plan your perfect Bali journey."
          bright={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">

          {/* LEFT SECTION – Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/70">{info.label}</div>
                  <div className="text-xl font-semibold text-white">{info.value}</div>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl"
            >
              <h4 className="text-2xl font-bold mb-2">Available 24 / 7</h4>
              <p className="text-white/90">
                Need help or want to book instantly? Our support team is always ready to assist.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION – WhatsApp CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-center flex flex-col items-center justify-center h-full">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 flex items-center justify-center rounded-2xl bg-green-500 shadow-xl mb-6"
              >
                <MessageCircle className="text-white w-10 h-10" />
              </motion.div>

              <h3 className="text-3xl font-bold text-white mb-4">Chat via WhatsApp</h3>

              <p className="text-white/80 text-lg mb-8 max-w-md">
                Fast response, easy booking, and personalized travel recommendations.
              </p>

              <motion.a
                href="https://wa.me/6281234567890"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-lg shadow-xl flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Chat Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
