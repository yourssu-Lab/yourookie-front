import {StyledContainer, StyledFooter, StyledLink, StyledLogo, StyledTag} from "./Footer.style.ts";

function Footer() {
    return (
        <StyledFooter>
            <StyledContainer>
                <StyledLogo>OPENSSUpot</StyledLogo>
                <StyledLink target="_blank" to="https://docs.google.com/document/d/1XuQiTSiq4O4UQw6ABSVT821sfy9lUos44JaIKRRF69g/edit?tab=t.0" style={{marginLeft: '67px'}}>개인정보처리방침</StyledLink>
                <StyledLink target="_blank" to="https://docs.google.com/document/d/1TLeu940lzSMGw5iy6Cbg-FENTIjepUjnjU6gjhb0ka4/edit?tab=t.0" style={{marginLeft: '63px'}}>이용약관</StyledLink>
            </StyledContainer>
            <StyledTag>@OPENSSUpot</StyledTag>
        </StyledFooter>
    );
}

export default Footer;
