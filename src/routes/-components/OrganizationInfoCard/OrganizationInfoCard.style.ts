import styled from "styled-components";

export const StyledSection = styled.section``;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0px 10px;

  @media (max-width: 768px) {
    padding: 0px 5px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #000;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const StyledHr = styled.div`
  width: 100%;
  border-top: 0.5px solid #858585;
`;

export const StyledEditIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #e2ecf7;
  padding: 10px;
  border-radius: 12px;

  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    padding: 8px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const StyledContent = styled.div`
  display: flex;
  margin: 40px 0px;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px 0px;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const StyledImageWrapper = styled.div`
  width: 280px;
  height: 184px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledInfo = styled.div`
  margin: 12px 0px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const StyledName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

export const StyledDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 16px;
  }
`;

export const StyledTags = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const StyledTag = styled.span`
  padding: 10px 20px;
  background: #ffffff;
  border-radius: 45px;
  border: 0.5px solid #858585;
  font-size: 18px;
  font-weight: 500;
  color: #3a3a3a;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const StyledEditButton = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;

  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;
