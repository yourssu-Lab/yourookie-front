import { createLazyFileRoute } from "@tanstack/react-router";
import logo from "../../assets/mockLogo.svg";

import { useState } from "react";
import { ReservationCalendar } from "../-components/ReservationCalendar/ReservationCalendar";
import { ReservationInfoCard } from "../-components/ReservationInfoCard/ReservationInfoCard";
import { ReservationStatusBar } from "../-components/ReservationStatusBar/ReservationStatusBar";
import {
  StyledButton,
  StyledButtonContainer,
  StyledContainer,
  StyledDate,
  StyledDateTimeBox,
  StyledDetailLabel,
  StyledHr,
  StyledImageSection,
  StyledInfoSection,
  StyledInput,
  StyledLabelRow,
  StyledName,
  StyledPasswordSection,
  StyledTitle,
} from "./-index.style";

export const Route = createLazyFileRoute("/Reservation/")({
  component: RouteComponent,
});

const mock = {
  organization: {
    id: 1,
    name: "유어슈",
    description: "이곳은 Soongsil University의 공간 예약 플랫폼입니다.",
    logoImageUrl: logo,
    hashtags: ["#소통", "#편리한예약", "#학생회관"],
  },
  space: {
    id: 1,
    name: "학생회관 2층 213호",
    spaceImageUrl: logo,
    location: "학생회관 2층 213호",
    openingTime: "09:00",
    closingTime: "22:00",
    capacity: 12,
  },
};

function RouteComponent() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<{
    start: { hour: number; minute: number };
    end: { hour: number; minute: number };
  } | null>(null);

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
    const formatHourMinute = (time: { hour: number; minute: number }) =>
      `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}`;

    const startMinutes = time.start.hour * 60 + time.start.minute;
    const endMinutes = time.end.hour * 60 + time.end.minute;
    const diffHours = Math.floor((endMinutes - startMinutes) / 60);
    const diffMinutes = (endMinutes - startMinutes) % 60;

    const duration =
      diffMinutes > 0
        ? `${diffHours}시간 ${diffMinutes}분`
        : `${diffHours}시간`;

    return `${formatHourMinute(time.start)} ~ ${formatHourMinute(time.end)} (${duration})`;
  };

  const handleTimeSelect = (slots: { hour: number; minute: number }[]) => {
    if (slots.length > 0) {
      const sortedSlots = [...slots].sort(
        (a, b) => a.hour * 60 + a.minute - (b.hour * 60 + b.minute)
      );

      setSelectedTime({
        start: {
          hour: sortedSlots[0].hour,
          minute: sortedSlots[0].minute,
        },
        end: {
          hour: sortedSlots[sortedSlots.length - 1].hour,
          minute: sortedSlots[sortedSlots.length - 1].minute + 30,
        },
      });
    } else {
      setSelectedTime(null);
    }
  };

  return (
    <StyledContainer>
      <StyledName>{mock.organization.name}</StyledName>
      <ReservationInfoCard
        {...mock.space}
        to={`/organizations/${mock.organization.id}/edit`}
      />

      <StyledInfoSection>
        <StyledTitle>공간 예약</StyledTitle>
        <StyledHr />
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

        <StyledDate>날짜 및 시간 선택</StyledDate>
        <ReservationCalendar
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />
        <ReservationStatusBar onTimeSelect={handleTimeSelect} />
      </StyledInfoSection>
      <StyledTitle>예약자 명</StyledTitle>
      <StyledInput type="text" placeholder="예약자 명을 입력하세요" />

      <StyledImageSection>
        <StyledPasswordSection>
          <StyledTitle>공간 비밀번호</StyledTitle>
          <StyledInput
            type="password"
            placeholder="공간 비밀번호를 입력하세요"
          />
        </StyledPasswordSection>

        <StyledPasswordSection>
          <StyledLabelRow>
            <StyledTitle>개인 비밀번호</StyledTitle>
            <StyledDetailLabel>예약 취소 시 사용됩니다.</StyledDetailLabel>
          </StyledLabelRow>
          <StyledInput
            type="password"
            placeholder="개인 비밀번호를 입력하세요"
          />
        </StyledPasswordSection>
      </StyledImageSection>
      <StyledButtonContainer>
        <StyledButton>예약</StyledButton>
      </StyledButtonContainer>
    </StyledContainer>
  );
}
