import { gradeColor } from "../utils/gradeColor";

export default function GradeBubble({ value }: { value: number }) {
  return (
    <div
      className={`w-[34px] h-[34px] rounded-full flex items-center justify-center text-white text-[14px] font-semibold ${gradeColor(
        value
      )}`}
    >
      {value}
    </div>
  );
}
