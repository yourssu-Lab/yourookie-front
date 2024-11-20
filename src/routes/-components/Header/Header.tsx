import {StyledAuth, StyledHeader, StyledLink, StyledNav, StyledSpace} from "./Header.style.ts";
import {useLoginState} from "../../../hooks/useLoginState.ts";
import {SearchTextField} from "@yourssu/design-system-react";

function Header() {
    const {isLoggedIn} = useLoginState();

    return <StyledHeader>
        <StyledSpace />
        <h2>OpenSSUpot</h2>
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
            !isLoggedIn && <StyledAuth>
                <StyledLink>
                    로그인
                </StyledLink>
                <StyledLink to="/signup">
                    회원가입
                </StyledLink>
            </StyledAuth>
        }
        <StyledSpace />
    </StyledHeader>
}

export default Header;