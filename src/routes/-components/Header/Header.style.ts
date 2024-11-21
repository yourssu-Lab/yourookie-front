import styled from "styled-components";
import {Link} from "@tanstack/react-router";

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    padding: 0 30px;
    align-items: center;
    
    gap: 174px;
    background: #0095DE;
`;

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 53px;
    padding: 10px;
`;

export const SearchContainer = styled.div`
    position: relative;
    width: 342px;
    display: flex;
    align-items: center;
`;

// 기존 input 스타일 수정 (패딩 오른쪽 증가)
export const SearchBar = styled.input`
    border-radius: 23px;
    background: #FFF;
    height: 44px;
    width: 100%;
    border: none;
    font-size: 18px;
    padding: 0 44px 0 12px; // 오른쪽 패딩 증가
    
    &:focus {
        outline: none;
    }
`;

// 아이콘을 위한 컨테이너
export const IconContainer = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666; // 아이콘 색상
`;

export const StyledLink = styled(Link)`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    white-space: nowrap;
    width: fit-content;
    text-decoration: none;
`

export const StyledSpace = styled.div`
    flex-grow: 1;
`

export const StyledAuth = styled.div`
    display: flex;
`;

export const StyledLoginButton = styled.button`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    border-radius: 45px;
    background: #FFF;
    border: none;
    min-width: fit-content;

    color: #1781EE;
    text-align: center;

    /* 일반/18/설명&일반글씨/medium */
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    
    cursor: pointer;
`;
