import {createLazyFileRoute} from '@tanstack/react-router'
import {
    StyledFirstSection,
    StyledFirstSectionContainer,
    StyledFirstSectionFirstText,
    StyledFirstSectionLastText,
    StyledFirstSectionSecondText,
    StyledFirstSectionTextWrapper,
    StyledLastSection,
    StyledLastSectionContainer,
    StyledLastSectionDescription,
    StyledLastSectionTitle,
    StyledSecondSection,
    StyledSecondSectionFirstText,
    StyledSecondSectionLastText,
    StyledSecondSectionSecondText,
    StyledSecondSectionTextWrapper,
    StyledSecondSectionThirdText,
    StyledThirdSection,
    StyledThirdSectionContainer,
    StyledThirdSectionDescription,
    StyledThirdSectionTextWrapper,
    StyledThirdSectionTitle
} from "./-index.style";
import FirstImage from '../assets/hero/first.png';
import SecondImage from '../assets/hero/second.png';
import ThirdImage from '../assets/hero/third.png'
import FourthImage from '../assets/hero/fourth.png'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div>
            <StyledFirstSection>
                <StyledFirstSectionContainer>
                    <StyledFirstSectionTextWrapper>
                        <StyledFirstSectionFirstText>
                            편리한 시설 예약 및 관리를 위한
                        </StyledFirstSectionFirstText>
                        <StyledFirstSectionSecondText>
                            동방 및 시설 예약 관리 시스템
                        </StyledFirstSectionSecondText>
                        <StyledFirstSectionLastText>
                            OPENSSUpot
                        </StyledFirstSectionLastText>
                    </StyledFirstSectionTextWrapper>
                    <img style={{margin: 'auto 0 0 -100px'}} src={FirstImage} />
                </StyledFirstSectionContainer>
            </StyledFirstSection>
            <StyledSecondSection>
                <StyledSecondSectionTextWrapper>
                    <div style={{display: 'flex', gap: '21px', alignItems: 'center'}}>
                        <StyledSecondSectionFirstText>
                            OPENSSUpot
                        </StyledSecondSectionFirstText>
                        <StyledSecondSectionSecondText>
                            서비스 소개
                        </StyledSecondSectionSecondText>
                    </div>
                    <StyledSecondSectionThirdText>
                        오픈SSU팟으로 더 쉽게 운영하세요
                    </StyledSecondSectionThirdText>
                    <StyledSecondSectionLastText>
                        숭실대의 시설 예약 및 예약 관리를 한 곳에서 관리하세요
                    </StyledSecondSectionLastText>
                </StyledSecondSectionTextWrapper>
                <img src={SecondImage} />
            </StyledSecondSection>
            <StyledThirdSection>
                <StyledThirdSectionContainer>
                    <StyledThirdSectionTextWrapper>
                        <StyledThirdSectionTitle>
                            시설 및 동아리 방을 등록하고 <br/>
                            예약을 관리하세요
                        </StyledThirdSectionTitle>
                        <StyledThirdSectionDescription>
                            관리자는 시설 정보를 등록하고, 구성원들에게 링크를 공유해 <br/>
                            OPENSSUpot으로 구성원들의 편리한 예약 시스템을 구축해보세요
                        </StyledThirdSectionDescription>
                    </StyledThirdSectionTextWrapper>
                    <img src={ThirdImage}/>
                </StyledThirdSectionContainer>
            </StyledThirdSection>
            <StyledLastSection>
                <StyledLastSectionContainer>
                    <img src={FourthImage}/>
                    <StyledThirdSectionTextWrapper>
                        <StyledLastSectionTitle>
                            교내 회의실 조회 및 예약 연결 시스템으로 <br/>
                            원하는 시간을 빠르게 예약하세요
                        </StyledLastSectionTitle>
                        <StyledLastSectionDescription>
                            원하는 시간을 선택하면, 예약 가능한 교내 회의실 목록을 확인할 수 있으며 <br/>
                            선택한 회의실의 예약 사이트로 연결되어 편리하게 예약이 가능합니다.
                        </StyledLastSectionDescription>
                    </StyledThirdSectionTextWrapper>
                </StyledLastSectionContainer>
            </StyledLastSection>
        </div>
    )
}