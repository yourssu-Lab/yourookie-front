import { useState } from "react";
import {
  StyledLegend,
  StyledLegendDot,
  StyledLegendItem,
  StyledReservationHeader,
  StyledReservationTitle,
  StyledReservationWrapper,
  StyledTimeGroup,
  StyledTimeLabel,
  StyledTimeline,
  StyledTimeSlot,
  StyledTimeSlotWrapper,
} from "./ReservationStatusBar.style";

interface Reservation {
  id: number;
  startDateTime: string;
  endDateTime: string;
}

interface TimeSlot {
  hour: number;
  minute: number;
  status: "available" | "reserved" | "selected";
}

const mockData: Reservation[] = [
  {
    id: 1,
    startDateTime: "2024-11-23T09:00:00",
    endDateTime: "2024-11-23T11:00:00",
  },
];

const generateTimeSlots = (
  startHour: number,
  endHour: number,
  reservations: Reservation[]
) => {
  const slots: TimeSlot[] = [];

  for (let hour = startHour; hour <= endHour; hour++) {
    for (const minute of [0, 30]) {
      const currentTime = hour * 60 + minute;

      const reserved = reservations.some((res) => {
        const startTime =
          new Date(res.startDateTime).getHours() * 60 +
          new Date(res.startDateTime).getMinutes();
        const endTime =
          new Date(res.endDateTime).getHours() * 60 +
          new Date(res.endDateTime).getMinutes();
        return currentTime >= startTime && currentTime < endTime;
      });

      slots.push({
        hour,
        minute,
        status: reserved ? "reserved" : "available",
      });
    }
  }
  return slots;
};

interface ReservationStatusBarProps {
  onTimeSelect: (slots: { hour: number; minute: number }[]) => void;
}

export const ReservationStatusBar = ({
  onTimeSelect,
}: ReservationStatusBarProps) => {
  const [selectedSlots, setSelectedSlots] = useState<
    { hour: number; minute: number }[]
  >([]);
  const timeSlots = generateTimeSlots(6, 21, mockData);

  const handleSelect = (hour: number, minute: number) => {
    const slot = timeSlots.find(
      (slot) => slot.hour === hour && slot.minute === minute
    );

    if (slot?.status !== "reserved") {
      const newSelectedSlots = selectedSlots.some(
        (s) => s.hour === hour && s.minute === minute
      )
        ? selectedSlots.filter((s) => !(s.hour === hour && s.minute === minute))
        : [...selectedSlots, { hour, minute }];

      setSelectedSlots(newSelectedSlots);
      onTimeSelect(newSelectedSlots);
    }
  };

  const isSelected = (hour: number, minute: number) => {
    return selectedSlots.some(
      (slot) => slot.hour === hour && slot.minute === minute
    );
  };

  return (
    <StyledReservationWrapper>
      <StyledReservationHeader>
        <StyledReservationTitle>예약 현황 조회</StyledReservationTitle>
        <StyledLegend>
          <StyledLegendItem>
            <StyledLegendDot $status="available" />
            예약 가능 시간
          </StyledLegendItem>
          <StyledLegendItem>
            <StyledLegendDot $status="reserved" />
            이미 선택된 시간
          </StyledLegendItem>
          <StyledLegendItem>
            <StyledLegendDot $status="selected" />
            선택한 시간
          </StyledLegendItem>
        </StyledLegend>
      </StyledReservationHeader>
      <StyledTimeline>
        {Array.from(new Set(timeSlots.map((slot) => slot.hour))).map((hour) => (
          <StyledTimeGroup key={hour}>
            <StyledTimeSlotWrapper>
              {[0, 30].map((minute) => (
                <StyledTimeSlot
                  key={`${hour}-${minute}`}
                  $status={
                    isSelected(hour, minute)
                      ? "selected"
                      : timeSlots.find(
                          (slot) => slot.hour === hour && slot.minute === minute
                        )?.status || "available"
                  }
                  onClick={() => handleSelect(hour, minute)}
                />
              ))}
            </StyledTimeSlotWrapper>
            <StyledTimeLabel>{hour}</StyledTimeLabel>
          </StyledTimeGroup>
        ))}
      </StyledTimeline>
    </StyledReservationWrapper>
  );
};
