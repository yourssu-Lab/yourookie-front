import styled from "styled-components";

export const StyledSection = styled.section``;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0px 10px;
`;

export const StyledTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #000;
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
`;

export const StyledContent = styled.div`
  display: flex;
  margin: 40px 0px;
  gap: 40px;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  width: 280px;
  height: 184px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledInfo = styled.div`
  margin: 12px 0px;
`;

export const StyledName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
`;

export const StyledDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 24px;
`;

export const StyledTags = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const StyledTag = styled.span`
  padding: 10px 20px;
  background: #ffffff;
  border-radius: 45px;
  border: 0.5px solid #858585;
  font-size: 18px;
  font-weight: 500;
  color: #3a3a3a;
`;

export const StyledEditButton = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
`;
