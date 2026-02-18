import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import GradeRow from "../components/GradeRow";

export default function SubjectDetailsScreen({
  subject,
  onBack,
}: {
  subject: string;
  onBack: () => void;
}) {
  return (
    <>
      {/* Header */}
      <header className="bg-appBlue">
        <div className="h-[44px]" />
        <div className="h-[44px] px-4 flex items-center gap-2">
          <button onClick={onBack}>
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          <span className="text-[15px] font-semibold text-white truncate">
            {subject}
          </span>
        </div>
      </header>

      {/* Content */}
      <div className="bg-white">
        {/* Second term */}
        <Section title="ВТОРИ СРОК">
          <GradeRow
            value={6}
            title="Активно Участие"
            date="18.02.2026"
            teacher="Марина Петрова"
            timestamp="18.02.2026 08:16:29"
            subject={subject}
          />
        </Section>

        {/* First term */}
        <Section title="ПЪРВИ СРОК">
          <GradeRow value={6} title="Практическо изпитване" date="26.01.2026" />
          <GradeRow value={6} title="Практическо изпитване" date="08.12.2025" />
          <GradeRow value={6} title="Практическо изпитване" date="13.10.2025" />
        </Section>
      </div>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-appBg px-4 py-2 text-[13px] font-semibold text-appBlue">
        {title}
      </div>
      {children}
    </>
  );
}
