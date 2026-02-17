import {
  ExclamationCircleIcon,
  PencilSquareIcon,
  AcademicCapIcon,
  ClockIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

type Tab =
  | "Отсъствия"
  | "Оценки"
  | "Отзиви"
  | "Разписание"
  | "Домашна р.";

const tabs: {
  key: Tab;
  label: string;
  icon: React.ElementType;
}[] = [
  { key: "Отсъствия", label: "Отсъствия", icon: ExclamationCircleIcon },
  { key: "Оценки", label: "Оценки", icon: PencilSquareIcon },
  { key: "Отзиви", label: "Отзиви", icon: AcademicCapIcon },
  { key: "Разписание", label: "Разписание", icon: ClockIcon },
  { key: "Домашна р.", label: "Домашна р.", icon: BookOpenIcon },
];

export default function UpperTabs({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  return (
    <div className="bg-appBlue">
      <div className="flex h-[52px] items-end overflow-x-auto no-scrollbar px-2">
        {tabs.map(({ key, label, icon: Icon }) => {
          const isActive = key === active;

          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className="relative flex flex-col items-center justify-end px-3 pb-[6px] whitespace-nowrap"
            >
              {/* Icon */}
              <Icon
                className={`w-[18px] h-[18px] mb-[2px] ${
                  isActive ? "text-white" : "text-white/65"
                }`}
              />

              {/* Label */}
              <span
                className={`text-[13px] leading-none ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-white/65 font-normal"
                }`}
              >
                {label}
              </span>

              {/* Underline */}
              {isActive && (
                <span className="absolute left-3 right-3 bottom-0 h-[2px] bg-white rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
