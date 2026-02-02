import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Near Gokul Theater, Bowrada Road, Allipuram, Visakhapatnam',
    link: 'https://maps.google.com/?q=Allipuram,Visakhapatnam',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8523882317',
    link: 'tel:+918523882317',
  },
  {
    icon: Phone,
    label: 'Alternate Phone',
    value: '+91 8688936510',
    link: 'tel:+918688936510',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'syamalaram1982@gmail.com',
    link: 'mailto:syamalaram1982@gmail.com',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-4">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to book your ride? Contact us anytime - we're available 24/7
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-brand-orange flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">{info.label}</p>
                  <p className="text-foreground font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/918523882317?text=Hello%20Puneeth%20Travels,%20I%20want%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-accent to-brand-orange rounded-2xl text-accent-foreground font-semibold text-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-lg h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.4580833376877!2d83.30395671487!3d17.719456287903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431c0b0c3b0d%3A0x4c8e8f9a0b0c3b0d!2sAllipuram%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Puneeth Travels Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
