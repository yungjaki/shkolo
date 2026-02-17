type Props = {
  name: string;
  teacher: string;
  count: number;
};

export default function SubjectItem({ name, teacher, count }: Props) {
  return (
    <div className="h-[72px] px-4 bg-white flex items-center justify-between border-b border-divider">
      <div className="leading-tight">
        <p className="text-[15px] font-medium text-textPrimary">
          {name}
        </p>
        <p className="text-[13px] text-textSecondary mt-1">
          {teacher}
        </p>
      </div>

      <div
        className={`min-w-[28px] h-[28px] rounded-full flex items-center justify-center text-[13px] font-semibold ${
          count === 0
            ? "bg-badgeYellow text-white"
            : "bg-badgeBlue text-white"
        }`}
      >
        {count}
      </div>
    </div>
  );
}
