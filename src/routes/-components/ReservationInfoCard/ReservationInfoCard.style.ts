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

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
    gap: 20px;
  }
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
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  margin-left: 40px;
  position: relative;

  @media (max-width: 768px) {
    margin-left: 0;
    gap: 6px;
  }
`;

export const StyledInfoSection = styled.div`
  flex: 1;
  margin-bottom: 27px;

  @media (max-width: 768px) {
    margin-bottom: 0;
    width: calc(100% - 180px);
    min-width: 120px;
  }

  @media (max-width: 480px) {
    width: calc(100% - 120px);
  }
`;

export const StyledTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const StyledInfoText = styled.p`
  color: #3a3a3a;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 6px;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    justify-content: flex-end;
    margin-top: 10px;
  }
`;

export const StyledButton = styled.button`
  width: 200px;
  padding: 10px 20px;
  background: #1781ee;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #0c6cc3;
  }

  @media (max-width: 768px) {
    width: auto;
    font-size: 14px;
    padding: 8px 16px;
  }
`;
