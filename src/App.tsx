import { useState } from "react";
import DiaryScreen from "./screens/DiaryScreen";
import BottomNav from "./components/BottomNav";
import ScheduleScreen from "./screens/ScheduleScreen";


type Screen = "Дневник" | "Разписание" | "Още";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>("Дневник");

  return (
    <div className="min-h-screen flex justify-center bg-appBg">
      <div className="w-full max-w-[430px] min-h-screen bg-appBg relative pb-16">
        {/* Main content */}
        {activeScreen === "Дневник" && <DiaryScreen />}

        {activeScreen === "Разписание" && <ScheduleScreen />}


        {activeScreen === "Още" && (
          <div className="bg-white p-6 text-center text-textSecondary">
            Още (предстои)
          </div>
        )}

        {/* Bottom navigation */}
        <BottomNav
          active={activeScreen}
          onChange={setActiveScreen}
        />
      </div>
    </div>
  );
}
