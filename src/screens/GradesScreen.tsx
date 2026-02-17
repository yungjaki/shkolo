import { useState } from "react";
import SubjectGradesRow from "../components/SubjectGradesRow";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { gradesData } from "../data/grades";
import type { Term } from "../data/grades";



type Tab =
  | "Отсъствия"
  | "Оценки"
  | "Отзиви"
  | "Разписание"
  | "Домашна р.";

export default function GradesScreen() {
  const [activeTab] = useState<Tab>("Оценки");
  const [termOpen, setTermOpen] = useState(false);
const [term, setTerm] = useState<"Първи срок" | "Втори срок">(
  "Първи срок"
);

return (
  <>

    {activeTab === "Оценки" && (
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

    <div className="relative overflow-hidden">
      <AnimatedTab active={activeTab} term={term} />
    </div>

    {/* ✅ THIS WAS MISSING */}
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

function AnimatedTab({
  active,
  term,
}: {
  active: string;
  term: Term;
}) {
  return (
    <div key={active + term} className="animate-tabFade bg-white pb-20">
      {active === "Оценки" &&
        gradesData.map((item) => (
          <SubjectGradesRow
            key={item.subject}
            subject={item.subject}
            grades={item.gradesByTerm[term]}
          />
        ))}

      {active !== "Оценки" && (
        <div className="p-6 text-center text-textSecondary">
          {active} (предстои)
        </div>
      )}
    </div>
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

