import styled from "styled-components";

export const StyledContainer = styled.form`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 30px 16px;
  }
`;

export const StyledName = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #3a3a3a;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 16px;
  }
`;

export const StyledTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #3a3a3a;
  margin: 40px 0;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 24px 0;
  }
`;

export const StyledDate = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: #3a3a3a;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const StyledInfoSection = styled.div`
  margin-top: -14px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: -10px;
    gap: 16px;
  }
`;

export const StyledImageSection = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const StyledHr = styled.div`
  width: 100%;
  border-top: 0.5px solid #d6d6d6;
  margin: -20px 0 40px 0;

  @media (max-width: 768px) {
    margin: -15px 0 24px 0;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const StyledButton = styled.button`
  width: 200px;
  padding: 10px 20px;
  background: #1781ee;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    padding: 12px 20px;
  }
`;

export const StyledDetailLabel = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #858585;
  margin-left: 4px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledLabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
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

  @media (max-width: 768px) {
    margin: -12px 0 0 0;
    padding: 10px 16px;
    font-size: 16px;
  }
`;

export const StyledPasswordSection = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledDateTimeBox = styled.div`
  padding: 16px 20px;
  border-radius: 12px;
  border: 1px solid #d6d6d6;
  font-size: 18px;
  color: #3a3a3a;
  text-align: center;
  margin-bottom: 20px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 12px 10px;
    font-size: 16px;
    margin-bottom: 12px;
  }
`;
