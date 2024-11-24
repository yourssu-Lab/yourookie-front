import styled, { css } from "styled-components";

export const StyledReservationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  padding: 20px;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05); */
  box-shadow: 0 0 0 0.5px #858585;
  overflow: auto;
`;

export const StyledReservationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const StyledReservationTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #1781ee;
  background: #e2ecf7;
  padding: 10px 20px;
  border-radius: 12px;
`;

export const StyledLegend = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
  padding-right: 18px;
`;

export const StyledLegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  font-size: 16px;
  color: #000;
`;

export const StyledLegendDot = styled.div<{
  $status: "available" | "reserved" | "selected";
}>`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.$status === "available") return "#ECF5FF";
    if (props.$status === "reserved") return "#E1E2E3";
    if (props.$status === "selected") return "#1781EE";
    return "transparent";
  }};
`;

export const StyledTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  flex-grow: 1;
`;

export const StyledTimeGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTimeSlotWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const StyledTimeSlot = styled.div<{
  $status: "available" | "reserved" | "selected" | "disabled";
  $isSelectionStart?: boolean;
}>`
  height: 100px;
  width: 28px;
  border-radius: 4px;
  background-color: ${(props) => {
    if (props.$isSelectionStart) return "#1781EE";
    if (props.$status === "available") return "#ECF5FF";
    if (props.$status === "reserved") return "#E1E2E3";
    if (props.$status === "selected") return "#1781EE";
    return "transparent";
  }};
  cursor: ${(props) =>
    props.$status === "reserved" ? "not-allowed" : "pointer"};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => {
      if (props.$status === "reserved") return "#E1E2E3";
      return "#1781EE";
    }};
    opacity: ${(props) => (props.$status === "reserved" ? 1 : 0.8)};
  }
  ${(props) =>
    props.$status === "disabled" &&
    css`
      background-color: #333333;
      cursor: not-allowed;
    `}
`;

export const StyledTimeLabel = styled.div`
  font-size: 20px;
  color: #000;
  margin-top: 8px;
  text-align: start;
`;
