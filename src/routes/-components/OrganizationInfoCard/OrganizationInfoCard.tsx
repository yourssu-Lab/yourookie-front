import pencil from "../../../assets/Pencil.svg";
import {
  StyledContent,
  StyledDescription,
  StyledEditIcon,
  StyledHeader,
  StyledHr,
  StyledImage,
  StyledImageWrapper,
  StyledInfo,
  StyledName,
  StyledSection,
  StyledTag,
  StyledTags,
  StyledTitle,
} from "./OrganizationInfoCard.style";

interface OrganizationInfoProps {
  name: string;
  description: string;
  image: string;
  tags: string[];
  onEditClick: () => void;
}

export const OrganizationInfoCard = ({
  name,
  description,
  image,
  tags,
  onEditClick,
}: OrganizationInfoProps) => {
  return (
    <StyledSection>
      <StyledHeader>
        <StyledTitle>단체 정보</StyledTitle>
        <StyledEditIcon onClick={onEditClick}>
          <img src={pencil} alt="수정하기" />
        </StyledEditIcon>
      </StyledHeader>
      <StyledHr />
      <StyledContent>
        <StyledImageWrapper>
          <StyledImage src={image} alt={name} />
        </StyledImageWrapper>
        <StyledInfo>
          <StyledName>{name}</StyledName>
          <StyledDescription>{description}</StyledDescription>
          <StyledTags>
            {tags.map((tag) => (
              <StyledTag key={`tag-${tag}`}>#{tag}</StyledTag>
            ))}
          </StyledTags>
        </StyledInfo>
      </StyledContent>
      <StyledHr />
    </StyledSection>
  );
};
