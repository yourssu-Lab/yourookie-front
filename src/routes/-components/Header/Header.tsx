import {
    IconContainer,
    SearchBar, SearchContainer,
    StyledAuth,
    StyledHeader,
    StyledLink,
    StyledLoginButton,
    StyledNav,
    StyledSpace
} from "./Header.style.ts";
import {useLoginState} from "../../../hooks/useLoginState.ts";
import LogoIcon from "../../../assets/logo.svg?react"
import SearchIcon from "../../../assets/search.svg?react";

function Header() {
    const {isLoggedIn} = useLoginState();

    return <StyledHeader>
        <LogoIcon style={{ minWidth: '144px' }} />
        <StyledSpace />
        <StyledNav>
            <StyledLink to="/">
                공간오픈/관리
            </StyledLink>
            <StyledLink>
                교내회의실 찾기
            </StyledLink>
            <SearchContainer>
                <SearchBar placeholder="검색어를 입력하세요" />
                <IconContainer>
                    <SearchIcon style={{ minWidth: '25px' }} />
                </IconContainer>
            </SearchContainer>
        </StyledNav>
        <StyledSpace />
        {
            isLoggedIn && <StyledAuth>
                <StyledLink>
                    로그아웃
                </StyledLink>
                <StyledLink>
                    마이페이지
                </StyledLink>
            </StyledAuth>
        }
        {
            !isLoggedIn && <StyledLoginButton>로그인</StyledLoginButton>
        }
    </StyledHeader>
}

export default Header;