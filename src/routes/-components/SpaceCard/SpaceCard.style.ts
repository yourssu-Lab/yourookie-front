import styled from 'styled-components';

export const StyledCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: visible;
  position: relative;
`;

export const StyledSpaceImage = styled.div`
  width: 100%;
  position: relative;
  height: 260px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const StyledEditIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 55px;
  height: 55px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* z-index: 1; */

  img {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: 12px;
    right: 12px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const StyledSpaceContent = styled.div`
  padding: 35px 60px 30px 45px;
  background: white;
  border: 1px solid #b7b7b7;
  border-top: none;
  border-radius: 0 0 16px 16px;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export const StyledSpaceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-weight: 500;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`;

export const StyledRightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`;

export const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const StyledSpaceLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledTimeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledCapacityInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
