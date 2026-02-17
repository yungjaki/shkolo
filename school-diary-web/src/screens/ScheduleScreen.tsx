import { useState } from "react";
import Header from "../components/Header";
import LessonCard from "../components/LessonCard";
import { scheduleByDay } from "../data/schedule";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const days = ["Понеделник", "Вторник", "Сряда"];

export default function ScheduleScreen() {
  const [dayIndex, setDayIndex] = useState(0);
  const day = days[dayIndex];
  const lessons = scheduleByDay[day];

  return (
    <>
      <Header />

      {/* Day selector */}
      <div className="bg-appBg px-4 py-3 flex items-center justify-between">
        <button
          disabled={dayIndex === 0}
          onClick={() => setDayIndex((i) => i - 1)}
        >
          <ChevronLeftIcon className="w-5 h-5 text-textSecondary" />
        </button>

        <span className="text-sm font-medium text-textPrimary">
          {day}
        </span>

        <button
          disabled={dayIndex === days.length - 1}
          onClick={() => setDayIndex((i) => i + 1)}
        >
          <ChevronRightIcon className="w-5 h-5 text-textSecondary" />
        </button>
      </div>

      {/* Lessons */}
      <main className="bg-white pb-20">
        {lessons.length === 0 ? (
          <div className="p-6 text-center text-textSecondary">
            Няма учебни часове
          </div>
        ) : (
          lessons.map((lesson, i) => (
            <LessonCard key={i} {...lesson} />
          ))
        )}
      </main>
    </>
  );
}
