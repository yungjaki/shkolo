export type Term = "Първи срок" | "Втори срок";

export type Grade = {
  id: string;
  value: number;
};

export type TermData = {
  term: Term;
  current: Grade[];
  termGrade?: number;
};

export type SubjectGrades = {
  subject: string;
  terms: TermData[];
};

const g = (v: number, i: number): Grade => ({
  id: `${v}-${i}`,
  value: v,
});

export const gradesData: SubjectGrades[] = [
  {
    subject: "Български език и литература",
    terms: [
      {
        term: "Първи срок",
        current: [5, 4, 2, 2, 2, 3].map(g),
        termGrade: 3,
      },
            {
        term: "Втори срок",
        current: [6].map(g),
        termGrade: 0,
      },
    ],
  },
  {
    subject: "Немски език",
    terms: [
      {
        term: "Първи срок",
        current: [6, 4, 6].map(g),
        termGrade: 5,
      },
    ],
  },
  {
    subject: "Математика",
    terms: [
      {
        term: "Първи срок",
        current: [3, 2, 3, 3].map(g),
        termGrade: 3,
      },
            {
        term: "Втори срок",
        current: [6].map(g),
        termGrade: 0,
      },
    ],
  },
  {
    subject: "Гражданско образование",
    terms: [
      {
        term: "Първи срок",
        current: [5, 5].map(g),
        termGrade: 5,
      },
    ],
  },
  {
    subject: "Физическо възпитание и спорт",
    terms: [
      {
        term: "Първи срок",
        current: [6, 6, 6, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Чужд език по професията (ОбПП)",
    terms: [
      {
        term: "Първи срок",
        current: [4, 5, 4].map(g),
        termGrade: 4,
      },
    ],
  },
  {
    subject: "Бази данни - практика (ИУЧ - ОтПП)",
    terms: [
      {
        term: "Първи срок",
        current: [6, 6, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Обектно-ориентирано програмиране - практика (ИУЧ - ОтПП)",
    terms: [
      {
        term: "Първи срок",
        current: [6, 6, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Разработка на софтуер - практика (ИУЧ - ОтПП)",
    terms: [
      {
        term: "Първи срок",
        current: [6, 6, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Бази данни - теория (ИУЧ - ОтПП)",
    terms: [
      {
        term: "Първи срок",
        current: [6, 6, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Обектно-ориентирано програмиране - теория (ИУЧ - ОтПП)",
    terms: [
      {
        term: "Първи срок",
        current: [6, 6, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Разработка на софтуер - теория (ИУЧ - ОтПП)",
    terms: [
      {
        term: "Първи срок",
        current: [6, 6, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Конкурентно програмиране - практика (ИУЧ - СПП)",
    terms: [
      {
        term: "Първи срок",
        current: [5, 3].map(g),
        termGrade: 4,
      },
    ],
  },
  {
    subject: "Математически основи на програмирането - практика (ИУЧ - СПП)",
    terms: [
      {
        term: "Първи срок",
        current: [6, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Операционни системи - практика (ИУЧ - СПП)",
    terms: [
      {
        term: "Първи срок",
        current: [5, 6, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Програмиране за вградени системи - практика (ИУЧ - СПП)",
    terms: [
      {
        term: "Първи срок",
        current: [6, 6, 6].map(g),
        termGrade: 6,
      },
      {
        term: "Втори срок",
        current: [6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Производствена практика (ИУЧ - СПП)",
    terms: [],
  },
  {
    subject: "Конкурентно програмиране - теория (ИУЧ - СПП)",
    terms: [
      {
        term: "Първи срок",
        current: [5, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Математически основи на програмирането - теория (ИУЧ - СПП)",
    terms: [
      {
        term: "Първи срок",
        current: [3, 4].map(g),
        termGrade: 4,
      },
    ],
  },
  {
    subject: "Операционни системи - теория (ИУЧ - СПП)",
    terms: [
      {
        term: "Първи срок",
        current: [6, 6, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Програмиране за вградени системи - теория (ИУЧ - СПП)",
    terms: [
      {
        term: "Първи срок",
        current: [4, 6, 6].map(g),
        termGrade: 6,
      },
    ],
  },
  {
    subject: "Технология на софтуерната разработка (ИУЧ - РПП)",
    terms: [
      {
        term: "Първи срок",
        current: [5, 5].map(g),
        termGrade: 5,
      },
    ],
  },
  {
    subject: "Спортни дейности (футбол) (...)",
    terms: [],
  },
  {
    subject: "Безопасност на движението (...)",
    terms: [],
  },
  {
    subject: "Час на класа (...)",
    terms: [],
  },
  {
    subject: "Гражданско образование (...)",
    terms: [],
  },
];
