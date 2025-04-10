import ThirdImage from '@/assets/hero/third.png';
import {
  StyledSection,
  StyledContainer, StyledDescription, StyledTextWrapper, StyledTitle, StyledImage,
} from '@/routes/-components/ThirdSection/ThirdSection.style.ts';

const ThirdSection = () => {
  return <StyledSection>
    <StyledContainer>
      <StyledTextWrapper>
        <StyledTitle>
          시설 및 동아리 방을 등록하고 <br />
          예약을 관리하세요
        </StyledTitle>
        <StyledDescription>
          관리자는 시설 정보를 등록하고, 구성원들에게 링크를 공유해 <br />
          SPACER으로 구성원들의 편리한 예약 시스템을 구축해보세요
        </StyledDescription>
      </StyledTextWrapper>
      <StyledImage src={ThirdImage} />
    </StyledContainer>
  </StyledSection>;
};

export default ThirdSection;