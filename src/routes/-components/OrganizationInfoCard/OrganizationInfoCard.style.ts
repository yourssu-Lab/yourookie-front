import styled from "styled-components";

export const StyledSection = styled.section`
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  border: 1px solid #edf0f3;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 0px 20px;
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

export const StyledContent = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
`;

export const StyledImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledInfo = styled.div`
  flex: 1;
`;

export const StyledName = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const StyledDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: #666;
`;
