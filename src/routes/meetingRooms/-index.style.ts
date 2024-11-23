import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 60px 0;
`;

export const StyledTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #3a3a3a;
  margin-bottom: 16px;
`;

export const StyledDate = styled.p`
    font-size: 28px;
    font-weight: 700;
    color: #3a3a3a;
    margin-bottom: 26px;
`;

export const StyledInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButtonWrapper = styled.div`
    display: flex;
    gap: 38px;
`;

export const StyledQueryButton = styled.button`
    display: flex;
    width: 190px;
    height: 50px;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #1781EE;
    color: #FFF;
    
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    border: none;

    cursor: pointer;
`;

export const StyledImageSection = styled.div`
    display: flex;
    gap: 18px;
    align-items: flex-start;
    margin-bottom: 40px;
    flex: 1;
`;

export const StyledHr = styled.div`
    width: 100%;
    border-top: 1px solid #D6D6D6;
    margin-bottom: 40px;
`;

export const StyledInput = styled.input`
  margin: -20px 0 0 0;
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  font-size: 18px;

  &::placeholder {
    color: #b3b3b3;
  }
`;

export const StyledPasswordSection = styled.div`
  flex: 1;
`;

export const StyledDateTimeBox = styled.div`
    padding: 16px 20px;
    border-radius: 12px;
    border: 1px solid #d6d6d6;
    font-size: 18px;
    color: #3a3a3a;
    text-align: center;
    height: 50px;
`;
