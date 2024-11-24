import clock from "../../../assets/orga/clock.svg";
import marker from "../../../assets/orga/marker.svg";
import user from "../../../assets/orga/user.svg";

import { Space } from "../../../types/organization.type";
import { formatTime } from "../../../utils/formatTime";
import {
  StyledCapacityInfo,
  StyledCard,
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
  onClick: () => void;
}

export const SearchSpaceCard = ({ space, onClick }: SpaceCardProps) => {
  return (
    <StyledCard onClick={onClick}>
      <StyledSpaceImage>
        <img src={space.spaceImageUrl} alt={space.name} />
        {/* <StyledEditIcon onClick={onEditClick}>
          <img src={pencil} alt="수정하기" />
        </StyledEditIcon> */}
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
              {formatTime(space.openingTime)} ~ {formatTime(space.closingTime)}
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
