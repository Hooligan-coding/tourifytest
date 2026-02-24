import { motion } from "framer-motion";
import { Map, Compass, ArrowRight } from "lucide-react";

interface ModeSelectionProps {
  onSelectMode: (mode: "plan" | "arrive") => void;
}

const ModeSelection = ({ onSelectMode }: ModeSelectionProps) => {
  return (
    <div className="min-h-screen gradient-navy flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-3">
          How are you traveling?
        </h2>
        <p className="text-primary-foreground/60 text-lg">Choose your mode to get started</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Plan Ahead */}
        <motion.button
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectMode("plan")}
          className="group relative overflow-hidden rounded-3xl p-8 text-left bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:border-emerald/30 transition-all"
        >
          <div className="absolute inset-0 gradient-emerald opacity-0 group-hover:opacity-10 transition-opacity" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl gradient-emerald flex items-center justify-center mb-6">
              <Map className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary-foreground mb-3">Plan Ahead</h3>
            <p className="text-primary-foreground/60 mb-6 leading-relaxed">
              Build your itinerary, set budgets, prepare translations, and plan every detail before you go.
            </p>
            <div className="flex items-center gap-2 text-emerald-light font-display font-medium">
              <span>Start planning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.button>

        {/* Arrive Now */}
        <motion.button
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectMode("arrive")}
          className="group relative overflow-hidden rounded-3xl p-8 text-left bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:border-sky/30 transition-all"
        >
          <div className="absolute inset-0 gradient-sky opacity-0 group-hover:opacity-10 transition-opacity" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl gradient-sky flex items-center justify-center mb-6">
              <Compass className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold text-primary-foreground mb-3">Arrive Now</h3>
            <p className="text-primary-foreground/60 mb-6 leading-relaxed">
              Already at your destination? Get instant navigation, safety tools, translation, and local discovery.
            </p>
            <div className="flex items-center gap-2 text-sky font-display font-medium">
              <span>Explore now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default ModeSelection;
