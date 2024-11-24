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
  status: "available" | "reserved" | "selected" | "disabled";
}

interface ReservationStatusBarProps {
  onTimeSelect: (slots: { hour: number; minute: number }[]) => void;
  reservations: Reservation[];
  openingTime: string;
  closingTime: string;
}

export const ReservationStatusBar = ({
  onTimeSelect,
  reservations,
  openingTime,
  closingTime,
}: ReservationStatusBarProps) => {
  const [selectedSlots, setSelectedSlots] = useState<
    { hour: number; minute: number }[]
  >([]);
  const [selectionStart, setSelectionStart] = useState<{
    hour: number;
    minute: number;
  } | null>(null);

  const openTime = {
    hour: parseInt(openingTime.split(":")[0]),
    minute: parseInt(openingTime.split(":")[1]),
  };
  const closeTime = {
    hour: parseInt(closingTime.split(":")[0]),
    minute: parseInt(closingTime.split(":")[1]),
  };

  const generateTimeSlots = (
    startHour: number,
    endHour: number,
    reservations: Reservation[]
  ) => {
    const slots: TimeSlot[] = [];

    for (let hour = startHour; hour <= endHour; hour++) {
      for (const minute of [0, 30]) {
        const currentTime = hour * 60 + minute;
        const openMinutes = openTime.hour * 60 + openTime.minute;
        const closeMinutes = closeTime.hour * 60 + closeTime.minute;

        // 운영 시간 외의 시간은 비활성화
        if (currentTime < openMinutes || currentTime >= closeMinutes) {
          slots.push({
            hour,
            minute,
            status: "disabled", // 새로운 상태 추가
          });
          continue;
        }

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

  const timeSlots = generateTimeSlots(6, 21, reservations);

  const handleSelect = (hour: number, minute: number) => {
    const slot = timeSlots.find(
      (slot) => slot.hour === hour && slot.minute === minute
    );

    if (slot?.status === "reserved" || slot?.status === "disabled") return;

    if (!selectionStart) {
      setSelectionStart({ hour, minute });
      setSelectedSlots([{ hour, minute }]);
      onTimeSelect([{ hour, minute }]);
    } else {
      const startTime = selectionStart.hour * 60 + selectionStart.minute;
      const endTime = hour * 60 + minute;

      const [rangeStart, rangeEnd] =
        startTime < endTime ? [startTime, endTime] : [endTime, startTime];

      const newSelectedSlots = [];
      for (
        let currentTime = rangeStart;
        currentTime <= rangeEnd;
        currentTime += 30
      ) {
        const slotHour = Math.floor(currentTime / 60);
        const slotMinute = currentTime % 60;

        const isReserved = timeSlots.some(
          (slot) =>
            slot.hour === slotHour &&
            slot.minute === slotMinute &&
            slot.status === "reserved"
        );

        if (!isReserved) {
          newSelectedSlots.push({ hour: slotHour, minute: slotMinute });
        }
      }

      setSelectedSlots(newSelectedSlots);
      onTimeSelect(newSelectedSlots);
      setSelectionStart(null);
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
                  $isSelectionStart={
                    selectionStart?.hour === hour &&
                    selectionStart?.minute === minute
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
