import { Link } from "@tanstack/react-router";
import {
  StyledButton,
  StyledButtonWrapper,
  StyledCardWrapper,
  StyledImageSection,
  StyledInfoSection,
  StyledInfoText,
  StyledTitle,
} from "./ReservationInfoCard.style";

export interface ReservationInfoCardProps {
  id?: number;
  name?: string;
  spaceImageUrl?: string;
  location?: string;
  openingTime?: string;
  closingTime?: string;
  capacity?: number;
  to?: string;
}

export const ReservationInfoCard = ({
  name,
  spaceImageUrl,
  location,
  openingTime,
  closingTime,
  capacity,
  to,
}: ReservationInfoCardProps) => {
  return (
    <StyledCardWrapper>
      <StyledImageSection>
        <img src={spaceImageUrl} alt={name} />
      </StyledImageSection>

      <StyledInfoSection>
        <StyledTitle>{name}</StyledTitle>
        <StyledInfoText>{location}</StyledInfoText>
        <StyledInfoText>
          {openingTime}~{closingTime}
        </StyledInfoText>
        <StyledInfoText>최대 {capacity}명</StyledInfoText>
      </StyledInfoSection>
      <StyledButtonWrapper>
        <Link to={to} style={{ textDecoration: "none" }}>
          <StyledButton>예약 현황 조회</StyledButton>
        </Link>
      </StyledButtonWrapper>
    </StyledCardWrapper>
  );
};
