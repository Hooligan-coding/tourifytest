import { motion } from "framer-motion";
import {
  Plus,
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  Sun,
  Cloud,
  ChevronRight,
} from "lucide-react";

const sampleTrip = {
  name: "Cape Town Adventure",
  dates: "Dec 15 – Dec 22, 2025",
  days: [
    {
      day: 1,
      date: "Dec 15",
      weather: "sunny",
      items: [
        { time: "09:00", title: "Arrive at Cape Town Airport", type: "transport", cost: 0 },
        { time: "11:00", title: "Check in – The Silo Hotel", type: "accommodation", cost: 450 },
        { time: "14:00", title: "V&A Waterfront Walk", type: "activity", cost: 0 },
        { time: "19:00", title: "Dinner at Gold Restaurant", type: "food", cost: 65 },
      ],
    },
    {
      day: 2,
      date: "Dec 16",
      weather: "cloudy",
      items: [
        { time: "07:00", title: "Table Mountain Sunrise Hike", type: "activity", cost: 30 },
        { time: "12:00", title: "Lunch at Kloof Street", type: "food", cost: 25 },
        { time: "15:00", title: "Kirstenbosch Gardens", type: "activity", cost: 15 },
        { time: "20:00", title: "Cape Malay Cooking Class", type: "activity", cost: 80 },
      ],
    },
    {
      day: 3,
      date: "Dec 17",
      weather: "sunny",
      items: [
        { time: "08:00", title: "Cape Peninsula Tour", type: "activity", cost: 95 },
        { time: "13:00", title: "Fish & Chips at Kalk Bay", type: "food", cost: 18 },
        { time: "16:00", title: "Boulders Beach Penguins", type: "activity", cost: 12 },
      ],
    },
  ],
};

const typeColors: Record<string, string> = {
  transport: "bg-sky/15 text-sky",
  accommodation: "bg-navy/10 text-navy",
  activity: "bg-emerald/15 text-emerald",
  food: "bg-amber/15 text-amber",
};

const TripsScreen = () => {
  return (
    <div className="pb-24 px-5 pt-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-display font-bold text-foreground">My Trips</h1>
        <button className="w-10 h-10 rounded-xl gradient-emerald flex items-center justify-center shadow-card">
          <Plus className="w-5 h-5 text-accent-foreground" />
        </button>
      </div>

      {/* Trip Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="gradient-hero rounded-3xl p-6 mb-6"
      >
        <h2 className="text-xl font-display font-bold text-primary-foreground mb-1">{sampleTrip.name}</h2>
        <div className="flex items-center gap-4 text-primary-foreground/60 text-sm">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {sampleTrip.dates}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            South Africa
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          <div className="bg-primary-foreground/10 rounded-xl p-3 text-center">
            <p className="text-primary-foreground text-lg font-display font-bold">$790</p>
            <p className="text-primary-foreground/50 text-xs">Est. Budget</p>
          </div>
          <div className="bg-primary-foreground/10 rounded-xl p-3 text-center">
            <p className="text-primary-foreground text-lg font-display font-bold">7</p>
            <p className="text-primary-foreground/50 text-xs">Days</p>
          </div>
          <div className="bg-primary-foreground/10 rounded-xl p-3 text-center">
            <p className="text-primary-foreground text-lg font-display font-bold">11</p>
            <p className="text-primary-foreground/50 text-xs">Activities</p>
          </div>
        </div>
      </motion.div>

      {/* Day by Day */}
      <div className="space-y-6">
        {sampleTrip.days.map((day, di) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + di * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl gradient-emerald flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-sm">{day.day}</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">Day {day.day}</h3>
                <p className="text-muted-foreground text-xs">{day.date}</p>
              </div>
              <div className="ml-auto">
                {day.weather === "sunny" ? (
                  <Sun className="w-5 h-5 text-amber" />
                ) : (
                  <Cloud className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
            </div>

            <div className="space-y-2 ml-5 border-l-2 border-border pl-5">
              {day.items.map((item, ii) => (
                <motion.div
                  key={ii}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card shadow-card border border-border"
                >
                  <div className="text-xs text-muted-foreground font-medium w-12 flex-shrink-0 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                    <span className={`inline-block text-xs px-2 py-0.5 rounded-full mt-1 ${typeColors[item.type]}`}>
                      {item.type}
                    </span>
                  </div>
                  {item.cost > 0 && (
                    <span className="text-sm font-display font-semibold text-foreground flex items-center">
                      <DollarSign className="w-3 h-3" />
                      {item.cost}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TripsScreen;
