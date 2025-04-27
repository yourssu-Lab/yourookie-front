import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import {
  StyledCalendarCell,
  StyledCalendarGrid,
  StyledCalendarWrapper,
  StyledHr,
  StyledWeekDay,
  StyledWeekDaysGrid,
} from './ReservationCalendar.style.ts';

interface CalendarDate {
  date: Date;
  day: number;
  isNextMonth: boolean;
}

interface ReservationCalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

export const ReservationCalendar = ({ selectedDate, onDateSelect }: ReservationCalendarProps) => {
  const [fixedDates, setFixedDates] = useState<CalendarDate[]>([]);
  const weekDays: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    const initialDates = calculateInitialDates();
    setFixedDates(initialDates);
  }, []);

  const calculateInitialDates = () => {
    const today = dayjs();
    const dates: CalendarDate[] = [];

    // 오늘부터 시작하여 28일 분량의 날짜를 생성
    for (let i = 0; i < 28; i++) {
      const currentDate = today.add(i, 'day');
      dates.push({
        date: currentDate.toDate(),
        day: currentDate.date(),
        isNextMonth: currentDate.month() !== today.month(),
      });
    }

    // 첫 번째 날짜의 요일에 맞춰 빈 셀 추가
    const firstDayIndex = dates[0].date.getDay();
    const emptyDates = Array(firstDayIndex)
      .fill(null)
      .map((_, index) => {
        const emptyDate = today.subtract(firstDayIndex - index, 'day');
        return {
          date: emptyDate.toDate(),
          day: emptyDate.date(),
          isNextMonth: false,
        };
      });

    return [...emptyDates, ...dates].slice(0, 28);
  };

  const handleDateClick = (date: Date) => {
    onDateSelect(dayjs(date).startOf('day').toDate());
  };

  const renderCalendarCells = () => {
    return fixedDates.map((dateObj, index) => (
      <StyledCalendarCell
        key={`date-${index}`}
        $isSelected={dayjs(dateObj.date).isSame(selectedDate, 'day')}
        onClick={() => handleDateClick(dateObj.date)}
      >
        {dateObj.day}
      </StyledCalendarCell>
    ));
  };

  return (
    <StyledCalendarWrapper>
      <StyledWeekDaysGrid>
        {weekDays.map((day) => (
          <StyledWeekDay key={day}>{day}</StyledWeekDay>
        ))}
      </StyledWeekDaysGrid>
      <StyledHr />
      <StyledCalendarGrid>{renderCalendarCells()}</StyledCalendarGrid>
    </StyledCalendarWrapper>
  );
};
