import pencil from "../../../assets/Pencil.svg";
import clock from "../../../assets/orga/clock.svg";
import marker from "../../../assets/orga/marker.svg";
import user from "../../../assets/orga/user.svg";

import { Space } from "../../../types/organization.type";
import {
  StyledCapacityInfo,
  StyledCard,
  StyledEditIcon,
  StyledLeftContent,
  StyledRightContent,
  StyledSpaceContent,
  StyledSpaceImage,
  StyledSpaceInfo,
  StyledSpaceLocation,
  StyledTimeInfo,
  StyledTitle,
} from "./SpaceCard.style";

interface SpaceCardProps {
  space: Space;
  onEditClick: () => void;
}

export const SpaceCard = ({ space, onEditClick }: SpaceCardProps) => {
  return (
    <StyledCard>
      <StyledSpaceImage>
        <img src={space.spaceImageUrl} alt={space.name} />
        <StyledEditIcon onClick={onEditClick}>
          <img src={pencil} alt="수정하기" />
        </StyledEditIcon>
      </StyledSpaceImage>
      <StyledSpaceContent>
        <StyledSpaceInfo>
          <StyledLeftContent>
            <StyledTitle>{space.name}</StyledTitle>
            <StyledSpaceLocation>
              <img src={marker} alt="장소 위치" />
              {space.location}
            </StyledSpaceLocation>
          </StyledLeftContent>
          <StyledRightContent>
            <StyledTimeInfo>
              <img src={clock} alt="운영 시간" />
              {space.openingTime}~{space.closingTime}
            </StyledTimeInfo>
            <StyledCapacityInfo>
              <img src={user} alt="수용 인원" />
              최대 {space.capacity}인
            </StyledCapacityInfo>
          </StyledRightContent>
        </StyledSpaceInfo>
      </StyledSpaceContent>
    </StyledCard>
  );
};
