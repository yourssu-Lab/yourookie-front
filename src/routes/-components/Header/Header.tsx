import {StyledAuth, StyledHeader, StyledLink, StyledNav, StyledSpace} from "./Header.style.ts";
import {useLoginState} from "../../../hooks/useLoginState.ts";
import {SearchTextField} from "@yourssu/design-system-react";
import SignIn from "../SignIn/SignIn.tsx";
import {useState} from "react";
import LogoIcon from "../../../assets/logo.svg?react"
import SearchIcon from "../../../assets/search.svg?react";
import {Link} from "@tanstack/react-router";

function Header() {
    const {isLoggedIn} = useLoginState();
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const closeModal = () => setSignInModalOpen(false);

    return <StyledHeader>
        <Link to="/">
            <LogoIcon style={{ minWidth: '144px' }} />
        </Link>
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
            !isLoggedIn && <StyledLoginButton onClick={() => setSignInModalOpen(true)}>로그인</StyledLoginButton>
        }
            !isLoggedIn && <SignIn open={signInModalOpen} closeModal={closeModal} />
        }
    </StyledHeader>
}

export default Header;