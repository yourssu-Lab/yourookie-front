import { BoxButton } from "@yourssu/design-system-react";
import {
  StyledContent,
  StyledDescription,
  StyledHeader,
  StyledImage,
  StyledImageWrapper,
  StyledInfo,
  StyledName,
  StyledSection,
  StyledTitle,
} from "./OrganizationInfoCard.style";

interface OrganizationInfoProps {
  name: string;
  description: string;
  image: string;
  onEditClick: () => void;
}

export const OrganizationInfoCard = ({
  name,
  description,
  image,
  onEditClick,
}: OrganizationInfoProps) => {
  return (
    <StyledSection>
      <StyledHeader>
        <StyledTitle>단체 정보</StyledTitle>
        <BoxButton
          onClick={onEditClick}
          size="medium"
          variant="filled"
          rounding={4}
        >
          정보 수정
        </BoxButton>
      </StyledHeader>
      <StyledContent>
        <StyledImageWrapper>
          <StyledImage src={image} alt={name} />
        </StyledImageWrapper>
        <StyledInfo>
          <StyledName>{name}</StyledName>
          <StyledDescription>{description}</StyledDescription>
        </StyledInfo>
      </StyledContent>
    </StyledSection>
  );
};
