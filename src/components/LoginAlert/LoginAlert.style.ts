import styled from 'styled-components';

export const StyledText = styled.p`
    color: #3A3A3A;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
`;

export const StyledButton = styled.button`
    display: flex;
    height: 30px;
    padding: 5px 10px;
    border-radius: 12px;
    background: #1781ee;
    color: #fff;

    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;

    border: none;
    cursor: pointer;
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100%;
`;

export const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
