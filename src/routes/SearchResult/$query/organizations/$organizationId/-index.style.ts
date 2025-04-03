import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 30px 16px;
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

export const StyledAddSpaceButton = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 10px;
  margin: 20px 0px 16px 0px;

  @media (max-width: 768px) {
    margin: 15px 0px 12px 0px;
  }
`;
