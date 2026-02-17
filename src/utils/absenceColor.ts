import type { AbsenceType } from "../data/absences";

export function absenceColor(type: AbsenceType) {
  switch (type) {
    case "Извинено":
      return "bg-green-500";
    case "Закъснение":
      return "bg-orange-400";
    case "Неизвинено":
      return "bg-red-500";
  }
}
