import { motion } from 'framer-motion';
import { Users, Wind, Fuel, Star, Car } from 'lucide-react';

import swiftImg from '@/assets/cars/swift.jpg';
import dzireImg from '@/assets/cars/dzire.jpg';
import ertigaImg from '@/assets/cars/ertiga.jpg';
import innovaImg from '@/assets/cars/innova.jpg';
import hycrossImg from '@/assets/cars/hycross.jpg';
import busImg from '@/assets/cars/bus.jpg';

const vehicles = [
  {
    name: 'Swift',
    category: 'Hatchback',
    image: swiftImg,
    features: ['4 Seater', 'AC', 'Fuel Efficient', 'Comfortable'],
  },
  {
    name: 'Dzire',
    category: 'Sedan',
    image: dzireImg,
    features: ['4 Seater', 'AC', 'Reliable', 'Comfortable'],
  },
  {
    name: 'Ertiga',
    category: 'SUV (6+1)',
    image: ertigaImg,
    features: ['7 Seater', 'AC', 'Spacious', 'Family'],
  },
  {
    name: 'Innova',
    category: 'SUV (7+1)',
    image: innovaImg,
    features: ['8 Seater', 'AC', 'Premium Comfort', 'Luxury'],
  },
  {
    name: 'Innova Hycross',
    category: 'Premium SUV',
    image: hycrossImg,
    features: ['7 Seater', 'AC', 'Hybrid', 'Ultra Luxury'],
  },
  {
    name: 'Mini Bus',
    category: 'Bus',
    image: busImg,
    features: ['12-40 Seater', 'AC', 'Group Travel', 'Events'],
  },
];

const FleetSection = () => {
  return (
    <section id="fleet" className="section-padding bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <Car className="w-4 h-4" />
            <span className="text-sm font-medium">Our Fleet</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient">Perfect Ride</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium vehicles for every occasion - from compact city rides to luxury group travel
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="fleet-card group"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-muted to-background">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 category-badge">
                  {vehicle.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {vehicle.name}
                </h3>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {vehicle.features.map((feature) => (
                    <span key={feature} className="feature-pill">
                      {feature.includes('Seater') && <Users className="w-3 h-3" />}
                      {feature === 'AC' && <Wind className="w-3 h-3" />}
                      {feature.includes('Fuel') && <Fuel className="w-3 h-3" />}
                      {(feature.includes('Premium') || feature.includes('Luxury') || feature.includes('Ultra')) && <Star className="w-3 h-3" />}
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Book Button */}
                <a
                  href={`https://wa.me/918523882317?text=Hello%20Puneeth%20Travels,%20I%20want%20to%20book%20${encodeURIComponent(vehicle.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient flex items-center justify-center gap-2 w-full text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
