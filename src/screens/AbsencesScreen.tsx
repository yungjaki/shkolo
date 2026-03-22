import { absenceSummary } from "../data/absences";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// Reusable badge — grey for 0, coloured for non-zero
function Badge({
  value,
  color,
}: {
  value: number;
  color: "yellow" | "red" | "green" | "grey";
}) {
  const base = "min-w-[28px] h-7 rounded-full flex items-center justify-center text-[13px] font-semibold px-1";
  const colors = {
    yellow: "bg-[#F5A623] text-white",
    red:    "bg-[#E74C3C] text-white",
    green:  "bg-[#27AE60] text-white",
    grey:   "bg-[#E0E0E0] text-[#9E9E9E]",
  };
  return (
    <span className={`${base} ${value === 0 ? colors.grey : colors[color]}`}>
      {value}
    </span>
  );
}

function AbsenceSummaryRow({
  subject,
  late,
  unexcused,
  excused,
  bold,
}: {
  subject: string;
  late: number;
  unexcused: number;
  excused: number;
  bold?: boolean;
}) {
  return (
    <div className="px-4 py-3 border-b border-divider">
      {/* Subject name with book icon */}
      <div className="flex items-start gap-2 mb-2">
        <span className="text-[17px] leading-none mt-0.5">📖</span>
        <span className={`text-[15px] leading-snug ${bold ? "font-bold" : "font-semibold"} text-textPrimary`}>
          {subject}
        </span>
      </div>
      {/* Counts row */}
      <div className="flex items-center gap-4 pl-7">
        <span className="text-[13px] text-textMuted">Закъс.</span>
        <Badge value={late} color="yellow" />
        <span className="text-[13px] text-textMuted">Неваж.</span>
        <Badge value={unexcused} color="red" />
        <span className="text-[13px] text-textMuted">Уваж.</span>
        <Badge value={excused} color="green" />
      </div>
    </div>
  );
}

export default function AbsencesScreen() {
  return (
    <>
      {/* "Бележки ›" header bar */}
      <button className="w-full bg-appBg px-4 py-3 flex items-center justify-between border-b border-divider">
        <span className="text-[15px] font-semibold text-appBlue">Бележки</span>
        <ChevronRightIcon className="w-5 h-5 text-textMuted" />
      </button>

      {/* Subject absence summary list */}
      <div className="bg-white pb-20">
        {absenceSummary.map((row) => (
          <AbsenceSummaryRow
            key={row.subject}
            subject={row.subject}
            late={row.late}
            unexcused={row.unexcused}
            excused={row.excused}
            bold={row.subject === "ОБЩО"}
          />
        ))}
      </div>
    </>
  );
}