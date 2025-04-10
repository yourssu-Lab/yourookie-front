import styled, { css } from 'styled-components';

export const StyledReservationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 0 0 0.5px #858585;
  overflow: auto;

  @media (max-width: 768px) {
    padding: 15px 10px;
    border-radius: 12px;
  }
`;

export const StyledReservationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 10px;
  }
`;

export const StyledReservationTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #1781ee;
  background: #e2ecf7;
  padding: 10px 20px;
  border-radius: 12px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

export const StyledLegend = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
  padding-right: 18px;

  @media (max-width: 768px) {
    gap: 12px;
    padding-right: 0;
    flex-wrap: wrap;
  }
`;

export const StyledLegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  font-size: 16px;
  color: #000;

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 8px;
  }
`;

export const StyledLegendDot = styled.div<{
  $status: 'available' | 'reserved' | 'selected';
}>`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.$status === 'available') return '#ECF5FF';
    if (props.$status === 'reserved') return '#E1E2E3';
    if (props.$status === 'selected') return '#1781EE';
    return 'transparent';
  }};

  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const StyledTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  flex-grow: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-auto-flow: row;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const StyledTimeGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTimeSlotWrapper = styled.div`
  display: flex;
  gap: 4px;

  @media (max-width: 768px) {
    gap: 2px;
  }
`;

export const StyledTimeSlot = styled.div<{
  $status: 'available' | 'reserved' | 'selected' | 'disabled';
  $isSelectionStart?: boolean;
}>`
    height: 100px;
    width: 28px;
    border-radius: 4px;
    background-color: ${(props) => {
        if (props.$isSelectionStart) return '#1781EE';
        if (props.$status === 'available') return '#ECF5FF';
        if (props.$status === 'reserved') return '#E1E2E3';
        if (props.$status === 'selected') return '#1781EE';
        return 'transparent';
    }};
    cursor: ${(props) => (props.$status === 'reserved' ? 'not-allowed' : 'pointer')};
    transition: all 0.2s ease;

    &:hover {
        background-color: ${(props) => {
            if (props.$status === 'reserved') return '#E1E2E3';
            return '#1781EE';
        }};
        opacity: ${(props) => (props.$status === 'reserved' ? 1 : 0.8)};
    }

    ${(props) =>
            props.$status === 'disabled' &&
            css`
                background-color: #333333;
                cursor: not-allowed;
            `};

    @media (max-width: 768px) {
        height: 60px;
        width: 20px;
    }

    @media (max-width: 480px) {
        height: 50px;
        width: 16px;
    }
`;

export const StyledTimeLabel = styled.div`
  font-size: 20px;
  color: #000;
  margin-top: 8px;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 4px;
  }
`;
