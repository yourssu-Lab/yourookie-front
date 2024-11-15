import {StyledHeader, StyledLink, StyledNav, StyledSpace} from "./Header.style.ts";

function Header() {
    return <StyledHeader>
        <StyledNav>
            <StyledLink to="/">
                공간오픈/관리
            </StyledLink>
            <StyledLink to="/find-organization">
                공간찾기
            </StyledLink>
            <StyledLink>
                교내회의실
            </StyledLink>
            <StyledLink>
                로그인
            </StyledLink>
            <StyledLink>
                로그아웃
            </StyledLink>
        </StyledNav>
        <StyledSpace />
    </StyledHeader>
}

export default Header;