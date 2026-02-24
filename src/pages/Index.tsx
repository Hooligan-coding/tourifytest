import { useState } from "react";
import Onboarding from "@/components/Onboarding";
import ModeSelection from "@/components/ModeSelection";
import BottomNav from "@/components/BottomNav";
import DashboardHome from "@/components/DashboardHome";
import TripsScreen from "@/components/TripsScreen";
import SafetyScreen from "@/components/SafetyScreen";
import DiscoverScreen from "@/components/DiscoverScreen";
import ProfileScreen from "@/components/ProfileScreen";

type AppState = "onboarding" | "mode-select" | "dashboard";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("onboarding");
  const [activeTab, setActiveTab] = useState("home");

  if (appState === "onboarding") {
    return <Onboarding onGetStarted={() => setAppState("mode-select")} />;
  }

  if (appState === "mode-select") {
    return (
      <ModeSelection
        onSelectMode={() => setAppState("dashboard")}
      />
    );
  }

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <DashboardHome onNavigate={setActiveTab} />;
      case "trips":
        return <TripsScreen />;
      case "safety":
        return <SafetyScreen />;
      case "discover":
        return <DiscoverScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <DashboardHome onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      {renderScreen()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
