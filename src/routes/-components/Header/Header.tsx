import { useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import SearchIcon from "../../../assets/search.svg?react";
import { useLoginState } from "../../../hooks/useLoginState.ts";
import { api } from "../../../service/TokenService.ts";
import SignIn from "../SignIn/SignIn.tsx";
import {
  IconContainer,
  SearchBar,
  SearchContainer,
  StyledHeader,
  StyledLink,
  StyledLoginButton,
  StyledLogo,
  StyledNav,
} from "./Header.style.ts";

function Header() {
  const { isLoggedIn } = useLoginState();
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const closeModal = () => setSignInModalOpen(false);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({
        to: "/SearchResult/$query",
        params: { query: searchQuery },
      });
      setSearchQuery("");
    }
  };

  return (
    <StyledHeader>
      <StyledLogo to="/">OPENSSUpot</StyledLogo>
      <StyledNav>
        <StyledLink to="/">공간오픈/관리</StyledLink>
        <StyledLink>교내회의실 찾기</StyledLink>
        <SearchContainer>
          <form onSubmit={handleSearch}>
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="검색어를 입력하세요"
            />
            <IconContainer onClick={handleSearch}>
              <SearchIcon style={{ minWidth: "25px" }} />
            </IconContainer>
          </form>
        </SearchContainer>
      </StyledNav>
      <div>
        {isLoggedIn ? (
          <StyledLoginButton
            onClick={() => {
              api.logout();
              window.location.reload();
            }}
          >
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
  );
}

export default Header;
