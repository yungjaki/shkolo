import { useState } from "react";
import GradeBubble from "./GradeBubble";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function GradeRow({
  value,
  title,
  date,
  teacher,
  timestamp,
  subject,
}: {
  value: number;
  title: string;
  date: string;
  teacher?: string;
  timestamp?: string;
  subject?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <GradeBubble value={value} />
          <div className="text-left">
            <div className="text-[15px] font-medium">
              {title}
            </div>
            <div className="text-[13px] text-textMuted">
              {date}
            </div>
          </div>
        </div>

        <ChevronDownIcon
          className={`w-5 h-5 text-textMuted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-4 pb-3 text-[13px] text-textSecondary space-y-1">
          <div>Оценка: {value}.00</div>
          {teacher && <div>От: {teacher}</div>}
          {timestamp && <div>На: {timestamp}</div>}
          {subject && <div>Предмет: {subject}</div>}
        </div>
      )}
    </div>
  );
}
