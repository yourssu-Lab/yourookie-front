import FourthImage from '@/assets/hero/fourth.png';
import {
  StyledSection,
  StyledContainer, StyledDescription,
  StyledTitle, StyledImage, StyledTextWrapper,
} from '@/routes/-components/LastSection/LastSection.style.ts';

const LastSection = () => {
  return <StyledSection>
    <StyledContainer>
      <StyledImage src={FourthImage} />
      <StyledTextWrapper>
        <StyledTitle>
          교내 회의실 조회 및 예약 연결 시스템으로 <br />
          원하는 시간을 빠르게 예약하세요
        </StyledTitle>
        <StyledDescription>
          원하는 시간을 선택하면, 예약 가능한 교내 회의실 목록을 확인할 수
          있으며 <br />
          선택한 회의실의 예약 사이트로 연결되어 편리하게 예약이 가능합니다.
        </StyledDescription>
      </StyledTextWrapper>
    </StyledContainer>
  </StyledSection>;
};

export default LastSection;