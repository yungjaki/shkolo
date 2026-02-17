import type { Term } from "./grades";

export type AbsenceType = "Извинено" | "Неизвинено" | "Закъснение";

export type Absence = {
  subject: string;
  date: string;
  type: AbsenceType;
};

export const absencesByTerm: Record<Term, Absence[]> = {
  "Първи срок": [
    {
      subject: "Математика",
      date: "12.10.2025",
      type: "Неизвинено",
    },
    {
      subject: "Немски език",
      date: "18.10.2025",
      type: "Закъснение",
    },
    {
      subject: "Български език и литература",
      date: "02.11.2025",
      type: "Извинено",
    },
  ],
  "Втори срок": [
    {
      subject: "Математика",
      date: "14.03.2026",
      type: "Извинено",
    },
  ],
};
