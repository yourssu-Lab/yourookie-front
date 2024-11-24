import { createLazyFileRoute } from '@tanstack/react-router'
import {useState} from "react";
import dayjs from "dayjs";
import {
  StyledButtonWrapper,
  StyledContainer, StyledDate, StyledDateTimeBox,
  StyledHr,
  StyledImageSection,
  StyledInfoSection,
  StyledPasswordSection, StyledQueryButton,
  StyledTitle
} from "./-index.style";
import {ReservationCalendar} from "../-components/ReservationCalendar/ReservationCalendar";
import {ReservationStatusBar} from "../-components/ReservationStatusBar/ReservationStatusBar";
import MeetingRoomResult from "../-components/MeetingRoomResult/MeetingRoomResult";
import {GetMeetingRoomsParams} from "../../api/getMeetingRooms";

export const Route = createLazyFileRoute('/meetingRooms/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<{
    start: { hour: number; minute: number };
    end: { hour: number; minute: number };
  } | null>(null);

  const [meetingRoomResultModalOpen, setMeetingRoomResultModelOpen] = useState(false);
  const [meetingRoomParams, setMeetingRoomParams] = useState<GetMeetingRoomsParams | null>(null);

  const onSubmit = () => {
    if (!selectedDate || !selectedTime) {
      alert("날짜와 시간을 선택해주세요");
      return;
    }

    const startDateTime = dayjs(selectedDate)
        .hour(selectedTime.start.hour)
        .minute(selectedTime.start.minute)
        .format("YYYY-MM-DDTHH:mm:00");

    const endDateTime = dayjs(selectedDate)
        .hour(selectedTime.end.hour)
        .minute(selectedTime.end.minute)
        .format("YYYY-MM-DDTHH:mm:00");

    setMeetingRoomParams({startDateTime, endDateTime});
    setMeetingRoomResultModelOpen(true);
  };

  const formatDate = (date: Date) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];

    return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
  };

  const formatTime = (time: {
    start: { hour: number; minute: number };
    end: { hour: number; minute: number };
  }) => {
    const formatHour = (time: { hour: number; minute: number }) => {
      if (time.minute === 60) {
        return `${time.hour + 1}:00`;
      }
      return `${time.hour}:${time.minute === 30 ? "30" : "00"}`;
    };

    const startMinutes = time.start.hour * 60 + time.start.minute;
    let endMinutes = time.end.hour * 60 + time.end.minute;

    if (time.end.minute === 60) {
      endMinutes = time.end.hour * 60 + 60;
    }

    const diffMinutes = endMinutes - startMinutes;
    const diffHours = Math.floor(diffMinutes / 60);
    const remainingMinutes = diffMinutes % 60;

    let duration = "";
    if (diffHours > 0 && remainingMinutes > 0) {
      duration = `${diffHours}시간 ${remainingMinutes}분`;
    } else if (diffHours > 0) {
      duration = `${diffHours}시간`;
    } else {
      duration = `${remainingMinutes}분`;
    }

    return `${formatHour(time.start)} ~ ${formatHour(time.end)} (${duration})`;
  };

  const handleTimeSelect = (slots: { hour: number; minute: number }[]) => {
    if (slots.length > 0) {
      const sortedSlots = [...slots].sort(
          (a, b) => a.hour * 60 + a.minute - (b.hour * 60 + b.minute)
      );

      const lastSlot = sortedSlots[sortedSlots.length - 1];
      let endHour = lastSlot.hour;
      let endMinute = lastSlot.minute + 30;

      if (endMinute === 60) {
        endHour += 1;
        endMinute = 0;
      }

      setSelectedTime({
        start: {
          hour: sortedSlots[0].hour,
          minute: sortedSlots[0].minute,
        },
        end: {
          hour: endHour,
          minute: endMinute,
        },
      });
    } else {
      setSelectedTime(null);
    }
  };

  return (
      <StyledContainer>
        <StyledInfoSection>
          <StyledTitle>교내 회의실 예약</StyledTitle>
          <StyledHr />
          <StyledButtonWrapper>
            <StyledImageSection>
              <StyledPasswordSection>
                <StyledDateTimeBox>
                  {selectedDate ? formatDate(selectedDate) : "날짜를 선택해주세요"}
                </StyledDateTimeBox>
              </StyledPasswordSection>
              <StyledPasswordSection>
                <StyledDateTimeBox>
                  {selectedTime ? formatTime(selectedTime) : "시간을 선택해주세요"}
                </StyledDateTimeBox>
              </StyledPasswordSection>
            </StyledImageSection>
            <StyledQueryButton type="button" onClick={onSubmit}>조회</StyledQueryButton>
            {
              meetingRoomParams && <MeetingRoomResult
                  open={meetingRoomResultModalOpen}
                  closeModal={() => setMeetingRoomResultModelOpen(false)}
                  meetingRoomParams={meetingRoomParams ?? {startDateTime: '', endDateTime: ''}}
              />
            }


          </StyledButtonWrapper>

          <StyledDate>날짜 및 시간 선택</StyledDate>
          <ReservationCalendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
          />
          <div style={{height: '20px'}}></div>
          <ReservationStatusBar reservations={[]} openingTime="" closingTime="" type="meetingRoom" onTimeSelect={handleTimeSelect} />
        </StyledInfoSection>
      </StyledContainer>
  );
}
