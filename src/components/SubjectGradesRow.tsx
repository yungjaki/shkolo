import { BookOpenIcon } from "@heroicons/react/24/outline";
import GradeBubble from "./GradeBubble";

type Props = {
  subject: string;
  grades: number[];
};

export default function SubjectGradesRow({ subject, grades }: Props) {
  const hasGrades = grades.length > 0;

  return (
    <div className="px-4 h-[78px] flex flex-col justify-center border-b border-divider bg-white">
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
            {grades.map((g, i) => (
              <GradeBubble key={i} value={g} />
            ))}
          </div>
        ) : (
          <span className="text-[14px] text-textMuted">
            Няма оценки
          </span>
        )}
      </div>
    </div>
  );
}
