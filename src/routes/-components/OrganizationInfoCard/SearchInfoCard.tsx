import {
  StyledContent,
  StyledDescription,
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
}

export const SearchInfoCard = ({
  name,
  description,
  image,
  tags,
}: OrganizationInfoProps) => {
  return (
    <StyledSection>
      <StyledHeader>
        <StyledTitle>단체 정보</StyledTitle>
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
