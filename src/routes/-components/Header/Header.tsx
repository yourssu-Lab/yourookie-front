import {
    IconContainer,
    SearchBar,
    SearchContainer,
    StyledHeader,
    StyledLink, StyledLoginButton, StyledLogo,
    StyledNav,
} from "./Header.style.ts";
import {useLoginState} from "../../../hooks/useLoginState.ts";
import SignIn from "../SignIn/SignIn.tsx";
import {useState} from "react";
import SearchIcon from "../../../assets/search.svg?react";
import {api} from "../../../service/TokenService.ts";

function Header() {
    const {isLoggedIn} = useLoginState();
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const closeModal = () => setSignInModalOpen(false);

    return <StyledHeader>
        <StyledLogo to='/'>OPENSSUpot</StyledLogo>
        <StyledNav>
            <StyledLink to="/">
                공간오픈/관리
            </StyledLink>
            <StyledLink to="/meetingRooms">
                교내회의실 찾기
            </StyledLink>
            <SearchContainer>
                <SearchBar placeholder="검색어를 입력하세요" />
                <IconContainer>
                    <SearchIcon style={{ minWidth: '25px' }} />
                </IconContainer>
            </SearchContainer>
        </StyledNav>
        <div>
            {isLoggedIn ? (
                <StyledLoginButton onClick={() => {api.logout(); window.location.reload();}}>
                    로그아웃
                </StyledLoginButton>
            ) : (
                <>
                    <StyledLoginButton onClick={() => setSignInModalOpen(true)}>
                        로그인
                    </StyledLoginButton>
                    <SignIn open={signInModalOpen} closeModal={closeModal} />
                </>
            )}
        </div>
    </StyledHeader>
}

export default Header;