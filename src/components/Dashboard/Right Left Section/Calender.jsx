import { useState } from "react";
import {
  format,
  startOfMonth,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  startOfWeek,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const header = () => {
    return (
      <div className="flex items-center justify-between mb-2">
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  };

  const daysOfWeek = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 text-center text-gray-500 text-sm mb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
    );
  };

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const startDate = startOfWeek(monthStart);
    let day = startDate;
    const rows = [];

    for (let week = 0; week < 6; week++) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isToday = isSameDay(day, new Date());
        const isSelected = isSameDay(day, selectedDate);
        days.push(
          <div
            key={day}
            className={`lg:p-1 md:p-[2px] text-center rounded-full cursor-pointer transition-all ${
              !isSameMonth(day, monthStart)
                ? "text-gray-300"
                : isSelected
                ? "bg-blue-500 text-white"
                : isToday
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-blue-100"
            }`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1" key={week}>
          {days}
        </div>
      );
    }

    return <div className="space-y-1">{rows}</div>;
  };

  return (
    <div className="max-w-md mx-auto lg:p-4 md:p-2 sm:p-3 p-3 shadow-md rounded-2xl bg-white">
      {header()}
      {daysOfWeek()}
      {cells()}
    </div>
  );
}
