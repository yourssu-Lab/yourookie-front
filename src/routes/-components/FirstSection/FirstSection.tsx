import LogoWhite from '@/assets/spacer_logo_white.svg';
import FirstImage from '@/assets/hero/first.png';
import {
  StyledContainer, StyledFirstText, StyledSecondText,
  StyledTextWrapper,
  StyledSection, StyledLogoImage, StyledImage,
} from '@/routes/-components/FirstSection/FirstSection.style.ts';

const FirstSection = () => {
  return <StyledSection>
    <StyledContainer>
      <StyledTextWrapper>
        <StyledFirstText>
          편리한 시설 예약 및 관리를 위한
        </StyledFirstText>
        <StyledSecondText>
          동방 및 시설 예약 관리 시스템
        </StyledSecondText>
        <StyledLogoImage src={LogoWhite} />
      </StyledTextWrapper>
      <StyledImage src={FirstImage} />
    </StyledContainer>
  </StyledSection>
}

export default FirstSection;