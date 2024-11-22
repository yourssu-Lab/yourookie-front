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
  }
`;

export const StyledInfoSection = styled.div`
  flex: 1;
  margin-bottom: 27px;
`;

export const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 12px;
`;

export const StyledInfoText = styled.p`
  color: #3a3a3a;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
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
`;

export const StyledReservationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
`;
