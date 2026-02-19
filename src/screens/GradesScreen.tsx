import { useState } from "react";
import SubjectGradesRow from "../components/SubjectGradesRow";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { gradesData } from "../data/grades";
import type { Term } from "../data/grades";
import SubjectDetailsScreen from "./SubjectDetailsScreen";

type Tab =
  | "Отсъствия"
  | "Оценки"
  | "Отзиви"
  | "Разписание"
  | "Домашна р.";

type View =
  | { type: "list" }
  | { type: "subject"; subject: string };

export default function GradesScreen() {
  const [activeTab] = useState<Tab>("Оценки");

  const [term, setTerm] = useState<Term>("Втори срок");
  const [termOpen, setTermOpen] = useState(false);

  const [view, setView] = useState<View>({ type: "list" });

  // ✅ SUBJECT DETAILS VIEW
if (view.type === "subject") {
  const subjectData = gradesData.find(
    (s) => s.subject === view.subject
  );

  if (!subjectData) return null;

  return (
    <SubjectDetailsScreen
      data={subjectData}
    />
  );
}

  return (
    <>
      {/* Term selector */}
      {activeTab === "Оценки" && (
        <button
          onClick={() => setTermOpen(true)}
          className="w-full bg-appBg px-4 py-3 flex items-center justify-between border-b border-divider"
        >
          <span className="text-[15px] font-medium text-appBlue">
            {term}
          </span>
          <ChevronDownIcon className="w-5 h-5 text-textMuted" />
        </button>
      )}

      {/* Grades list */}
      <div className="bg-white pb-20">
        {gradesData.map((item) => (
          <SubjectGradesRow
            key={item.subject}
            subject={item.subject}
            grades={
  item.terms.find((t) => t.term === term)?.grades ?? []
}

            onClick={() =>
              setView({ type: "subject", subject: item.subject })
            }
          />
        ))}
      </div>

      {/* Term dropdown */}
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
  selected: Term;
  onSelect: (t: Term) => void;
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
          {(["Втори срок", "Първи срок"] as Term[]).map((t) => (
            <button
              key={t}
              onClick={() => onSelect(t)}
              className={`w-full px-4 py-3 text-left text-[15px] ${
                selected === t ? "bg-appBg font-medium" : ""
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

