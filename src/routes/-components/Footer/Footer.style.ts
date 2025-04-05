import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    width: 100%;
    height: 80px;
    border-top: 1px solid #858585;
    background: #f9f9f9;
    align-items: center;
    justify-content: space-between;
    padding: 0 90px;


    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 15px 0;
        gap: 15px;
    }
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const StyledLink = styled(Link)`
  color: #3e3e3e;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 0 !important;
  }
`;

export const StyledTag = styled.span`
  color: #3e3e3e;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 66px;

  @media (max-width: 768px) {
    margin-right: 0;
    font-size: 16px;
  }
`;
