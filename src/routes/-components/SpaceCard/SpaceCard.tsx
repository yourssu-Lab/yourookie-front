import pencil from "../../../assets/Pencil.svg";
import { Space } from "../../../types/organization.type";
import {
  StyledCard,
  StyledEditIcon,
  StyledHeader,
  StyledSpaceCapacity,
  StyledSpaceContent,
  StyledSpaceHeader,
  StyledSpaceImage,
  StyledSpaceInfo,
  StyledSpaceLocation,
  StyledSpaceTime,
  StyledTitle,
} from "./SpaceCard.style";

interface SpaceCardProps {
  space: Space;
  onEditClick: () => void;
}

export const SpaceCard = ({ space, onEditClick }: SpaceCardProps) => {
  return (
    <StyledCard>
      <StyledHeader>
        <StyledTitle>{space.name}</StyledTitle>
        <StyledEditIcon onClick={onEditClick}>
          <img src={pencil} alt="수정하기" />
        </StyledEditIcon>
      </StyledHeader>
      <StyledSpaceImage>
        <img src={space.spaceImageUrl} alt={space.name} />
      </StyledSpaceImage>

      <StyledSpaceContent>
        <StyledSpaceHeader>
          <StyledSpaceLocation>{space.location}</StyledSpaceLocation>
        </StyledSpaceHeader>
        <StyledSpaceInfo>
          <StyledSpaceTime>
            {space.openingTime} ~ {space.closingTime}
          </StyledSpaceTime>
          <StyledSpaceCapacity>최대 {space.capacity}인</StyledSpaceCapacity>
        </StyledSpaceInfo>
      </StyledSpaceContent>
    </StyledCard>
  );
};
