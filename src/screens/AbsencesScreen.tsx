import { useState } from "react";
import AbsenceRow from "../components/AbsenceRow";
import { absencesByTerm } from "../data/absences";
import type { Term } from "../data/grades";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Tab =
  | "Отсъствия"
  | "Оценки"
  | "Отзиви"
  | "Разписание"
  | "Домашна р.";

export default function AbsencesScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("Отсъствия");
  const [term, setTerm] = useState<Term>("Първи срок");
  const [termOpen, setTermOpen] = useState(false);

  return (
    <>

      {activeTab === "Отсъствия" && (
        <button
          onClick={() => setTermOpen(true)}
          className="w-full bg-appBg px-4 py-3 flex items-center justify-between"
        >
          <span className="text-sm font-medium text-textSecondary">
            {term}
          </span>
          <ChevronDownIcon className="w-5 h-5 text-textSecondary" />
        </button>
      )}

      <main className="bg-white pb-20">
        {absencesByTerm[term].length === 0 ? (
          <div className="p-6 text-center text-textSecondary">
            Няма отсъствия
          </div>
        ) : (
          absencesByTerm[term].map((a, i) => (
            <AbsenceRow key={i} {...a} />
          ))
        )}
      </main>

      {termOpen && (
        <TermDropdown
          selected={term}
          onSelect={(t) => {
            setTerm(t);
            setTermOpen(false);
          }}
          onClose={() => setTermOpen(false)}
        />
      )}
    </>
  );
}
function TermDropdown({
  selected,
  onSelect,
  onClose,
}: {
  selected: "Първи срок" | "Втори срок";
  onSelect: (t: "Първи срок" | "Втори срок") => void;
  onClose: () => void;
}) {
  return (
    <>
      {/* Dim background */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/20 z-40"
      />

      {/* Dropdown panel */}
      <div className="fixed top-[110px] left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-slideDown">
          {["Първи срок", "Втори срок"].map((t) => (
            <button
              key={t}
              onClick={() => onSelect(t as any)}
              className={`w-full px-4 py-3 text-left text-sm ${
                selected === t
                  ? "bg-appBg font-medium"
                  : ""
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      
    </>
  );
}