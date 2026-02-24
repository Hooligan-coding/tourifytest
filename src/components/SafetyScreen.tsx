import { motion } from "framer-motion";
import {
  Shield,
  Phone,
  MapPin,
  AlertTriangle,
  Users,
  Building2,
  Heart,
  Siren,
  ChevronRight,
  Share2,
} from "lucide-react";

const emergencyContacts = [
  { icon: Siren, label: "Police", number: "10111", color: "bg-destructive/15 text-destructive" },
  { icon: Heart, label: "Ambulance", number: "10177", color: "bg-coral/15 text-coral" },
  { icon: Building2, label: "Embassy", number: "+27 12 431 4000", color: "bg-navy/10 text-navy" },
];

const safetyFeatures = [
  { icon: MapPin, title: "Live Location Sharing", desc: "Share with trusted contacts", active: true },
  { icon: Users, title: "Family Mode", desc: "Track group members in real-time" },
  { icon: AlertTriangle, title: "Route Deviation Alert", desc: "Get notified of unexpected detours" },
  { icon: Share2, title: "Trip Tracking", desc: "Auto-share your journey progress" },
];

const SafetyScreen = () => {
  return (
    <div className="pb-24 px-5 pt-4">
      <h1 className="text-2xl font-display font-bold text-foreground mb-6">Safety Hub</h1>

      {/* SOS Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center mb-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-32 h-32 rounded-full bg-destructive flex items-center justify-center shadow-elevated relative"
        >
          <div className="absolute inset-0 rounded-full bg-destructive animate-ping opacity-20" />
          <div className="flex flex-col items-center z-10">
            <Phone className="w-8 h-8 text-destructive-foreground mb-1" />
            <span className="text-destructive-foreground font-display font-bold text-lg">SOS</span>
          </div>
        </motion.button>
        <p className="text-muted-foreground text-sm mt-3">Tap for emergency assistance</p>
      </motion.div>

      {/* Emergency Pack */}
      <div className="mb-8">
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">
          Emergency Pack — Cape Town
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {emergencyContacts.map((contact, i) => (
            <motion.button
              key={contact.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card shadow-card border border-border"
            >
              <div className={`w-10 h-10 rounded-xl ${contact.color} flex items-center justify-center`}>
                <contact.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-foreground">{contact.label}</span>
              <span className="text-[10px] text-muted-foreground">{contact.number}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Safety Features */}
      <div>
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">Guardian Features</h2>
        <div className="space-y-3">
          {safetyFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card border border-border"
            >
              <div className="w-11 h-11 rounded-xl gradient-navy flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
              {feature.active ? (
                <span className="text-xs px-3 py-1 rounded-full bg-emerald/15 text-emerald font-medium">Active</span>
              ) : (
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scam Tips */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-5 rounded-2xl bg-amber/10 border border-amber/20"
      >
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-amber" />
          <h3 className="font-display font-semibold text-foreground text-sm">Local Awareness</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Be cautious of unofficial tour operators near Table Mountain. Always verify credentials through Tourify's SafeRide network.
        </p>
      </motion.div>
    </div>
  );
};

export default SafetyScreen;
