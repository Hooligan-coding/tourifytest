import { motion } from "framer-motion";
import {
  MapPin,
  Hospital,
  Building2,
  Banknote,
  Fuel,
  ShoppingBag,
  UtensilsCrossed,
  Camera,
  Globe,
  Languages,
  Star,
  ChevronRight,
} from "lucide-react";

const categories = [
  { icon: Hospital, label: "Hospitals", count: 4, color: "bg-coral/15 text-coral" },
  { icon: Building2, label: "Embassies", count: 2, color: "bg-navy/10 text-navy" },
  { icon: Banknote, label: "ATMs", count: 12, color: "bg-emerald/15 text-emerald" },
  { icon: Fuel, label: "Fuel", count: 8, color: "bg-amber/15 text-amber" },
  { icon: ShoppingBag, label: "Malls", count: 5, color: "bg-sky/15 text-sky" },
  { icon: UtensilsCrossed, label: "Dining", count: 24, color: "bg-coral/15 text-coral" },
  { icon: Camera, label: "Attractions", count: 18, color: "bg-emerald/15 text-emerald" },
  { icon: Globe, label: "Tours", count: 9, color: "bg-sky/15 text-sky" },
];

const experiences = [
  { title: "Cape Malay Cooking Class", rating: 4.9, price: "$80", badge: "Verified" },
  { title: "Township Art Tour", rating: 4.8, price: "$45", badge: "Popular" },
  { title: "Wine Tasting in Stellenbosch", rating: 4.7, price: "$95", badge: "Premium" },
];

const DiscoverScreen = () => {
  return (
    <div className="pb-24 px-5 pt-4">
      <h1 className="text-2xl font-display font-bold text-foreground mb-2">Discover</h1>
      <p className="text-muted-foreground text-sm mb-6">Cape Town, South Africa</p>

      {/* Translate Quick Access */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center gap-4 p-4 rounded-2xl gradient-hero mb-6"
      >
        <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
          <Languages className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-display font-semibold text-primary-foreground">Scan & Translate</h3>
          <p className="text-primary-foreground/60 text-xs">Point camera at menus, signs, labels</p>
        </div>
        <ChevronRight className="w-5 h-5 text-primary-foreground/60" />
      </motion.button>

      {/* Near Me Categories */}
      <div className="mb-8">
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">Near Me</h2>
        <div className="grid grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * i }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-card shadow-card border border-border"
            >
              <div className={`w-10 h-10 rounded-xl ${cat.color} flex items-center justify-center`}>
                <cat.icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-medium text-foreground">{cat.label}</span>
              <span className="text-[10px] text-muted-foreground">{cat.count} nearby</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Experiences */}
      <div>
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">Immersive Experiences</h2>
        <div className="space-y-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl gradient-emerald flex items-center justify-center flex-shrink-0">
                <Camera className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm">{exp.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-3 h-3 text-amber fill-amber" />
                  <span className="text-xs text-foreground">{exp.rating}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs font-semibold text-foreground">{exp.price}</span>
                </div>
              </div>
              <span className="text-[10px] px-2 py-1 rounded-full bg-emerald/15 text-emerald font-medium">
                {exp.badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverScreen;
