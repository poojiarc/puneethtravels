// import { motion } from 'framer-motion';
// import { Clock, Car, MapPin, PartyPopper, Calendar, Plane, PlaneLanding, Wrench } from 'lucide-react';

// const services = [
//   {
//     icon: Clock,
//     title: 'Hourly Rentals',
//     description: 'Flexible hourly booking for city tours, shopping trips, or business meetings.',
//   },
//   {
//     icon: Car,
//     title: 'Local Rentals',
//     description: 'Reliable local taxi service within Visakhapatnam city limits.',
//   },
//   {
//     icon: MapPin,
//     title: 'Outstation Trips',
//     description: 'Comfortable long-distance travel to any destination across India.',
//   },
//   {
//     icon: PartyPopper,
//     title: 'Event Transport',
//     description: 'Wedding, corporate events, and special occasion transportation.',
//   },
//   {
//     icon: Calendar,
//     title: 'Monthly Rentals',
//     description: 'Cost-effective monthly car rental packages for regular commuters.',
//   },
//   {
//     icon: Plane,
//     title: 'Airport Drop',
//     description: 'Timely airport transfers ensuring you never miss a flight.',
//   },
//   {
//     icon: PlaneLanding,
//     title: 'Airport Pickup',
//     description: 'Hassle-free pickup from airport with flight tracking service.',
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="section-padding bg-primary relative overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-90" />
      
//       {/* Decorative Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

//       <div className="container-custom relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground mb-4">
//             <Wrench className="w-4 h-4 text-accent" />
//             <span className="text-sm font-medium">Our Services</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
//             Services We <span className="text-gradient">Offer</span>
//           </h2>
//           <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
//             Comprehensive travel solutions tailored to meet all your transportation needs
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group"
//             >
//               <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:bg-accent/20 hover:border-accent/40 hover:scale-105">
//                 {/* Icon */}
//                 <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                   <service.icon className="w-7 h-7 text-accent-foreground" />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-heading font-bold text-primary-foreground mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-primary-foreground/70 text-sm leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


import { motion } from "framer-motion";
import {
  Clock,
  Car,
  MapPin,
  PartyPopper,
  Calendar,
  Plane,
  PlaneLanding,
  Wrench,
  MessageCircle,
} from "lucide-react";

// WhatsApp Link
const WHATSAPP_LINK = "https://wa.me/918523882317";

const services = [
  {
    icon: Clock,
    title: "Hourly Rentals",
    description:
      "Flexible hourly booking for city tours, shopping trips, or business meetings.",
  },
  {
    icon: Car,
    title: "Local Rentals",
    description: "Reliable local taxi service within Visakhapatnam city limits.",
  },
  {
    icon: MapPin,
    title: "Outstation Trips",
    description:
      "Comfortable long-distance travel to any destination across India.",
  },
  {
    icon: PartyPopper,
    title: "Event Transport",
    description:
      "Wedding, corporate events, and special occasion transportation.",
  },
  {
    icon: Calendar,
    title: "Monthly Rentals",
    description:
      "Cost-effective monthly car rental packages for regular commuters.",
  },
  {
    icon: Plane,
    title: "Airport Drop",
    description:
      "Timely airport transfers ensuring you never miss a flight.",
  },
  {
    icon: PlaneLanding,
    title: "Airport Pickup",
    description:
      "Hassle-free pickup from airport with flight tracking service.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="section-padding bg-primary relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-90" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground mb-4">
            <Wrench className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Our Services</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Services We <span className="text-gradient">Offer</span>
          </h2>

          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to meet all your
            transportation needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
            >
              {/* Card */}
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:bg-accent/20 hover:border-accent/40 hover:scale-105 cursor-pointer">

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-brand-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-primary-foreground mb-2">
                  {service.title}
                </h3>

                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Book Now Button */}
                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium group-hover:bg-brand-orange transition-all duration-300">
                    <MessageCircle className="w-4 h-4" />
                    Book Now
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
