import { Link } from "@tanstack/react-router";
import pencil from "../../../assets/Pencil.svg";

import {
  StyledCardWrapper,
  StyledEditIcon,
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
  id,
  name,
  spaceImageUrl,
  location,
  openingTime,
  closingTime,
  capacity,
  to,
}: ReservationInfoCardProps) => {
  console.log(id);
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

      <StyledEditIcon>
        <Link to={to}>
          <img src={pencil} alt="수정하기" />
        </Link>
      </StyledEditIcon>
    </StyledCardWrapper>
  );
};
