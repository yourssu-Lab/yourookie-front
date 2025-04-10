import styled from 'styled-components';
import { breakpoints } from '@/styles/breakpoints.ts';

export const StyledSection = styled.section`
    height: 980px;
    background: #f9f9f9;

    @media (max-width: ${breakpoints.xl}px) {
        height: 720px;
    }

    @media (max-width: ${breakpoints.lg}px) {
        height: 580px;
    }

    @media (max-width: ${breakpoints.md}px) {
        height: 460px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        height: 320px;
    }

    @media (max-width: ${breakpoints.xs}px) {
        height: 240px;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 210px;
    gap: 100px;
    align-items: center;

    @media (max-width: ${breakpoints.xl}px) {
        margin-top: 150px;
        gap: 80px;
    }

    @media (max-width: ${breakpoints.lg}px) {
        margin-top: 120px;
        gap: 60px;
    }

    @media (max-width: ${breakpoints.md}px) {
        margin-top: 90px;
        gap: 50px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        margin-top: 60px;
        gap: 30px;
    }

    @media (max-width: ${breakpoints.xs}px) {
        margin-top: 40px;
        gap: 20px;
    }
`;

export const StyledSecondText = styled.h1`
    color: #414141;
    font-family: Pretendard;
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

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

export const StyledThirdText = styled.h1`
    color: #414141;
    font-family: 'Pretendard Variable';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 22px;

    @media (max-width: ${breakpoints.lg}px) {
        font-size: 28px;
        margin-top: 18px;
    }

    @media (max-width: ${breakpoints.md}px) {
        font-size: 24px;
        margin-top: 16px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        font-size: 18px;
        margin-top: 12px;
    }

    @media (max-width: ${breakpoints.xs}px) {
        font-size: 14px;
        margin-top: 8px;
    }
`;

export const StyledTitleTextWrapper = styled.div`
    display: flex;
    gap: 22px;
    align-items: center;

    @media (max-width: ${breakpoints.lg}px) {
        gap: 18px;
    }

    @media (max-width: ${breakpoints.md}px) {
        gap: 16px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        gap: 12px;
    }

    @media (max-width: ${breakpoints.xs}px) {
        gap: 8px;
    }
`;

export const StyledLastText = styled.h1`
    color: #414141;
    font-family: 'Pretendard Variable';
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 18px;

    @media (max-width: ${breakpoints.lg}px) {
        font-size: 24px;
        margin-top: 18px;
    }
    
    @media (max-width: ${breakpoints.md}px) {
        font-size: 22px;
        margin-top: 14px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        font-size: 16px;
        margin-top: 12px;
    }

    @media (max-width: ${breakpoints.xs}px) {
        font-size: 12px;
        margin-top: 10px;
    }
    
`;

export const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
`;

export const StyledImage = styled.img`
    @media (max-width: ${breakpoints.xl}px) {
        width: 720px;
    }

    @media (max-width: ${breakpoints.lg}px) {
        width: 620px;
    }

    @media (max-width: ${breakpoints.md}px) {
        width: 480px;
    }

    @media (max-width: ${breakpoints.sm}px) {
        width: 320px;
    }

    @media (max-width: ${breakpoints.xs}px) {
        width: 240px;
    }
`;

export const StyledLogoImage = styled.img`
    width: 280px;

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