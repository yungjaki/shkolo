export type Term = "Първи срок" | "Втори срок";

export type GradeType =
  | "Устно изпитване"
  | "Практическо изпитване";

export type Grade = {
  id: string;
  value: number;
  type: GradeType;
  date: string; // dd.mm.yyyy
  teacher: string;
  createdAt: string;
};

export type SubjectGrades = {
  subject: string;
  yearlyGrade?: number;
  terms: {
    term: Term;
    grades: Grade[];
  }[];
};

export const gradesData: SubjectGrades[] = [
  {
    subject: "Програмиране за вградени системи - практика (ИУЧ - СПП)",
    yearlyGrade: 6,
    terms: [
      {
        term: "Втори срок",
        grades: [
          {
            id: "v1",
            value: 6,
            type: "Устно изпитване",
            date: "09.02.2026",
            teacher: "Ивайло Иванов",
            createdAt: "09.02.2026 12:27:49",
          },
        ],
      },
      {
        term: "Първи срок",
        grades: [
          {
            id: "p1",
            value: 6,
            type: "Практическо изпитване",
            date: "26.01.2026",
            teacher: "Ивайло Иванов",
            createdAt: "26.01.2026 11:12:03",
          },
          {
            id: "p2",
            value: 6,
            type: "Практическо изпитване",
            date: "08.12.2025",
            teacher: "Ивайло Иванов",
            createdAt: "08.12.2025 10:01:55",
          },
          {
            id: "p3",
            value: 6,
            type: "Практическо изпитване",
            date: "13.10.2025",
            teacher: "Ивайло Иванов",
            createdAt: "13.10.2025 09:44:18",
          },
        ],
      },
    ],
  },
];
