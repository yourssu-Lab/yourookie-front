import {StyledAuth, StyledHeader, StyledLink, StyledLoginButton, StyledNav, StyledSpace} from "./Header.style.ts";
import {useLoginState} from "../../../hooks/useLoginState.ts";
import {SearchTextField} from "@yourssu/design-system-react";
import LogoIcon from "../../../assets/logo.svg?react"

function Header() {
    const {isLoggedIn} = useLoginState();

    console.log(LogoIcon);

    return <StyledHeader>
        <LogoIcon style={{ minWidth: '144px' }} />
        <StyledSpace />
        <StyledNav>
            <SearchTextField />
            <StyledLink to="/">
                공간오픈/관리
            </StyledLink>
            <StyledLink>
                교내회의실 찾기
            </StyledLink>
        </StyledNav>
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