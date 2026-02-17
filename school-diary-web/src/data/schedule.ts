export type Lesson = {
  time: string;
  subject: string;
  room: string;
  teacher: string;
};

export const scheduleByDay: Record<string, Lesson[]> = {
  "Понеделник": [
    {
      time: "08:00 – 08:45",
      subject: "Математика",
      room: "203",
      teacher: "Диана Бочукова",
    },
    {
      time: "08:55 – 09:40",
      subject: "Немски език",
      room: "105",
      teacher: "Антония Колешева",
    },
  ],
  "Вторник": [
    {
      time: "09:50 – 10:35",
      subject: "Български език и литература",
      room: "101",
      teacher: "Марина Петрова",
    },
  ],
  "Сряда": [],
};
