import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

interface HeaderProps {
  $primary: boolean;
}

export const StyledHeader = styled.header<HeaderProps>`
  display: flex;
  max-width: 100%;
  padding: 0 46px;
  align-items: center;
  justify-content: space-between;
  height: 84px;
  background: ${({ $primary }) => ($primary ? '#1781EE' : '#FFF')};

  @media (max-width: 1024px) {
    padding: 0 20px;
    height: auto;
    min-height: 70px;
    flex-wrap: wrap;
    gap: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    justify-content: space-between;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 10px;

  @media (max-width: 1024px) {
    gap: 20px;
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 5px;
  }
`;

export const SearchContainer = styled.div`
  width: 439px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #858585;
  background: #fff;
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 439px;
  }
`;

export const SearchBar = styled.input`
  font-family: Pretendard;
  border-radius: 23px;
  background: #fff;
  height: 44px;
  width: 100%;
  border: none;
  font-size: 18px;
  padding: 0 44px 0 31px;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    height: 40px;
    padding: 0 40px 0 20px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;

  @media (max-width: 768px) {
    right: 15px;
  }
`;

export const StyledLink = styled(Link)<HeaderProps>`
  color: ${({ $primary }) => ($primary ? '#FFF' : '#1781EE')};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  white-space: nowrap;
  width: fit-content;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledLoginButton = styled.button<HeaderProps>`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: ${({ $primary }) => ($primary ? '#FFF' : '#1781EE')};
  border: none;
  padding: 8px 20px;
  color: ${({ $primary }) => ($primary ? '#1781EE' : '#FFF')};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 1024px) {
    order: 2;
    height: 44px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 16px;
    height: 40px;
  }
`;
