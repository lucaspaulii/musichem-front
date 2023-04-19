import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarContainer({ setSelectedDate, bookedDates }) {
  const disabledDates = bookedDates.map(date => new Date(date)); //change to booked dates when there are bookings
  const now = new Date();

  return (
    <Calendar
      onClickDay={(value) => setSelectedDate(value)}
      tileDisabled={({ date }) =>
        disabledDates.some(
          (disabledDate) =>
            date.getFullYear() === disabledDate.getFullYear() &&
            date.getMonth() === disabledDate.getMonth() &&
            date.getDate() === disabledDate.getDate()
        ) ||
        (date.getFullYear() <= now.getFullYear() &&
          date.getMonth() <= now.getMonth() &&
          date.getDate() < now.getDate()) ||
        (date.getFullYear() <= now.getFullYear() &&
          date.getMonth() < now.getMonth()) ||
        date.getFullYear() < now.getFullYear()
      }
    />
  );
}
