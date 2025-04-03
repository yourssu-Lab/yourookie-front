import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export const StyledSpaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 18px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const StyledAddSpaceButton = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 10px 42px;
  margin: 20px 0px 16px 0px;
  background: #e2ecf7;
  border: none;
  border-radius: 12px;
  color: #1781ee;
  font-size: 20px;
  font-weight: 500;
  line-height: 119.33%;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e3f2fd;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 12px 20px;
    font-size: 16px;
    margin: 16px 0px 12px 0px;
  }
`;
