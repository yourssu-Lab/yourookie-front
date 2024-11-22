import dayjs from "dayjs";
import {
  StyledButton,
  StyledContainer,
  StyledImageSection,
  StyledInfoSection,
  StyledInfoText,
  StyledReservationInfo,
  StyledReservationSection,
  StyledTitle,
} from "./ReservationStateCard.style";

interface ReservationStateCardProps {
  id: number;
  name: string;
  startDateTime: string;
  endDateTime: string;
  location?: string;
  maxCapacity?: number;
  operatingHours?: string;
  image?: string;
}

export const ReservationStateCard = ({
  name,
  location,
  operatingHours,
  maxCapacity,
  startDateTime,
  endDateTime,
  image,
}: ReservationStateCardProps) => {
  const date = dayjs(startDateTime).format("YYYY.MM.DD");
  const time = `${dayjs(startDateTime).format("HH:mm")}~${dayjs(endDateTime).format("HH:mm")}`;

  return (
    <StyledContainer>
      <StyledImageSection>
        <img src={image} alt={name} />
      </StyledImageSection>

      <StyledInfoSection>
        <StyledTitle>{name}</StyledTitle>
        <StyledInfoText>{location}</StyledInfoText>
        <StyledInfoText>{operatingHours}</StyledInfoText>
        <StyledInfoText>최대 {maxCapacity}명</StyledInfoText>
      </StyledInfoSection>

      <StyledReservationSection>
        <StyledReservationInfo>{date}</StyledReservationInfo>
        <StyledReservationInfo>{time}</StyledReservationInfo>
        <StyledButton>버튼</StyledButton>
      </StyledReservationSection>
    </StyledContainer>
  );
};
