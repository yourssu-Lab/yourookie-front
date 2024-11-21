import {StyledAuth, StyledHeader, StyledLink, StyledNav, StyledSpace} from "./Header.style.ts";
import {useLoginState} from "../../../hooks/useLoginState.ts";
import {SearchTextField} from "@yourssu/design-system-react";
import SignIn from "../SignIn/SignIn.tsx";
import {useState} from "react";

function Header() {
    const {isLoggedIn} = useLoginState();
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const closeModal = () => setSignInModalOpen(false);

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
                <StyledLink onClick={() => setSignInModalOpen(true)}>
                    로그인
                </StyledLink>
                <StyledLink to="/signup">
                    회원가입
                </StyledLink>
                <SignIn open={signInModalOpen} closeModal={closeModal} />
            </StyledAuth>
        }
        <StyledSpace />
    </StyledHeader>
}

export default Header;