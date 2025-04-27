import pencil from '../../assets/Pencil.svg';
import { Organization } from '../../types/organization.type.ts';
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
} from './OrganizationInfoCard.style.ts';

interface OrganizationInfoProps {
  organization: Organization;
  onEditClick: () => void;
}

export const OrganizationInfoCard = ({ organization, onEditClick }: OrganizationInfoProps) => {
  console.log(organization);
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
          <StyledImage src={organization.logoImageUrl} alt={organization.name} />
        </StyledImageWrapper>
        <StyledInfo>
          <StyledName>{organization.name}</StyledName>
          <StyledDescription>{organization.description}</StyledDescription>
          <StyledTags>
            {organization.hashtags?.map((tag) => <StyledTag key={`tag-${tag}`}>#{tag}</StyledTag>)}
          </StyledTags>
        </StyledInfo>
      </StyledContent>
      <StyledHr />
    </StyledSection>
  );
};
