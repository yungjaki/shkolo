import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import GradeBubble from "../components/GradeBubble";
import type { SubjectGrades } from "../data/grades";


export default function SubjectDetailsScreen({
  data,
}: {
  data: SubjectGrades;
}) {
  const [openGrades, setOpenGrades] = useState<Record<string, boolean>>({
    v1: true,
  });

  return (
    <div className="bg-white pb-20">
      {/* YEARLY GRADE */}
      <div className="px-4 py-3 border-b border-divider text-[14px] text-textSecondary">
        ГОДИШНА ОЦЕНКА
      </div>

      {data.yearlyGrade && (
        <div className="px-4 py-3 border-b border-divider flex justify-end">
          <GradeBubble value={data.yearlyGrade} />
        </div>
      )}

      {data.terms.map((term) => (
        <div key={term.term}>
          {/* TERM HEADER */}
          <div className="px-4 py-2 text-[14px] font-medium text-primary">
            {term.term.toUpperCase()}
          </div>

          {term.grades.map((grade) => {
            const isOpen = openGrades[grade.id];

            return (
              <div key={grade.id} className="border-b border-divider">
                {/* GRADE ROW */}
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
                      {grade.type}
                    </div>
                    <div className="text-[13px] text-textMuted flex items-center gap-1">
                      📅 {grade.date}
                    </div>
                  </div>

                  {isOpen ? (
                    <ChevronUpIcon className="w-5 h-5 text-textMuted" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-textMuted" />
                  )}
                </button>

                {/* DETAILS */}
                {isOpen && (
                  <div className="px-4 pb-3 text-[13px] text-textSecondary space-y-1">
                    <div>Оценка: {grade.value}.00</div>
                    <div>От: {grade.teacher}</div>
                    <div>На: {grade.createdAt}</div>
                    <div>Предмет: {data.subject}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
