import styled from "styled-components";
import {Link} from "@tanstack/react-router";

export const StyledFooter = styled.footer`
    display: flex;
    width: 100%;
    height: 80px;
    border-top: 1px solid #858585;
    background: #F9F9F9;;
    align-items: center;
    justify-content: space-between;
`;

export const StyledContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    color: #3E3E3E;
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
`;

export const StyledLogo = styled.span`
    margin-left: 77px;
    color: #1781EE;
    font-family: "Mungyeong Gamhong Apple";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const StyledTag = styled.span`
    color: #3E3E3E;
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 66px;
`
