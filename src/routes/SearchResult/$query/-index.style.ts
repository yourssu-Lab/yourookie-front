import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 60px;

  @media (max-width: 768px) {
    padding: 30px 16px;
  }
`;

export const SearchHeader = styled.div`
  padding: 10px;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 22px;
    padding: 5px;
  }
`;

export const StyledHr = styled.div`
  width: 100%;
  border-top: 0.5px solid #858585;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const SearchResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px 0;

  @media (max-width: 768px) {
    gap: 16px 0;
  }
`;

export const StyledNoResults = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0;
  color: #666;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 30px 0;
    font-size: 14px;
  }
`;
