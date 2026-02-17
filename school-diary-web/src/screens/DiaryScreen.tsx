import { useState } from "react";
import Header from "../components/Header";
import UpperTabs from "../components/UpperTabs";
import GradesScreen from "./GradesScreen";
import AbsencesScreen from "./AbsencesScreen";

type Tab =
  | "Отсъствия"
  | "Оценки"
  | "Отзиви"
  | "Разписание"
  | "Домашна р.";

export default function DiaryScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("Оценки");

  return (
    <>
      <Header />
      <UpperTabs active={activeTab} onChange={setActiveTab} />

      {activeTab === "Оценки" && <GradesScreen />}
      {activeTab === "Отсъствия" && <AbsencesScreen />}

      {activeTab !== "Оценки" && activeTab !== "Отсъствия" && (
        <div className="bg-white p-6 text-center text-textSecondary">
          {activeTab} (предстои)
        </div>
      )}
    </>
  );
}
