import styled from "styled-components";

export const StyledCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #edf0f3;
`;

export const StyledSpaceImage = styled.div`
  width: 100%;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledSpaceContent = styled.div`
  padding: 20px 60px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  padding: 20px 60px;
`;

export const StyledSpaceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const StyledSpaceLocation = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const StyledSpaceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 14px;
`;

export const StyledSpaceTime = styled.div``;

export const StyledSpaceCapacity = styled.div``;

export const StyledTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: #333;
`;

export const StyledEditIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;
