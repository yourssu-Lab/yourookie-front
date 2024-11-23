// import { createLazyFileRoute } from "@tanstack/react-router";
// import logo from "../../assets/mockLogo.svg";

// import dayjs from "dayjs";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { ReservationCalendar } from "../-components/ReservationCalendar/ReservationCalendar";
// import { ReservationInfoCard } from "../-components/ReservationInfoCard/ReservationInfoCard";
// import { ReservationStatusBar } from "../-components/ReservationStatusBar/ReservationStatusBar";
// import {
//   StyledButton,
//   StyledButtonContainer,
//   StyledContainer,
//   StyledDate,
//   StyledDateTimeBox,
//   StyledDetailLabel,
//   StyledHr,
//   StyledImageSection,
//   StyledInfoSection,
//   StyledInput,
//   StyledLabelRow,
//   StyledName,
//   StyledPasswordSection,
//   StyledTitle,
// } from "./-index.style";

// export const Route = createLazyFileRoute("/Reservation/")({
//   component: RouteComponent,
// });

// interface ReservationFormData {
//   name: string;
//   startDateTime: string;
//   endDateTime: string;
//   password: string;
//   personalPassword: string;
// }

// const mock = {
//   organization: {
//     id: 1,
//     name: "유어슈",
//     description: "이곳은 Soongsil University의 공간 예약 플랫폼입니다.",
//     logoImageUrl: logo,
//     hashtags: ["#소통", "#편리한예약", "#학생회관"],
//   },
//   space: {
//     id: 1,
//     name: "학생회관 2층 213호",
//     spaceImageUrl: logo,
//     location: "학생회관 2층 213호",
//     openingTime: "09:00",
//     closingTime: "22:00",
//     capacity: 12,
//   },
// };

// function RouteComponent() {
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date());
//   const [selectedTime, setSelectedTime] = useState<{
//     start: { hour: number; minute: number };
//     end: { hour: number; minute: number };
//   } | null>(null);

//   const { register, handleSubmit } = useForm<ReservationFormData>();

//   const onSubmit = (data: ReservationFormData) => {
//     if (!selectedDate || !selectedTime) {
//       alert("날짜와 시간을 선택해주세요");
//       return;
//     }

//     const startDateTime = dayjs(selectedDate)
//       .hour(selectedTime.start.hour)
//       .minute(selectedTime.start.minute)
//       .format("YYYY-MM-DDTHH:mm:00");

//     const endDateTime = dayjs(selectedDate)
//       .hour(selectedTime.end.hour)
//       .minute(selectedTime.end.minute)
//       .format("YYYY-MM-DDTHH:mm:00");

//     const reservationData = {
//       ...data,
//       startDateTime,
//       endDateTime,
//     };

//     console.log(reservationData);
//   };

//   const formatDate = (date: Date) => {
//     const days = ["일", "월", "화", "수", "목", "금", "토"];
//     const year = date.getFullYear();
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     const dayOfWeek = days[date.getDay()];

//     return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
//   };

//   const formatTime = (time: {
//     start: { hour: number; minute: number };
//     end: { hour: number; minute: number };
//   }) => {
//     const formatHour = (time: { hour: number; minute: number }) => {
//       if (time.minute === 60) {
//         return `${time.hour + 1}:00`;
//       }
//       return `${time.hour}:${time.minute === 30 ? "30" : "00"}`;
//     };

//     const startMinutes = time.start.hour * 60 + time.start.minute;
//     let endMinutes = time.end.hour * 60 + time.end.minute;

//     if (time.end.minute === 60) {
//       endMinutes = time.end.hour * 60 + 60;
//     }

//     const diffMinutes = endMinutes - startMinutes;
//     const diffHours = Math.floor(diffMinutes / 60);
//     const remainingMinutes = diffMinutes % 60;

//     let duration = "";
//     if (diffHours > 0 && remainingMinutes > 0) {
//       duration = `${diffHours}시간 ${remainingMinutes}분`;
//     } else if (diffHours > 0) {
//       duration = `${diffHours}시간`;
//     } else {
//       duration = `${remainingMinutes}분`;
//     }

//     return `${formatHour(time.start)} ~ ${formatHour(time.end)} (${duration})`;
//   };

//   const handleTimeSelect = (slots: { hour: number; minute: number }[]) => {
//     if (slots.length > 0) {
//       const sortedSlots = [...slots].sort(
//         (a, b) => a.hour * 60 + a.minute - (b.hour * 60 + b.minute)
//       );

//       const lastSlot = sortedSlots[sortedSlots.length - 1];
//       let endHour = lastSlot.hour;
//       let endMinute = lastSlot.minute + 30;

//       if (endMinute === 60) {
//         endHour += 1;
//         endMinute = 0;
//       }

//       setSelectedTime({
//         start: {
//           hour: sortedSlots[0].hour,
//           minute: sortedSlots[0].minute,
//         },
//         end: {
//           hour: endHour,
//           minute: endMinute,
//         },
//       });
//     } else {
//       setSelectedTime(null);
//     }
//   };

//   return (
//     <StyledContainer onSubmit={handleSubmit(onSubmit)}>
//       <StyledName>{mock.organization.name}</StyledName>
//       <ReservationInfoCard
//         {...mock.space}
//         to={`/organizations/${mock.organization.id}/edit`}
//       />

//       <StyledInfoSection>
//         <StyledTitle>공간 예약</StyledTitle>
//         <StyledHr />
//         <StyledImageSection>
//           <StyledPasswordSection>
//             <StyledDateTimeBox>
//               {selectedDate ? formatDate(selectedDate) : "날짜를 선택해주세요"}
//             </StyledDateTimeBox>
//           </StyledPasswordSection>

//           <StyledPasswordSection>
//             <StyledDateTimeBox>
//               {selectedTime ? formatTime(selectedTime) : "시간을 선택해주세요"}
//             </StyledDateTimeBox>
//           </StyledPasswordSection>
//         </StyledImageSection>

//         <StyledDate>날짜 및 시간 선택</StyledDate>
//         <ReservationCalendar
//           selectedDate={selectedDate}
//           onDateSelect={setSelectedDate}
//         />
//         <ReservationStatusBar onTimeSelect={handleTimeSelect} />
//       </StyledInfoSection>
//       <StyledTitle>예약자 명</StyledTitle>
//       <StyledInput
//         {...register("name", { required: true })}
//         type="text"
//         placeholder="예약자 명을 입력하세요"
//         autoComplete="new-password"
//       />

//       <StyledImageSection>
//         <StyledPasswordSection>
//           <StyledTitle>공간 비밀번호</StyledTitle>
//           <StyledInput
//             {...register("password", { required: true })}
//             type="password"
//             placeholder="공간 비밀번호를 입력하세요"
//             autoComplete="new-password"
//           />
//         </StyledPasswordSection>

//         <StyledPasswordSection>
//           <StyledLabelRow>
//             <StyledTitle>개인 비밀번호</StyledTitle>
//             <StyledDetailLabel>예약 취소 시 사용됩니다.</StyledDetailLabel>
//           </StyledLabelRow>
//           <StyledInput
//             {...register("personalPassword", { required: true })}
//             type="password"
//             placeholder="개인 비밀번호를 입력하세요"
//             autoComplete="new-password"
//           />
//         </StyledPasswordSection>
//       </StyledImageSection>
//       <StyledButtonContainer>
//         <StyledButton type="submit">예약</StyledButton>
//       </StyledButtonContainer>
//     </StyledContainer>
//   );
// }
