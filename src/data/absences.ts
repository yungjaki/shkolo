import type { Term } from "./grades";

export type AbsenceType = "Извинено" | "Неизвинено" | "Закъснение";

export type Absence = {
  subject: string;
  date: string;
  type: AbsenceType;
};

export type SubjectAbsences = {
  subject: string;
  late: number;       // Закъс.
  unexcused: number;  // Неваж.
  excused: number;    // Уваж.
};

// Individual absence entries (kept for detail views if needed)
export const absencesByTerm: Record<Term, Absence[]> = {
  "Първи срок": [],
  "Втори срок": [],
};

// Per-subject summary data matching the screenshots exactly
export const absenceSummary: SubjectAbsences[] = [
  { subject: "ОБЩО",                                                              late: 2,  unexcused: 8,  excused: 182 },
  { subject: "Български език и литература",                                       late: 1,  unexcused: 0,  excused: 13  },
  { subject: "Немски език",                                                       late: 0,  unexcused: 0,  excused: 2   },
  { subject: "Математика",                                                        late: 0,  unexcused: 1,  excused: 13  },
  { subject: "Гражданско образование",                                            late: 0,  unexcused: 0,  excused: 7   },
  { subject: "Физическо възпитание и спорт",                                      late: 0,  unexcused: 0,  excused: 10  },
  { subject: "Чужд език по професията (ОбПП)",                                    late: 0,  unexcused: 1,  excused: 6   },
  { subject: "Бази данни - практика (ИУЧ - ОтПП)",                               late: 0,  unexcused: 2,  excused: 9   },
  { subject: "Обектно-ориентирано програмиране - практика (ИУЧ - ОтПП)",         late: 0,  unexcused: 1,  excused: 11  },
  { subject: "Разработка на софтуер - практика (ИУЧ - ОтПП)",                    late: 0,  unexcused: 0,  excused: 17  },
  { subject: "Бази данни - теория (ИУЧ - ОтПП)",                                 late: 1,  unexcused: 1,  excused: 5   },
  { subject: "Обектно-ориентирано програмиране - теория (ИУЧ - ОтПП)",           late: 0,  unexcused: 0,  excused: 14  },
  { subject: "Разработка на софтуер - теория (ИУЧ - ОтПП)",                      late: 0,  unexcused: 0,  excused: 18  },
  { subject: "Конкурентно програмиране - практика (ИУЧ - СПП)",                  late: 0,  unexcused: 0,  excused: 10  },
  { subject: "Математически основи на програмирането - практика (ИУЧ - СПП)",    late: 0,  unexcused: 0,  excused: 2   },
  { subject: "Операционни системи - практика (ИУЧ - СПП)",                       late: 0,  unexcused: 0,  excused: 5   },
  { subject: "Програмиране за вградени системи - практика (ИУЧ - СПП)",          late: 0,  unexcused: 0,  excused: 1   },
  { subject: "Производствена практика (ИУЧ - СПП)",                              late: 0,  unexcused: 0,  excused: 0   },
  { subject: "Конкурентно програмиране - теория (ИУЧ - СПП)",                    late: 0,  unexcused: 0,  excused: 9   },
  { subject: "Математически основи на програмирането - теория (ИУЧ - СПП)",      late: 0,  unexcused: 1,  excused: 5   },
  { subject: "Операционни системи - теория (ИУЧ - СПП)",                         late: 0,  unexcused: 0,  excused: 8   },
  { subject: "Програмиране за вградени системи - теория (ИУЧ - СПП)",            late: 0,  unexcused: 0,  excused: 2   },
  { subject: "Технология на софтуерната разработка (ИУЧ - РПП)",                 late: 0,  unexcused: 1,  excused: 6   },
  { subject: "Спортни дейности (футбол) (...)",                                   late: 0,  unexcused: 0,  excused: 5   },
  { subject: "Безопасност на движението (...)",                                   late: 0,  unexcused: 0,  excused: 1   },
  { subject: "Час на класа (...)",                                                late: 0,  unexcused: 0,  excused: 3   },
  { subject: "Гражданско образование (...)",                                      late: 0,  unexcused: 0,  excused: 0   },
];