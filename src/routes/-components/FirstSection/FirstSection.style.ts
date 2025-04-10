import styled from 'styled-components';
import { breakpoints } from '@/styles/breakpoints.ts';

export const StyledSection = styled.section`
    background: #1781ee;
    height: 660px;
    display: flex;
    justify-content: center;
    
    @media (max-width: ${breakpoints.xl}px) {
        height: 540px;
    }

    @media (max-width: ${breakpoints.lg}px) {
        height: 420px;
    }

    @media (max-width: ${breakpoints.md}px) {
        height: 320px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        height: 220px;
    }

    @media (max-width: ${breakpoints.xs}px) {
        height: 180px;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    height: 100%;
    padding-left: 100px;
    
    @media (max-width: ${breakpoints.xl}px) {
        padding-left: 0;
    }
`;

export const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    
    @media (max-width: ${breakpoints.xl}px) {
        margin-top: 160px;
    }

    @media (max-width: ${breakpoints.lg}px) {
        margin-top: 120px;
    }

    @media (max-width: ${breakpoints.md}px) {
        margin-top: 80px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        margin-top: 50px;
    }

    @media (max-width: ${breakpoints.xs}px) {
        margin-top: 40px;
    }
`;

export const StyledFirstText = styled.h1`
    color: #fff;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.29px;

    @media (max-width: ${breakpoints.md}px) {
        font-size: 22px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        font-size: 16px;
    }

    @media (max-width: ${breakpoints.xs}px) {
        font-size: 12px;
    }
`;

export const StyledSecondText = styled.h1`
    color: #fff;
    font-family: Pretendard;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.44px;
    margin-top: 15px;

    @media (max-width: ${breakpoints.lg}px) {
        font-size: 40px;
    }

    @media (max-width: ${breakpoints.md}px) {
        font-size: 32px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        font-size: 24px;
    }

    @media (max-width: ${breakpoints.xs}px) {
        font-size: 20px;
    }
`;

export const StyledLogoImage = styled.img`
    width: 280px;
    margin-top: 22px;

    @media (max-width: ${breakpoints.lg}px) {
        width: 190px;
    }

    @media (max-width: ${breakpoints.md}px) {
        width: 160px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        width: 120px;
    }

    @media (max-width: ${breakpoints.xs}px) {
        width: 80px;
    }
`;

export const StyledImage = styled.img`
    margin: auto 0 0 -100px;

    @media (max-width: ${breakpoints.xl}px) {
        display: none;
    }
`;