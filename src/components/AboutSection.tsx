import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Clock, Users, Award, CheckCircle, Info } from 'lucide-react';

const stats = [
  { number: 5000, suffix: '+', label: 'Happy Customers', icon: Users },
  { number: 15000, suffix: '+', label: 'Trips Completed', icon: Award },
  { number: 10, suffix: '+', label: 'Years Experience', icon: Clock },
];

const features = [
  '24/7 Availability',
  'Trusted Service',
  'Experienced Drivers',
  'Affordable Pricing',
  'Well-Maintained Vehicles',
  'GPS Tracking',
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="stat-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-4">
              <Info className="w-4 h-4" />
              <span className="text-sm font-medium">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Your Trusted Travel Partner in{' '}
              <span className="text-gradient">Visakhapatnam</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Puneeth Travels has been serving the people of Visakhapatnam with reliable, 
              safe, and affordable taxi services. With a fleet of well-maintained vehicles 
              and experienced drivers, we ensure every journey is comfortable and memorable.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/918523882317?text=Hello%20Puneeth%20Travels,%20I%20want%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contact Us Today
            </a>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Stats Card */}
            <div className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-brand-orange flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div>
                      <Counter target={stat.number} suffix={stat.suffix} />
                      <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 pt-8 border-t border-primary-foreground/10"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-10 h-10 text-accent" />
                  <div>
                    <p className="text-primary-foreground font-semibold">100% Safe & Secure</p>
                    <p className="text-primary-foreground/60 text-sm">Verified drivers & sanitized vehicles</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
