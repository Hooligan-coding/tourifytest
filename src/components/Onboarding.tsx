import { motion } from "framer-motion";
import { Shield, MapPin, Globe, Wallet, Navigation } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

interface OnboardingProps {
  onGetStarted: () => void;
}

const pillars = [
  { icon: Navigation, label: "Smart Navigation", color: "gradient-sky" },
  { icon: Shield, label: "Guardian Safety", color: "gradient-navy" },
  { icon: Globe, label: "Instant Translation", color: "gradient-emerald" },
  { icon: Wallet, label: "Budget Clarity", color: "gradient-amber" },
  { icon: MapPin, label: "Local Discovery", color: "gradient-hero" },
];

const Onboarding = ({ onGetStarted }: OnboardingProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful coastal travel destination at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-navy opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Logo / Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald/10 border border-emerald/20 backdrop-blur-sm mb-8">
              <Shield className="w-5 h-5 text-emerald-light" />
              <span className="text-emerald-light font-display text-sm tracking-wide">YOUR TRAVEL GUARDIAN</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight"
          >
            Travel with
            <br />
            <span className="text-gradient-emerald">Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-lg mx-auto leading-relaxed"
          >
            Never lost. Never confused. Never unsafe. Tourify is your intelligent travel operating system.
          </motion.p>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10"
              >
                <pillar.icon className="w-4 h-4 text-emerald-light" />
                <span className="text-primary-foreground/80 text-sm">{pillar.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onGetStarted}
            className="gradient-emerald text-accent-foreground font-display font-semibold text-lg px-10 py-4 rounded-2xl shadow-glow animate-pulse-glow transition-all"
          >
            Get Started
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-primary-foreground/40 text-sm mt-6"
          >
            Free to start • No credit card required
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;
