import { gradeColor } from "../utils/gradeColor";

export default function GradeBubble({ value }: { value: number }) {
  return (
    <div
      className={`w-[32px] h-[32px] rounded-full
      flex items-center justify-center
      text-white text-[14px] font-semibold leading-none
      ${gradeColor(value)}`}
    >
      {value}
    </div>
  );
}
