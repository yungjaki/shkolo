import { ChevronDownIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-appBlue">
      {/* iOS status bar spacer */}
      <div className="h-[44px]" />

      {/* Header content */}
      <div className="h-[44px] px-4 flex items-center justify-between">
        {/* Left: Class selector */}
        <div className="flex items-center gap-1">
          <span className="text-[15px] font-semibold text-white">
            ДД1
          </span>
          <ChevronDownIcon className="w-4 h-4 text-white" />
        </div>

        {/* Center: Icon + title */}
        <div className="flex items-center gap-2">
          <BookOpenIcon className="w-[18px] h-[18px] text-white" />
          <span className="text-[16px] font-semibold text-white">
            Дневник
          </span>
        </div>

        {/* Right: spacer for symmetry */}
        <div className="w-[44px]" />
      </div>
    </header>
  );
}
