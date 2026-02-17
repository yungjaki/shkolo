import type { Lesson } from "../data/schedule";

export default function LessonCard({
  time,
  subject,
  room,
  teacher,
}: Lesson) {
  return (
    <div className="px-4 py-3 border-b border-divider">
      <div className="text-sm font-medium text-textSecondary mb-1">
        {time}
      </div>

      <div className="text-[15px] font-medium text-textPrimary">
        {subject}
      </div>

      <div className="text-[13px] text-textSecondary">
        Каб. {room} · {teacher}
      </div>
    </div>
  );
}
