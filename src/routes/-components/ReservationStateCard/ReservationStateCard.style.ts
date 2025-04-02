import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  background: white;
  box-shadow: 0 0 0 0.5px #858585;
  padding: 40px;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
  gap: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 20px;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const StyledImageSection = styled.div`
  width: 216px;
  height: 184px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const StyledInfoSection = styled.div`
  flex: 1;
  margin-bottom: 27px;

  @media (max-width: 768px) {
    flex: 1;
    margin-bottom: 0;
    min-width: 120px;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const StyledInfoText = styled.p`
  color: #3a3a3a;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

export const StyledReservationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;

  @media (max-width: 768px) {
    width: auto;
    gap: 12px;
    margin-left: auto;
  }
`;

export const StyledReservationInfo = styled.div`
  width: 200px;
  padding: 10px 20px;
  background: #ffffff;
  box-shadow: 0 0 0 0.5px #858585;
  border-radius: 12px;
  font-size: 20px;
  color: #000;
  text-align: center;
  cursor: default;

  @media (max-width: 768px) {
    width: auto;
    min-width: 100px;
    font-size: 14px;
    padding: 6px 12px;
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
    width: auto;
    min-width: 100px;
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const StyledModalTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 15px;
    text-align: center;
  }
`;

export const StyledModalInput = styled.input`
  width: 100%;
  padding: 10px 0 10px 50px;
  border: 1px solid #e5e8eb;
  border-radius: 8px;
  font-size: 18px;
  margin-bottom: 40px;

  &::placeholder {
    color: #858585;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 15px;
    margin-bottom: 25px;
  }
`;

export const StyledModalButton = styled.button`
  padding: 10px 20px;
  background: #1781ee;
  color: white;
  border: none;
  border-radius: 12px;
  display: block;
  margin: 0 auto;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    padding: 10px 15px;
  }
`;
