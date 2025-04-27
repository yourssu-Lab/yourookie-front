import styled from 'styled-components';
import { breakpoints } from '@/styles/breakpoints.ts';

export const StyledSection = styled.section`
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 430px;

    @media (max-width: ${breakpoints.lg}px) {
        height: 310px;
    }
`;

export const StyledTitle = styled.h1`
    color: #3e3e3e;
    text-align: right;
    font-family: Pretendard;
    font-size: 34px;
    font-style: normal;
    font-weight: 800;
    line-height: 45px; /* 132.353% */
    letter-spacing: -0.68px;
    
    @media (max-width: ${breakpoints.lg}px) {
        font-size: 30px;
        line-height: 36px;
    }

    @media (max-width: ${breakpoints.md}px) {
        font-size: 24px;
        line-height: 28px;
    }
`;

export const StyledDescription = styled.div`
    color: #3e3e3e;
    text-align: right;
    font-family: Pretendard;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 131.579% */
    letter-spacing: -0.19px;

    @media (max-width: ${breakpoints.lg}px) {
        font-size: 16px;
        line-height: 20px;
    }

    @media (max-width: ${breakpoints.md}px) {
        font-size: 14px;
        line-height: 18px;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 160px;
    justify-content: space-between;
    max-width: 1440px;

    @media (max-width: ${breakpoints.xl}px) {
        padding: 0 80px;
    }

    @media (max-width: ${breakpoints.lg}px) {
        padding: 0 60px;
    }

    @media (max-width: ${breakpoints.md}px) {
        padding: 0 20px;
    }
`;

export const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
`;

export const StyledImage = styled.img`
    @media (max-width: ${breakpoints.xl}px) {
        width: 300px;
    }

    @media (max-width: ${breakpoints.lg}px) {
        width: 240px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        display: none;
    }
`;