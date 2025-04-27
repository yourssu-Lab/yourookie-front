import LogoBlue from '@/assets/spacer_logo_blue.svg';
import SecondImage from '@/assets/hero/second.png';
import {
  StyledSection,
  StyledTextWrapper,
  StyledSecondText,
  StyledThirdText,
  StyledLastText,
  StyledImage,
  StyledContainer,
  StyledLogoImage,
  StyledTitleTextWrapper,
} from '@/routes/-components/SecondSection/SecondSection.style.ts';

const SecondSection = () => {
  return <StyledSection>
    <StyledContainer>
      <StyledTextWrapper>
        <StyledTitleTextWrapper>
          <StyledLogoImage src={LogoBlue} />
          <StyledSecondText>
            서비스 소개
          </StyledSecondText>
        </StyledTitleTextWrapper>
        <StyledThirdText>
          <span style={{ fontWeight: 400 }}>SPACER</span>로 더 쉽게 운영하세요
        </StyledThirdText>
        <StyledLastText>
          숭실대의 시설 예약 및 예약 관리를 한 곳에서 관리하세요
        </StyledLastText>
      </StyledTextWrapper>
      <StyledImage src={SecondImage} />
    </StyledContainer>
  </StyledSection>;
};

export default SecondSection;