import { motion } from "framer-motion";
import {
  Map,
  Wallet,
  Shield,
  Globe,
  MapPin,
  Star,
  Car,
  ChevronRight,
  Plus,
  Bell,
  TrendingUp,
} from "lucide-react";

interface DashboardHomeProps {
  onNavigate: (tab: string) => void;
}

const quickActions = [
  { icon: Map, label: "Plan Trip", color: "gradient-emerald", tab: "trips" },
  { icon: Shield, label: "Safety Hub", color: "gradient-navy", tab: "safety" },
  { icon: Globe, label: "Translate", color: "gradient-sky", tab: "discover" },
  { icon: Car, label: "SafeRide", color: "gradient-amber", tab: "discover" },
];

const features = [
  {
    icon: Wallet,
    title: "Budget Planner",
    description: "Track your spending across categories",
    gradient: "gradient-amber",
    tab: "trips",
  },
  {
    icon: MapPin,
    title: "Near Me",
    description: "Hospitals, ATMs, embassies nearby",
    gradient: "gradient-sky",
    tab: "discover",
  },
  {
    icon: Star,
    title: "Rewards",
    description: "243 points earned this month",
    gradient: "gradient-emerald",
    tab: "profile",
  },
];

const DashboardHome = ({ onNavigate }: DashboardHomeProps) => {
  return (
    <div className="pb-24 px-5 pt-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-muted-foreground text-sm">Welcome back</p>
          <h1 className="text-2xl font-display font-bold text-foreground">Tourify</h1>
        </div>
        <button className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center relative">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-coral border-2 border-card" />
        </button>
      </div>

      {/* Active Trip Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="gradient-hero rounded-3xl p-6 mb-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald/10 -translate-y-8 translate-x-8" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/20 text-emerald-light text-xs font-medium mb-4">
            <TrendingUp className="w-3 h-3" />
            Active Trip
          </div>
          <h3 className="text-xl font-display font-bold text-primary-foreground mb-1">
            Explore Cape Town
          </h3>
          <p className="text-primary-foreground/60 text-sm mb-4">
            Dec 15 – Dec 22 • 5 days left
          </p>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-primary-foreground/10 rounded-full h-2">
              <div className="gradient-emerald rounded-full h-2 w-[35%]" />
            </div>
            <span className="text-primary-foreground/70 text-xs font-medium">Day 3/7</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-display font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, i) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(action.tab)}
              className="flex flex-col items-center gap-2"
            >
              <div className={`w-14 h-14 rounded-2xl ${action.color} flex items-center justify-center shadow-card`}>
                <action.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-xs font-medium text-foreground">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-display font-semibold text-foreground">Tools</h2>
          <button className="text-emerald text-sm font-medium">View all</button>
        </div>
        {features.map((feature, i) => (
          <motion.button
            key={feature.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate(feature.tab)}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card border border-border hover:shadow-elevated transition-shadow text-left"
          >
            <div className={`w-12 h-12 rounded-xl ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
              <feature.icon className="w-5 h-5 text-accent-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground truncate">{feature.description}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          </motion.button>
        ))}
      </div>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNavigate("trips")}
        className="fixed bottom-24 right-6 w-14 h-14 rounded-2xl gradient-emerald shadow-elevated flex items-center justify-center z-40"
      >
        <Plus className="w-6 h-6 text-accent-foreground" />
      </motion.button>
    </div>
  );
};

export default DashboardHome;
