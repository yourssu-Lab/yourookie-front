import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const StyledSpaceSection = styled.section`
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
`;

export const StyledSpaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const StyledAddButton = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
