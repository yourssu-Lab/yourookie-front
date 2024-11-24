import styled from "styled-components";
import {Link} from "@tanstack/react-router";

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
    background: ${({$primary}) => $primary ? "#1781EE" : "#FFF"};
`;

export const StyledLogo = styled(Link)<HeaderProps>`
    color: ${({$primary}) => $primary ? "#FFF" : "#1781EE"};
    font-family: "Mungyeong Gamhong Apple";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.1px;
    text-decoration: none;
    
    display: flex;
    width: 144px;
    height: 28px;
    padding: 0 5px;
    align-items: center;
    flex-shrink: 0;
`

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 10px;
`;

export const SearchContainer = styled.div`
    width: 439px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid #858585;
    background: #FFF;
    display: flex;
    align-items: center;
    position: relative;
`;

export const SearchBar = styled.input`
    font-family: Pretendard;
    border-radius: 23px;
    background: #FFF;
    height: 44px;
    width: 100%;
    border: none;
    font-size: 18px;
    padding: 0 44px 0 31px; // 오른쪽 패딩 증가
    
    &:focus {
        outline: none;
    }
`;

// 아이콘을 위한 컨테이너
export const IconContainer = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666; // 아이콘 색상
`;

export const StyledLink = styled(Link)<HeaderProps>`
    color: ${({$primary}) => $primary ? "#FFF" : "#1781EE"} ;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    white-space: nowrap;
    width: fit-content;
    text-decoration: none;
`

export const StyledLoginButton = styled.button<HeaderProps>`
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 12px;
    background: ${({$primary}) => $primary ? "#FFF" : "#1781EE"};
    border: none;
    padding: 8px 20px;

    color: ${({$primary}) => $primary ? "#1781EE" : "#FFF"};
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    
    cursor: pointer;
`;
