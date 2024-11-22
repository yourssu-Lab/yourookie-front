import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 60px;
`;

export const SearchHeader = styled.div`
  padding: 10px;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const StyledHr = styled.div`
  width: 100%;
  border-top: 0.5px solid #858585;
  margin-bottom: 40px;
`;

export const SearchResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px 0;
`;
