import {
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

type Screen = "Дневник" | "Разписание" | "Още";

export default function BottomNav({
  active,
  onChange,
}: {
  active: Screen;
  onChange: (s: Screen) => void;
}) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-[56px] bg-white border-t border-divider">
      <div className="flex h-full justify-around items-center">
        <NavItem
          icon={BookOpenIcon}
          label="Дневник"
          active={active === "Дневник"}
          onClick={() => onChange("Дневник")}
        />

        <NavItem
          icon={ChatBubbleLeftRightIcon}
          label="Дискусии"
        />

        <NavItem
          icon={BellIcon}
          label="Известия"
          badge="9+"
        />

        <NavItem
          icon={Bars3Icon}
          label="Още"
          active={active === "Още"}
          onClick={() => onChange("Още")}
        />
      </div>
    </nav>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
  badge,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center justify-center w-[60px]"
    >
      {/* Icon */}
      <div className="relative">
        <Icon
          className={`w-[22px] h-[22px] ${
            active ? "text-appBlue" : "text-textMuted"
          }`}
        />

        {/* Badge */}
        {badge && (
          <span className="absolute -top-1 -right-2 min-w-[18px] h-[18px] px-1 bg-red-500 text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
            {badge}
          </span>
        )}
      </div>

      {/* Label */}
      <span
        className={`mt-1 text-[11px] ${
          active ? "text-appBlue" : "text-textMuted"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
