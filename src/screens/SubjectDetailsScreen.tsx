import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import GradeBubble from "../components/GradeBubble";
import type { SubjectGrades } from "../data/grades";

export default function SubjectDetailsScreen({
  data,
}: {
  data: SubjectGrades;
}) {
  const [openGrades, setOpenGrades] = useState<Record<string, boolean>>({});

  return (
    <div className="bg-white pb-20">
      {data.terms.map((term) => (
        <div key={term.term}>
          {/* TERM HEADER */}
          <div className="px-4 py-2 text-[14px] font-medium text-primary">
            {term.term.toUpperCase()}
          </div>

          {term.current.map((grade) => {
            const isOpen = openGrades[grade.id];

            return (
              <div key={grade.id} className="border-b border-divider">
                <button
                  onClick={() =>
                    setOpenGrades((s) => ({
                      ...s,
                      [grade.id]: !s[grade.id],
                    }))
                  }
                  className="w-full px-4 py-3 flex items-center gap-3"
                >
                  <GradeBubble value={grade.value} />

                  <div className="flex-1 text-left">
                    <div className="text-[15px] font-medium">
                      Текуща оценка
                    </div>
                  </div>

                  {isOpen ? (
                    <ChevronUpIcon className="w-5 h-5 text-textMuted" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-textMuted" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-3 text-[13px] text-textSecondary">
                    <div>Оценка: {grade.value}.00</div>
                    <div>Предмет: {data.subject}</div>
                    <div>Срок: {term.term}</div>
                  </div>
                )}
              </div>
            );
          })}

          {/* TERM GRADE */}
          {term.termGrade && (
            <div className="px-4 py-3 border-b border-divider flex justify-between items-center bg-appBg">
              <span className="text-[14px] text-textSecondary">
                Срочна оценка
              </span>
              <GradeBubble value={term.termGrade} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
