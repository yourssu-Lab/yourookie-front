import styled from "styled-components";

export const StyledCalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 0 0 0.5px #858585;
  border-radius: 20px;
  padding: 24px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 16px;
  }
`;

export const StyledHr = styled.div`
  width: 100%;
  border-top: 0.5px solid #858585;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const StyledWeekDaysGrid = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 12px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    padding: 6px 0;
    grid-gap: 6px;
    margin-bottom: 8px;
  }
`;

export const StyledWeekDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: #000;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledCalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 24px;

  @media (max-width: 768px) {
    grid-gap: 12px;
  }
`;

export const StyledCalendarCell = styled.div<{ $isSelected: boolean }>`
  margin-left: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ $isSelected }) => ($isSelected ? "white" : "#333")};
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#1781EE" : "transparent"};
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 36px;
    height: 36px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`;
