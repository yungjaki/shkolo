export function gradeColor(grade: number) {
  switch (grade) {
    case 6:
      return "bg-green-500";
    case 5:
      return "bg-blue-500";
    case 4:
      return "bg-yellow-400";
    case 3:
      return "bg-orange-500";
    case 2:
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
}
