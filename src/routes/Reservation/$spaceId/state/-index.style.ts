import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 60px;

    @media (max-width: 768px) {
        padding: 40px 16px;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;

    @media (max-width: 768px) {
        font-size: 22px;
        margin-bottom: 12px;
    }
`;

export const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px 0;

    @media (max-width: 768px) {
        gap: 16px 0;
    }
`;

export const StyledDivider = styled.div`
    margin: 80px 0;
    width: 100%;
    height: 1px;
    background: #D6D6D6;

    @media (max-width: 768px) {
        margin: 60px 0;
    }

    @media (max-width: 480px) {
        margin: 40px 0;
    }
`;

export const StyledNoResults = styled.div`
    width: 100%;
    text-align: center;
    padding: 40px 0;
    color: #666;
    font-size: 16px;

    @media (max-width: 768px) {
        padding: 30px 0;
        font-size: 14px;
    }
`;
