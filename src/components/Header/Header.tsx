import { Link, useMatchRoute, useNavigate, useRouter } from '@tanstack/react-router';
import { FormEvent, useEffect, useState } from 'react';
import SearchIcon from '../../assets/search.svg?react';
import LogoBlue from '../../assets/spacer_logo_blue.svg';
import LogoWhite from '../../assets/spacer_logo_white.svg';
import { useLoginState } from '../../hooks/useLoginState.ts';
import { api } from '../../service/TokenService.ts';
import LoginAlert from '../LoginAlert/LoginAlert.tsx';
import SignIn from '../SignIn/SignIn.tsx';
import {
  IconContainer,
  SearchBar,
  SearchContainer,
  StyledHeader,
  StyledLink,
  StyledLoginButton,
  StyledNav,
} from './Header.style.ts';

const SIMPLE_HEADER_PATTERNS = [
  /^\/SearchResult\/[^/]+\/organizations\/[^/]+\/?$/i,
  /^\/Reservation\/[^/]+\/?$/i,
  /^\/Reservation\/[^/]+\/state\/?$/i,
];

function Header() {
  const { isLoggedIn } = useLoginState();
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const closeModal = () => setSignInModalOpen(false);
  const userId = api.getUserId();
  const matchRoute = useMatchRoute();
  const isHome = matchRoute({ to: '/' });
  const [loginAlertOpen, setLoginAlertOpen] = useState(false);
  const [isSimpleHeaderPage, setIsSimpleHeaderPage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.state.location.pathname;
    setIsSimpleHeaderPage(SIMPLE_HEADER_PATTERNS.some((regex) => regex.test(currentPath)));
  }, [router.state.location.pathname]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({
        to: '/SearchResult/$query',
        params: { query: searchQuery },
      });
      setSearchQuery('');
    }
  };

  return (
    <StyledHeader $primary={!isHome}>
      {/* <Link to="/"> */}
      <Link>
        <img width={100} src={isHome ? LogoBlue : LogoWhite} />
      </Link>

      {!isSimpleHeaderPage && (
        <>
          <StyledNav>
            <StyledLink
              onClick={() => {
                if (isLoggedIn) return;
                setLoginAlertOpen(true);
              }}
              $primary={!isHome}
              to={isLoggedIn ? `/organizations/${userId}` : '#'}
            >
              공간오픈/관리
            </StyledLink>
            <LoginAlert open={loginAlertOpen} closeModal={() => setLoginAlertOpen(false)} />
            <StyledLink
              $primary={!isHome}
              to="/meetingRooms"
              style={{ pointerEvents: 'none', opacity: 0.5 }}
            >
              교내회의실 찾기
            </StyledLink>
            <SearchContainer>
              <form onSubmit={handleSearch}>
                <SearchBar
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="단체명을 입력해주세요"
                />
                <IconContainer onClick={handleSearch}>
                  <SearchIcon style={{ minWidth: '25px' }} />
                </IconContainer>
              </form>
            </SearchContainer>
          </StyledNav>

          <div>
            {isLoggedIn ? (
              <StyledLoginButton
                $primary={!isHome}
                onClick={() => {
                  api.logout();
                  window.location.reload();
                }}
              >
                로그아웃
              </StyledLoginButton>
            ) : (
              <>
                <StyledLoginButton $primary={!isHome} onClick={() => setSignInModalOpen(true)}>
                  로그인
                </StyledLoginButton>
                <SignIn open={signInModalOpen} closeModal={closeModal} />
              </>
            )}
          </div>
        </>
      )}
    </StyledHeader>
  );
}

export default Header;
