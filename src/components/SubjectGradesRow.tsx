import { BookOpenIcon } from "@heroicons/react/24/outline";
import GradeBubble from "./GradeBubble";
import type { Grade } from "../data/grades";


type Props = {
  subject: string;
  grades: Grade[];
  onClick?: () => void;
};

export default function SubjectGradesRow({
  subject,
  grades,
  onClick,
}: Props) {
  const hasGrades = grades.length > 0;

  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 h-[78px] flex flex-col justify-center border-b border-divider bg-white"
    >
      {/* Subject title */}
      <div className="flex items-center gap-2">
        <BookOpenIcon className="w-[18px] h-[18px] text-textMuted" />
        <span className="text-[16px] font-semibold text-textPrimary leading-tight">
          {subject}
        </span>
      </div>

      {/* Grades or empty text */}
      <div className="mt-1 ml-[26px]">
        {hasGrades ? (
          <div className="flex gap-2 flex-wrap">
{grades.map((g) => (
  <GradeBubble key={g.id} value={g.value} />
))}
          </div>
        ) : (
          <span className="text-[14px] text-textMuted">
            Няма оценки
          </span>
        )}
      </div>
    </button>
  );
}
