import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const StyledSpaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

export const StyledAddSpaceButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  margin-bottom: 30px;
  background: #f0f2f5;
  border: none;
  border-radius: 20px;
  color: #1976d2;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e3f2fd;
  }
`;
