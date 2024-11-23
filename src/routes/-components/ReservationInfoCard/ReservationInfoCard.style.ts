import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  display: flex;
  background: white;
  box-shadow: 0 0 0 0.5px #858585;
  padding: 40px;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
  gap: 40px;
  position: relative;
`;

export const StyledImageSection = styled.div`
  width: 216px;
  height: 184px;
  overflow: hidden;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  margin-left: 40px;
  position: relative;
`;

export const StyledInfoSection = styled.div`
  flex: 1;
  margin-bottom: 27px;
`;

export const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 30px;
`;

export const StyledInfoText = styled.p`
  color: #3a3a3a;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const StyledEditIcon = styled.div`
  border-radius: 10px;
  background-color: #edf5ff;
  padding: 10px;
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  img {
    width: 35px;
    height: 30px;
  }
`;