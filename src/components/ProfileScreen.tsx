import { motion } from "framer-motion";
import {
  User,
  Star,
  Gift,
  Crown,
  ChevronRight,
  Settings,
  Heart,
  Globe,
  Shield,
  CreditCard,
} from "lucide-react";

const tiers = [
  { name: "Explorer", points: 0, active: false },
  { name: "Navigator", points: 500, active: true },
  { name: "Elite", points: 2000, active: false },
];

const menuItems = [
  { icon: Heart, label: "Favorites", desc: "12 saved places" },
  { icon: Globe, label: "Preferences", desc: "Diet, mobility, interests" },
  { icon: CreditCard, label: "Payment Methods", desc: "2 cards saved" },
  { icon: Shield, label: "Privacy & Security", desc: "Manage your data" },
  { icon: Settings, label: "Settings", desc: "App preferences" },
];

const ProfileScreen = () => {
  const currentPoints = 243;
  const nextTier = 500;
  const progress = (currentPoints / nextTier) * 100;

  return (
    <div className="pb-24 px-5 pt-4">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center">
          <User className="w-8 h-8 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-display font-bold text-foreground">Alex Traveler</h1>
          <p className="text-muted-foreground text-sm">Navigator Tier</p>
        </div>
        <button className="ml-auto px-4 py-2 rounded-xl bg-muted text-sm font-medium text-foreground">
          Edit
        </button>
      </motion.div>

      {/* Rewards Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="gradient-hero rounded-3xl p-6 mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <Crown className="w-5 h-5 text-amber" />
          <span className="text-primary-foreground font-display font-semibold">Rewards Wallet</span>
        </div>

        <div className="flex items-end gap-2 mb-4">
          <span className="text-4xl font-display font-bold text-primary-foreground">{currentPoints}</span>
          <span className="text-primary-foreground/60 text-sm mb-1">points</span>
        </div>

        {/* Tier Progress */}
        <div className="mb-3">
          <div className="flex justify-between text-xs text-primary-foreground/60 mb-2">
            <span>Navigator</span>
            <span>Elite Traveler — {nextTier - currentPoints} pts to go</span>
          </div>
          <div className="w-full bg-primary-foreground/10 rounded-full h-2.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="gradient-emerald rounded-full h-2.5"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          {[
            { icon: Gift, label: "Redeem" },
            { icon: Star, label: "Earn More" },
          ].map((action) => (
            <button
              key={action.label}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary-foreground/10 text-primary-foreground text-sm font-medium"
            >
              <action.icon className="w-4 h-4" />
              {action.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Premium Upgrade */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full p-5 rounded-2xl gradient-emerald mb-8 text-left"
      >
        <div className="flex items-center gap-3">
          <Crown className="w-6 h-6 text-accent-foreground" />
          <div className="flex-1">
            <h3 className="font-display font-bold text-accent-foreground">Upgrade to Premium</h3>
            <p className="text-accent-foreground/70 text-sm">Unlock priority SafeRide, offline maps & more</p>
          </div>
          <ChevronRight className="w-5 h-5 text-accent-foreground" />
        </div>
      </motion.button>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item, i) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.05 }}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card border border-border text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
              <item.icon className="w-5 h-5 text-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-foreground">{item.label}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProfileScreen;
