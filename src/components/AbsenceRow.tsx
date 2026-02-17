import { absenceColor } from "../utils/absenceColor";
import type { Absence } from "../data/absences";

export default function AbsenceRow({
  subject,
  date,
  type,
}: Absence) {
  return (
    <div className="h-[60px] px-4 flex items-center justify-between border-b border-divider">
      <div>
        <p className="text-[15px] font-medium text-textPrimary">
          {subject}
        </p>
        <p className="text-[13px] text-textSecondary">
          {date}
        </p>
      </div>

      <div
        className={`px-3 py-1 rounded-full text-xs font-medium text-white ${absenceColor(
          type
        )}`}
      >
        {type}
      </div>
    </div>
  );
}
