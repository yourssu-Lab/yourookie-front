export interface Organization {
  id: number;
  name: string;
  description: string;
  logoImageUrl: string;
  hashtags: string[];
}

export interface GroupCardProps {
  group: Organization;
  onClick: (space: string, groupId: number) => void;
}

import styled from "styled-components";
export const CardWrapper = styled.div`
  display: flex;
  background: white;
  box-shadow: 0 0 0 0.5px #858585;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  padding: 40px;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 20px;
    gap: 20px;
    flex-wrap: wrap;
    position: relative;
  }
`;

export const GroupImage = styled.div`
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
    width: 120px;
    height: 120px;
  }
`;

export const GroupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  color: #000;

  @media (max-width: 768px) {
    gap: 8px;
    padding-right: 100px;
  }

  @media (max-width: 480px) {
    padding-right: 0;
    margin-bottom: 50px;
    width: 100%;
  }
`;

export const GroupName = styled.div`
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const GroupDescription = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin: 10px 0;
  max-width: 430px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 5px 0;
    line-height: 1.4;
  }
`;

export const StyledTags = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 8px;
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
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 20px;
  }
`;

export const StyledViewSpaceButton = styled.button`
  padding: 10px 20px;
  background: #1781ee;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 480px) {
    position: absolute;
    right: 20px;
    bottom: 20px;
    top: auto;
    transform: none;
  }
`;
