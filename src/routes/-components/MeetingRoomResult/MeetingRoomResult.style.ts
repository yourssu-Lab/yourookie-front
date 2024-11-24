import styled from "styled-components";
import {Link} from "@tanstack/react-router";

export const StyledTitle = styled.h1`
    color: #000;
    /* 분류제목/26/분류제목/28/Bold */
    font-family: "Pretendard Variable";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    display: flex;
    padding: 10px;
    align-items: center;
`;

export const StyledCard = styled.div`
    display: flex;
    padding: 40px;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #858585;
    background: #FEFEFE;
    min-width: 338px;
    max-width: 338px;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledCardWrapper = styled.div`
    display: flex;
    overflow: auto;
    gap: 16px;
    margin-top: 16px;
    max-width: calc(2 * 16px + 338px * 3);
`;

export const StyledCardTitle = styled.h2`
    align-self: stretch;
    color: #000;

    /* 제목/24/bold */
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
`;

export const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 40px;
    width: 100%;
`;

export const StyledContentTitle = styled.h3`
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
`;

export const StyledContent = styled.p`
    color: #3A3A3A;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
`;

export const StyledButton = styled.button`
    display: flex;
    width: 190px;
    height: 50px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #1781EE;
    cursor: pointer;
    border: none;

    color: #FFF;
    
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin-top: 40px;
`;