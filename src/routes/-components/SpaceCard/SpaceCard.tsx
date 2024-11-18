import { BoxButton } from "@yourssu/design-system-react";
import { Space } from "../../../types/organization.type";
import {
  StyledCapacity,
  StyledCard,
  StyledContent,
  StyledImage,
  StyledLocation,
  StyledName,
  StyledRow,
  StyledTime,
  StyledTitle,
  StyledTitledRow,
} from "./SpaceCard.style";

interface SpaceCardProps {
  space: Space;
  onEditClick: () => void;
}

export const SpaceCard = ({ space, onEditClick }: SpaceCardProps) => {
  return (
    <StyledCard>
      <StyledTitledRow>
        <StyledTitle>개설된 공간 정보</StyledTitle>
        <BoxButton
          onClick={onEditClick}
          size="small"
          variant="filled"
          rounding={8}
        >
          수정
        </BoxButton>
      </StyledTitledRow>
      <StyledImage src={space.spaceImageUrl} alt={space.name} />
      <StyledContent>
        <StyledRow>
          <StyledName>{space.name}</StyledName>
          <StyledLocation>{space.location}</StyledLocation>
        </StyledRow>
        <StyledTime>
          {space.openingTime} ~ {space.closingTime}
        </StyledTime>
        <StyledCapacity>수용인원 {space.capacity}명</StyledCapacity>
      </StyledContent>
    </StyledCard>
  );
};
